'use client';

import { motion } from 'framer-motion';
import { Product } from '@/lib/data';
import ProductCard from '@/components/listing/ProductCard';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface CollectionNewArrivalsProps {
    products: Product[];
    category: string;
}

export default function CollectionNewArrivals({ products, category }: CollectionNewArrivalsProps) {
    const newProducts = products.filter(p => p.badge === 'new').slice(0, 4);

    if (newProducts.length === 0) return null;

    return (
        <section id="new-arrivals" className="pt-10 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-b border-[#e8e4de] mb-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-10">
                <div>
                    <p className="text-[10px] tracking-widest uppercase text-[#c8b89a] font-sans mb-3">Freshly Curated</p>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase text-[#0a0a0a] leading-none">New Arrivals</h2>
                </div>
                <div className="hidden md:block">
                    <p className="text-xs text-[#6b6b6b] font-sans max-w-[200px] leading-relaxed italic">
                        The latest additions to our permanent archive, designed for longevity.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {newProducts.map((product, i) => (
                    <ProductCard key={product.id} product={product} index={i} />
                ))}
            </div>

            <div className="mt-12 flex justify-center lg:justify-end">
                <Link
                    href={`/${category}#full-collection`}
                    className="text-[10px] tracking-widest uppercase font-sans text-[#0a0a0a] flex items-center gap-2 hover:gap-3 transition-all group"
                >
                    Explore Full Collection <ChevronRight size={14} className="text-[#c8b89a] group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </section>
    );
}
