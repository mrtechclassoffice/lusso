'use client';

import { motion } from 'framer-motion';

export default function QuoteStrip() {
    return (
        <section className="py-20 px-6 lg:px-10 border-y border-[#e8e4de] bg-[#fafafa]">
            <div className="max-w-3xl mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="font-serif text-xl md:text-2xl lg:text-[1.6rem] italic text-[#2a2a2a] leading-relaxed"
                >
                    &ldquo;LUSSO is not merely a brand; it is a philosophy of subtraction. We strip away the noise to reveal the essence of form and function.&rdquo;
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-6 text-[10px] tracking-widest uppercase text-[#c8b89a] font-sans"
                >
                    Our Story
                </motion.p>
            </div>
        </section>
    );
}
