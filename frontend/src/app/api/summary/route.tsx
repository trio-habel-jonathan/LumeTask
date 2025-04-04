import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();
    if (!text) {
      return NextResponse.json({ error: "Catatan tidak boleh kosong" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    const url = process.env.GEMINI_API_URL;

    if (!apiKey || !url) {
      console.error("Missing API key or URL:", { apiKey: !!apiKey, url: !!url });
      return NextResponse.json({ error: "Server tidak dikonfigurasi dengan benar" }, { status: 500 });
    }

    // Membuat prompt yang lebih spesifik untuk kemampuan yang diinginkan
    const promptTemplate = `
    Analisis teks catatan ini dan berikan respons dengan format JSON yang berisi:
    1. ringkasan: Ringkasan catatan dalam 3-5 poin utama
    2. todoList: Ekstrak tugas-tugas yang tersirat atau tersurat dalam catatan
    3. prioritas: Berikan rekomendasi prioritas tugas (tinggi, sedang, rendah) berdasarkan urgensi yang terdeteksi
    4. saranFokus: Berikan 1 saran konkret tentang apa yang sebaiknya dikerjakan terlebih dahulu
    
    Berikan respons HANYA dalam format JSON tanpa penjelasan tambahan.
    
    Catatan:
    "${text}"
    `;

    console.log(`Sending request to: ${url}?key=${apiKey}`);
    
    const response = await fetch(`${url}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: promptTemplate }
            ]
          }
        ]
      }),
      cache: "no-store",
    });

    console.log("Response status:", response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("API error response:", errorText);
      return NextResponse.json({ error: "API returned an error" }, { status: response.status });
    }

    const data = await response.json();
    
    // Gemini mungkin akan mengembalikan teks dengan format JSON
    // Mari kita parse string JSON-nya jika diperlukan
    let result;
    try {
      const responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
      // Menghapus backticks jika ada dalam respons dari AI (kadang AI mengembalikan dengan format ```json)
      const cleanedText = responseText.replace(/```json|```/g, "").trim();
      result = JSON.parse(cleanedText);
    } catch (err) {
      console.error("Error parsing AI response:", err);
      return NextResponse.json({ 
        error: "Gagal mengolah respons dari AI", 
        rawResponse: data?.candidates?.[0]?.content?.parts?.[0]?.text 
      }, { status: 500 });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error di server:", error);
    return NextResponse.json({ error: "Gagal mendapatkan respons dari AI" }, { status: 500 });
  }
}