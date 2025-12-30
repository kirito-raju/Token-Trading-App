import React from "react";
import { TrendingUp, TrendingDown, Info } from "lucide-react";
import { Token } from "@/types/token";
import { formatNumber, formatPercentage } from "@/utils/formatters";
import { TokenLogo } from "../molecules/TokenLogo";
import { PriceCell } from "../molecules/PriceCell";
import { Tooltip } from "../molecules/Tooltip";
import { Popover } from "../molecules/Popover";
import { Button } from "../atoms/Button";

interface TokenTableRowProps {
  token: Token;
  onClick: (token: Token) => void;
}

export const TokenTableRow = React.memo<TokenTableRowProps>(
  ({ token, onClick }) => {
    return (
      <tr
        className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors cursor-pointer"
        onClick={() => onClick(token)}
      >
        <td className="px-4 py-4">
          <div className="flex items-center gap-3">
            <TokenLogo src={token.logo} alt={token.name} size="md" />
            <div>
              <p className="font-semibold text-white">{token.name}</p>
              <p className="text-sm text-gray-400">{token.symbol}</p>
            </div>
          </div>
        </td>

        <td className="px-4 py-4 font-medium">
          <PriceCell price={token.price} />
        </td>

        <td className="px-4 py-4">
          <div
            className={`flex items-center gap-1 ${
              token.change24h >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {token.change24h >= 0 ? (
              <TrendingUp size={16} />
            ) : (
              <TrendingDown size={16} />
            )}
            <span className="font-medium">
              {formatPercentage(token.change24h)}
            </span>
          </div>
        </td>

        <td className="px-4 py-4 text-gray-300">
          {formatNumber(token.volume24h)}
        </td>
        <td className="px-4 py-4 text-gray-300">
          {formatNumber(token.liquidity)}
        </td>
        <td className="px-4 py-4 text-gray-300">
          {formatNumber(token.marketCap)}
        </td>
        <td className="px-4 py-4 text-gray-300">
          {token.holders.toLocaleString()}
        </td>

        <td className="px-4 py-4" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center gap-2">
            <Tooltip content="Token Info">
              <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                <Info size={16} className="text-gray-400" />
              </button>
            </Tooltip>

            <Popover
              trigger={
                <Button variant="primary" size="sm">
                  Trade
                </Button>
              }
            >
              <div className="space-y-2">
                <Button variant="success" size="sm" className="w-full">
                  Buy
                </Button>
                <Button variant="danger" size="sm" className="w-full">
                  Sell
                </Button>
              </div>
            </Popover>
          </div>
        </td>
      </tr>
    );
  }
);

TokenTableRow.displayName = "TokenTableRow";
