import React, { ReactNode } from 'react';

export enum Status {
  Active = 'active',
  Inactive = 'inactive',
}

export interface StatusBtnProps {
  status: string;
  children: ReactNode;
}

export const StatusBtn = ({ children, status }: StatusBtnProps) => {
  return (
    <div
      className={`w-14 mb:w-20 h-[29px] px-3 py-1 bg-opacity-40 rounded border justify-center items-center gap-2.5 inline-flex 
      ${
        (status === Status.Active &&
          'bg-teal-500 text-emerald-600 border-emerald-500') ||
        (status === Status.Inactive && 'text-red-600 bg-red-200 border-red-600')
      }`}
    >
      {children}
    </div>
  );
};
