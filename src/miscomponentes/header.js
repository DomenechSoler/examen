import React from 'react';
import Link from 'next/link';

function Header() {
    return (
        <header className="bg-gray-900 text-white py-4 px-8 flex items-center justify-between">
           <Link href="/" className="hover:text-yellow-400 transition-colors"><h1 className="text-2xl font-bold">Kilian Domenech</h1></Link> 
            <nav>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/About" className="hover:text-yellow-400 transition-colors">About</Link>
                    </li>
                    <li>
                        <Link href="/MovieExplorer" className="hover:text-yellow-400 transition-colors">MovieExplorer</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;