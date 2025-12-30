import React, { useState } from "react";

interface PopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export const Popover = React.memo<PopoverProps>(({ trigger, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          ></div>
          <div className="absolute z-50 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-xl p-4 min-w-[200px] right-0">
            {children}
          </div>
        </>
      )}
    </div>
  );
});

Popover.displayName = "Popover";
