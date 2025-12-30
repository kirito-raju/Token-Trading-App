import { Token } from "@/types/token";

export const generateMockTokens = (count: number = 30): Token[] => {
  const categories: Token["category"][] = ["new", "stretch", "migrated"];
  const tokens: Token[] = [];

  for (let i = 0; i < count; i++) {
    tokens.push({
      id: `token-${i}`,
      name: `Token ${i}`,
      symbol: `TKN${i}`,
      price: Math.random() * 10,
      change24h: (Math.random() - 0.5) * 50,
      volume24h: Math.random() * 1000000,
      liquidity: Math.random() * 500000,
      marketCap: Math.random() * 10000000,
      holders: Math.floor(Math.random() * 10000),
      logo: `https://api.dicebear.com/7.x/shapes/svg?seed=${i}`,
      category: categories[i % 3],
      contractAddress: `0x${Math.random().toString(16).substr(2, 40)}`,
      createdAt: Date.now() - Math.random() * 86400000,
      lastUpdate: Date.now(),
    });
  }

  return tokens;
};
