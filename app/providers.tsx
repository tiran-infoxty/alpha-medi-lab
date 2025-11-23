"use client";

import { DarkModeProvider } from "@/context/DarkModeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <DarkModeProvider>
      <Navbar />
      {children}
      <Footer />
    </DarkModeProvider>
  );
}
