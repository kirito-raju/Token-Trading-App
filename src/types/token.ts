export interface Token {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  volume24h: number;
  liquidity: number;
  marketCap: number;
  holders: number;
  logo: string;
  category: "new" | "stretch" | "migrated";
  contractAddress: string;
  createdAt: number;
  lastUpdate: number;
}

export type SortField = keyof Pick<
  Token,
  "price" | "change24h" | "volume24h" | "liquidity" | "marketCap" | "holders"
>;
export type SortDirection = "asc" | "desc";

export interface TokenState {
  tokens: Token[];
  loading: boolean;
  error: string | null;
  sortField: SortField;
  sortDirection: SortDirection;
  activeCategory: "all" | Token["category"];
}
