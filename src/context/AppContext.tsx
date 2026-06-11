"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface AppContextType {
  isLoading: boolean;
  setIsLoading: (v: boolean) => void;
  isReservationOpen: boolean;
  openReservation: () => void;
  closeReservation: () => void;
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const openReservation = useCallback(() => setIsReservationOpen(true), []);
  const closeReservation = useCallback(() => setIsReservationOpen(false), []);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isReservationOpen,
        openReservation,
        closeReservation,
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
