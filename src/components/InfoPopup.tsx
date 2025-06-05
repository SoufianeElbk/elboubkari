
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface InfoPopupProps {
  trigger: ReactNode;
  title: string;
  children: ReactNode;
}

export function InfoPopup({ trigger, title, children }: InfoPopupProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="glassmorphism border-blue-200/30 dark:border-blue-700/30">
        <DialogHeader>
          <DialogTitle className="text-blue-900 dark:text-blue-100">{title}</DialogTitle>
        </DialogHeader>
        <div className="text-gray-700 dark:text-gray-300">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}
