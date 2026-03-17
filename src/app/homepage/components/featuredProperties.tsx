"use client";

import PropertyCard from "@/components/property-card";
import { CiStar } from "react-icons/ci";

const properties = [
  {
    id: "arisa-villa-nyc",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=400&fit=crop",
    price: "$2,850,000",
    title: "Arisa Villa",
    location: "New York, NY",
    description:
      "Stunning modern villa with panoramic city views, private infinity pool, and smart home automation.",
    category: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,500 sqft",
    amenities: ["Pool", "Garden", "Parking", "Smart Home", "Gym"],
  },
  {
    id: "luxury-penthouse-miami",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$5,200,000",
    title: "Luxury Penthouse",
    location: "Miami, FL",
    description:
      "Breathtaking beachfront penthouse with 360-degree ocean views and state-of-the-art amenities.",
    category: "Penthouse",
    bedrooms: 5,
    bathrooms: 4,
    area: "5,200 sqft",
    amenities: [
      "Beach Access",
      "Concierge",
      "Spa",
      "Rooftop Deck",
      "Wine Cellar",
    ],
  },
  {
    id: "modern-apartment-sf",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=400&fit=crop",
    price: "$1,450,000",
    title: "Modern Downtown Loft",
    location: "San Francisco, CA",
    description:
      "Contemporary loft in the heart of downtown with high ceilings, exposed brick, and floor-to-ceiling windows.",
    category: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,800 sqft",
    amenities: ["Gym", "Rooftop", "Concierge", "Parking", "Co-working"],
  },
  {
    id: "estate-mansion-la",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$8,500,000",
    title: "Beverly Hills Estate",
    location: "Los Angeles, CA",
    description:
      "Iconic mansion with manicured gardens, wine cellar, movie theater, and guest house on private grounds.",
    category: "Estate",
    bedrooms: 7,
    bathrooms: 6,
    area: "12,000 sqft",
    amenities: [
      "Pool",
      "Theater",
      "Wine Cellar",
      "Tennis Court",
      "Guest House",
    ],
  },
  {
    id: "coastal-villa-hawaii",
    image:
      "https://images.unsplash.com/photo-1723110994499-df46435aa4b3?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$3,750,000",
    title: "Tropical Coastal Villa",
    location: "Honolulu, HI",
    description:
      "Paradise living with direct beach access, infinity pool overlooking the ocean, and tropical gardens.",
    category: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    area: "4,200 sqft",
    amenities: ["Beach Access", "Pool", "Garden", "Outdoor Kitchen", "Lanai"],
  },
  {
    id: "historic-townhouse-boston",
    image:
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$1,875,000",
    title: "Historic Townhouse",
    location: "Boston, MA",
    description:
      "Charming restored townhouse with original hardwood floors, fireplaces, and modern kitchen updates.",
    category: "Townhouse",
    bedrooms: 3,
    bathrooms: 2,
    area: "2,100 sqft",
    amenities: [
      "Fireplace",
      "Hardwood Floors",
      "Garden",
      "Parking",
      "Elevator",
    ],
  },
];

export default function FeaturedProperties() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-2 mb-4">
          <CiStar className="text-lime-500 text-2xl" />
          <span className="text-lg font-bold text-teal-600  tracking-wide">
            Featured
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mb-4">
          Handpicked Properties
        </h2>
        <p className="text-base text-teal-700 max-w-2xl">
          Discover our carefully curated collection of premium properties across
          the nation&apos;s most desirable locations.
        </p>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              id={property.id}
              image={property.image}
              price={property.price}
              title={property.title}
              location={property.location}
              description={property.description}
              category={property.category}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              area={property.area}
              amenities={property.amenities}
            />
          ))}
        </div>
      </div>

      {/* View All CTA */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <button className="px-8 py-3 bg-teal-800 hover:bg-teal-700 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          View All Properties
        </button>
      </div>
    </section>
  );
}
