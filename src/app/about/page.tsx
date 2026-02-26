'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const pillars = [
    {
        label: 'Conscientious Design',
        description: 'Our design process begins with purpose. We create with consideration for both the wearer and the world they inhabit — prioritising longevity over trends.',
    },
    {
        label: 'Unrivalled Quality',
        description: 'From initial sketch to final stitch, our garments undergo rigorous quality protocols. We source only the finest natural materials from certified mills.',
    },
    {
        label: 'Radical Clarity',
        description: 'We have one price, one version of the truth. No seasonal markdowns, no artificial scarcity. Just genuinely well-made pieces, priced for a lifetime of use.',
    },
];

export default function AboutPage() {
    return (
        <div className="pb-24">
            {/* Hero */}
            <section className="relative overflow-hidden">
                {/* Hero image */}
                <div className="relative h-[60vh] min-h-[400px] w-full">
                    <Image
                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85"
                        alt="LUSSO Atelier — The Architecture of Minimalism"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-[10px] tracking-widest uppercase text-[#c8b89a] font-sans mb-4"
                        >
                            Established 2018
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="font-serif text-4xl sm:text-5xl md:text-7xl uppercase text-white leading-[0.9]"
                        >
                            The Architecture Of<br />
                            <span className="text-[#c8b89a]">Minimalism.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25, duration: 0.6 }}
                            className="mt-6 text-sm text-white/80 font-sans max-w-xl mx-auto leading-relaxed"
                        >
                            Lusso is more than a brand. It is a philosophy rooted in the belief that true luxury resides in minimal quality and the pursuit of the essential.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-8"
                        >
                            <Link
                                href="/women"
                                className="inline-flex h-11 items-center px-8 border border-white/60 text-[10px] tracking-widest uppercase font-sans text-white hover:bg-white hover:text-[#0a0a0a] transition-colors"
                            >
                                Discover Our Promise
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Crafting Purpose */}
            <section className="py-20 px-6 lg:px-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-square overflow-hidden"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=85"
                            alt="Crafting Purpose — Lusso fabric"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </motion.div>
                    <div>
                        <p className="text-[10px] tracking-widest uppercase text-[#c8b89a] font-sans mb-4">The Brand Story</p>
                        <h2 className="font-serif text-3xl uppercase text-[#0a0a0a] mb-6">Crafting Purpose</h2>
                        <p className="text-sm text-[#6b6b6b] font-sans leading-relaxed mb-5">
                            For André in the heart of the modern renaissance, Lusso had emerged from a simple observation: the world is cluttered. Our response was to strip away the noise and return to the tradition of tailoring.
                        </p>
                        <p className="text-sm text-[#6b6b6b] font-sans leading-relaxed mb-8">
                            Each garment we produce undergoes a rigorous journey of refinement. From the initial sketch to the final stitch, it achieves focus on the geometric harmony between fabric and form. We don&apos;t follow trends; we define timeless silhouettes.
                        </p>
                        <blockquote className="border-l-2 border-[#c8b89a] pl-4 mb-6">
                            <p className="font-serif text-sm italic text-[#2a2a2a]">
                                &ldquo;We do not design for a season. We design for a lifetime of confidence and quiet distinction.&rdquo;
                            </p>
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* Rooted in Integrity */}
            <section className="py-20 bg-[#f0ede8]">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
                    <p className="text-[10px] tracking-widest uppercase text-[#c8b89a] font-sans mb-4">The Pillars</p>
                    <h2 className="font-serif text-4xl uppercase text-[#0a0a0a] mb-4">Rooted In Integrity</h2>
                    <p className="text-sm text-[#6b6b6b] font-sans max-w-lg mx-auto mb-16 leading-relaxed">
                        The values that guide every decision we make — from raw materials to the experience of owning a Luminique piece.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {pillars.map((pillar, i) => (
                            <motion.div
                                key={pillar.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12, duration: 0.6 }}
                                className="bg-white p-8 text-left hover:shadow-md transition-shadow"
                            >
                                <div className="w-8 h-8 mb-5 border border-[#c8b89a] flex items-center justify-center">
                                    <span className="text-[#c8b89a] font-serif text-sm">{String(i + 1).padStart(2, '0')}</span>
                                </div>
                                <h3 className="font-serif text-lg text-[#0a0a0a] mb-3 uppercase">{pillar.label}</h3>
                                <p className="text-xs text-[#6b6b6b] font-sans leading-relaxed">{pillar.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20 px-6 lg:px-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Form */}
                    <div>
                        <p className="text-[10px] tracking-widest uppercase text-[#c8b89a] font-sans mb-4">Inquiries</p>
                        <h2 className="font-serif text-4xl uppercase text-[#0a0a0a] mb-8">Get In Touch</h2>
                        <form className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] tracking-widest uppercase font-sans text-[#6b6b6b] mb-2">Full Name</label>
                                    <input type="text" className="w-full border border-[#e8e4de] px-4 py-2.5 text-sm font-sans text-[#0a0a0a] focus:outline-none focus:border-[#0a0a0a] transition-colors bg-transparent" />
                                </div>
                                <div>
                                    <label className="block text-[10px] tracking-widest uppercase font-sans text-[#6b6b6b] mb-2">Email Address</label>
                                    <input type="email" className="w-full border border-[#e8e4de] px-4 py-2.5 text-sm font-sans text-[#0a0a0a] focus:outline-none focus:border-[#0a0a0a] transition-colors bg-transparent" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] tracking-widest uppercase font-sans text-[#6b6b6b] mb-2">Subject</label>
                                <input type="text" className="w-full border border-[#e8e4de] px-4 py-2.5 text-sm font-sans text-[#0a0a0a] focus:outline-none focus:border-[#0a0a0a] transition-colors bg-transparent" placeholder="e.g. Custom Order Enquiry" />
                            </div>
                            <div>
                                <label className="block text-[10px] tracking-widest uppercase font-sans text-[#6b6b6b] mb-2">Your Message</label>
                                <textarea rows={5} className="w-full border border-[#e8e4de] px-4 py-2.5 text-sm font-sans text-[#0a0a0a] focus:outline-none focus:border-[#0a0a0a] transition-colors bg-transparent resize-none" />
                            </div>
                            <button type="submit" className="w-full h-12 bg-[#0a0a0a] text-[#fafafa] text-[10px] tracking-widest uppercase font-sans hover:bg-[#2a2a2a] transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Info + Image */}
                    <div className="space-y-6">
                        {/* Atelier image */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=85"
                                alt="Lusso Atelier — New York"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        <div className="space-y-10">
                            <div>
                                <h3 className="text-[10px] tracking-widest uppercase font-sans text-[#c8b89a] mb-5">Luminique Atelier</h3>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <MapPin size={16} strokeWidth={1.5} className="text-[#c8b89a] mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-[10px] tracking-widest uppercase font-sans text-[#0a0a0a] mb-1">New York</p>
                                            <p className="text-xs text-[#6b6b6b] font-sans leading-relaxed">143 Madison Ave, Suite 400<br />New York, NY 10017</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <MapPin size={16} strokeWidth={1.5} className="text-[#c8b89a] mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-[10px] tracking-widest uppercase font-sans text-[#0a0a0a] mb-1">London</p>
                                            <p className="text-xs text-[#6b6b6b] font-sans leading-relaxed">12 Grosvenor Square, Mayfair<br />London W1K 6JP<br />+44 20 7618 5110</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-[10px] tracking-widest uppercase font-sans text-[#c8b89a] mb-5">Direct Channels</h3>
                                <div className="space-y-3">
                                    <div className="flex gap-3 items-center">
                                        <Phone size={14} strokeWidth={1.5} className="text-[#6b6b6b]" />
                                        <p className="text-xs text-[#6b6b6b] font-sans">Sales: +1 (646) 555-2173</p>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <Mail size={14} strokeWidth={1.5} className="text-[#6b6b6b]" />
                                        <p className="text-xs text-[#6b6b6b] font-sans">Support: +1 (646) N/A M-NON</p>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <Clock size={14} strokeWidth={1.5} className="text-[#6b6b6b]" />
                                        <div>
                                            <p className="text-xs text-[#6b6b6b] font-sans">Online: Monday–Friday 9am–6pm EST</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Bottom Banner */}
            <div className="bg-[#0a0a0a] py-20 px-6 lg:px-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h3 className="font-serif text-4xl text-white uppercase leading-tight">
                            Join The Movement<br />
                            <span className="text-[#c8b89a]">Towards Better Living.</span>
                        </h3>
                    </div>
                    <Link
                        href="/women"
                        className="px-10 py-4 bg-transparent border border-white/40 text-[10px] tracking-widest uppercase font-sans text-white hover:border-white hover:bg-white hover:text-[#0a0a0a] transition-colors whitespace-nowrap"
                    >
                        Shop The Collection
                    </Link>
                </div>
            </div>
        </div >
    );
}
