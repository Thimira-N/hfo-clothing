"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  const footerLinks = {
    'Shop': [
      { name: 'All Products', href: '/shop' },
      { name: 'Men\'s Collection', href: '/men' },
      { name: 'Women\'s Collection', href: '/women' },
      { name: 'Accessories', href: '/accessories' },
      { name: 'New Arrivals', href: '/new-arrivals' },
      { name: 'Sale', href: '/sale' },
    ],
    'Customer Care': [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Size Guide', href: '/size-guide' },
      { name: 'Shipping Info', href: '/shipping' },
      { name: 'Returns', href: '/returns' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Track Order', href: '/track-order' },
    ],
    'Company': [
      { name: 'About HFO', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Press', href: '/press' },
      { name: 'Investors', href: '/investors' },
      { name: 'Affiliates', href: '/affiliates' },
    ],
  };

  return (
    <footer className="bg-midnight-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-antique-gold">Stay in Style</h3>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Subscribe to our newsletter for exclusive offers, new arrivals, and style inspiration.
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
            <Button className="bg-royal-purple hover:bg-royal-purple/90 text-white px-6">
              Subscribe
            </Button>
          </div>
        </motion.div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="text-3xl font-bold mb-4 text-antique-gold">HFO</div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              wear it • own it • live it
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Premium clothing that embodies luxury, comfort, and style for the modern individual.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2 text-gray-400 hover:text-antique-gold">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-gray-400 hover:text-antique-gold">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-gray-400 hover:text-antique-gold">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-gray-400 hover:text-antique-gold">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <h4 className="font-semibold mb-4 text-antique-gold">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
        >
          <p>&copy; 2025 HFO Clothing. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}