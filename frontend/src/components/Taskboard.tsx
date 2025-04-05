import React from "react";

type Task = {
  id: string;
  content: string;
  priority: "Tinggi" | "Sedang" | "Rendah";
  completed: boolean;
};

interface TaskBoardProps {
  tasks: Task[];
  onTaskComplete: (taskId: string) => void;
  onTaskDelete: (taskId: string) => void;
  summary: string[];
  focusSuggestion: string;
}

const TaskBoard: React.FC<TaskBoardProps> = ({
  tasks,
  onTaskComplete,
  onTaskDelete,
  summary,
  focusSuggestion
}) => {
  // Filter tasks by priority
  const highPriorityTasks = tasks.filter(task => task.priority === "Tinggi" && !task.completed);
  const mediumPriorityTasks = tasks.filter(task => task.priority === "Sedang" && !task.completed);
  const lowPriorityTasks = tasks.filter(task => task.priority === "Rendah" && !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  const TaskItem = ({ task }: { task: Task }) => (
    <div className={`flex items-center gap-2 p-3 rounded-lg ${task.completed ? 'bg-gray-50' : 'bg-white'} border border-gray-200 shadow-sm`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onTaskComplete(task.id)}
        className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      <div className="flex-1">
        <p className={`text-gray-800 ${task.completed ? 'line-through text-gray-500' : ''}`}>
          {task.content}
        </p>
        {!task.completed && (
          <span className={`text-xs px-2 py-0.5 rounded-full mt-1 inline-block ${
            task.priority === 'Tinggi' ? 'bg-red-100 text-red-800' :
            task.priority === 'Sedang' ? 'bg-yellow-100 text-yellow-800' :
            'bg-green-100 text-green-800'
          }`}>
            {task.priority}
          </span>
        )}
      </div>
      <button
        onClick={() => onTaskDelete(task.id)}
        className="text-gray-400 hover:text-red-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );

  return (
    <div className="h-full overflow-y-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Workspace</h2>
      
      {summary.length > 0 && (
        <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-indigo-700 mb-2">📝 Ringkasan</h3>
          <ul className="list-disc pl-5 space-y-1">
            {summary.map((point, idx) => (
              <li key={idx} className="text-gray-700">{point}</li>
            ))}
          </ul>
        </div>
      )}
      
      {focusSuggestion && (
        <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-purple-700 mb-2">🚀 Fokus Utama</h3>
          <p className="text-gray-700">{focusSuggestion}</p>
        </div>
      )}
      
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-medium text-gray-800">Tugas Kamu</h3>
          <span className="text-sm text-gray-500">{tasks.length} tugas</span>
        </div>
        
        {tasks.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>Tugas kamu akan muncul di sini saat kamu mengobrol dengan LumeTask</p>
          </div>
        ) : (
          <div className="space-y-6">
            {highPriorityTasks.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-red-600">Prioritas Tinggi</h4>
                {highPriorityTasks.map(task => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </div>
            )}
            
            {mediumPriorityTasks.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-yellow-600">Prioritas Sedang</h4>
                {mediumPriorityTasks.map(task => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </div>
            )}
            
            {lowPriorityTasks.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-green-600">Prioritas Rendah</h4>
                {lowPriorityTasks.map(task => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </div>
            )}
            
            {completedTasks.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-500">Selesai</h4>
                {completedTasks.map(task => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskBoard;