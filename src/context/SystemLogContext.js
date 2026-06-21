"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { INITIAL_LOG_ENTRIES } from "@/lib/constants";

const SystemLogContext = createContext(null);

export function SystemLogProvider({ children }) {
  const [entries, setEntries] = useState(INITIAL_LOG_ENTRIES);

  const appendEntry = useCallback((entry) => {
    setEntries((current) => [entry, ...current]);
  }, []);

  const postUserLog = useCallback(
    (message) => {
      const trimmed = message.trim();
      if (!trimmed) {
        return;
      }
      appendEntry(`USER_LOG: ${trimmed}`);
    },
    [appendEntry],
  );

  const logTransmission = useCallback(
    (name, company) => {
      appendEntry(
        `TRANSMISSION DISPATCHED: AI Solutions Strategy logged for ${name} of ${company}`,
      );
    },
    [appendEntry],
  );

  return (
    <SystemLogContext.Provider
      value={{ entries, postUserLog, logTransmission }}
    >
      {children}
    </SystemLogContext.Provider>
  );
}

export function useSystemLog() {
  const context = useContext(SystemLogContext);
  if (!context) {
    throw new Error("useSystemLog must be used within SystemLogProvider");
  }
  return context;
}
