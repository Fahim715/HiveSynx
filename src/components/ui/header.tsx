"use client";

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {ModeToggle} from "@/components/mode-toggle";
import Link from 'next/link';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" text-white py-4 px-6 relative">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        <div className="w-32 h-8 rounded-lg">
            <Link  href="/">
                <img 
                src="/images/logo/logo.png" 
                alt="HiveSync Logo" 
                className="object-contain"
                />
            </Link>  
        </div>
        
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
            <button className="hover:text-blue-700 cursor-pointer transition-colors text-gray-900 dark:text-gray-100">Features</button>
            <button className="hover:text-blue-700 cursor-pointer transition-colors text-gray-900 dark:text-gray-100">About</button>
            <button className="hover:text-blue-700 cursor-pointer transition-colors text-gray-900 dark:text-gray-100">Contact</button>
            <ModeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
            ) : (
            <Bars3Icon className="h-6 w-6" />
            )}
        </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
        <div className="md:hidden fixed inset-0 z-50">
            <div className="absolute top-0 right-0 left-0 bg-indigo-600 p-6 space-y-6">
            <div className="flex justify-end">
                <button 
                className="p-2"
                onClick={() => setIsOpen(false)}
                >
                <XMarkIcon className="h-6 w-6" />
                </button>
            </div>
            
            <nav className="flex flex-col items-center space-y-6 text-xl">
                <button 
                className="hover:text-indigo-200 transition-colors"
                onClick={() => setIsOpen(false)}
                >
                Features
                </button>
                <button 
                className="hover:text-indigo-200 transition-colors"
                onClick={() => setIsOpen(false)}
                >
                About
                </button>
                <button 
                className="hover:text-indigo-200 transition-colors"
                onClick={() => setIsOpen(false)}
                >
                Contact
                </button>
            </nav>
            </div>
        </div>
        )}
    </header>
  );
};