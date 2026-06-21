"use client";

import { SystemLogProvider } from "@/context/SystemLogContext";

export default function Providers({ children }) {
  return <SystemLogProvider>{children}</SystemLogProvider>;
}
