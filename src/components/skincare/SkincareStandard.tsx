'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const standards = [
    {
        title: 'FULL INGREDIENT COMPLEX',
        description: 'Every formulation targets multiple results with clinically-proven actives, delivering 30 or more measurable outcomes.',
    },
    {
        title: 'THE RITUAL',
        description: 'Each product is designed to integrate seamlessly into a 3-step ritual that elevates daily skincare to a ceremony.',
    },
    {
        title: 'RADICAL CLARITY',
        description: 'No parabens, no mineral oils, no synthetic fragrances. We commit to radical honesty about every ingredient that touches your skin.',
    },
];

export default function SkincareStandard() {
    return (
        <section className="py-24">
            {/* Full-width image + text split */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[4/3] overflow-hidden"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=1000&q=85"
                            alt="The Luminique Standard"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </motion.div>
                    <div>
                        <p className="text-[10px] tracking-widest uppercase text-[#c8b89a] font-sans mb-4">Our Philosophy</p>
                        <h2 className="font-serif text-4xl text-[#0a0a0a] uppercase mb-6">
                            The Luminique<br />Standard
                        </h2>
                        <p className="text-sm text-[#6b6b6b] font-sans leading-relaxed mb-8">
                            The Lusso standard of skincare is rooted in a clear obsession. Potency without compromise. Every ingredient is chosen for a specific purpose — nothing superfluous, nothing hidden. We believe effective skincare should be as transparent as the results it delivers.
                        </p>
                        <div className="space-y-6">
                            {standards.map((s, i) => (
                                <motion.div
                                    key={s.title}
                                    initial={{ opacity: 0, x: -12 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="flex gap-4"
                                >
                                    <CheckCircle className="text-[#c8b89a] mt-0.5 flex-shrink-0" size={16} strokeWidth={1.5} />
                                    <div>
                                        <p className="text-[10px] tracking-widest uppercase font-sans text-[#0a0a0a] mb-1">{s.title}</p>
                                        <p className="text-xs text-[#6b6b6b] font-sans leading-relaxed">{s.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <button className="mt-10 text-[10px] tracking-widest uppercase font-sans underline underline-offset-4 text-[#0a0a0a] hover:text-[#c8b89a] transition-colors">
                            Learn Our Ingredient Ethos →
                        </button>
                    </div>
                </div>

                {/* Personalized care + FAQ stub */}
                <div className="border-t border-[#e8e4de] pt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h3 className="font-serif text-3xl text-[#0a0a0a] uppercase mb-4">Personalised Care</h3>
                        <p className="text-sm text-[#6b6b6b] font-sans leading-relaxed mb-8">
                            Skin is as individual as you are. Take our 3-minute skin profile quiz to receive a curated regimen matched to your type, concerns, and environment.
                        </p>
                        <button className="px-8 py-3 bg-[#0a0a0a] text-[#fafafa] text-[10px] tracking-widest uppercase font-sans hover:bg-[#2a2a2a] transition-colors">
                            Start The Quiz
                        </button>
                        {/* Lifestyle image */}
                        <div className="relative aspect-[4/3] overflow-hidden mt-10">
                            <Image
                                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900&q=85"
                                alt="Lusso Skincare ritual"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-serif text-2xl text-[#0a0a0a] uppercase mb-6">Common Questions</h3>
                        <div className="space-y-3">
                            {[
                                'What skin types are your products suitable for?',
                                'Are all formulas cruelty-free and vegan?',
                                'How long until I see results?',
                                'Do you offer a subscription?',
                            ].map((q) => (
                                <details key={q} className="border-b border-[#e8e4de] pb-3 group">
                                    <summary className="text-xs font-sans text-[#0a0a0a] cursor-pointer flex justify-between items-center">
                                        {q}
                                        <span className="text-[#6b6b6b] group-open:rotate-45 transition-transform">+</span>
                                    </summary>
                                    <p className="pt-3 text-xs text-[#6b6b6b] font-sans leading-relaxed">
                                        Our formulations are dermatologist-tested and designed to be compatible with all skin types, including sensitive skin. We recommend consulting your skincare professional if you have specific concerns.
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom CTA strip */}
            <div className="mt-24 bg-[#0a0a0a] py-20 px-6 lg:px-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <p className="text-[10px] tracking-widest uppercase text-[#c8b89a] font-sans mb-3">The Ritual Digest</p>
                        <h3 className="font-serif text-3xl text-white uppercase leading-tight">
                            Join The Movement<br />Towards Better Living.
                        </h3>
                    </div>
                    <form className="flex gap-3">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="bg-transparent border border-white/20 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50 min-w-[240px]"
                        />
                        <button className="px-8 py-3 bg-[#c8b89a] text-[#0a0a0a] text-[10px] tracking-widest uppercase font-sans hover:bg-[#d4c4a8] transition-colors whitespace-nowrap">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
