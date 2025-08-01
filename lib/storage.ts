export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'men' | 'women' | 'accessories';
  subcategory: string;
  description: string;
  images: string[];
  colors: string[];
  sizes: string[];
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
  image: string;
  inStock: boolean;
}

export interface Cart {
  id: string;
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  lastUpdated: string;
}

export interface User {
  id: string;
  profile: {
    email: string;
    firstName: string;
    lastName: string;
    preferences: {
      newsletter: boolean;
      smsUpdates: boolean;
      preferredCategories: string[];
    };
  };
  wishlist: string[];
  recentlyViewed: string[];
  orderHistory: any[];
  addresses: any[];
}

class StorageManager {
  private getStorageKey(key: string): string {
    return `hfo_${key}`;
  }

  private getItem<T>(key: string): T | null {
    if (typeof window === 'undefined') return null;
    
    try {
      const item = localStorage.getItem(this.getStorageKey(key));
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error reading from localStorage:`, error);
      return null;
    }
  }

  private setItem<T>(key: string, value: T): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(this.getStorageKey(key), JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing to localStorage:`, error);
    }
  }

  // Cart management
  getCart(): Cart {
    const cart = this.getItem<Cart>('cart');
    return cart || {
      id: 'hfo_cart',
      items: [],
      totalItems: 0,
      subtotal: 0,
      shipping: 0,
      tax: 0,
      total: 0,
      lastUpdated: new Date().toISOString()
    };
  }

  addToCart(product: Product, color: string, size: string, quantity: number = 1): void {
    const cart = this.getCart();
    const existingItemIndex = cart.items.findIndex(
      item => item.id === product.id && item.color === color && item.size === size
    );

    if (existingItemIndex > -1) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      cart.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        color,
        size,
        quantity,
        image: product.images[0],
        inStock: product.inStock
      });
    }

    this.updateCartTotals(cart);
    this.setItem('cart', cart);
  }

  updateCartQuantity(itemId: string, color: string, size: string, quantity: number): void {
    const cart = this.getCart();
    const itemIndex = cart.items.findIndex(
      item => item.id === itemId && item.color === color && item.size === size
    );

    if (itemIndex > -1) {
      if (quantity <= 0) {
        cart.items.splice(itemIndex, 1);
      } else {
        cart.items[itemIndex].quantity = quantity;
      }
      this.updateCartTotals(cart);
      this.setItem('cart', cart);
    }
  }

  removeFromCart(itemId: string, color: string, size: string): void {
    const cart = this.getCart();
    cart.items = cart.items.filter(
      item => !(item.id === itemId && item.color === color && item.size === size)
    );
    this.updateCartTotals(cart);
    this.setItem('cart', cart);
  }

  clearCart(): void {
    this.setItem('cart', {
      id: 'hfo_cart',
      items: [],
      totalItems: 0,
      subtotal: 0,
      shipping: 0,
      tax: 0,
      total: 0,
      lastUpdated: new Date().toISOString()
    });
  }

  private updateCartTotals(cart: Cart): void {
    cart.totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    cart.subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cart.shipping = cart.subtotal > 100 ? 0 : 5.99;
    cart.tax = cart.subtotal * 0.08;
    cart.total = cart.subtotal + cart.shipping + cart.tax;
    cart.lastUpdated = new Date().toISOString();
  }

  // User management
  getUser(): User {
    const user = this.getItem<User>('user');
    return user || {
      id: 'hfo_user',
      profile: {
        email: '',
        firstName: '',
        lastName: '',
        preferences: {
          newsletter: false,
          smsUpdates: false,
          preferredCategories: []
        }
      },
      wishlist: [],
      recentlyViewed: [],
      orderHistory: [],
      addresses: []
    };
  }

  updateUser(userData: Partial<User>): void {
    const currentUser = this.getUser();
    const updatedUser = { ...currentUser, ...userData };
    this.setItem('user', updatedUser);
  }

  // Wishlist management
  addToWishlist(productId: string): void {
    const user = this.getUser();
    if (!user.wishlist.includes(productId)) {
      user.wishlist.push(productId);
      this.setItem('user', user);
    }
  }

  removeFromWishlist(productId: string): void {
    const user = this.getUser();
    user.wishlist = user.wishlist.filter(id => id !== productId);
    this.setItem('user', user);
  }

  isInWishlist(productId: string): boolean {
    const user = this.getUser();
    return user.wishlist.includes(productId);
  }

  // Recently viewed management
  addToRecentlyViewed(productId: string): void {
    const user = this.getUser();
    const filtered = user.recentlyViewed.filter(id => id !== productId);
    user.recentlyViewed = [productId, ...filtered].slice(0, 20);
    this.setItem('user', user);
  }

  getRecentlyViewed(): string[] {
    const user = this.getUser();
    return user.recentlyViewed;
  }
}

export const storage = new StorageManager();