import React from "react";
import { SortField, SortDirection } from "@/types/token";
import { SortableHeader } from "../molecules/SortableHeader";

interface TokenTableHeaderProps {
  sortField: SortField;
  sortDirection: SortDirection;
  onSort: (field: SortField) => void;
}

export const TokenTableHeader = React.memo<TokenTableHeaderProps>(
  ({ sortField, sortDirection, onSort }) => {
    return (
      <thead className="bg-gray-800/50 backdrop-blur-sm sticky top-0 z-10">
        <tr>
          <th className="px-4 py-4 text-left text-sm font-semibold text-gray-300">
            Token
          </th>
          <SortableHeader
            field="price"
            label="Price"
            currentField={sortField}
            direction={sortDirection}
            onSort={onSort}
          />
          <SortableHeader
            field="change24h"
            label="24h Change"
            currentField={sortField}
            direction={sortDirection}
            onSort={onSort}
          />
          <SortableHeader
            field="volume24h"
            label="Volume"
            currentField={sortField}
            direction={sortDirection}
            onSort={onSort}
          />
          <SortableHeader
            field="liquidity"
            label="Liquidity"
            currentField={sortField}
            direction={sortDirection}
            onSort={onSort}
          />
          <SortableHeader
            field="marketCap"
            label="Market Cap"
            currentField={sortField}
            direction={sortDirection}
            onSort={onSort}
          />
          <SortableHeader
            field="holders"
            label="Holders"
            currentField={sortField}
            direction={sortDirection}
            onSort={onSort}
          />
          <th className="px-4 py-4 text-left text-sm font-semibold text-gray-300">
            Actions
          </th>
        </tr>
      </thead>
    );
  }
);

TokenTableHeader.displayName = "TokenTableHeader";
