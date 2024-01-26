import React from 'react';
import './globals.css';
import { Poppins } from 'next/font/google';
import SideMenu from './component/SideMenu/SideMenu';

const font = Poppins({
  weight: ['400', '500'],
  style: 'normal',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`grid grid-cols-[60px_1fr] md:grid-cols-[306px_1fr]  ${font.className}`}
      >
        <SideMenu />
        {children}
      </body>
    </html>
  );
}
