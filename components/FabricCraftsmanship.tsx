'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: '4-Way Stretch',
    description: 'Moves with you in every direction',
    icon: '↔'
  },
  {
    title: 'Moisture Wicking',
    description: 'Keeps you dry and comfortable',
    icon: '💧'
  },
  {
    title: 'Sustainable',
    description: 'Eco-friendly bamboo & cotton blend',
    icon: '🌱'
  },
  {
    title: 'Anti-Odor',
    description: 'Fresh all day long',
    icon: '✨'
  }
];

export default function FabricCraftsmanship() {
  return (
    <section className="py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-caramel font-semibold uppercase tracking-wider text-sm">
                Premium Materials
              </span>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-espresso mt-4 leading-tight">
                Fabric That Works As Hard As You Do
              </h2>
            </div>

            <p className="text-xl text-rich-brown leading-relaxed">
              We source the finest sustainable materials and engineer them for peak performance.
              Every thread is chosen for comfort, durability, and environmental responsibility.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-espresso mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-rich-brown">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[700px] rounded-3xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2874"
              alt="Fabric Detail"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
