'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, MapPin } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: '2,500+',
      label: 'Properties Sold',
      description: 'Successfully closed deals',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      number: '1,800+',
      label: 'Happy Clients',
      description: 'Satisfied customers',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Years Experience',
      description: 'In real estate market',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: MapPin,
      number: '50+',
      label: 'Cities Covered',
      description: 'Across the country',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our track record speaks for itself. Here's what we've achieved together with our amazing clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
                >
                  {stat.number}
                </motion.div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>

                <p className="text-gray-600">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;