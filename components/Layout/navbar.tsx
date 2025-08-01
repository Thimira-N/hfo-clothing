import { ShoppingBag } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-white/80 backdrop-blur-md rounded-full px-8 py-4 flex items-center justify-between shadow-lg">
                            {/* Left Navigation */}
                            <div className="flex items-center space-x-8">
                                <span className="text-gray-700 font-medium cursor-pointer hover:text-black transition-colors">SHOP</span>
                                <span className="text-gray-700 font-medium cursor-pointer hover:text-black transition-colors">MEN</span>
                                <span className="text-gray-700 font-medium cursor-pointer hover:text-black transition-colors">WOMEN</span>
                                <span className="text-gray-700 font-medium cursor-pointer hover:text-black transition-colors">TRENDING</span>
                            </div>

                            {/* Center Logo */}
                            <div className="absolute left-1/2 transform -translate-x-1/2">
                                <h1 className="text-2xl font-bold text-black tracking-wide">HFO</h1>
                            </div>

                            {/* Right Navigation */}
                            <div className="flex items-center space-x-8">
                                <span className="text-gray-700 font-medium cursor-pointer hover:text-black transition-colors">SEASONAL</span>
                                <span className="text-gray-700 font-medium cursor-pointer hover:text-black transition-colors">ACCESSORIES</span>
                                <div className="flex items-center space-x-4">
                                    <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                                        SIGN IN/UP
                                    </button>
                                    <button className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
                                        <ShoppingBag size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
  )
}

export default Navbar