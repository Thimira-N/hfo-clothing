import { Product } from './storage';

export const products: Product[] = [
  // Men's Products
  {
    id: 'men-tshirt-001',
    name: 'Premium Cotton T-Shirt',
    price: 49.99,
    originalPrice: 59.99,
    category: 'men',
    subcategory: 'T-Shirts',
    description: 'Luxuriously soft premium cotton t-shirt with perfect fit and superior comfort. Made from 100% organic cotton.',
    images: [
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg',
      'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg'
    ],
    colors: ['Royal Purple', 'Midnight Black', 'White'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    isNew: true,
    isFeatured: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: 'men-shirt-001',
    name: 'Executive Dress Shirt',
    price: 89.99,
    category: 'men',
    subcategory: 'Shirts',
    description: 'Professional dress shirt crafted from premium Egyptian cotton. Perfect for business meetings and formal occasions.',
    images: [
      'https://images.pexels.com/photos/1682699/pexels-photo-1682699.jpeg',
      'https://images.pexels.com/photos/5552790/pexels-photo-5552790.jpeg'
    ],
    colors: ['White', 'Light Blue', 'Royal Purple'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    isFeatured: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'men-pants-001',
    name: 'Tailored Chino Pants',
    price: 79.99,
    category: 'men',
    subcategory: 'Pants',
    description: 'Modern fit chino pants with stretch fabric for all-day comfort. Perfect for casual and semi-formal occasions.',
    images: [
      'https://images.pexels.com/photos/5552791/pexels-photo-5552791.jpeg',
      'https://images.pexels.com/photos/5552792/pexels-photo-5552792.jpeg'
    ],
    colors: ['Navy', 'Khaki', 'Charcoal'],
    sizes: ['28', '30', '32', '34', '36', '38'],
    inStock: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 'men-jacket-001',
    name: 'Premium Leather Jacket',
    price: 299.99,
    originalPrice: 399.99,
    category: 'men',
    subcategory: 'Jackets',
    description: 'Handcrafted genuine leather jacket with timeless design. Perfect for adding sophistication to any outfit.',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      'https://images.pexels.com/photos/1040946/pexels-photo-1040946.jpeg'
    ],
    colors: ['Black', 'Brown'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    isFeatured: true,
    rating: 4.9,
    reviews: 78
  },

  // Women's Products
  {
    id: 'women-dress-001',
    name: 'Elegant Evening Dress',
    price: 149.99,
    category: 'women',
    subcategory: 'Dresses',
    description: 'Stunning evening dress with flowing silhouette and premium fabric. Perfect for special occasions and events.',
    images: [
      'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg',
      'https://images.pexels.com/photos/1055692/pexels-photo-1055692.jpeg'
    ],
    colors: ['Royal Purple', 'Midnight Black', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    isNew: true,
    isFeatured: true,
    rating: 4.8,
    reviews: 203
  },
  {
    id: 'women-blouse-001',
    name: 'Silk Business Blouse',
    price: 79.99,
    category: 'women',
    subcategory: 'Blouses',
    description: 'Professional silk blouse with elegant design. Perfect for business meetings and professional settings.',
    images: [
      'https://images.pexels.com/photos/5552793/pexels-photo-5552793.jpeg',
      'https://images.pexels.com/photos/5552794/pexels-photo-5552794.jpeg'
    ],
    colors: ['White', 'Dusty Mauve', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    rating: 4.7,
    reviews: 167
  },
  {
    id: 'women-skirt-001',
    name: 'A-Line Midi Skirt',
    price: 69.99,
    category: 'women',
    subcategory: 'Skirts',
    description: 'Classic A-line midi skirt with modern twist. Versatile piece that can be dressed up or down.',
    images: [
      'https://images.pexels.com/photos/5552795/pexels-photo-5552795.jpeg',
      'https://images.pexels.com/photos/5552796/pexels-photo-5552796.jpeg'
    ],
    colors: ['Black', 'Navy', 'Dusty Mauve'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    rating: 4.6,
    reviews: 134
  },

  // Accessories
  {
    id: 'acc-watch-001',
    name: 'Luxury Gold Watch',
    price: 199.99,
    originalPrice: 249.99,
    category: 'accessories',
    subcategory: 'Watches',
    description: 'Elegant gold-plated watch with premium leather strap. Perfect accessory for any professional outfit.',
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/277391/pexels-photo-277391.jpeg'
    ],
    colors: ['Gold & Black', 'Gold & Brown'],
    sizes: ['One Size'],
    inStock: true,
    isFeatured: true,
    rating: 4.9,
    reviews: 92
  },
  {
    id: 'acc-bag-001',
    name: 'Premium Leather Handbag',
    price: 179.99,
    category: 'accessories',
    subcategory: 'Bags',
    description: 'Handcrafted leather handbag with spacious interior and elegant design. Perfect for everyday use.',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
      'https://images.pexels.com/photos/1152078/pexels-photo-1152078.jpeg'
    ],
    colors: ['Black', 'Brown', 'Burgundy'],
    sizes: ['One Size'],
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviews: 156
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: 'men' | 'women' | 'accessories'): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery) ||
    product.subcategory.toLowerCase().includes(lowercaseQuery)
  );
};

export const filterProducts = (
  category?: string,
  subcategory?: string,
  priceRange?: [number, number],
  colors?: string[],
  sizes?: string[]
): Product[] => {
  let filtered = [...products];

  if (category) {
    filtered = filtered.filter(product => product.category === category);
  }

  if (subcategory) {
    filtered = filtered.filter(product => product.subcategory === subcategory);
  }

  if (priceRange) {
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
  }

  if (colors && colors.length > 0) {
    filtered = filtered.filter(product => 
      product.colors.some(color => colors.includes(color))
    );
  }

  if (sizes && sizes.length > 0) {
    filtered = filtered.filter(product => 
      product.sizes.some(size => sizes.includes(size))
    );
  }

  return filtered;
};