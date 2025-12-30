import React from "react";
import { X, ExternalLink } from "lucide-react";
import { Token } from "@/types/token";
import {
  formatNumber,
  formatPrice,
  formatPercentage,
} from "@/utils/formatters";
import { copyToClipboard } from "@/utils/clipboard";
import { TokenLogo } from "../molecules/TokenLogo";
import { Button } from "..//atoms/Button";

interface TokenModalProps {
  isOpen: boolean;
  onClose: () => void;
  token: Token | null;
}

export const TokenModal = React.memo<TokenModalProps>(
  ({ isOpen, onClose, token }) => {
    if (!isOpen || !token) return null;

    const handleCopy = async () => {
      const success = await copyToClipboard(token.contractAddress);
      if (success) {
        // You could add a toast notification here
        console.log("Copied!");
      }
    };

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
        onClick={onClose}
      >
        <div
          className="bg-gray-900 rounded-2xl p-6 max-w-2xl w-full border border-gray-800 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <TokenLogo src={token.logo} alt={token.name} size="lg" />
              <div>
                <h2 className="text-2xl font-bold text-white">{token.name}</h2>
                <p className="text-gray-400">{token.symbol}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-1">Price</p>
              <p className="text-2xl font-bold text-white">
                {formatPrice(token.price)}
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-1">24h Change</p>
              <p
                className={`text-2xl font-bold ${
                  token.change24h >= 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {formatPercentage(token.change24h)}
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-1">Market Cap</p>
              <p className="text-xl font-semibold text-white">
                {formatNumber(token.marketCap)}
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-1">Volume 24h</p>
              <p className="text-xl font-semibold text-white">
                {formatNumber(token.volume24h)}
              </p>
            </div>
          </div>

          {/* Contract Address */}
          <div className="bg-gray-800/30 rounded-lg p-4 mb-4">
            <p className="text-gray-400 text-sm mb-2">Contract Address</p>
            <div className="flex items-center gap-2">
              <code className="text-sm text-gray-300 font-mono flex-1 truncate">
                {token.contractAddress}
              </code>
              <Button variant="primary" size="sm" onClick={handleCopy}>
                Copy
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button variant="primary" size="lg" className="flex-1">
              Trade Now
            </Button>
            <Button variant="secondary" size="lg" className="px-4">
              <ExternalLink size={20} />
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

TokenModal.displayName = "TokenModal";
