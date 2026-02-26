'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { instagramImages } from '@/lib/data';

export default function InstagramStrip() {
    return (
        <section className="py-16 px-6 lg:px-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {instagramImages.map((src, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06, duration: 0.5 }}
                        className="relative aspect-square overflow-hidden group cursor-pointer"
                    >
                        <Image
                            src={src}
                            alt={`Lusso editorial ${i + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 33vw, 17vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
