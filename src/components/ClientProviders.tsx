"use client";

import { ReactNode } from "react";
import { AppProvider } from "../context/AppContext";
import SmoothScroll from "./SmoothScroll";
import LoadingScreen from "./LoadingScreen";
import ReservationModal from "./ReservationModal";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      <SmoothScroll>
        <LoadingScreen />
        <ReservationModal />
        {children}
      </SmoothScroll>
    </AppProvider>
  );
}
