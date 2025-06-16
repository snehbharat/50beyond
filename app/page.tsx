import Hero from '@/components/sections/Hero';
import FeaturedProperties from '@/components/sections/FeaturedProperties';
import Stats from '@/components/sections/Stats';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <Stats />
      <Testimonials />
    </>
  );
}