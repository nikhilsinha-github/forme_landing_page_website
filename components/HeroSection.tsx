'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2940"
          alt="FORMÉ Activewear"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight"
            >
              Made for
              <span className="block text-caramel">Your Body</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 leading-relaxed"
            >
              Activewear designed specifically for Indian women. Because one size doesn't fit all.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="group bg-caramel hover:bg-warm-brown text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-xl hover:shadow-2xl">
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-espresso px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                Discover Our Story
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm uppercase tracking-wider">Scroll</span>
          <div className="w-0.5 h-12 bg-white/30" />
        </div>
      </motion.div>
    </section>
  );
}
