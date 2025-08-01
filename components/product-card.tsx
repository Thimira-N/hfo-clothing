'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/lib/storage';
import { storage } from '@/lib/storage';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(storage.isInWishlist(product.id));
  const [imageIndex, setImageIndex] = useState(0);

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      storage.removeFromWishlist(product.id);
    } else {
      storage.addToWishlist(product.id);
    }
    setIsWishlisted(!isWishlisted);
  };

  const handleQuickAdd = () => {
    // Add first available size and color to cart
    if (product.colors.length > 0 && product.sizes.length > 0) {
      storage.addToCart(product, product.colors[0], product.sizes[0], 1);
      // Could show a toast notification here
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden product-card"
    >
      {/* Product Image */}
      <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.images[imageIndex]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-royal-purple text-white">New</Badge>
          )}
          {product.originalPrice && (
            <Badge variant="destructive">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="sm"
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 ${
            isWishlisted 
              ? 'bg-red-500 text-white hover:bg-red-600' 
              : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
          }`}
          onClick={handleWishlistToggle}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </Button>

        {/* Quick Actions - Show on Hover */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            className="flex-1 bg-royal-purple hover:bg-royal-purple/90 text-white"
            onClick={handleQuickAdd}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
          <Link href={`/product/${product.id}`}>
            <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white">
              <Eye className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Image Navigation Dots */}
        {product.images.length > 1 && (
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {product.images.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === imageIndex ? 'bg-royal-purple' : 'bg-white/60'
                }`}
                onClick={() => setImageIndex(idx)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <p className="text-xs text-gray-500 uppercase tracking-wide">
            {product.category} • {product.subcategory}
          </p>
        </div>

        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-royal-purple transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Available Colors */}
        <div className="flex items-center gap-1 mt-3">
          <span className="text-xs text-gray-500 mr-2">Colors:</span>
          {product.colors.slice(0, 4).map((color, idx) => (
            <div
              key={idx}
              className={`w-4 h-4 rounded-full border border-gray-300 ${
                color === 'White' ? 'bg-white' :
                color === 'Black' || color === 'Midnight Black' ? 'bg-black' :
                color === 'Royal Purple' ? 'bg-purple-600' :
                color === 'Navy' ? 'bg-blue-900' :
                color === 'Dusty Mauve' ? 'bg-purple-300' :
                color === 'Brown' ? 'bg-amber-800' :
                color === 'Khaki' ? 'bg-yellow-600' :
                color === 'Charcoal' ? 'bg-gray-600' :
                'bg-gray-400'
              }`}
              title={color}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-xs text-gray-500">+{product.colors.length - 4}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}