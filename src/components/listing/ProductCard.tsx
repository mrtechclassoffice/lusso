'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Product } from '@/lib/data';
import { cn } from '@/lib/utils';

interface ProductCardProps {
    product: Product;
    index?: number;
}

const BADGE_COLORS = {
    new: 'bg-[#0a0a0a] text-[#fafafa]',
    sale: 'bg-[#c8b89a] text-[#0a0a0a]',
    favourite: 'bg-[#fafafa] text-[#0a0a0a] border border-[#0a0a0a]',
};

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: index * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
            className="group"
        >
            <Link href={`/products/${product.slug}`} className="block">
                {/* Image container */}
                <div className="relative overflow-hidden bg-[#f0ede8] aspect-[3/4]">
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Badge */}
                    {product.badge && (
                        <div className="absolute top-3 left-3">
                            <span
                                className={cn(
                                    'text-[9px] tracking-widest uppercase font-sans px-2 py-1',
                                    BADGE_COLORS[product.badge]
                                )}
                            >
                                {product.badge === 'new' ? 'New Arrival' : product.badge === 'sale' ? 'Sale' : 'Favourite'}
                            </span>
                        </div>
                    )}
                    {/* Wishlist */}
                    <button
                        className="absolute top-3 right-3 w-7 h-7 bg-white/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white"
                        aria-label="Add to wishlist"
                        onClick={(e) => e.preventDefault()}
                    >
                        <Heart size={13} strokeWidth={1.5} />
                    </button>
                </div>

                {/* Info */}
                <div className="pt-3 pb-1">
                    <p className="text-[10px] tracking-widest uppercase text-[#6b6b6b] font-sans">{product.subcategory}</p>
                    <h3 className="font-serif text-sm mt-0.5 text-[#0a0a0a] leading-snug group-hover:text-[#c8b89a] transition-colors">
                        {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1.5">
                        <span className="font-sans text-sm text-[#0a0a0a]">${product.price}</span>
                        {product.originalPrice && (
                            <span className="font-sans text-xs text-[#6b6b6b] line-through">${product.originalPrice}</span>
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
