'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { Product, CartItem, ProductColor } from '@/lib/data';

interface CartContextType {
    items: CartItem[];
    isOpen: boolean;
    addItem: (product: Product, quantity: number, size: string, color: ProductColor) => void;
    removeItem: (productId: string, size: string, colorName: string) => void;
    updateQty: (productId: string, size: string, colorName: string, qty: number) => void;
    clearCart: () => void;
    openCart: () => void;
    closeCart: () => void;
    totalItems: number;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const addItem = useCallback(
        (product: Product, quantity: number, size: string, color: ProductColor) => {
            setItems((prev) => {
                const existing = prev.find(
                    (i) => i.product.id === product.id && i.selectedSize === size && i.selectedColor.name === color.name
                );
                if (existing) {
                    return prev.map((i) =>
                        i.product.id === product.id && i.selectedSize === size && i.selectedColor.name === color.name
                            ? { ...i, quantity: i.quantity + quantity }
                            : i
                    );
                }
                return [...prev, { product, quantity, selectedSize: size, selectedColor: color }];
            });
            setIsOpen(true);
        },
        []
    );

    const removeItem = useCallback((productId: string, size: string, colorName: string) => {
        setItems((prev) =>
            prev.filter(
                (i) => !(i.product.id === productId && i.selectedSize === size && i.selectedColor.name === colorName)
            )
        );
    }, []);

    const updateQty = useCallback(
        (productId: string, size: string, colorName: string, qty: number) => {
            if (qty <= 0) {
                removeItem(productId, size, colorName);
                return;
            }
            setItems((prev) =>
                prev.map((i) =>
                    i.product.id === productId && i.selectedSize === size && i.selectedColor.name === colorName
                        ? { ...i, quantity: qty }
                        : i
                )
            );
        },
        [removeItem]
    );

    const clearCart = useCallback(() => setItems([]), []);
    const openCart = useCallback(() => setIsOpen(true), []);
    const closeCart = useCallback(() => setIsOpen(false), []);

    const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
    const totalPrice = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

    return (
        <CartContext.Provider
            value={{ items, isOpen, addItem, removeItem, updateQty, clearCart, openCart, closeCart, totalItems, totalPrice }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used within CartProvider');
    return ctx;
}
