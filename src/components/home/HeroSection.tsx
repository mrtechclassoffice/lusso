'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=85';

const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    }),
};

const words = ['ELEGANCE', 'DEFINED.'];

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-[#fafafa]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(90vh-64px)]">
                    {/* Text side */}
                    <div className="flex flex-col justify-center py-10 sm:py-16 lg:py-0 pr-0 lg:pr-16 order-2 lg:order-1">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-[10px] tracking-[0.35em] uppercase text-[#c8b89a] font-sans mb-6"
                        >
                            Autumn / Winter 2024
                        </motion.p>

                        <h1 className="font-serif text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.9] tracking-tight uppercase text-[#0a0a0a]">
                            {words.map((word, i) => (
                                <motion.span
                                    key={word}
                                    custom={i}
                                    variants={wordVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="block"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55, duration: 0.6 }}
                            className="mt-8 text-sm font-sans text-[#6b6b6b] max-w-xs leading-relaxed"
                        >
                            A curation of timeless pieces designed for the modern and architectural wardrobe. Exclusively pure, every stitch.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="mt-10 flex flex-wrap gap-4"
                        >
                            <Link
                                href="/women"
                                className="inline-flex h-11 items-center px-8 bg-[#0a0a0a] text-[#fafafa] text-[10px] tracking-widest uppercase font-sans hover:bg-[#2a2a2a] transition-colors"
                            >
                                Shop Women
                            </Link>
                            <Link
                                href="/men"
                                className="inline-flex h-11 items-center px-8 bg-transparent border border-[#0a0a0a] text-[#0a0a0a] text-[10px] tracking-widest uppercase font-sans hover:bg-[#0a0a0a] hover:text-[#fafafa] transition-colors"
                            >
                                Shop Men
                            </Link>
                        </motion.div>
                    </div>

                    {/* Image side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
                        className="relative order-1 lg:order-2 h-[50vw] lg:h-full min-h-[320px]"
                    >
                        <Image
                            src={HERO_IMAGE}
                            alt="Lusso AW24 Campaign — Elegance Defined"
                            fill
                            className="object-cover object-top"
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
