"use client";

import React, { useRef, useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface MagneticWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  intensity?: number;
}

export function MagneticWrapper({
  children,
  className,
  intensity = 0.3,
  ...props
}: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * intensity;
    const y = (clientY - (top + height / 2)) * intensity;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("inline-block", className)}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition:
          position.x === 0 && position.y === 0
            ? "transform 0.5s cubic-bezier(0.33, 1, 0.68, 1)"
            : "transform 0.1s linear",
      }}
      {...props}
    >
      {children}
    </div>
  );
}
