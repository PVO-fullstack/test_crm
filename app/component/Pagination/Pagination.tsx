import React from 'react';

export interface PaginationProps {}

export const Pagination = ({}: PaginationProps) => {
  return (
    <div className="flex justify-between mt-8">
      <p>Showing data 1 to 8 of 256K entries</p>
      <div className=" text-gray-700 text-xs font-medium leading-3 flex items-baseline gap-3">
        <div className="w-[25px] h-6 px-[9px] py-1.5 bg-neutral-100 rounded border border-zinc-100 flex-col justify-center items-center gap-2.5 inline-flex">
          &#60;
        </div>
        <div className=" text-white w-[25px] h-6 px-2.5 py-1.5 bg-indigo-600 rounded border border-indigo-600 flex-col justify-center items-center gap-2.5 inline-flex">
          1
        </div>
        <div className="w-[25px] h-6 px-[9px] py-1.5 bg-neutral-100 rounded border border-zinc-100 flex-col justify-center items-center gap-2.5 inline-flex">
          2
        </div>
        <div className="w-[25px] h-6 px-[9px] py-1.5 bg-neutral-100 rounded border border-zinc-100 flex-col justify-center items-center gap-2.5 inline-flex">
          3
        </div>
        <div className="w-[25px] h-6 px-[9px] py-1.5 bg-neutral-100 rounded border border-zinc-100 flex-col justify-center items-center gap-2.5 inline-flex">
          4
        </div>
        <p>...</p>
        <div className="w-[25px] h-6 px-[9px] py-1.5 bg-neutral-100 rounded border border-zinc-100 flex-col justify-center items-center gap-2.5 inline-flex">
          40
        </div>
        <div className="w-[25px] h-6 px-[9px] py-1.5 bg-neutral-100 rounded border border-zinc-100 flex-col justify-center items-center gap-2.5 inline-flex">
          &#62;
        </div>
      </div>
    </div>
  );
};
