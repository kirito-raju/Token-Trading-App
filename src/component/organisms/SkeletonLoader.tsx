import React from "react";

export const SkeletonRow = React.memo(() => (
  <tr className="animate-pulse border-b border-gray-800">
    {[...Array(8)].map((_, i) => (
      <td key={i} className="px-4 py-4">
        <div className="h-4 bg-gray-800 rounded w-3/4"></div>
      </td>
    ))}
  </tr>
));

SkeletonRow.displayName = "SkeletonRow";

interface SkeletonLoaderProps {
  rows?: number;
}

export const SkeletonLoader = React.memo<SkeletonLoaderProps>(
  ({ rows = 10 }) => (
    <>
      {[...Array(rows)].map((_, i) => (
        <SkeletonRow key={i} />
      ))}
    </>
  )
);

SkeletonLoader.displayName = "SkeletonLoader";
