'use client';

import { motion } from 'framer-motion';

export default function NewsletterBanner() {
    return (
        <section className="py-20 px-6 lg:px-10 bg-[#0a0a0a]">
            <div className="max-w-2xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="font-serif text-3xl md:text-4xl text-[#fafafa]"
                >
                    The Lusso Ledger
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-4 text-sm text-[#9ca3af] font-sans leading-relaxed"
                >
                    Subscribe to our editorial series for seasonal lookbooks, technical deep-dives into materials, and notifications for our exclusive limited items.
                </motion.p>
                <motion.form
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
                >
                    <input
                        type="email"
                        placeholder="Email address"
                        className="flex-1 max-w-xs bg-transparent border border-white/20 px-4 py-3 text-sm font-sans text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors"
                    />
                    <button
                        type="submit"
                        className="px-8 py-3 bg-[#c8b89a] text-[#0a0a0a] text-[10px] tracking-widest uppercase font-sans hover:bg-[#d4c4a8] transition-colors whitespace-nowrap"
                    >
                        Subscribe
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
