export async function POST(request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, solutions } = body;

    if (!name?.trim() || !company?.trim() || !email?.trim() || !phone?.trim()) {
      return Response.json(
        { error: "All required fields must be provided." },
        { status: 400 },
      );
    }

    if (!solutions?.trim()) {
      return Response.json(
        { error: "At least one AI Solution must be selected." },
        { status: 400 },
      );
    }

    // Log inquiry server-side; wire to SMTP provider in production.
    console.log("Discovery inquiry received:", {
      name,
      company,
      email,
      phone,
      solutions,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Failed secure delivery to SMTP route." },
      { status: 500 },
    );
  }
}
