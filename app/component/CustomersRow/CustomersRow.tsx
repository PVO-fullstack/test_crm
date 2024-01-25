import React from 'react';
import { Status, StatusBtn } from '../StatusBtn/StatusBtn';

export interface CustomersRowProps {
  customer: {
    name: string;
    company: string;
    phone: string;
    email: string;
    country: string;
    status: string;
    statusName: string;
  };
}

export default function CustomersRow({ customer }: CustomersRowProps) {
  const partMail = customer.email.split('@');
  const smallPartMail = partMail[1].split('.');

  return (
    <tr className="text-left">
      <td className="py-5 border-b border-zinc-100 ">{customer.name}</td>
      <td className="py-5 border-b border-zinc-100">{customer.company}</td>
      <td className="py-5 border-b border-zinc-100">{customer.phone}</td>
      <td className="py-5 border-b border-zinc-100">
        {partMail[0] +
          '@' +
          ' ' +
          smallPartMail[0] +
          '.' +
          ' ' +
          smallPartMail[1]}
      </td>
      <td className="py-5 border-b border-zinc-100">{customer.country}</td>
      <td className="py-5 border-b border-zinc-100">
        <StatusBtn status={customer.status}>{customer.statusName}</StatusBtn>
      </td>
    </tr>
  );
}
