'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';

const Header = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <header className=' bg-white text-green-900 shadow fixed top-0 w-full z-50'
        >
            <div className='max-w-6xl mx-auto px-4 py-4 flex items-center justify-between '>
            <div className='text-2xl font-bold text-blue-600'>
Fredrique
            </div>
            {/*moble menu button*/}
              <button
            className='md:hidden text-xl text-gray-800' onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? (
                    <XMarkIcon className='h-6 w-6 text-gray-800' />
                ) : (
                    <Bars3Icon className='h-6 w-6 text-gray-800' />
                )}

            </button>
            <nav className='hidden md:flex gap-6 items-center'>
<Link href="/" className='text-gray-700 hover:text-blue-500'>Home</Link>
<Link href="/blog" className='text-gray-700 hover:text-blue-500'>Blog</Link>
<Link href="/resume" className='text-gray-700 hover:text-blue-500'>Resume</Link>
<Link href="/contact" className='text-gray-700 hover:text-blue-500'>Contact</Link>

<Link href="/contact" className={`px-4 py-2 rounded-md font-medium transition-colors ${
        pathname === '/contact' ? 'bg-white text-blue-700 border border-blue-700' : 
        'bg-blue-600 text-white hover:bg-blue-700'
    }`}>Hire me</Link>
    
            </nav>
          </div>
           
{menuOpen && (
    <div className='md:hidden bg-white flex flex-col items-start px-6 py-4 gap-3 shadow'>
<Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
<Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
<Link href="/resume" onClick={() => setMenuOpen(false)}>Resume</Link>
<Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
<Link href="/contact" onClick={() => setMenuOpen(false)} className='bg-blue-600 text-white px-4 py-1 rounded'>Hire me</Link>
        
    </div>
)}

        </header>
    );
};
export default Header;