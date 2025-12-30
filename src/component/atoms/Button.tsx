import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.memo<ButtonProps>(
  ({
    variant = "primary",
    size = "md",
    children,
    className = "",
    ...props
  }) => {
    const baseStyles =
      "font-medium rounded-lg transition-colors disabled:opacity-50";

    const variantStyles = {
      primary: "bg-blue-600 hover:bg-blue-700 text-white",
      secondary: "bg-gray-800 hover:bg-gray-700 text-white",
      danger: "bg-red-600 hover:bg-red-700 text-white",
      success: "bg-green-600 hover:bg-green-700 text-white",
    };

    const sizeStyles = {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    };

    return (
      <button
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
