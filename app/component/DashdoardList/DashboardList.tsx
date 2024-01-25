'use client';

import React from 'react';
import data from '../../data/dashboardItem.json';
import { DashboardItem } from '../DashboardItem/DashboardItem';
import { KeySquare } from '../Svg/KeySquare';
import { KubSquare } from '../Svg/KubSquare';
import { UserSquare } from '../Svg/UserSquare';
import { WalletMoney } from '../Svg/WalletMoney';
import { DiscountShape } from '../Svg/DiscountShape';
import { MessageQuestion } from '../Svg/MessageQuestion';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export interface DashboardListProps {}

export const DashboardList = ({}: DashboardListProps) => {
  const pathName = usePathname();

  return (
    <div className="flex flex-col gap-[18px]">
      <DashboardItem arrow={false} text={'Dashboard'}>
        <KeySquare className="stroke-[#9197B3] group-hover:stroke-white" />
      </DashboardItem>
      <DashboardItem arrow={true} text={'Product'}>
        <KubSquare className="stroke-[#9197B3] group-hover:stroke-white" />
      </DashboardItem>
      <DashboardItem
        pathName={pathName === '/customers'}
        href="/customers"
        arrow={true}
        text={'Customers'}
      >
        <UserSquare
          className={`stroke-[#9197B3] group-hover:stroke-white ${pathName === '/customers' && ' stroke-white '} `}
        />
      </DashboardItem>
      <DashboardItem arrow={true} text={'Income'}>
        <WalletMoney className="stroke-[#9197B3] group-hover:stroke-white" />
      </DashboardItem>
      <DashboardItem arrow={true} text={'Promote'}>
        <DiscountShape className="stroke-[#9197B3] group-hover:stroke-white" />
      </DashboardItem>
      <DashboardItem arrow={true} text={'Help'}>
        <MessageQuestion className="stroke-[#9197B3] group-hover:stroke-white" />
      </DashboardItem>
    </div>
  );
};
