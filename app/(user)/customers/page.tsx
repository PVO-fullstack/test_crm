import { Pagination } from '@/app/component/Pagination/Pagination';
import { Search } from '@/app/component/Search/Search';
import { Table } from '@/app/component/Table/Table';
import React from 'react';

export interface customersPageProps {}

export default function CustomersPage({}: customersPageProps) {
  return (
    <div className="bg-slate-50 h-full">
      <h2 className="text-xl text-black md:text-2xl font-medium pt-[41px]  pl-[71px] ">
        Hello Evano 👋🏼,
      </h2>
      <div className="  h-full  md:pl-[71px] md:pt-[128px] md:pb-[258px] md:pr-[95px]">
        <div className="relative h-[812px] rounded-3xl bg-white pt-[30px] md:pl-[38px] md:pr-11 ">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-[14px] text-black md:text-[22px] font-semibold">
                All customers
              </h3>
              <p className="text-[10px] text-teal-500 md:text-sm font-normal mt-[7px]">
                Active Members
              </p>
            </div>
            <Search />
          </div>
          <Table />
          <Pagination />
        </div>
      </div>
    </div>
  );
}
