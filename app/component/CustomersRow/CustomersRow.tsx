import React from 'react';
import { Status, StatusBtn } from '../StatusBtn/StatusBtn';

export interface CustomersRowProps {
  customer: {
    name: string;
    company: string;
    phone: string;
    email: string;
    country: string;
    status: Status;
    statusName: string;
  };
}

export default function CustomersRow({ customer }: CustomersRowProps) {
  return (
    <tr className="text-left">
      <td className="py-5 border-b border-zinc-100 ">{customer.name}</td>
      <td className="py-5 border-b border-zinc-100">{customer.company}</td>
      <td className="py-5 border-b border-zinc-100">{customer.phone}</td>
      <td className="py-5 border-b border-zinc-100">{customer.email}</td>
      <td className="py-5 border-b border-zinc-100">{customer.country}</td>
      <td className="py-5 border-b border-zinc-100">
        <StatusBtn status={customer.status}>{customer.statusName}</StatusBtn>
      </td>
    </tr>
  );
}
