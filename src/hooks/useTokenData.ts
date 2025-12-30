import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setTokens, setError } from "@/store/slices/tokenSlice";
import { generateMockTokens } from "@/utils/mockData";

export const useTokenData = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const mockTokens = generateMockTokens(30);
        dispatch(setTokens(mockTokens));
      } catch (err) {
        dispatch(setError("Failed to load tokens"));
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch]);
};
