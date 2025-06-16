'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Home, DollarSign, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log('Searching:', { searchQuery, propertyType, priceRange, location });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Real Estate Video */}
      <div className="absolute inset-0 z-0">
        {/* Background Video - Real Estate Buildings */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/3773486/3773486-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
          {/* Fallback image if video fails to load */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600)',
            }}
          />
        </video>
        
        {/* Enhanced Dark Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-gray-900/45 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
        
        {/* Additional subtle overlay for extra contrast */}
        <div className="absolute inset-0 bg-black/15" />
        
        {/* Animated Overlay Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }} />
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            {i % 3 === 0 ? (
              <div className="w-3 h-3 bg-white rounded-full" />
            ) : i % 3 === 1 ? (
              <Home className="w-4 h-4 text-white" />
            ) : (
              <Star className="w-3 h-3 text-white" />
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto my-20"
        >
          {/* Enhanced Badge with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/25 backdrop-blur-md border border-white/40 text-white mb-8 shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="mr-3"
            >
              <Home className="h-5 w-5" />
            </motion.div>
            <span className="text-sm font-medium">🏆 #1 Premium Real Estate Platform</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="ml-3"
            >
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
            </motion.div>
          </motion.div>

          {/* Enhanced Main Heading with Better Contrast */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-2xl"
          >
            Find Your
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              className="block bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent animate-gradient drop-shadow-2xl"
              style={{ backgroundSize: "300% 300%" }}
            >
              Dream Home
            </motion.span>
          </motion.h1>

          {/* Enhanced Subtitle with Better Contrast */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Discover premium properties with our expert team. From luxury estates to cozy homes, 
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="block mt-2 text-blue-300 font-medium drop-shadow-lg"
              >
                we make your real estate dreams come true ✨
              </motion.span>
            </p>
          </motion.div>

          {/* Enhanced Search Form with Better Styling */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/98 backdrop-blur-xl rounded-3xl p-8 shadow-2xl max-w-5xl mx-auto border border-white/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {/* Location with Enhanced Styling */}
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500 group-hover:text-blue-600 transition-colors z-10" />
                <Input
                  placeholder="Enter location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-12 h-14 border-2 border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-500 transition-all duration-300 rounded-xl text-lg"
                />
              </motion.div>

              {/* Property Type */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="h-14 border-2 border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-500 rounded-xl text-lg">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">🏠 House</SelectItem>
                    <SelectItem value="apartment">🏢 Apartment</SelectItem>
                    <SelectItem value="villa">🏖️ Villa</SelectItem>
                    <SelectItem value="condo">🏙️ Condo</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              {/* Price Range */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="h-14 border-2 border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-500 rounded-xl text-lg">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-500k">💰 $0 - $500K</SelectItem>
                    <SelectItem value="500k-1m">💎 $500K - $1M</SelectItem>
                    <SelectItem value="1m-2m">👑 $1M - $2M</SelectItem>
                    <SelectItem value="2m+">🏆 $2M+</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              {/* Enhanced Search Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  onClick={handleSearch}
                  className="h-14 bg-gradient-to-r from-blue-600 via-teal-600 to-purple-600 hover:from-blue-700 hover:via-teal-700 hover:to-purple-700 text-white shadow-xl rounded-xl text-lg font-semibold px-8 w-full"
                >
                  <Search className="h-5 w-5 mr-3" />
                  Search Properties
                </Button>
              </motion.div>
            </div>

            {/* Enhanced Quick Search Tags */}
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { label: 'Luxury Homes', icon: '🏰' },
                { label: 'Apartments', icon: '🏢' },
                { label: 'Condos', icon: '🏙️' },
                { label: 'Investment Properties', icon: '📈' }
              ].map((tag, index) => (
                <motion.button
                  key={tag.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 text-sm bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-100 hover:to-teal-100 rounded-full transition-all duration-300 shadow-md hover:shadow-lg font-medium"
                >
                  <span className="mr-2">{tag.icon}</span>
                  {tag.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Stats with Better Visibility */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {[
              { number: '2,500+', label: 'Properties', icon: '🏠' },
              { number: '1,800+', label: 'Happy Clients', icon: '😊' },
              { number: '15+', label: 'Years Experience', icon: '⭐' },
              { number: '50+', label: 'Cities Covered', icon: '🌍' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="text-2xl mb-2"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors drop-shadow-2xl">
                  {stat.number}
                </div>
                <div className="text-white/95 text-sm font-medium drop-shadow-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center relative">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-1.5 h-4 bg-white/80 rounded-full mt-2"
            />
          </div>
          <span className="text-white/80 text-xs font-medium drop-shadow-sm">Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  )
};

export default Hero;