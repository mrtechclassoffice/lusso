'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const categories = [
    {
        label: 'Women',
        href: '/women',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    },
    {
        label: 'Men',
        href: '/men',
        image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80',
    },
    {
        label: 'Skincare',
        href: '/skincare',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80',
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function CategoryGrid() {
    return (
        <section className="py-20 px-6 lg:px-10 max-w-7xl mx-auto">
            <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
            >
                {categories.map((cat) => (
                    <motion.div key={cat.label} variants={itemVariants}>
                        <Link href={cat.href} className="group block relative overflow-hidden aspect-[3/4]">
                            <Image
                                src={cat.image}
                                alt={cat.label}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <p className="font-serif text-2xl text-white tracking-wide">{cat.label}</p>
                                <span className="inline-block mt-2 text-[10px] tracking-widest uppercase text-white/70 group-hover:text-white transition-colors border-b border-white/30 group-hover:border-white pb-px">
                                    Explore →
                                </span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
