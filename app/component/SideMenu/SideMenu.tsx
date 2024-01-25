import React from 'react';
import { DashboardList } from '../DashdoardList/DashboardList';
import { User } from '../User/User';
import { Logo } from '../Logo/Logo';

export interface Props {}

export default function SideMenu({}: Props) {
  return (
    <aside className="shadow">
      <div className="flex flex-col justify-between h-full px-7 pt-[37px] pb-[76px] bg-white  ">
        <div className="mb-[598px]">
          <Logo />
          <DashboardList />
        </div>
        <User />
      </div>
    </aside>
  );
}
