import { useState, useEffect, useRef } from "react";

export const usePriceAnimation = (price: number) => {
  const [flash, setFlash] = useState<"up" | "down" | null>(null);
  const previousPriceRef = useRef(price);

  useEffect(() => {
    if (previousPriceRef.current !== price) {
      setFlash(price > previousPriceRef.current ? "up" : "down");
      const timer = setTimeout(() => setFlash(null), 500);
      previousPriceRef.current = price;
      return () => clearTimeout(timer);
    }
  }, [price]);

  return flash;
};
