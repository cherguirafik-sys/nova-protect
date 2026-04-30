"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AccordionProps {
  children: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  type?: "single" | "multiple";
  collapsible?: boolean;
}

const AccordionContext = React.createContext<{
  value: string;
  onValueChange: (value: string) => void;
}>({
  value: "",
  onValueChange: () => {},
});

export function Accordion({
  children,
  value,
  onValueChange,
  className,
}: AccordionProps) {
  const [internalValue, setInternalValue] = React.useState("");
  
  const activeValue = value !== undefined ? value : internalValue;
  const setActiveValue = onValueChange || setInternalValue;

  return (
    <AccordionContext.Provider value={{ value: activeValue, onValueChange: setActiveValue }}>
      <div className={cn("space-y-4", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  children,
  value,
  className,
}: {
  children: React.ReactNode;
  value: string;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { value });
        }
        return child;
      })}
    </div>
  );
}

export function AccordionTrigger({
  children,
  className,
  value,
}: {
  children: React.ReactNode;
  className?: string;
  value?: string;
}) {
  const { value: activeValue, onValueChange } = React.useContext(AccordionContext);
  const isOpen = activeValue === value;

  return (
    <button
      type="button"
      onClick={() => onValueChange(isOpen ? "" : value!)}
      className={cn("flex w-full items-center justify-between py-4 text-left font-medium transition-all", className)}
    >
      {children}
    </button>
  );
}

export function AccordionContent({
  children,
  className,
  value,
}: {
  children: React.ReactNode;
  className?: string;
  value?: string;
}) {
  const { value: activeValue } = React.useContext(AccordionContext);
  const isOpen = activeValue === value;

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className={cn("pb-4 pt-0", className)}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
