'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, Grid, List, X } from 'lucide-react';
import { Product, ProductCategory } from '@/lib/data';
import ProductCard from '@/components/listing/ProductCard';
import { cn } from '@/lib/utils';

interface FilterSidebarProps {
    category: ProductCategory;
    products: Product[];
    totalCount: number;
}

const SIZES = ['XS', 'S', 'M', 'L', 'XL'];
const COLORS = [
    { name: 'Black', hex: '#111111' },
    { name: 'White', hex: '#f9fafb' },
    { name: 'Sand', hex: '#d2b48c' },
    { name: 'Navy', hex: '#1e3a5f' },
];
const COLLECTIONS = ['Core Essentials', 'Modern Archive', 'Seasonal'];

interface CollectionPageClientProps {
    title: string;
    subtitle: string;
    category: ProductCategory;
    products: Product[];
    badge?: string;
    quote?: string;
    showFilters?: boolean;
}

export default function CollectionPageClient({
    title,
    subtitle,
    category,
    products,
    badge,
    quote,
    showFilters = true,
}: CollectionPageClientProps) {
    const [filterOpen, setFilterOpen] = useState(false);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [visibleCount, setVisibleCount] = useState(8);

    const toggleSize = (size: string) =>
        setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]));

    const toggleColor = (color: string) =>
        setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]));

    const filtered = products.filter((p) => {
        const sizeOk = selectedSizes.length === 0 || p.sizes.some((s) => selectedSizes.includes(s));
        const colorOk = selectedColors.length === 0 || p.colors.some((c) => selectedColors.includes(c.name));
        return sizeOk && colorOk;
    });

    return (
        <div id="full-collection" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-24">
            {/* Breadcrumb */}
            <div className="py-4 text-[10px] tracking-widest uppercase text-[#6b6b6b] font-sans">
                <span>Home</span>
                <span className="mx-2">/</span>
                <span className="text-[#0a0a0a]">{title.split('\n')[0]}</span>
            </div>

            {/* Title */}
            <div className="pt-6 pb-12">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[10px] tracking-widest uppercase text-[#c8b89a] font-sans mb-3"
                >
                    {badge}
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase text-[#0a0a0a] leading-[0.9]"
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-5 text-sm text-[#6b6b6b] font-sans max-w-md leading-relaxed"
                >
                    {subtitle}
                </motion.p>
            </div>

            {/* Toolbar */}
            <div className="flex items-center justify-between border-t border-b border-[#e8e4de] py-3 mb-8">
                {showFilters ? (
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setFilterOpen(!filterOpen)}
                            className="flex items-center gap-2 text-[10px] tracking-widest uppercase font-sans text-[#0a0a0a] hover:text-[#c8b89a] transition-colors"
                        >
                            <SlidersHorizontal size={14} strokeWidth={1.5} />
                            Filters
                            {(selectedSizes.length + selectedColors.length) > 0 && (
                                <span className="bg-[#0a0a0a] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                                    {selectedSizes.length + selectedColors.length}
                                </span>
                            )}
                        </button>
                        {(selectedSizes.length + selectedColors.length) > 0 && (
                            <button
                                onClick={() => { setSelectedSizes([]); setSelectedColors([]); }}
                                className="flex items-center gap-1 text-[9px] tracking-widest uppercase text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors"
                            >
                                <X size={10} /> Clear
                            </button>
                        )}
                    </div>
                ) : <div />}
                <p className="text-[10px] tracking-wider text-[#6b6b6b] font-sans">{filtered.length} Products</p>
            </div>

            <div className="flex gap-10">
                {/* Filter sidebar */}
                {showFilters && (
                    <AnimatePresence>
                        {filterOpen && (
                            <motion.aside
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: 220 }}
                                exit={{ opacity: 0, width: 0 }}
                                transition={{ duration: 0.3 }}
                                className="hidden md:block flex-shrink-0 overflow-hidden"
                            >
                                <div className="w-[220px] space-y-8">
                                    {/* Size */}
                                    <div>
                                        <h3 className="text-[10px] tracking-widest uppercase font-sans text-[#0a0a0a] mb-4">Size</h3>
                                        <div className="space-y-2">
                                            {SIZES.map((size) => (
                                                <label key={size} className="flex items-center gap-3 cursor-pointer group">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedSizes.includes(size)}
                                                        onChange={() => toggleSize(size)}
                                                        className="w-3 h-3 border border-[#c8b89a] accent-[#0a0a0a]"
                                                    />
                                                    <span className="text-xs font-sans text-[#6b6b6b] group-hover:text-[#0a0a0a] transition-colors">{size}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Color */}
                                    <div>
                                        <h3 className="text-[10px] tracking-widest uppercase font-sans text-[#0a0a0a] mb-4">Colour</h3>
                                        <div className="space-y-2">
                                            {COLORS.map((color) => (
                                                <label key={color.name} className="flex items-center gap-3 cursor-pointer group">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedColors.includes(color.name)}
                                                        onChange={() => toggleColor(color.name)}
                                                        className="w-3 h-3 border border-[#c8b89a] accent-[#0a0a0a]"
                                                    />
                                                    <span
                                                        className="w-3 h-3 rounded-full border border-[#e8e4de] flex-shrink-0"
                                                        style={{ backgroundColor: color.hex }}
                                                    />
                                                    <span className="text-xs font-sans text-[#6b6b6b] group-hover:text-[#0a0a0a] transition-colors">{color.name}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Collection */}
                                    <div>
                                        <h3 className="text-[10px] tracking-widest uppercase font-sans text-[#0a0a0a] mb-4">Collection</h3>
                                        <div className="space-y-2">
                                            {COLLECTIONS.map((col) => (
                                                <label key={col} className="flex items-center gap-3 cursor-pointer group">
                                                    <input type="checkbox" className="w-3 h-3 border border-[#c8b89a] accent-[#0a0a0a]" />
                                                    <span className="text-xs font-sans text-[#6b6b6b] group-hover:text-[#0a0a0a] transition-colors">{col}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.aside>
                        )}
                    </AnimatePresence>
                )}

                {/* Product grid */}
                <div className="flex-1 min-w-0">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                        {filtered.slice(0, visibleCount).map((p, i) => (
                            <ProductCard key={p.id} product={p} index={i} />
                        ))}
                    </div>

                    {/* Load more */}
                    {filtered.length > visibleCount && (
                        <div className="mt-16 text-center">
                            <p className="text-xs text-[#6b6b6b] font-sans mb-6">
                                Showing {Math.min(visibleCount, filtered.length)} of {filtered.length} results
                            </p>
                            <button
                                onClick={() => setVisibleCount((prev) => prev + 6)}
                                className="px-10 py-3 border border-[#0a0a0a] text-[10px] tracking-widest uppercase font-sans text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-colors"
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Quote banner (optional) */}
            {quote && (
                <div className="mt-24 border-t border-[#e8e4de] pt-16 text-center max-w-2xl mx-auto">
                    <p className="text-[10px] tracking-widest uppercase text-[#c8b89a] font-sans mb-6">Sustainable Fabric</p>
                    <blockquote className="font-serif text-xl md:text-2xl italic text-[#2a2a2a] leading-relaxed">
                        &ldquo;{quote}&rdquo;
                    </blockquote>
                    <button className="mt-8 text-[10px] tracking-widest uppercase font-sans text-[#6b6b6b] underline underline-offset-4 hover:text-[#0a0a0a] transition-colors">
                        Read Our Story →
                    </button>
                </div>
            )}
        </div>
    );
}
