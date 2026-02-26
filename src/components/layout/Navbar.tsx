'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navLinks = [
    { label: 'Men', href: '/men' },
    { label: 'Women', href: '/women' },
    { label: 'Skincare', href: '/skincare' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/about#contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const { totalItems, openCart } = useCart();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    return (
        <>
            <header
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
                    scrolled ? 'bg-[#fafafa]/95 backdrop-blur-md border-b border-[#e8e4de]' : 'bg-transparent'
                )}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="flex items-center justify-between h-16">
                        {/* Left nav */}
                        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        'text-[12px] tracking-widest uppercase font-sans transition-colors duration-200',
                                        pathname === link.href
                                            ? 'text-[#0a0a0a] font-semibold'
                                            : 'text-[#6b6b6b] hover:text-[#0a0a0a]'
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Logo */}
                        <Link
                            href="/"
                            className="font-serif text-2xl tracking-[0.3em] uppercase text-[#0a0a0a] absolute left-1/2 -translate-x-1/2"
                        >
                            LUSSO
                        </Link>

                        {/* Icons */}
                        <div className="flex items-center gap-4 ml-auto md:ml-0">
                            <button
                                className="text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors"
                                aria-label="Search"
                            >
                                <Search size={18} strokeWidth={1.5} />
                            </button>
                            <button
                                onClick={openCart}
                                className="relative text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors"
                                aria-label="Cart"
                            >
                                <ShoppingBag size={18} strokeWidth={1.5} />
                                {totalItems > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute -top-2 -right-2 w-4 h-4 bg-[#0a0a0a] text-[#fafafa] rounded-full text-[9px] flex items-center justify-center font-sans"
                                    >
                                        {totalItems}
                                    </motion.span>
                                )}
                            </button>
                            <button className="text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors hidden md:block" aria-label="Account">
                                <User size={18} strokeWidth={1.5} />
                            </button>
                            <button
                                className="md:hidden text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors"
                                onClick={() => setMobileOpen(!mobileOpen)}
                                aria-label="Menu"
                            >
                                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden bg-[#fafafa] border-t border-[#e8e4de]"
                        >
                            <nav className="flex flex-col px-6 py-8 gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-sm tracking-widest uppercase text-[#0a0a0a] font-sans"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
            {/* Spacer */}
            <div className="h-16" />
        </>
    );
}
