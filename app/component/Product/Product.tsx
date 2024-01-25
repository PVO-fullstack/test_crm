import React from 'react';

export interface Props {}

export default function Product({}: Props) {
  return (
    <div className="bg-[#FAFBFF] text-red-800 text-3xl flex items-center justify-center">
      Home Page <br /> Перейдіть на сторінку Customers
    </div>
  );
}
