import React from 'react';
import SideMenu from '../component/SideMenu/SideMenu';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid grid-cols-[60px_1fr] md:grid-cols-[306px_1fr] ">
      <SideMenu />
      <div className=" overflow-y-hidden">{children}</div>
    </div>
  );
}
