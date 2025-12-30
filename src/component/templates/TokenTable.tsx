"use client";

import React, { useState, useMemo, useCallback } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setSortField, setActiveCategory } from "@/store/slices/tokenSlice";
import { useTokenData } from "@/hooks/useTokenData";
import { useWebSocket } from "@/hooks/useWebSocket";
import { Token } from "@/types/token";
import { TokenTableHeader } from "../organisms/TokenTableHeader";
import { TokenTableRow } from "../organisms/TokenTableRow";
import { TokenModal } from "../organisms/TokenModal";
import { TokenFilters } from "../organisms/TokenFilters";
import { SkeletonLoader } from "../organisms/SkeletonLoader";
import { ErrorDisplay } from "../organisms/ErrorBoundary";
import { StatsCards } from "../organisms/StatsCards";

export const TokenTable = () => {
  const dispatch = useAppDispatch();
  const { tokens, loading, error, sortField, sortDirection, activeCategory } =
    useAppSelector((state) => state.tokens);

  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Initialize data and WebSocket
  useTokenData();
  useWebSocket();

  // Handlers
  const handleSort = useCallback(
    (field: any) => {
      dispatch(setSortField(field));
    },
    [dispatch]
  );

  const handleTabChange = useCallback(
    (tab: any) => {
      dispatch(setActiveCategory(tab));
    },
    [dispatch]
  );

  const handleRowClick = useCallback((token: Token) => {
    setSelectedToken(token);
    setModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setModalOpen(false);
  }, []);

  // Filtered and sorted tokens
  const displayTokens = useMemo(() => {
    let filtered =
      activeCategory === "all"
        ? tokens
        : tokens.filter((t) => t.category === activeCategory);

    return [...filtered].sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      const modifier = sortDirection === "asc" ? 1 : -1;
      return (aVal > bVal ? 1 : -1) * modifier;
    });
  }, [tokens, activeCategory, sortField, sortDirection]);

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Token Discovery
          </h1>
          <p className="text-gray-400">
            Real-time token metrics and trading data
          </p>
        </div>

        {/* Filters */}
        <TokenFilters
          activeTab={activeCategory}
          onTabChange={handleTabChange}
        />

        {/* Table */}
        <div className="bg-gray-900/50 rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <TokenTableHeader
                sortField={sortField}
                sortDirection={sortDirection}
                onSort={handleSort}
              />
              <tbody>
                {loading ? (
                  <SkeletonLoader rows={10} />
                ) : (
                  displayTokens.map((token) => (
                    <TokenTableRow
                      key={token.id}
                      token={token}
                      onClick={handleRowClick}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats */}
        <StatsCards tokens={displayTokens} />
      </div>

      {/* Modal */}
      <TokenModal
        isOpen={modalOpen}
        onClose={handleModalClose}
        token={selectedToken}
      />
    </div>
  );
};

export default TokenTable;
