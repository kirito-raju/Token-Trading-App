import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SortField, SortDirection } from "@/types/token";

interface SortableHeaderProps {
  field: SortField;
  label: string;
  currentField: SortField;
  direction: SortDirection;
  onSort: (field: SortField) => void;
}

export const SortableHeader = React.memo<SortableHeaderProps>(
  ({ field, label, currentField, direction, onSort }) => {
    const isActive = currentField === field;

    return (
      <th
        className="px-4 py-4 text-left text-sm font-semibold text-gray-300 cursor-pointer hover:text-white transition-colors"
        onClick={() => onSort(field)}
      >
        <div className="flex items-center gap-1">
          {label}
          {isActive ? (
            direction === "desc" ? (
              <ChevronDown size={16} className="text-blue-400" />
            ) : (
              <ChevronUp size={16} className="text-blue-400" />
            )
          ) : (
            <ChevronDown size={16} className="text-gray-600" />
          )}
        </div>
      </th>
    );
  }
);

SortableHeader.displayName = "SortableHeader";
