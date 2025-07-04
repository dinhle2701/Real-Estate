'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { label: 'Home', href: '#' },
        { label: 'About Us', href: '#' },
        { label: 'Property List', href: '#' },
        { label: 'Contact Us', href: '#' },
    ];

    const router = useRouter();

    const handleGo = () => {
        router.push('/register'); // chuyển sang trang /about
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent text-white">
            <div className="flex items-center justify-between px-4 md:px-20 py-4 h-20">
                <div className="text-2xl font-bold">EverGreen</div>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map(({ label, href }) => (
                        <Link key={label} href={href} className="hover:text-green-300">
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop buttons */}
                <div className="hidden md:flex gap-4">
                    <button className="text-white">🌐 Eng</button>
                    <button className="bg-lime-400 text-white px-4 py-2 rounded-lg font-semibold hover:bg-lime-500 hover:cursor-pointer" onClick={handleGo}>
                        Register
                    </button>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden z-50"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 flex flex-col gap-6 px-6 py-10 text-white z-40">
                    {navLinks.map(({ label, href }) => (
                        <Link
                            key={label}
                            href={href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-lg border-b border-white/20 pb-2"
                        >
                            {label}
                        </Link>
                    ))}
                    <button className="text-white">🌐 Eng</button>
                    <button className="bg-lime-400 text-white px-4 py-2 rounded-lg font-semibold hover:bg-lime-500">
                        Sign Up
                    </button>
                </div>
            )}
        </header>
    );
}
