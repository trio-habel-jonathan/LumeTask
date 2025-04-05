// FILE: api/lumetask-chat/route.ts
import { NextResponse } from "next/server";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Messages are required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    const url = process.env.GEMINI_API_URL;

    if (!apiKey || !url) {
      console.error("Missing API key or URL");
      return NextResponse.json({ error: "Server tidak dikonfigurasi dengan benar" }, { status: 500 });
    }

    // Enhance prompt with context and instructions
    const systemPrompt = `
    Kamu adalah LumeTask, asisten AI yang membantu pengguna dengan manajemen tugas dan kesejahteraan emosional.
    
    Kamu memiliki kemampuan khusus:
    1. Memberikan dukungan emosional yang personal dan mendalam
    2. Mendeteksi dan mengekstrak tugas dari percakapan
    3. Menyusun prioritas tugas berdasarkan urgensi dan konteks
    4. Memberikan saran fokus yang konkret
    5. Merangkum informasi penting
    
    Saat merespons pengguna:
    - Jawab dengan suportif, empatik, dan personal
    - Jika terdeteksi tugas, otomatis ekstrak dan masukkan ke dalam daftar tugas
    - Berikan dukungan emosional jika pengguna terlihat cemas, tertekan, atau kebingungan
    - Jangan terlalu panjang, tetapi berikan respons yang personal
    
    Selalu berikan respons dalam format JSON dengan struktur berikut:
    {
      "message": "Respons konversasional yang akan ditampilkan ke pengguna",
      "extractedTasks": [
        {"task": "Deskripsi tugas 1", "priority": "Tinggi/Sedang/Rendah"},
        {"task": "Deskripsi tugas 2", "priority": "Tinggi/Sedang/Rendah"}
      ],
      "summary": ["Poin 1", "Poin 2", "Poin 3"],
      "focusSuggestion": "Saran fokus utama"
    }
    
    Kosongkan array "extractedTasks" dan "summary" jika tidak ada yang perlu diekstrak. Gunakan "focusSuggestion" hanya jika ada saran konkret yang dapat diberikan.
    `;

    // Format messages for Gemini API
    const formattedMessages = [
      { role: "user", content: systemPrompt },
      ...messages.map((msg: Message) => ({
        role: msg.role,
        content: msg.content
      }))
    ];

    const response = await fetch(`${url}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: formattedMessages.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.content }]
        }))
      }),
      cache: "no-store",
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("API error response:", errorText);
      return NextResponse.json({ error: "API returned an error" }, { status: response.status });
    }

    const data = await response.json();
    
    // Parse response from Gemini
    try {
      const responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
      // Clean up JSON if needed
      const cleanedText = responseText.replace(/```json|```/g, "").trim();
      const result = JSON.parse(cleanedText);
      
      return NextResponse.json(result);
    } catch (err) {
      console.error("Error parsing AI response:", err);
      // Fall back to just returning the message if JSON parsing fails
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Maaf, saya tidak dapat memproses respons saat ini.";
      return NextResponse.json({ 
        message: text,
        extractedTasks: [],
        summary: [],
        focusSuggestion: ""
      });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ 
      message: "Terjadi kesalahan saat memproses pesan kamu.",
      extractedTasks: [],
      summary: [],
      focusSuggestion: ""
    }, { status: 500 });
  }
}