"use client";

import { useMemo, useState } from "react";
import { ROI_DEFAULTS } from "@/lib/constants";

const EFFICIENCY_RATE = 0.85;

export function useROICalculator() {
  const [employees, setEmployees] = useState(ROI_DEFAULTS.employees);
  const [hoursPerWeek, setHoursPerWeek] = useState(ROI_DEFAULTS.hoursPerWeek);
  const [hourlyRate, setHourlyRate] = useState(ROI_DEFAULTS.hourlyRate);

  const results = useMemo(() => {
    const weeklyHoursSaved = employees * hoursPerWeek * EFFICIENCY_RATE;
    const yearlyHours = weeklyHoursSaved * 52;
    const yearlyROI = yearlyHours * hourlyRate;

    return {
      weeklyHoursSaved,
      yearlyHours,
      yearlyROI,
      efficiency: Math.round(EFFICIENCY_RATE * 100),
    };
  }, [employees, hoursPerWeek, hourlyRate]);

  const reset = () => {
    setEmployees(ROI_DEFAULTS.employees);
    setHoursPerWeek(ROI_DEFAULTS.hoursPerWeek);
    setHourlyRate(ROI_DEFAULTS.hourlyRate);
  };

  return {
    employees,
    hoursPerWeek,
    hourlyRate,
    setEmployees,
    setHoursPerWeek,
    setHourlyRate,
    results,
    reset,
  };
}
