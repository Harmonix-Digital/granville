import { NextResponse } from "next/server";

const GHL_API_URL = "https://services.leadconnectorhq.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();

    // Basic validation
    if (!name) {
      return NextResponse.json(
        { success: false, message: "Name is required." },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required." },
        { status: 400 }
      );
    }

    if (!message) {
      return NextResponse.json(
        { success: false, message: "Message is required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email." },
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

    /*
     * Upsert the contact in GHL.
     *
     * We use the email address as the primary identifier so
     * the same person doesn't get unnecessarily duplicated.
     */
    const contactResponse = await fetch(
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
          name,
          email,
          source: "Website Contact Form",
        }),
      }
    );

    const contactData = await contactResponse.json();

    console.log("contactData from backend:", contactData)

    if (!contactResponse.ok) {
      console.error("GHL contact error:", contactData);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to create contact.",
        },
        { status: 502 }
      );
    }

    const contactId =
      contactData.contact?.id ||
      contactData.id;

    /*
     * Add the subject/message as a note on the contact.
     *
     * This keeps your standard GHL contact fields clean while
     * preserving the actual enquiry.
     */
    if (contactId) {
      const noteResponse = await fetch(
        `${GHL_API_URL}/contacts/${contactId}/notes`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            Version: "2021-07-28",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            body: [
              `Website Contact Form`,
              ``,
              `Subject: ${subject || "General enquiry"}`,
              ``,
              `Message:`,
              message,
            ].join("\n"),
          }),
        }
      );

      if (!noteResponse.ok) {
        const noteData = await noteResponse.json();

        console.error("GHL note error:", noteData);

        /*
         * The contact was already created successfully.
         * We don't fail the entire submission just because
         * adding the note failed.
         */
      }
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}