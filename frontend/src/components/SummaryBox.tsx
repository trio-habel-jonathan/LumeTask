interface SummaryBoxProps {
    summary: string;
  }
  
  export default function SummaryBox({ summary }: SummaryBoxProps) {
    if (!summary) return null;
    return (
      <div className="mt-4 p-2 bg-white shadow-md rounded max-w-lg">
        <strong>Ringkasan:</strong> {summary}
      </div>
    );
  }
  