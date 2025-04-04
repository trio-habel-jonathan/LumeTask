"use client";
import { useState } from "react";

export default function Home() {
  const [notes, setNotes] = useState([
    { id: 1, text: "Catatan pertama" },
    { id: 2, text: "Catatan kedua" },
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold">📒 Catatan Saya</h1>
      <ul className="mt-4 space-y-2">
        {notes.map((note) => (
          <li key={note.id} className="p-3 bg-white shadow rounded">
            {note.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

