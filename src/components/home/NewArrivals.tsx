'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/listing/ProductCard';
import { getFeaturedProducts } from '@/lib/data';

export default function NewArrivals() {
    const products = getFeaturedProducts();

    return (
        <section className="py-20 px-6 lg:px-10 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-end justify-between mb-10">
                <div>
                    <p className="text-[10px] tracking-widest uppercase text-[#c8b89a] font-sans mb-2">The Latest</p>
                    <h2 className="font-serif text-4xl text-[#0a0a0a]">New Arrivals</h2>
                </div>
                <Link
                    href="/men"
                    className="hidden md:flex items-center gap-1 text-[10px] tracking-widest uppercase font-sans text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors"
                >
                    View Full Collection <ChevronRight size={12} />
                </Link>
            </div>

            {/* Product grid */}
            <motion.div
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {products.map((p, i) => (
                    <ProductCard key={p.id} product={p} index={i} />
                ))}
            </motion.div>

            <div className="mt-8 md:hidden text-center">
                <Link
                    href="/men"
                    className="text-[10px] tracking-widest uppercase font-sans text-[#6b6b6b] underline underline-offset-4 hover:text-[#0a0a0a] transition-colors"
                >
                    View Full Collection
                </Link>
            </div>
        </section>
    );
}
