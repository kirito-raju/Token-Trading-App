import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "success" | "danger" | "warning" | "info";
}

export const Badge = React.memo<BadgeProps>(
  ({ children, variant = "info" }) => {
    const variants = {
      success: "bg-green-500/10 text-green-400 border-green-500/20",
      danger: "bg-red-500/10 text-red-400 border-red-500/20",
      warning: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      info: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    };

    return (
      <span
        className={`px-2 py-1 rounded text-xs font-medium border ${variants[variant]}`}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
