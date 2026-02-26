import Link from 'next/link';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const footerLinks = {
    shop: [
        { label: "Men's Collection", href: '/men' },
        { label: "Women's Collection", href: '/women' },
        { label: 'Skincare Essentials', href: '/skincare' },
        { label: 'Men\'s New Arrivals', href: '/men#new-arrivals' },
        { label: 'Women\'s New Arrivals', href: '/women#new-arrivals' },
    ],
    support: [
        { label: 'Shipping & Returns', href: '/about' },
        { label: 'Privacy Policy', href: '/about' },
        { label: 'Contact Us', href: '/about#contact' },
        { label: "FAQ's", href: '/about' },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-[#fafafa] border-t border-[#e8e4de] pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <span className="font-serif text-xl tracking-[0.25em] uppercase text-[#0a0a0a]">◇ LUSSO</span>
                        <p className="mt-4 text-xs text-[#6b6b6b] font-sans leading-relaxed max-w-[200px]">
                            Elegance in every stitch. Join our newsletter for exclusive collections and updates.
                        </p>
                        <form className="mt-6 flex">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="flex-1 text-xs font-sans border border-[#e8e4de] bg-transparent px-3 py-2 text-[#0a0a0a] placeholder-[#6b6b6b] focus:outline-none focus:border-[#0a0a0a] transition-colors min-w-0"
                            />
                            <button
                                type="submit"
                                className="bg-[#0a0a0a] text-[#fafafa] px-4 py-2 text-[10px] tracking-widest uppercase font-sans hover:bg-[#2a2a2a] transition-colors whitespace-nowrap"
                            >
                                Join
                            </button>
                        </form>
                    </div>

                    {/* Shop */}
                    <div>
                        <h3 className="text-[10px] tracking-widest uppercase font-sans text-[#0a0a0a] mb-5">Shop</h3>
                        <ul className="space-y-3">
                            {footerLinks.shop.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-xs font-sans text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-[10px] tracking-widest uppercase font-sans text-[#0a0a0a] mb-5">Support</h3>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-xs font-sans text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-[10px] tracking-widest uppercase font-sans text-[#0a0a0a] mb-5">Connect</h3>
                        <div className="flex items-center gap-3">
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="w-8 h-8 border border-[#e8e4de] flex items-center justify-center text-[#6b6b6b] hover:border-[#0a0a0a] hover:text-[#0a0a0a] transition-colors"
                            >
                                <Instagram size={14} strokeWidth={1.5} />
                            </a>
                            <a
                                href="#"
                                aria-label="Twitter"
                                className="w-8 h-8 border border-[#e8e4de] flex items-center justify-center text-[#6b6b6b] hover:border-[#0a0a0a] hover:text-[#0a0a0a] transition-colors"
                            >
                                <Twitter size={14} strokeWidth={1.5} />
                            </a>
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="w-8 h-8 border border-[#e8e4de] flex items-center justify-center text-[#6b6b6b] hover:border-[#0a0a0a] hover:text-[#0a0a0a] transition-colors"
                            >
                                <Facebook size={14} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#e8e4de] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] font-sans text-[#6b6b6b] tracking-wide">
                        © 2024 LUSSO. All rights reserved.
                    </p>
                    <p className="text-[10px] font-sans text-[#6b6b6b] tracking-wide">
                        Crafted with precision. Every stitch intentional.
                    </p>
                </div>
            </div>
        </footer>
    );
}
