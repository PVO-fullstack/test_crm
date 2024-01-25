import Image from 'next/image';
import React from 'react';
import user from '../../data/user.json';

export interface UserProps {}

export const User = ({}: UserProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-3">
      <Image
        className=" w-[42px] h-[42px] rounded-full "
        src={user.avatar}
        alt={user.alt}
        width={42}
        height={42}
      />
      <div>
        <p className="text-black text-sm font-medium tracking-tight">
          {user.name}
        </p>
        <p className="text-neutral-500 text-xs font-normal tracking-tight">
          {user.profession}
        </p>
      </div>
    </div>
  );
};
