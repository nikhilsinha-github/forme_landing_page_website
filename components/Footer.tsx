'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sand text-espresso">
      {/* Newsletter Section - Minimalist */}
      <div className="border-b border-espresso/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-espresso mb-2">
                Stay Connected
              </h3>
              <p className="text-rich-brown">
                Get 10% off your first order. Plus exclusive updates and early access to new drops.
              </p>
            </div>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-white border-2 border-espresso/20 focus:border-caramel rounded-lg focus:outline-none transition-colors text-espresso placeholder:text-espresso/50"
              />
              <button className="bg-espresso text-white px-8 py-4 rounded-lg font-semibold hover:bg-caramel transition-colors whitespace-nowrap">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          {/* Shop Column */}
          <div>
            <h4 className="font-bold text-espresso mb-4 uppercase text-sm tracking-wider">Shop</h4>
            <ul className="space-y-3">
              {['New Arrivals', 'Leggings', 'Sports Bras', 'Tops', 'Shorts', 'Sale'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-rich-brown hover:text-caramel transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h4 className="font-bold text-espresso mb-4 uppercase text-sm tracking-wider">About</h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-rich-brown hover:text-caramel transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="font-bold text-espresso mb-4 uppercase text-sm tracking-wider">Help</h4>
            <ul className="space-y-3">
              {['Contact Us', 'Size Guide', 'Shipping & Returns', 'FAQs', 'Track Order'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-rich-brown hover:text-caramel transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column - Spans 3 columns on large screens */}
          <div className="col-span-2 md:col-span-1 lg:col-span-3">
            <h4 className="font-bold text-espresso mb-4 uppercase text-sm tracking-wider">Connect With Us</h4>
            <p className="text-rich-brown text-sm mb-6 max-w-sm">
              Join our community of strong, confident women. Follow us for daily inspiration, workout tips, and exclusive content.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mb-6">
              <a
                href="https://instagram.com/forme.lifestyle"
                className="w-12 h-12 rounded-full bg-espresso text-white hover:bg-caramel flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-espresso text-white hover:bg-caramel flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-espresso text-white hover:bg-caramel flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Contact Email */}
            <a
              href="mailto:forme.lifestyle@gmail.com"
              className="flex items-center gap-2 text-rich-brown hover:text-caramel transition-colors text-sm group"
            >
              <Mail className="w-4 h-4" />
              <span className="group-hover:underline">forme.lifestyle@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-espresso/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-rich-brown">
              <a href="#" className="hover:text-caramel transition-colors">
                Privacy Policy
              </a>
              <span className="text-espresso/30">|</span>
              <a href="#" className="hover:text-caramel transition-colors">
                Terms & Conditions
              </a>
              <span className="text-espresso/30">|</span>
              <a href="#" className="hover:text-caramel transition-colors">
                Cookie Policy
              </a>
            </div>
            <p className="text-sm text-rich-brown">
              © 2024 FORMÉ. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Trust Badges / Payment Methods - Optional */}
      <div className="bg-cream border-t border-espresso/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-rich-brown/70">
            <span>✓ Secure Payments</span>
            <span>✓ Free Shipping over ₹1999</span>
            <span>✓ 30-Day Easy Returns</span>
            <span>✓ Made in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
