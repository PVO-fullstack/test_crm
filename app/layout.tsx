import React from 'react';
import './globals.css';
import { Poppins } from 'next/font/google';

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
      <body className={font.className}>{children}</body>
    </html>
  );
}
