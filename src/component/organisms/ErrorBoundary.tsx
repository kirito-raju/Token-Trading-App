import React from "react";
import { AlertCircle } from "lucide-react";

interface ErrorDisplayProps {
  error: string;
}

export const ErrorDisplay = React.memo<ErrorDisplayProps>(({ error }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <div className="text-center">
        <AlertCircle size={48} className="text-red-400 mx-auto mb-4" />
        <p className="text-red-400 text-lg">{error}</p>
      </div>
    </div>
  );
});

ErrorDisplay.displayName = "ErrorDisplay";
