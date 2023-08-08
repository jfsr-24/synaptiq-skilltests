import './globals.css'
import { Inter } from 'next/font/google'
import '@shopify/polaris/build/esm/styles.css';
import React from 'react';
import { Metadata } from 'next/types';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'React Test App',
  description: 'Synaptiq',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
