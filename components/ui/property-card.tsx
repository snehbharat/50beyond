'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Property } from '@/lib/data';
import { useState } from 'react';

interface PropertyCardProps {
  property: Property;
  index: number;
}

const PropertyCard = ({ property, index }: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const formatPrice = (price: number) => {
    if (property.status === 'for-rent') {
      return `$${price.toLocaleString()}/month`;
    }
    return `$${price.toLocaleString()}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'for-sale':
        return 'bg-green-500';
      case 'for-rent':
        return 'bg-blue-500';
      case 'sold':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0">
        <div className="relative">
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Status Badge */}
            <div className="absolute top-4 left-4">
              <Badge className={`${getStatusColor(property.status)} text-white`}>
                {property.status.replace('-', ' ').toUpperCase()}
              </Badge>
            </div>

            {/* Like Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 hover:bg-white p-0"
              onClick={(e) => {
                e.preventDefault();
                setIsLiked(!isLiked);
              }}
            >
              <Heart
                className={`h-4 w-4 ${
                  isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'
                }`}
              />
            </Button>

            {/* Price Overlay */}
            <div className="absolute bottom-4 left-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="text-lg font-bold text-gray-900">
                  {formatPrice(property.price)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="mb-4">
            <Link href={`/properties/${property.id}`}>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-1">
                {property.title}
              </h3>
            </Link>
            <div className="flex items-center text-gray-600 mb-3">
              <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
              <span className="text-sm line-clamp-1">{property.location}</span>
            </div>
          </div>

          {/* Property Stats */}
          <div className="grid grid-cols-3 gap-4 mb-4 py-3 border-t border-b border-gray-100">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Bed className="h-4 w-4 text-blue-600" />
              </div>
              <div className="text-sm font-semibold text-gray-900">
                {property.bedrooms}
              </div>
              <div className="text-xs text-gray-600">Beds</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Bath className="h-4 w-4 text-blue-600" />
              </div>
              <div className="text-sm font-semibold text-gray-900">
                {property.bathrooms}
              </div>
              <div className="text-xs text-gray-600">Baths</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Square className="h-4 w-4 text-blue-600" />
              </div>
              <div className="text-sm font-semibold text-gray-900">
                {property.area}
              </div>
              <div className="text-xs text-gray-600">Sq Ft</div>
            </div>
          </div>

          {/* Agent Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src={property.agent.avatar}
                alt={property.agent.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {property.agent.name}
                </div>
                <div className="text-xs text-gray-600">Agent</div>
              </div>
            </div>
            
            <Link href={`/properties/${property.id}`}>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                View Details
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PropertyCard;