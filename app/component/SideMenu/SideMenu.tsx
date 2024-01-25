import React from 'react';
import { DashboardList } from '../DashdoardList/DashboardList';
import { User } from '../User/User';
import { Logo } from '../Logo/Logo';

export interface Props {}

export default function SideMenu({}: Props) {
  return (
    <aside className="shadow">
      <div className=" px-1 flex flex-col h-full mb:px-7 pt-[37px] pb-[76px] bg-white  ">
        <div className="mb-[597px]">
          <Logo />
          <DashboardList />
        </div>
        <User />
      </div>
    </aside>
  );
}
