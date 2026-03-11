import React, { createContext, useContext, useState, useCallback } from "react";

export interface FoodEntry {
  id: number;
  name: string;
  sodium: number;
  emoji: string;
  meal: string;
  mealLabel: string;
  date: string; // YYYY-MM-DD
}

interface FoodLogContextType {
  entries: FoodEntry[];
  addEntries: (foods: { id: number; name: string; sodium: number; emoji: string }[], mealId: string, mealLabel: string) => void;
  getTodayEntries: () => FoodEntry[];
  getTodayTotal: () => number;
}

const FoodLogContext = createContext<FoodLogContextType | undefined>(undefined);

const getToday = () => new Date().toISOString().slice(0, 10);

export const FoodLogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [entries, setEntries] = useState<FoodEntry[]>([]);

  const addEntries = useCallback(
    (foods: { id: number; name: string; sodium: number; emoji: string }[], mealId: string, mealLabel: string) => {
      const date = getToday();
      const newEntries: FoodEntry[] = foods.map((f) => ({
        ...f,
        meal: mealId,
        mealLabel,
        date,
      }));
      setEntries((prev) => [...prev, ...newEntries]);
    },
    []
  );

  const getTodayEntries = useCallback(() => {
    const today = getToday();
    return entries.filter((e) => e.date === today);
  }, [entries]);

  const getTodayTotal = useCallback(() => {
    return getTodayEntries().reduce((sum, e) => sum + e.sodium, 0);
  }, [getTodayEntries]);

  return (
    <FoodLogContext.Provider value={{ entries, addEntries, getTodayEntries, getTodayTotal }}>
      {children}
    </FoodLogContext.Provider>
  );
};

export const useFoodLog = () => {
  const ctx = useContext(FoodLogContext);
  if (!ctx) throw new Error("useFoodLog must be used within FoodLogProvider");
  return ctx;
};
