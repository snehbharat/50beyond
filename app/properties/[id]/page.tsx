import { properties } from '@/lib/data';
import PropertyPageClient from './clientComponent';

interface PropertyPageProps {
  params: {
    id: string;
  };
}

// This function generates static params for all properties
export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

// Server component that passes data to client component
export default function PropertyPage({ params }: PropertyPageProps) {
  return <PropertyPageClient params={params} />;
}