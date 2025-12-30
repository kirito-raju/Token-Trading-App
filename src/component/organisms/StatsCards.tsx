import React from "react";
import { Token } from "@/types/token";
import { formatNumber } from "@/utils/formatters";

interface StatsCardsProps {
  tokens: Token[];
}

export const StatsCards = React.memo<StatsCardsProps>(({ tokens }) => {
  const totalVolume = tokens.reduce((acc, t) => acc + t.volume24h, 0);
  const totalMarketCap = tokens.reduce((acc, t) => acc + t.marketCap, 0);

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4">
        <p className="text-gray-400 text-sm mb-1">Total Tokens</p>
        <p className="text-2xl font-bold text-white">{tokens.length}</p>
      </div>
      <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4">
        <p className="text-gray-400 text-sm mb-1">24h Volume</p>
        <p className="text-2xl font-bold text-white">
          {formatNumber(totalVolume)}
        </p>
      </div>
      <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4">
        <p className="text-gray-400 text-sm mb-1">Total Market Cap</p>
        <p className="text-2xl font-bold text-white">
          {formatNumber(totalMarketCap)}
        </p>
      </div>
    </div>
  );
});

StatsCards.displayName = "StatsCards";
