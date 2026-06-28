import nodemailer from "nodemailer";

const IMAP_PORTS = new Set([143, 993, 995]);

function resolveSmtpHost(rawHost, user) {
  const host = rawHost?.trim();

  if (host) {
    const lower = host.toLowerCase();
    if (
      lower.startsWith("mail.") ||
      lower.startsWith("smtp.") ||
      lower.includes(".web-hosting.com")
    ) {
      return host;
    }

    // Bare domain (digimmatic.com) → cPanel convention
    return `mail.${host}`;
  }

  const domain = user?.split("@")[1];
  return domain ? `mail.${domain}` : null;
}

function resolveSmtpPort(rawPort) {
  const port = Number(rawPort);

  if (!port || IMAP_PORTS.has(port)) {
    return 465;
  }

  return port;
}

function resolveSecure(port, rawSecure) {
  if (rawSecure === "true") return true;
  if (rawSecure === "false") return false;
  return port === 465;
}

function getSmtpSettings() {
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  const to = process.env.EMAIL_TO?.trim();

  if (!user || !pass || !to) {
    return null;
  }

  const port = resolveSmtpPort(process.env.SMTP_PORT);
  const host = resolveSmtpHost(process.env.SMTP_HOST, user);

  if (!host) {
    return null;
  }

  return {
    host,
    port,
    secure: resolveSecure(port, process.env.SMTP_SECURE),
    user,
    pass,
    from: process.env.SMTP_FROM?.trim() || user,
    to,
  };
}

function createTransporter(settings) {
  return nodemailer.createTransport({
    host: settings.host,
    port: settings.port,
    secure: settings.secure,
    auth: {
      user: settings.user,
      pass: settings.pass,
    },
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
    socketTimeout: 20_000,
    tls: {
      minVersion: "TLSv1.2",
      // Namecheap/cPanel presents *.web-hosting.com cert for mail.yourdomain.com
      rejectUnauthorized: false,
    },
  });
}

export function isSmtpConfigured() {
  return getSmtpSettings() !== null;
}

export async function sendDiscoveryInquiry({
  name,
  company,
  email,
  phone,
  solutions,
}) {
  const settings = getSmtpSettings();
  if (!settings) {
    throw new Error("SMTP environment variables are not configured.");
  }

  const subject = `Discovery inquiry: ${name} — ${company}`;
  const text = [
    "New discovery form submission from digimmatic.com",
    "",
    `Name: ${name}`,
    `Company: ${company}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Solutions: ${solutions}`,
  ].join("\n");

  const html = `
    <h2>New discovery form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Solutions:</strong> ${escapeHtml(solutions)}</p>
  `;

  const transporter = createTransporter(settings);

  try {
    await transporter.sendMail({
      from: settings.from,
      to: settings.to,
      replyTo: email,
      subject,
      text,
      html,
    });
  } catch (error) {
    console.error(`SMTP failed via ${settings.host}:${settings.port}`, {
      message: error.message,
      code: error.code,
      response: error.response,
    });
    throw error;
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
