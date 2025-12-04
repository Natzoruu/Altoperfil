import { Resend } from "resend";

export async function POST(req: Request) {
  console.log("📩 Recibida petición POST a /api/form");

  try {
    const body = await req.json();
    console.log("📦 Datos recibidos:", body);

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, phone } = body;

    const response = await resend.emails.send({
      from: "Altoperfil.co <onboarding@resend.dev>",
      to: ["infojosuecazaran@gmail.com"],
      subject: "Solicitud de Evaluación — Marca Personal",
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p>Nuevo lead interesado en una evaluación de marca personal.</p>
      `
    });

    console.log("📨 Resend response:", response);

    return Response.json({ success: true });
  } catch (error) {
    console.error("🔥 ERROR EN RESEND:", error);
    return Response.json({ success: false, error }, { status: 500 });
  }
}
