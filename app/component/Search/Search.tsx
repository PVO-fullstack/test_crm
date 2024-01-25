import Image from 'next/image';
import React from 'react';

export interface SearchProps {}

export const Search = ({}: SearchProps) => {
  return (
    <div className="relative">
      <input
        className="w-[150px] md:w-[216px] h-[38px] pl-10 bg-slate-50 rounded-[10px] border placeholder:text-gray-400 placeholder:text-xs placeholder:font-normal "
        placeholder="Search"
        type="text"
      />
      <button type="button" className="absolute top-0 left-0 p-3"></button>
      <Image
        className="absolute top-0 left-0 translate-x-1/2 translate-y-[8px] "
        src="/svg/search.svg"
        alt="Search icon"
        width={24}
        height={24}
      />
    </div>
  );
};
