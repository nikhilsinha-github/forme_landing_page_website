'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const stats = [
  { number: '10,000+', label: 'Happy Customers' },
  { number: '98%', label: 'Perfect Fit Rate' },
  { number: '50+', label: 'Sizes Available' }
];

export default function WhyForme() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2940"
                alt="FORMÉ Community"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-caramel text-white p-8 rounded-2xl shadow-2xl"
            >
              <div className="grid grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="text-caramel font-semibold uppercase tracking-wider text-sm">
                Why FORMÉ?
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-serif font-bold text-espresso leading-tight">
              Designed for <span className="text-caramel">Indian Bodies</span>
            </h2>

            <p className="text-xl text-rich-brown leading-relaxed">
              We studied thousands of Indian women to understand their unique body proportions.
              The result? Activewear that actually fits, supports, and moves with you.
            </p>

            <div className="space-y-4 pt-4">
              {[
                'Wider hip accommodation with strategic seaming',
                'Optimal waist-to-hip ratio for perfect fit',
                'Bust-friendly designs with proper support',
                'Extended coverage for comfort and confidence'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-caramel/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-caramel" />
                  </div>
                  <span className="text-lg text-espresso">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <button className="bg-espresso text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-rich-brown transition-colors duration-300">
                Discover Your Perfect Fit
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
