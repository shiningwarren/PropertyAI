import type { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { name, email } = JSON.parse(event.body || "{}");

    if (!name || !email) {
      return { statusCode: 400, body: "Missing name or email" };
    }

    console.log("📥 New contact form submission:", { name, email });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "✅ Submission received successfully!" }),
    };
  } catch (error) {
    console.error("❌ Server Error:", error);
    return { statusCode: 500, body: JSON.stringify({ message: "Server Error" }) };
  }
};
