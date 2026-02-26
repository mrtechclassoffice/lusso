'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, Minus, Plus, ShieldCheck, RotateCcw, ChevronRight, Check } from 'lucide-react';
import { Product, getRelatedProducts } from '@/lib/data';
import ProductCard from '@/components/listing/ProductCard';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export default function ProductDetailClient({ product }: { product: Product }) {
    const [activeImage, setActiveImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState(product.sizes[2] ?? product.sizes[0]);
    const [selectedColor, setSelectedColor] = useState(product.colors[0] ?? { name: 'Default', hex: '#0a0a0a' });
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);
    const { addItem } = useCart();

    const related = getRelatedProducts(product, 4);

    const handleAddToCart = () => {
        addItem(product, quantity, selectedSize, selectedColor);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    const avgRating = product.reviews.reduce((s, r) => s + r.rating, 0) / Math.max(product.reviews.length, 1);

    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
            {/* Breadcrumb */}
            <nav className="py-4 flex items-center gap-2 text-[10px] tracking-widest uppercase text-[#6b6b6b] font-sans">
                <Link href="/" className="hover:text-[#0a0a0a] transition-colors">Home</Link>
                <ChevronRight size={10} />
                <Link href={`/${product.category}`} className="hover:text-[#0a0a0a] transition-colors capitalize">{product.subcategory}</Link>
                <ChevronRight size={10} />
                <span className="text-[#0a0a0a]">{product.name}</span>
            </nav>

            {/* Main grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_380px] gap-6 lg:gap-10">
                {/* Thumbnails */}
                <div className="hidden lg:flex flex-col gap-2 w-[72px]">
                    {product.images.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveImage(i)}
                            className={cn(
                                'relative w-[72px] h-[90px] overflow-hidden border transition-all duration-200',
                                activeImage === i ? 'border-[#0a0a0a]' : 'border-transparent opacity-60 hover:opacity-100'
                            )}
                        >
                            <Image src={img} alt={`${product.name} view ${i + 1}`} fill className="object-cover" sizes="72px" />
                        </button>
                    ))}
                </div>

                {/* Main image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#f0ede8]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={product.images[activeImage]}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Mobile thumbnail strip */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 lg:hidden">
                        {product.images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveImage(i)}
                                className={cn('w-1.5 h-1.5 rounded-full transition-colors', activeImage === i ? 'bg-[#0a0a0a]' : 'bg-[#0a0a0a]/30')}
                            />
                        ))}
                    </div>
                </div>

                {/* Product info */}
                <div className="flex flex-col">
                    {/* Stars + reviews */}
                    <div className="flex items-center gap-2 mb-2">
                        <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star
                                    key={s}
                                    size={12}
                                    className={s <= Math.round(product.rating) ? 'fill-[#0a0a0a] text-[#0a0a0a]' : 'text-[#e8e4de]'}
                                    fill={s <= Math.round(product.rating) ? '#0a0a0a' : 'none'}
                                />
                            ))}
                        </div>
                        <span className="text-[10px] text-[#6b6b6b] font-sans">{product.reviewCount} Reviews</span>
                    </div>

                    <h1 className="font-serif text-3xl text-[#0a0a0a] leading-snug">{product.name}</h1>
                    <p className="mt-3 font-serif text-2xl text-[#0a0a0a]">${product.price.toFixed(2)}</p>

                    {/* Color */}
                    {product.colors.length > 0 && (
                        <div className="mt-6">
                            <p className="text-[10px] tracking-widest uppercase font-sans text-[#0a0a0a] mb-3">
                                Colour — <span className="text-[#6b6b6b]">{selectedColor.name}</span>
                            </p>
                            <div className="flex gap-2">
                                {product.colors.map((color) => (
                                    <button
                                        key={color.name}
                                        onClick={() => setSelectedColor(color)}
                                        title={color.name}
                                        className={cn(
                                            'w-7 h-7 rounded-full border-2 transition-all',
                                            selectedColor.name === color.name ? 'border-[#0a0a0a] scale-110' : 'border-transparent hover:border-[#6b6b6b]'
                                        )}
                                        style={{ backgroundColor: color.hex, outline: '1px solid #e8e4de', outlineOffset: '2px' }}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Size */}
                    {product.sizes.length > 1 && (
                        <div className="mt-6">
                            <div className="flex justify-between items-center mb-3">
                                <p className="text-[10px] tracking-widest uppercase font-sans text-[#0a0a0a]">Size</p>
                                <button className="text-[10px] tracking-widest uppercase font-sans text-[#6b6b6b] underline underline-offset-2 hover:text-[#0a0a0a] transition-colors">
                                    Size Guide
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={cn(
                                            'min-w-[44px] h-10 px-3 text-xs font-sans border transition-all',
                                            selectedSize === size
                                                ? 'border-[#0a0a0a] bg-[#0a0a0a] text-[#fafafa]'
                                                : 'border-[#e8e4de] text-[#6b6b6b] hover:border-[#0a0a0a] hover:text-[#0a0a0a]'
                                        )}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Quantity */}
                    <div className="mt-6">
                        <p className="text-[10px] tracking-widest uppercase font-sans text-[#0a0a0a] mb-3">Quantity</p>
                        <div className="inline-flex items-center border border-[#e8e4de]">
                            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="w-10 h-10 flex items-center justify-center text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors">
                                <Minus size={14} strokeWidth={1.5} />
                            </button>
                            <span className="w-12 text-center font-sans text-sm">{quantity}</span>
                            <button onClick={() => setQuantity((q) => q + 1)} className="w-10 h-10 flex items-center justify-center text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors">
                                <Plus size={14} strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>

                    {/* Add to cart */}
                    <div className="mt-6 flex gap-3">
                        <button
                            onClick={handleAddToCart}
                            className={cn(
                                'flex-1 h-12 flex items-center justify-center gap-2 text-[10px] tracking-widest uppercase font-sans transition-all duration-300',
                                added
                                    ? 'bg-[#c8b89a] text-[#0a0a0a]'
                                    : 'bg-[#0a0a0a] text-[#fafafa] hover:bg-[#2a2a2a]'
                            )}
                        >
                            {added ? <><Check size={14} /> Added to Bag</> : 'Add to Cart'}
                        </button>
                        <button className="w-12 h-12 border border-[#e8e4de] flex items-center justify-center text-[#6b6b6b] hover:border-[#0a0a0a] hover:text-[#0a0a0a] transition-all">
                            <Heart size={16} strokeWidth={1.5} />
                        </button>
                    </div>

                    {/* Trust badges */}
                    <div className="mt-6 flex gap-6 border border-[#e8e4de] p-4">
                        <div className="flex items-start gap-3 flex-1">
                            <ShieldCheck size={18} strokeWidth={1.2} className="text-[#c8b89a] mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="text-[9px] tracking-widest uppercase font-sans text-[#0a0a0a]">Complimentary</p>
                                <p className="text-[10px] font-sans text-[#6b6b6b]">Standard shipping on all orders</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 flex-1">
                            <RotateCcw size={18} strokeWidth={1.2} className="text-[#c8b89a] mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="text-[9px] tracking-widest uppercase font-sans text-[#0a0a0a]">30-Day Returns</p>
                                <p className="text-[10px] font-sans text-[#6b6b6b]">Free and easy returns policy</p>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mt-8 border-t border-[#e8e4de] pt-6">
                        <p className="text-[10px] tracking-widest uppercase font-sans text-[#0a0a0a] mb-3">The Narrative</p>
                        <p className="text-sm text-[#6b6b6b] font-sans leading-relaxed">{product.description}</p>
                    </div>

                    {/* Specs */}
                    {product.specs.length > 0 && (
                        <div className="mt-6 border-t border-[#e8e4de] pt-6">
                            <p className="text-[10px] tracking-widest uppercase font-sans text-[#0a0a0a] mb-4">Specifications</p>
                            <dl className="grid grid-cols-2 gap-x-8 gap-y-3">
                                {product.specs.map((spec) => (
                                    <div key={spec.label}>
                                        <dt className="text-[10px] text-[#c8b89a] uppercase tracking-widest font-sans">{spec.label}</dt>
                                        <dd className="mt-0.5 text-xs text-[#6b6b6b] font-sans">{spec.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    )}
                </div>
            </div>

            {/* Reviews */}
            {product.reviews.length > 0 && (
                <section className="mt-24 border-t border-[#e8e4de] pt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12">
                        {/* Aggregate */}
                        <div className="bg-[#f0ede8] p-8 flex flex-col items-center justify-center text-center">
                            <p className="font-serif text-5xl text-[#0a0a0a]">{product.rating}</p>
                            <p className="text-xs text-[#6b6b6b] font-sans mt-1">/ 5.0</p>
                            <div className="flex gap-1 mt-3">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} size={14} fill={s <= Math.round(product.rating) ? '#0a0a0a' : 'none'} className={s <= Math.round(product.rating) ? 'text-[#0a0a0a]' : 'text-[#e8e4de]'} />
                                ))}
                            </div>
                            <p className="text-[10px] tracking-widest uppercase font-sans text-[#6b6b6b] mt-3">
                                Based on {product.reviewCount} verified international purchases
                            </p>
                            <button className="mt-6 text-[10px] tracking-widest uppercase font-sans border border-[#0a0a0a] px-6 py-2 hover:bg-[#0a0a0a] hover:text-white transition-colors">
                                Write a Review
                            </button>
                        </div>

                        {/* Review list */}
                        <div className="space-y-8">
                            <h2 className="font-serif text-2xl text-[#0a0a0a]">Client Feedback</h2>
                            {product.reviews.map((review) => (
                                <div key={review.id} className="border-b border-[#e8e4de] pb-8">
                                    <div className="flex items-start gap-4">
                                        <Image
                                            src={review.avatar}
                                            alt={review.author}
                                            width={40}
                                            height={40}
                                            className="rounded-full"
                                        />
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <p className="text-sm font-sans font-semibold text-[#0a0a0a]">{review.author}</p>
                                                    <p className="text-[10px] text-[#6b6b6b] font-sans">{review.date}</p>
                                                </div>
                                                <div className="flex gap-0.5">
                                                    {[1, 2, 3, 4, 5].map((s) => (
                                                        <Star key={s} size={11} fill={s <= review.rating ? '#0a0a0a' : 'none'} className={s <= review.rating ? 'text-[#0a0a0a]' : 'text-[#e8e4de]'} />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="mt-3 text-sm text-[#2a2a2a] font-sans leading-relaxed">&ldquo;{review.body}&rdquo;</p>
                                            {review.verified && (
                                                <div className="mt-2 flex items-center gap-1.5">
                                                    <Check size={10} className="text-[#c8b89a]" />
                                                    <span className="text-[9px] tracking-widest uppercase font-sans text-[#c8b89a]">Verified Purchase</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Related products */}
            {related.length > 0 && (
                <section className="mt-24 border-t border-[#e8e4de] pt-16">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <p className="text-[10px] tracking-widest uppercase text-[#c8b89a] font-sans mb-2">Curate</p>
                            <h2 className="font-serif text-3xl text-[#0a0a0a]">You May Also Like</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                        {related.map((p, i) => (
                            <ProductCard key={p.id} product={p} index={i} />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
