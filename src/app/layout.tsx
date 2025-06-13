'use client';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import Header from '../components/Header';
import Footer from '../components/Footer';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const  inter = Inter({ subsets: ["latin"]});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20}}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5}}>
<Header />
<main className='flex-grow pt-16'>
        {children}
        </main>
        <Footer />
          </motion.div>
        </AnimatePresence>
      
        
      </body>
    </html>
  );
}
