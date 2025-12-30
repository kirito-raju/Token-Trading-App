import React, { useState } from "react";

interface TooltipProps {
  children: React.ReactNode;
  content: string;
}

export const Tooltip = React.memo<TooltipProps>(({ children, content }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
      </div>
      {visible && (
        <div className="absolute z-50 px-3 py-2 text-xs font-medium text-white bg-gray-900 rounded-lg shadow-lg bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap">
          {content}
          <div className="absolute w-2 h-2 bg-gray-900 rotate-45 left-1/2 -translate-x-1/2 -bottom-1"></div>
        </div>
      )}
    </div>
  );
});

Tooltip.displayName = "Tooltip";
