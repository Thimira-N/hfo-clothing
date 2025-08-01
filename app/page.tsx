'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Truck, Shield, Headphones, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/product-card';
import { getFeaturedProducts, getNewProducts } from '@/lib/products';

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const newProducts = getNewProducts();

  const categories = [
    {
      name: 'Men\'s Collection',
      href: '/men',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      description: 'Sophisticated styles for the modern gentleman'
    },
    {
      name: 'Women\'s Collection',
      href: '/women',
      image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg',
      description: 'Elegant designs for the confident woman'
    },
    {
      name: 'Accessories',
      href: '/accessories',
      image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      description: 'Complete your look with premium accessories'
    }
  ];

  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free shipping on orders over $100'
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: '100% secure payment processing'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated customer support team'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
      alt="Fashion Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
    <div className="animate-fade-in-up">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
        wear it
        <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
          own it
        </span>
        live it
      </h1>
      
      <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
        Discover premium clothing that embodies luxury, comfort, and style for the modern individual.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="group bg-white text-zinc-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 hover:scale-105">
          <span>Shop Collection</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
        
        <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-zinc-900 transition-all duration-300 flex items-center space-x-2">
          <Play size={20} className="group-hover:scale-110 transition-transform" />
          <span>Watch Story</span>
        </button>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-1 h-12 bg-white/50 rounded-full">
        <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>

  {/* Floating Elements */}
  <div className="absolute top-1/4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-70"></div>
  <div className="absolute top-1/3 right-8 w-3 h-3 bg-white rounded-full animate-pulse opacity-50"></div>
  <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-pulse opacity-60"></div>
</section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-royal-purple text-white">Featured</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Curated Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium pieces that define modern luxury.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link href="/shop">
              <Button size="lg" className="bg-royal-purple hover:bg-royal-purple/90 text-white">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our carefully crafted collections designed for every style and occasion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={category.href} className="group block">
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-4">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                        <p className="text-gray-200 mb-4">{category.description}</p>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                          Shop Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-antique-gold text-white">New Arrivals</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Latest Additions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Be the first to discover our newest pieces crafted with exceptional attention to detail.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-midnight-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-royal-purple rounded-full mb-6">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-antique-gold">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-royal-purple to-dusty-mauve text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Stay in the Loop
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive offers, style tips, and early access to new collections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <Button className="bg-antique-gold hover:bg-antique-gold/90 text-midnight-black font-semibold px-8">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}