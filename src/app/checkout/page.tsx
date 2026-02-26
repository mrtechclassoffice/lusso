'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Truck } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

export default function CheckoutPage() {
    const { items, totalPrice, clearCart } = useCart();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 pb-24">
            <div className="mb-10">
                <Link href="/" className="flex items-center gap-2 text-[10px] tracking-widest uppercase font-sans text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors">
                    <ArrowLeft size={12} /> Continue Shopping
                </Link>
                <h1 className="font-serif text-4xl mt-6 text-[#0a0a0a] uppercase">Checkout</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-16">
                {/* Form */}
                <div className="space-y-10">
                    {/* Contact */}
                    <section>
                        <h2 className="font-serif text-xl text-[#0a0a0a] mb-6 pb-4 border-b border-[#e8e4de]">Contact Information</h2>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] tracking-widest uppercase font-sans text-[#6b6b6b] mb-2">First Name</label>
                                    <input type="text" className="w-full border border-[#e8e4de] px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#0a0a0a] transition-colors bg-transparent" />
                                </div>
                                <div>
                                    <label className="block text-[10px] tracking-widest uppercase font-sans text-[#6b6b6b] mb-2">Last Name</label>
                                    <input type="text" className="w-full border border-[#e8e4de] px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#0a0a0a] transition-colors bg-transparent" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] tracking-widest uppercase font-sans text-[#6b6b6b] mb-2">Email</label>
                                <input type="email" className="w-full border border-[#e8e4de] px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#0a0a0a] transition-colors bg-transparent" />
                            </div>
                        </div>
                    </section>

                    {/* Shipping */}
                    <section>
                        <h2 className="font-serif text-xl text-[#0a0a0a] mb-6 pb-4 border-b border-[#e8e4de]">Shipping Address</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-[10px] tracking-widest uppercase font-sans text-[#6b6b6b] mb-2">Address Line 1</label>
                                <input type="text" className="w-full border border-[#e8e4de] px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#0a0a0a] transition-colors bg-transparent" />
                            </div>
                            <div>
                                <label className="block text-[10px] tracking-widest uppercase font-sans text-[#6b6b6b] mb-2">Address Line 2 (Optional)</label>
                                <input type="text" className="w-full border border-[#e8e4de] px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#0a0a0a] transition-colors bg-transparent" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="col-span-2">
                                    <label className="block text-[10px] tracking-widest uppercase font-sans text-[#6b6b6b] mb-2">City</label>
                                    <input type="text" className="w-full border border-[#e8e4de] px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#0a0a0a] transition-colors bg-transparent" />
                                </div>
                                <div>
                                    <label className="block text-[10px] tracking-widest uppercase font-sans text-[#6b6b6b] mb-2">ZIP / Post</label>
                                    <input type="text" className="w-full border border-[#e8e4de] px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#0a0a0a] transition-colors bg-transparent" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] tracking-widest uppercase font-sans text-[#6b6b6b] mb-2">Country</label>
                                <select className="w-full border border-[#e8e4de] px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#0a0a0a] transition-colors bg-transparent text-[#6b6b6b]">
                                    <option>United States</option>
                                    <option>United Kingdom</option>
                                    <option>France</option>
                                    <option>Italy</option>
                                    <option>Australia</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* Payment stub */}
                    <section>
                        <h2 className="font-serif text-xl text-[#0a0a0a] mb-6 pb-4 border-b border-[#e8e4de]">Payment</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-[10px] tracking-widest uppercase font-sans text-[#6b6b6b] mb-2">Card Number</label>
                                <input type="text" placeholder="1234 5678 9012 3456" className="w-full border border-[#e8e4de] px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#0a0a0a] transition-colors bg-transparent" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] tracking-widest uppercase font-sans text-[#6b6b6b] mb-2">Expiry (MM/YY)</label>
                                    <input type="text" placeholder="MM / YY" className="w-full border border-[#e8e4de] px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#0a0a0a] transition-colors bg-transparent" />
                                </div>
                                <div>
                                    <label className="block text-[10px] tracking-widest uppercase font-sans text-[#6b6b6b] mb-2">CVV</label>
                                    <input type="text" placeholder="• • •" className="w-full border border-[#e8e4de] px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#0a0a0a] transition-colors bg-transparent" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <button
                        onClick={clearCart}
                        className="w-full h-14 bg-[#0a0a0a] text-[#fafafa] text-[10px] tracking-widest uppercase font-sans hover:bg-[#2a2a2a] transition-colors"
                    >
                        Complete Purchase — {formatPrice(totalPrice + 15)}
                    </button>
                    <div className="flex items-center justify-center gap-2 text-[10px] font-sans text-[#6b6b6b] text-center">
                        <ShieldCheck size={12} className="text-[#c8b89a] flex-shrink-0" />
                        256-bit SSL Encrypted. Your data is protected.
                    </div>
                </div>

                {/* Order summary */}
                <div className="lg:sticky lg:top-24 h-fit">
                    <h2 className="font-serif text-xl text-[#0a0a0a] mb-6 pb-4 border-b border-[#e8e4de]">Order Summary</h2>

                    {items.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-sm text-[#6b6b6b] font-sans mb-4">Your cart is empty.</p>
                            <Link href="/men" className="text-[10px] tracking-widest uppercase font-sans underline hover:text-[#c8b89a] transition-colors">
                                Shop Now
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-5 mb-8">
                            {items.map((item) => (
                                <div key={`${item.product.id}-${item.selectedSize}`} className="flex gap-4">
                                    <div className="relative w-16 h-20 flex-shrink-0 overflow-hidden bg-[#f0ede8]">
                                        <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" sizes="64px" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-sans font-medium text-[#0a0a0a] leading-snug">{item.product.name}</p>
                                        <p className="text-[10px] text-[#6b6b6b] font-sans mt-1">{item.selectedSize} · {item.selectedColor.name} · Qty {item.quantity}</p>
                                        <p className="mt-1 font-serif text-sm">{formatPrice(item.product.price * item.quantity)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="border-t border-[#e8e4de] pt-4 space-y-3">
                        <div className="flex justify-between text-sm font-sans">
                            <span className="text-[#6b6b6b]">Subtotal</span>
                            <span>{formatPrice(totalPrice)}</span>
                        </div>
                        <div className="flex justify-between text-sm font-sans">
                            <div className="flex items-center gap-1.5">
                                <Truck size={12} className="text-[#c8b89a]" />
                                <span className="text-[#6b6b6b]">Shipping</span>
                            </div>
                            <span>{formatPrice(15)}</span>
                        </div>
                        <div className="flex justify-between border-t border-[#e8e4de] pt-3">
                            <span className="font-serif text-base">Total</span>
                            <span className="font-serif text-base">{formatPrice(totalPrice + 15)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
