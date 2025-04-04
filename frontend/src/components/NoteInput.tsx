import React from "react";

interface NoteInputProps {
  value: string;
  onChange: (value: string) => void;
}

const NoteInput: React.FC<NoteInputProps> = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <label htmlFor="note-input" className="block text-gray-700 font-medium">
          Catatan Kamu
        </label>
        <div className="text-sm text-gray-500">
          {value.length} karakter
        </div>
      </div>
      
      <textarea
        id="note-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 resize-none"
        placeholder="Tulis catatan kamu di sini... (misal: Aku harus menyelesaikan tugas akhir minggu ini, tapi juga ada deadline project freelance. Besok ada meeting penting dengan klien jam 3 sore...)"
      />
      
      <div className="text-sm text-gray-500 mt-2">
        Tip: Tuliskan semua yang ada di pikiran kamu. AI akan bantu ekstrak hal penting dan menyusun prioritas.
      </div>
    </div>
  );
};

export default NoteInput;