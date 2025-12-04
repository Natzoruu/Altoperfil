"use client";

import { ToastProvider } from "@/once-ui/components";
import { Toaster } from "sonner";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      {children}
      <Toaster />
    </ToastProvider>
  );
}
