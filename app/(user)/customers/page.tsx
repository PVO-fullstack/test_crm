import { Pagination } from '@/app/component/Pagination/Pagination';
import { Search } from '@/app/component/Search/Search';
import { Table } from '@/app/component/Table/Table';
import React from 'react';

export interface customersPageProps {}

export default function CustomersPage({}: customersPageProps) {
  return (
    <div className="bg-slate-50 h-full">
      <h2 className="text-black text-2xl font-medium pt-[41px]  pl-[71px] ">
        Hello Evano 👋🏼,
      </h2>
      <div className="  h-full  pl-[71px] pt-[128px] pb-[258px] pr-[95px]">
        <div className="relative h-[812px] rounded-3xl bg-white pt-[30px] pl-[38px] pr-11 ">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-black text-[22px] font-semibold">
                All customers
              </h3>
              <p className="text-teal-500 text-sm font-normal mt-[7px]">
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
