'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
    const { items, isOpen, closeCart, removeItem, updateQty, totalPrice } = useCart();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.aside
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md z-50 bg-[#fafafa] flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-8 py-6 border-b border-[#e8e4de]">
                            <h2 className="font-serif text-xl tracking-wide">Your Bag ({items.length})</h2>
                            <button onClick={closeCart} className="text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors">
                                <X size={20} strokeWidth={1.5} />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                                    <ShoppingBag size={48} strokeWidth={1} className="text-[#c8b89a]" />
                                    <p className="font-serif text-xl text-[#2a2a2a]">Your bag is empty</p>
                                    <p className="text-sm text-[#6b6b6b] font-sans">
                                        Discover our curated collections below.
                                    </p>
                                    <button
                                        onClick={closeCart}
                                        className="mt-4 text-xs tracking-widest uppercase font-sans underline underline-offset-4 hover:text-[#c8b89a] transition-colors"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor.name}`} className="flex gap-4">
                                        <div className="relative w-20 h-24 flex-shrink-0 overflow-hidden bg-[#f0ede8]">
                                            <Image
                                                src={item.product.images[0]}
                                                alt={item.product.name}
                                                fill
                                                className="object-cover"
                                                sizes="80px"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs text-[#6b6b6b] tracking-widest uppercase">{item.product.subcategory}</p>
                                            <h3 className="font-serif text-sm mt-0.5 leading-snug">{item.product.name}</h3>
                                            <div className="flex items-center gap-3 mt-1">
                                                <span className="text-xs text-[#6b6b6b]">{item.selectedColor.name}</span>
                                                <span className="text-[#c8b89a]">·</span>
                                                <span className="text-xs text-[#6b6b6b]">{item.selectedSize}</span>
                                            </div>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center border border-[#e8e4de]">
                                                    <button
                                                        onClick={() => updateQty(item.product.id, item.selectedSize, item.selectedColor.name, item.quantity - 1)}
                                                        className="px-2 py-1 text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors"
                                                    >
                                                        <Minus size={12} />
                                                    </button>
                                                    <span className="px-3 text-sm font-sans">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQty(item.product.id, item.selectedSize, item.selectedColor.name, item.quantity + 1)}
                                                        className="px-2 py-1 text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors"
                                                    >
                                                        <Plus size={12} />
                                                    </button>
                                                </div>
                                                <span className="font-serif text-sm">${(item.product.price * item.quantity).toLocaleString()}</span>
                                            </div>
                                            <button
                                                onClick={() => removeItem(item.product.id, item.selectedSize, item.selectedColor.name)}
                                                className="mt-2 text-[10px] tracking-widest uppercase text-[#6b6b6b] hover:text-red-500 transition-colors underline underline-offset-2"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="border-t border-[#e8e4de] px-8 py-6 space-y-4">
                                <div className="flex justify-between items-center">
                                    <p className="text-sm font-sans text-[#6b6b6b]">Subtotal (excl. duties & taxes)</p>
                                    <p className="font-serif text-lg">${totalPrice.toLocaleString()}</p>
                                </div>
                                <Link
                                    href="/checkout"
                                    onClick={closeCart}
                                    className="block w-full bg-[#0a0a0a] text-[#fafafa] text-center py-4 text-xs tracking-widest uppercase font-sans hover:bg-[#2a2a2a] transition-colors"
                                >
                                    Proceed to Checkout
                                </Link>
                                <button
                                    onClick={closeCart}
                                    className="block w-full text-center text-xs tracking-widest uppercase font-sans text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        )}
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}
