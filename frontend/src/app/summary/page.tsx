"use client";
import { useState } from "react";
import NoteInput from "@/components/NoteInput";

export default function SummaryPage() {
  const [note, setNote] = useState("");
  const [result, setResult] = useState<{
    ringkasan: string[];
    todoList: string[];
    prioritas: { [task: string]: string };
    saranFokus: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!note.trim()) return;
    setIsLoading(true);
    setError(""); // Clear any previous errors
    try {
      const res = await fetch("/api/summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: note }),
      });
      
      if (!res.ok) {
        throw new Error("Gagal menganalisis catatan.");
      }
      
      const data = await res.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      setResult(data);
    } catch (err: any) {
      console.error("Error:", err);
      setError(err.message || "Gagal mendapatkan respons dari AI.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">AI Note Assistant</h1>
      
      <div className="w-full max-w-3xl">
        <NoteInput value={note} onChange={setNote} />
        
        <button
          onClick={handleAnalyze}
          disabled={isLoading}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400 w-full"
        >
          {isLoading ? "Menganalisis Catatan..." : "Analisis Catatan"}
        </button>
        
        {error && <p className="text-red-500 mt-4">{error}</p>}
        
        {result && (
          <div className="mt-8 space-y-6">
            {/* Ringkasan */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">📝 Ringkasan Catatan</h2>
              <ul className="list-disc pl-5 space-y-2">
                {result.ringkasan.map((point, idx) => (
                  <li key={idx} className="text-gray-700">{point}</li>
                ))}
              </ul>
            </div>
            
            {/* Todo List */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-green-700">✅ To-Do List</h2>
              <ul className="space-y-2">
                {result.todoList.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <div>
                      <p className="text-gray-800">{task}</p>
                      {result.prioritas[task] && (
                        <span className={`text-sm px-2 py-0.5 rounded ${
                          result.prioritas[task].toLowerCase() === 'tinggi' ? 'bg-red-100 text-red-800' :
                          result.prioritas[task].toLowerCase() === 'sedang' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          Prioritas: {result.prioritas[task]}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Rekomendasi */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
              <h2 className="text-xl font-semibold mb-3 text-purple-700">🚀 Fokus Utama</h2>
              <p className="text-gray-700">{result.saranFokus}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}