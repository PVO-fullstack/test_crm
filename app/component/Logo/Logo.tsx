import React from 'react';
import { Setting } from '../Svg/Setting';
import Link from 'next/link';

export interface LogoProps {}

export const Logo = ({}: LogoProps) => {
  return (
    <Link href="/" className=" flex items-center md-[55px]">
      <div className="inline-flex items-center gap-2">
        <Setting className="w-5 h-5 md:w-[37px] md:[37px]" />
        <h1 className=" hidden md:block text-black text-[26px] font-semibold">
          Dashboard
        </h1>
      </div>
      <span className="text-zinc-500 text-[10px] font-medium ml-1  mt-3 ">
        v.01
      </span>
    </Link>
  );
};
