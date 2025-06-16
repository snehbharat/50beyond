export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: 'house' | 'apartment' | 'villa' | 'condo';
  status: 'for-sale' | 'for-rent' | 'sold';
  images: string[];
  description: string;
  features: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
    avatar: string;
  };
  createdAt: string;
  featured?: boolean;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Penthouse',
    price: 1250000,
    location: 'Downtown, New York',
    bedrooms: 3,
    bathrooms: 2,
    area: 2100,
    type: 'apartment',
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Stunning penthouse with panoramic city views, modern amenities, and premium finishes throughout.',
    features: ['City Views', 'Balcony', 'Modern Kitchen', 'Parking', 'Elevator'],
    agent: {
      name: 'Sarah Johnson',
      phone: '(555) 123-4567',
      email: 'sarah@realestate.com',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face'
    },
    createdAt: '2024-01-15',
    featured: true
  },
  {
    id: '2',
    title: 'Luxury Family Villa',
    price: 2850000,
    location: 'Beverly Hills, CA',
    bedrooms: 5,
    bathrooms: 4,
    area: 4200,
    type: 'villa',
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Exquisite villa featuring a private pool, landscaped gardens, and luxury amenities.',
    features: ['Pool', 'Garden', 'Garage', 'Security System', 'Wine Cellar'],
    agent: {
      name: 'Michael Chen',
      phone: '(555) 987-6543',
      email: 'michael@realestate.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
    },
    createdAt: '2024-01-10',
    featured: true
  },
  {
    id: '3',
    title: 'Cozy Suburban House',
    price: 475000,
    location: 'Westfield, NJ',
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    type: 'house',
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Perfect family home with spacious rooms, updated kitchen, and large backyard.',
    features: ['Backyard', 'Updated Kitchen', 'Hardwood Floors', 'Two-Car Garage'],
    agent: {
      name: 'Emma Wilson',
      phone: '(555) 456-7890',
      email: 'emma@realestate.com',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face'
    },
    createdAt: '2024-01-08'
  },
  {
    id: '4',
    title: 'Urban Loft Apartment',
    price: 3200,
    location: 'Brooklyn, NY',
    bedrooms: 2,
    bathrooms: 1,
    area: 1200,
    type: 'apartment',
    status: 'for-rent',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Trendy loft with exposed brick, high ceilings, and industrial design elements.',
    features: ['Exposed Brick', 'High Ceilings', 'Open Floor Plan', 'Near Transit'],
    agent: {
      name: 'David Martinez',
      phone: '(555) 234-5678',
      email: 'david@realestate.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
    },
    createdAt: '2024-01-12',
    featured: true
  },
  {
    id: '5',
    title: 'Waterfront Condo',
    price: 895000,
    location: 'Miami Beach, FL',
    bedrooms: 2,
    bathrooms: 2,
    area: 1600,
    type: 'condo',
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvbWVzfGVufDB8fDB8fHww&fit=crop&crop=center'
    ],
    description: 'Stunning waterfront condo with ocean views, resort-style amenities, and beach access.',
    features: ['Ocean Views', 'Beach Access', 'Resort Amenities', 'Concierge', 'Valet Parking'],
    agent: {
      name: 'Lisa Rodriguez',
      phone: '(555) 345-6789',
      email: 'lisa@realestate.com',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face'
    },
    createdAt: '2024-01-05'
  },
  {
    id: '6',
    title: 'Historic Townhouse',
    price: 1650000,
    location: 'Georgetown, DC',
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    type: 'house',
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvbWVzfGVufDB8fDB8fHww&fit=crop&crop=center'
    ],
    description: 'Beautifully restored historic townhouse with original architectural details and modern updates.',
    features: ['Historic Details', 'Restored', 'Fireplace', 'Private Courtyard', 'Prime Location'],
    agent: {
      name: 'Robert Kim',
      phone: '(555) 567-8901',
      email: 'robert@realestate.com',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face'
    },
    createdAt: '2024-01-03'
  },
  {
    id: '7',
    title: 'Mountain Cabin Retreat',
    price: 650000,
    location: 'Aspen, CO',
    bedrooms: 3,
    bathrooms: 2,
    area: 2200,
    type: 'house',
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Rustic mountain cabin with modern amenities, stunning mountain views, and ski-in/ski-out access.',
    features: ['Mountain Views', 'Fireplace', 'Ski Access', 'Wood Deck', 'Hot Tub'],
    agent: {
      name: 'Jennifer Adams',
      phone: '(555) 678-9012',
      email: 'jennifer@realestate.com',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face'
    },
    createdAt: '2024-01-20',
    featured: true
  },
  {
    id: '8',
    title: 'Studio Apartment',
    price: 2800,
    location: 'Manhattan, NY',
    bedrooms: 0,
    bathrooms: 1,
    area: 650,
    type: 'apartment',
    status: 'for-rent',
    images: [
      'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Efficient studio apartment in prime Manhattan location with modern amenities and great natural light.',
    features: ['Natural Light', 'Modern Appliances', 'Doorman', 'Laundry', 'Prime Location'],
    agent: {
      name: 'Thomas Green',
      phone: '(555) 789-0123',
      email: 'thomas@realestate.com',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face'
    },
    createdAt: '2024-01-18'
  },
  {
    id: '9',
    title: 'Lakefront Estate',
    price: 3750000,
    location: 'Lake Tahoe, CA',
    bedrooms: 6,
    bathrooms: 5,
    area: 5800,
    type: 'villa',
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Spectacular lakefront estate with private beach, boat dock, and panoramic lake views.',
    features: ['Lake Views', 'Private Beach', 'Boat Dock', 'Guest House', 'Wine Cellar', 'Home Theater'],
    agent: {
      name: 'Amanda Foster',
      phone: '(555) 890-1234',
      email: 'amanda@realestate.com',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face'
    },
    createdAt: '2024-01-22',
    featured: true
  },
  {
    id: '10',
    title: 'Modern High-Rise Condo',
    price: 1850000,
    location: 'Chicago, IL',
    bedrooms: 3,
    bathrooms: 3,
    area: 2400,
    type: 'condo',
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Luxury high-rise condo with floor-to-ceiling windows, premium finishes, and stunning skyline views.',
    features: ['Skyline Views', 'Floor-to-Ceiling Windows', 'Concierge', 'Fitness Center', 'Rooftop Deck'],
    agent: {
      name: 'Kevin Park',
      phone: '(555) 901-2345',
      email: 'kevin@realestate.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
    },
    createdAt: '2024-01-25'
  },
  {
    id: '11',
    title: 'Cozy Cottage',
    price: 385000,
    location: 'Portland, OR',
    bedrooms: 2,
    bathrooms: 1,
    area: 1200,
    type: 'house',
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWVzfGVufDB8fDB8fHww&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Charming cottage with original hardwood floors, cozy fireplace, and beautiful garden.',
    features: ['Hardwood Floors', 'Fireplace', 'Garden', 'Original Character', 'Quiet Neighborhood'],
    agent: {
      name: 'Rachel Turner',
      phone: '(555) 012-3456',
      email: 'rachel@realestate.com',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face'
    },
    createdAt: '2024-01-28'
  },
  {
    id: '13',
    title: 'Beachfront Bungalow',
    price: 2200000,
    location: 'Malibu, CA',
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    type: 'house',
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1519678767534-29483894b34d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZXN8ZW58MHx8MHx8fDA%3D&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Stunning beachfront bungalow with direct beach access, panoramic ocean views, and modern updates.',
    features: ['Ocean Views', 'Beach Access', 'Deck', 'Modern Kitchen', 'Private Beach'],
    agent: {
      name: 'Christina Lopez',
      phone: '(555) 234-5678',
      email: 'christina@realestate.com',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face'
    },
    createdAt: '2024-02-01'
  },
  {
    id: '14',
    title: 'Luxury Penthouse Suite',
    price: 4200,
    location: 'Las Vegas, NV',
    bedrooms: 2,
    bathrooms: 2,
    area: 1900,
    type: 'apartment',
    status: 'for-rent',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Opulent penthouse with strip views, luxury amenities, and resort-style living.',
    features: ['Strip Views', 'Balcony', 'Resort Amenities', 'Concierge', 'Valet', 'Pool Access'],
    agent: {
      name: 'Brian Mitchell',
      phone: '(555) 345-6789',
      email: 'brian@realestate.com',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face'
    },
    createdAt: '2024-02-03',
    featured: true
  },
  {
    id: '15',
    title: 'Countryside Farmhouse',
    price: 725000,
    location: 'Napa Valley, CA',
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    type: 'house',
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZXN8ZW58MHx8MHx8fDA%3D&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Picturesque farmhouse on 5 acres with vineyard views, barn, and country charm.',
    features: ['Vineyard Views', 'Barn', 'Large Property', 'Country Kitchen', 'Wine Country'],
    agent: {
      name: 'Nicole Parker',
      phone: '(555) 456-7890',
      email: 'nicole@realestate.com',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face'
    },
    createdAt: '2024-02-05'
  }
];

export const testimonials = [
  {
    name: 'Jennifer Adams',
    role: 'Home Buyer',
    content: 'The team helped us find our dream home in just 2 weeks. Their expertise and dedication made the entire process seamless.',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5
  },
  {
    name: 'Mark Thompson',
    role: 'Property Investor',
    content: 'Outstanding service and market knowledge. They identified great investment opportunities that exceeded my expectations.',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5
  },
  {
    name: 'Sarah Mitchell',
    role: 'First-time Buyer',
    content: 'Professional, patient, and incredibly helpful. They guided me through every step of buying my first home.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5
  }
];

export const stats = [
  { label: 'Properties Sold', value: '2,500+' },
  { label: 'Happy Clients', value: '1,800+' },
  { label: 'Years Experience', value: '15+' },
  { label: 'Market Coverage', value: '50+' }
];