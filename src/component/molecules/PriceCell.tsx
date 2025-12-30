import React from "react";
import { formatPrice } from "@/utils/formatters";
import { usePriceAnimation } from "@/hooks/usePriceAnimation";

interface PriceCellProps {
  price: number;
}

export const PriceCell = React.memo<PriceCellProps>(({ price }) => {
  const flash = usePriceAnimation(price);

  return (
    <span
      className={`transition-all duration-500 ${
        flash === "up"
          ? "text-green-400"
          : flash === "down"
          ? "text-red-400"
          : "text-white"
      }`}
    >
      {formatPrice(price)}
    </span>
  );
});

PriceCell.displayName = "PriceCell";
