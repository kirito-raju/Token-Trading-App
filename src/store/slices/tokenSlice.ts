import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token, TokenState, SortField, SortDirection } from "@/types/token";

const initialState: TokenState = {
  tokens: [],
  loading: true,
  error: null,
  sortField: "volume24h",
  sortDirection: "desc",
  activeCategory: "all",
};

const tokenSlice = createSlice({
  name: "tokens",
  initialState,
  reducers: {
    setTokens: (state, action: PayloadAction<Token[]>) => {
      state.tokens = action.payload;
      state.loading = false;
    },
    updateToken: (
      state,
      action: PayloadAction<{ id: string; price: number; change24h: number }>
    ) => {
      const token = state.tokens.find((t) => t.id === action.payload.id);
      if (token) {
        token.price = action.payload.price;
        token.change24h = action.payload.change24h;
        token.lastUpdate = Date.now();
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setSortField: (state, action: PayloadAction<SortField>) => {
      if (state.sortField === action.payload) {
        state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
      } else {
        state.sortField = action.payload;
        state.sortDirection = "desc";
      }
    },
    setActiveCategory: (
      state,
      action: PayloadAction<TokenState["activeCategory"]>
    ) => {
      state.activeCategory = action.payload;
    },
  },
});

export const {
  setTokens,
  updateToken,
  setLoading,
  setError,
  setSortField,
  setActiveCategory,
} = tokenSlice.actions;
export default tokenSlice.reducer;
