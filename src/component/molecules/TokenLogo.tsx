import React from "react";

interface TokenLogoProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
}

export const TokenLogo = React.memo<TokenLogoProps>(
  ({ src, alt, size = "md" }) => {
    const sizes = {
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-16 h-16",
    };

    return (
      <img
        src={src}
        alt={alt}
        className={`${sizes[size]} rounded-full`}
        loading="lazy"
      />
    );
  }
);

TokenLogo.displayName = "TokenLogo";
