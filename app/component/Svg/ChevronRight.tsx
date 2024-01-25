import React from 'react';

export interface ChevronRightProps {
  className: string;
}

export const ChevronRight = ({ className }: ChevronRightProps) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="chevron-right 2">
        <path
          id="Vector"
          d="M6 12L10 8L6 4"
          stroke="inherit"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
