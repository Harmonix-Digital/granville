import { NextResponse } from "next/server";

const GHL_API_URL = "https://services.leadconnectorhq.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email = String(body.email || "").trim().toLowerCase();

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required.",
        },
        { status: 400 }
      );
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email.",
        },
        { status: 400 }
      );
    }

    const token = process.env.GHL_PRIVATE_INTEGRATION_TOKEN;
    const locationId = process.env.GHL_LOCATION_ID;

    if (!token || !locationId) {
      console.error("GHL environment variables are missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Server configuration error.",
        },
        { status: 500 }
      );
    }

    // Create or update the contact in GHL
    const ghlResponse = await fetch(
      `${GHL_API_URL}/contacts/upsert`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Version: "2021-07-28",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          locationId,
          email,
          source: "Website Newsletter",
        }),
      }
    );

    const ghlData = await ghlResponse.json();
    console.error("GHL newsletter info:", ghlData);

    if (!ghlResponse.ok) {
      console.error("GHL newsletter error:", ghlData);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to subscribe right now.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "You're subscribed!",
    });
  } catch (error) {
    console.error("Newsletter submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}