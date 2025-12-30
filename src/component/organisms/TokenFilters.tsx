import React from "react";
import { Token } from "@/types/token";

interface TokenFiltersProps {
  activeTab: "all" | Token["category"];
  onTabChange: (tab: "all" | Token["category"]) => void;
}

const tabs: Array<{ id: "all" | Token["category"]; label: string }> = [
  { id: "all", label: "All Tokens" },
  { id: "new", label: "New Pairs" },
  { id: "stretch", label: "Final Stretch" },
  { id: "migrated", label: "Migrated" },
];

export const TokenFilters = React.memo<TokenFiltersProps>(
  ({ activeTab, onTabChange }) => {
    return (
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/50"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  }
);

TokenFilters.displayName = "TokenFilters";
