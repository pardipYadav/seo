import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/siteConfig";

type ContactPayload = {
  fullName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  website?: string;
  seoService?: string;
  seoPackage?: string;
  budget?: string;
  message?: string;
  website_url?: string;
};

function formatEmailText(data: ContactPayload): string {
  const lines = [
    `Name: ${data.fullName}`,
    data.companyName ? `Company: ${data.companyName}` : null,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    data.website ? `Website: ${data.website}` : null,
    data.seoService ? `Service: ${data.seoService}` : null,
    data.seoPackage ? `Package: ${data.seoPackage}` : null,
    data.budget ? `Budget: ${data.budget}` : null,
    "",
    "Message:",
    data.message,
  ];

  return lines.filter(Boolean).join("\n");
}

function formatEmailHtml(data: ContactPayload): string {
  const rows = [
    ["Name", data.fullName],
    data.companyName ? ["Company", data.companyName] : null,
    ["Email", data.email],
    data.phone ? ["Phone", data.phone] : null,
    data.website ? ["Website", data.website] : null,
    data.seoService ? ["Service", data.seoService] : null,
    data.seoPackage ? ["Package", data.seoPackage] : null,
    data.budget ? ["Budget", data.budget] : null,
  ].filter(Boolean) as [string, string][];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;vertical-align:top;">${label}</td><td style="padding:8px 12px;">${value}</td></tr>`
    )
    .join("");

  return `
    <h2>New Contact Form Submission</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">${tableRows}</table>
    <h3 style="margin-top:24px;">Message</h3>
    <p style="white-space:pre-wrap;">${data.message}</p>
  `;
}

export async function POST(request: Request) {
  try {
    const data: ContactPayload = await request.json();

    if (data.website_url) {
      return NextResponse.json({ success: true });
    }

    const fullName = data.fullName?.trim();
    const email = data.email?.trim();
    const message = data.message?.trim();

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json({ error: "Contact form is not configured yet." }, { status: 503 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const to = process.env.CONTACT_TO_EMAIL || siteConfig.email;
    const from = process.env.CONTACT_FROM_EMAIL || `${siteConfig.name} <onboarding@resend.dev>`;

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New inquiry from ${fullName}`,
      text: formatEmailText(data),
      html: formatEmailHtml(data),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send your message. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
