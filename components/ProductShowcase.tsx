'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Sculpt Leggings',
    price: '₹2,999',
    image: '/product_1.png',
    tag: 'Bestseller'
  },
  {
    id: 2,
    name: 'Power Sports Bra',
    price: '₹1,899',
    image: '/product_2.png',
    tag: 'New'
  },
  {
    id: 3,
    name: 'Flow Tank Top',
    price: '₹1,499',
    image: '/product_3.png',
    tag: null
  },
  {
    id: 4,
    name: 'Comfort Pants',
    price: '₹1,799',
    image: '/product_4.png',
    tag: 'New'
  }
];

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-espresso mb-4">
            Shop The Collection
          </h2>
          <p className="text-xl text-rich-brown max-w-2xl mx-auto">
            Every piece designed to move with you, support you, and celebrate you.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Tag */}
              {product.tag && (
                <div className="absolute top-4 left-4 z-10 bg-caramel text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {product.tag}
                </div>
              )}

              {/* Image */}
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-espresso/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-espresso px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ShoppingBag className="w-5 h-5" />
                    Quick Add
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-espresso mb-2">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-caramel">
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-white text-espresso border-2 border-espresso px-12 py-4 rounded-full font-semibold text-lg hover:bg-caramel hover:border-caramel transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
}
