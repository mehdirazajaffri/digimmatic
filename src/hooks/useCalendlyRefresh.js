"use client";

import { useCallback, useEffect, useState } from "react";

export default function useCalendlyRefresh(calendlyUrl) {
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    setRefreshKey((current) => current + 1);
  }, [calendlyUrl]);

  const triggerManualRefresh = useCallback(() => {
    setRefreshKey((current) => current + 1);
  }, []);

  return { refreshKey, triggerManualRefresh };
}
