"use client";

import { useState } from "react";
import { useSystemLog } from "@/context/SystemLogContext";

export default function SystemLog() {
  const { entries, postUserLog } = useSystemLog();
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    postUserLog(message);
    setMessage("");
  };

  return (
    <div className="md:col-span-4 rounded-3xl glass-card p-6 flex flex-col justify-between">
      <div>
        <h4 className="text-xs font-mono tracking-widest text-[#94b3b8] uppercase mb-4">
          Secure System Log
        </h4>
        <div className="bg-black/40 rounded-xl p-3 border border-white/5 font-mono text-[10px] text-zinc-400 space-y-2 max-h-44 overflow-y-auto">
          {entries.map((entry, index) => (
            <div key={`${entry}-${index}`} className="flex space-x-1.5 items-start">
              <span className="text-cyan-500 mt-0.5">❯</span>
              <span className="leading-tight break-all">{entry}</span>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mt-4 flex gap-1">
        <input
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Type system alert..."
          className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-[11px] font-mono text-white flex-grow focus:outline-none focus:border-blue-500/50"
          required
        />
        <button
          type="submit"
          className="bg-blue-600/30 border border-blue-500/30 px-2.5 rounded-lg text-[10px] font-mono font-bold text-white hover:bg-blue-500/50 transition-colors"
        >
          Post
        </button>
      </form>
    </div>
  );
}
