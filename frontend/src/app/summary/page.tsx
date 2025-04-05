// FILE: app/page.tsx
"use client";
import { useState, useRef, useEffect } from "react";
import ChatInterface from "@/components/ChatInterface";
import TaskBoard from "@/components/TaskBoard";

type Task = {
  id: string;
  content: string;
  priority: "Tinggi" | "Sedang" | "Rendah";
  completed: boolean;
};

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

export default function LumeTaskPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hai! Saya LumeTask, asisten pribadi yang akan membantu kamu mengatur tugas dan mencapai tujuan. Ceritakan apa yang sedang kamu kerjakan atau pikirkan saat ini.",
      timestamp: new Date(),
    },
  ]);
  
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSummary, setCurrentSummary] = useState<string[]>([]);
  const [currentFocus, setCurrentFocus] = useState<string>("");
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      // Get message history for context (limit to last 10 messages)
      const messageHistory = messages
        .slice(-10)
        .map(msg => ({ role: msg.role, content: msg.content }));
      
      // Add the new user message
      messageHistory.push({ role: "user", content });
      
      const response = await fetch("/api/lumetask-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: messageHistory }),
      });
      
      if (!response.ok) {
        throw new Error("Gagal mendapatkan respons");
      }
      
      const data = await response.json();
      
      // Add assistant message
      const assistantMessage: Message = {
        id: Date.now().toString() + "-response",
        role: "assistant",
        content: data.message,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      
      // Update tasks if present
      if (data.extractedTasks && data.extractedTasks.length > 0) {
        const newTasks = data.extractedTasks.map((task: any) => ({
          id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
          content: task.task,
          priority: task.priority || "Sedang",
          completed: false,
        }));
        
        setTasks(prev => [...prev, ...newTasks]);
      }
      
      // Update summary and focus if present
      if (data.summary) {
        setCurrentSummary(data.summary);
      }
      
      if (data.focusSuggestion) {
        setCurrentFocus(data.focusSuggestion);
      }
      
    } catch (error) {
      console.error("Error:", error);
      // Add error message
      const errorMessage: Message = {
        id: Date.now().toString() + "-error",
        role: "assistant",
        content: "Maaf, terjadi kesalahan saat memproses pesan kamu. Coba lagi ya!",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTaskComplete = (taskId: string) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleTaskDelete = (taskId: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  return (
    <div className="flex h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Chat Panel */}
      <div className="w-1/2 h-full border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b bg-white">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">LumeTask</h1>
          <p className="text-sm text-gray-500">Asisten pribadi untuk produktivitas & dukungan emosional</p>
        </div>
        
        <ChatInterface 
          messages={messages} 
          onSendMessage={handleSendMessage} 
          isLoading={isLoading} 
          chatEndRef={chatEndRef}
        />
      </div>
      
      {/* Task Panel */}
      <div className="w-1/2 h-full overflow-y-auto bg-white">
        <TaskBoard 
          tasks={tasks}
          onTaskComplete={handleTaskComplete}
          onTaskDelete={handleTaskDelete}
          summary={currentSummary}
          focusSuggestion={currentFocus}
        />
      </div>
    </div>
  );
}