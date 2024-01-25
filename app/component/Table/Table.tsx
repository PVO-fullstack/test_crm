import React from 'react';
import CompanyRow from '../CustomersRow/CustomersRow';
import customers from '../../data/customers.json';

export interface TableProps {}

const headers = [
  'Customer Name',
  'Company',
  'Phone Number',
  'Email',
  'Country',
  'Status',
];

export const Table = ({}: TableProps) => {
  return (
    <>
      <table className="w-full table-auto ">
        <thead className="after:absolute after:w-full after:h-1 after:left-0 after:border-b after:border-zinc-100 ">
          <tr className="   ">
            {headers.map((header, i) => (
              <th
                key={i}
                className="last:w-20 last:text-center text-gray-400 pb-[14px] text-sm font-medium text-left  border-zinc-100"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-zinc-800 text-sm font-medium">
          {customers?.map((customer, i) => (
            <CompanyRow key={i} customer={customer} />
          ))}
        </tbody>
      </table>
    </>
  );
};
