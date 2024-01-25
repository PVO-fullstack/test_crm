import React, { ReactNode } from 'react';
import { ChevronRight } from '../Svg/ChevronRight';
import Link from 'next/link';

export interface DashboardProps {
  children: ReactNode;
  text: string;
  arrow: boolean;
  href?: string;
  pathName?: boolean;
}

export const DashboardItem = ({
  text,
  arrow,
  children,
  href = '#',
  pathName,
}: DashboardProps) => {
  return (
    <Link
      href={href}
      className={`group py-[11px] pl-[11px] pr-2 flex justify-between transition-all hover:bg-indigo-400 hover:rounded-lg active:bg-indigo-600 active:rounded-lg ${pathName && 'bg-indigo-600 rounded-lg'} `}
    >
      <div className=" flex gap-[14px]">
        {children}
        <p
          className={` hidden md:block self-center text-slate-400 text-sm font-medium group-hover:text-white ${pathName && 'text-white'} `}
        >
          {text}
        </p>
      </div>
      {arrow && (
        <ChevronRight
          className={` stroke-[#9197B3] group-hover:stroke-white self-center ${pathName && 'stroke-white'} `}
        />
      )}
    </Link>
  );
};
