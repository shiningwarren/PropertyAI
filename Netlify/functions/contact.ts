import type { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
  // ✅ Only accept POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    // ✅ Get name & email from the form submission
    const { name, email } = JSON.parse(event.body || "{}");

    if (!name || !email) {
      return { statusCode: 400, body: "Missing name or email" };
    }

    // ✅ STEP 1: Request a NEW access token from Zoho using the refresh token
    const tokenResponse = await fetch("https://accounts.zoho.eu/oauth/v2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
        client_id: process.env.ZOHO_CLIENT_ID!,
        client_secret: process.env.ZOHO_CLIENT_SECRET!,
        grant_type: "refresh_token",
      }),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenData.access_token) {
      console.error("❌ Failed to get access token:", tokenData);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Failed to authenticate with Zoho", details: tokenData }),
      };
    }

    const accessToken = tokenData.access_token;

    // ✅ STEP 2: Send the contact to Zoho CRM (Contacts module)
    const crmResponse = await fetch("https://www.zohoapis.eu/crm/v2/Contacts", {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            Last_Name: name, // 🔑 REQUIRED by Zoho CRM
            Email: email,
          },
        ],
      }),
    });

    const crmData = await crmResponse.json();

    // ✅ STEP 3: Check if Zoho saved the contact successfully
    if (crmData.data && crmData.data[0].code === "SUCCESS") {
      console.log("✅ Contact added to Zoho CRM:", crmData);
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Contact successfully added to Zoho CRM!" }),
      };
    } else {
      console.error("❌ Zoho CRM error:", crmData);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Failed to add contact", details: crmData }),
      };
    }
  } catch (error) {
    console.error("❌ Server Error:", error);
    return { statusCode: 500, body: JSON.stringify({ message: "Server Error", error }) };
  }
};
