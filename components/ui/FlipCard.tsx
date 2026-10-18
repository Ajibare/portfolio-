"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface FlipCardProps {
  className?: string;
  children?: React.ReactNode;
}

export function FlipCard({ className, children }: FlipCardProps) {
  return (
    <motion.div
      className={cn(
        "relative group w-full h-full rounded-lg overflow-hidden border border-line",
        "cursor-default",
        className,
      )}
      whileHover={{ rotateY: -180 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}