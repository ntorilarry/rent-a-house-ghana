"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MdCheckCircle } from "react-icons/md";
import {
  FaArrowLeft,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRuler,
} from "react-icons/fa";
import MainLayout from "@/shared/mainLayout";

const properties: Record<string, any> = {
  "arisa-villa-nyc": {
    price: "$2,850,000",
    title: "Arisa Villa",
    location: "New York, NY",
    description:
      "Stunning modern villa with panoramic city views, private infinity pool, and smart home automation. This architectural masterpiece combines contemporary design with timeless elegance.",
    category: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,500 sqft",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    amenities: [
      "Pool",
      "Garden",
      "Parking",
      "Smart Home",
      "Gym",
      "Security System",
      "Heating",
      "AC",
    ],
    features: [
      "Smart home automation system",
      "Infinity pool with heated water",
      "Private garden with landscaping",
      "Home gym and meditation room",
      "Chef's kitchen with premium appliances",
      "Floor-to-ceiling windows",
      "Underground parking for 2 cars",
      "24/7 security system",
    ],
    longDescription:
      "Welcome to Arisa Villa, an exceptional property that redefines luxury living in New York. This stunning 4-bedroom, 3-bathroom villa spans 3,500 square feet of meticulously designed space. The home features state-of-the-art smart home technology, allowing you to control every aspect of your environment with ease. The crown jewel is undoubtedly the infinity pool overlooking the city skyline, perfectly complemented by a manicured garden. Inside, find a chef's kitchen with premium appliances, a dedicated home gym, and meditation room. The villa is equipped with 24/7 security and offers underground parking for two vehicles. This is not just a home; it's a lifestyle upgrade.",
    yearBuilt: 2019,
    propertyTax: "$12,500/year",
    hoaFees: "$800/month",
    agent: {
      name: "Sarah Mitchell",
      phone: "+1 (555) 123-4567",
      email: "sarah.mitchell@nestora.com",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
  },
  "luxury-penthouse-miami": {
    price: "$5,200,000",
    title: "Luxury Penthouse",
    location: "Miami, FL",
    description:
      "Breathtaking beachfront penthouse with 360-degree ocean views and state-of-the-art amenities.",
    category: "Penthouse",
    bedrooms: 5,
    bathrooms: 4,
    area: "5,200 sqft",
   image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amenities: [
      "Beach Access",
      "Concierge",
      "Spa",
      "Rooftop Deck",
      "Wine Cellar",
      "Theater",
      "Parking",
      "Gym",
    ],
    features: [
      "360-degree ocean and city views",
      "Direct beachfront access",
      "Private spa and wellness center",
      "Rooftop entertaining deck",
      "Wine cellar with climate control",
      "Home theater system",
      "Gourmet kitchen",
      "Private elevator entrance",
    ],
    longDescription:
      "Experience unparalleled luxury at this spectacular beachfront penthouse in Miami. This 5-bedroom, 4-bathroom residence offers breathtaking 360-degree views of the ocean and city skyline. With 5,200 square feet of premium living space, the penthouse features a private spa, rooftop entertaining deck, and wine cellar. Direct beachfront access adds to its exceptional location.",
    yearBuilt: 2021,
    propertyTax: "$18,000/year",
    hoaFees: "$2,500/month",
    agent: {
      name: "James Rodriguez",
      phone: "+1 (555) 234-5678",
      email: "james.rodriguez@nestora.com",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
  },
  "modern-apartment-sf": {
    price: "$1,450,000",
    title: "Modern Downtown Loft",
    location: "San Francisco, CA",
    description:
      "Contemporary loft in the heart of downtown with high ceilings, exposed brick, and floor-to-ceiling windows.",
    category: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,800 sqft",
     image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=400&fit=crop",
    amenities: [
      "Gym",
      "Rooftop",
      "Concierge",
      "Parking",
      "Co-working",
      "Lounge",
      "Security",
      "Elevator",
    ],
    features: [
      "High ceilings (12+ feet)",
      "Exposed brick walls",
      "Floor-to-ceiling windows",
      "Open floor plan",
      "In-unit laundry",
      "Rooftop garden access",
      "Building gym and wellness center",
      "Co-working space on premises",
    ],
    longDescription:
      "A stunning modern loft in downtown San Francisco. This 2-bedroom, 2-bathroom apartment combines industrial charm with contemporary luxury. Featuring high ceilings, exposed brick, and oversized windows, this 1,800 sqft space is perfect for those seeking an urban lifestyle.",
    yearBuilt: 2018,
    propertyTax: "$8,500/year",
    hoaFees: "$1,200/month",
    agent: {
      name: "Emma Chen",
      phone: "+1 (555) 345-6789",
      email: "emma.chen@nestora.com",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  },
  "estate-mansion-la": {
    price: "$8,500,000",
    title: "Beverly Hills Estate",
    location: "Los Angeles, CA",
    description:
      "Iconic mansion with manicured gardens, wine cellar, movie theater, and guest house on private grounds.",
    category: "Estate",
    bedrooms: 7,
    bathrooms: 6,
    area: "12,000 sqft",
    image:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
    amenities: [
      "Pool",
      "Theater",
      "Wine Cellar",
      "Tennis Court",
      "Guest House",
      "Sauna",
      "Parking",
      "Security",
    ],
    features: [
      "Gated property on 2 acres",
      "Resort-style pool with waterfall",
      "Professional home theater",
      "Wine cellar with 500+ bottle capacity",
      "Tennis court and sports court",
      "Guest house with 2 bedrooms",
      "Chef's kitchen with dual ovens",
      "Multiple living areas and patios",
    ],
    longDescription:
      "The ultimate Beverly Hills estate. This iconic 7-bedroom, 6-bathroom mansion sits on 2 acres of pristine grounds. With 12,000 square feet of luxury living space, amenities include a resort-style pool, professional movie theater, wine cellar, and tennis court.",
    yearBuilt: 2015,
    propertyTax: "$35,000/year",
    hoaFees: "$0",
    agent: {
      name: "Marcus Williams",
      phone: "+1 (555) 456-7890",
      email: "marcus.williams@nestora.com",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
  },
  "coastal-villa-hawaii": {
    price: "$3,750,000",
    title: "Tropical Coastal Villa",
    location: "Honolulu, HI",
    description:
      "Paradise living with direct beach access, infinity pool overlooking the ocean, and tropical gardens.",
    category: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    area: "4,200 sqft",
       image:
      "https://images.unsplash.com/photo-1723110994499-df46435aa4b3?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amenities: [
      "Beach Access",
      "Pool",
      "Garden",
      "Outdoor Kitchen",
      "Lanai",
      "Security",
      "Parking",
      "Solar",
    ],
    features: [
      "Direct private beach access",
      "Infinity pool overlooking ocean",
      "Tropical garden landscaping",
      "Outdoor kitchen and bar",
      "Large lanai for entertaining",
      "Solar panel system",
      "Sustainable building materials",
      "Ocean view from every room",
    ],
    longDescription:
      "Experience paradise at this spectacular tropical villa in Honolulu. This 4-bedroom, 3-bathroom residence offers direct beach access and breathtaking ocean views. The infinity pool, tropical gardens, and outdoor kitchen create the ultimate indoor-outdoor living experience.",
    yearBuilt: 2020,
    propertyTax: "$15,000/year",
    hoaFees: "$600/month",
    agent: {
      name: "Sophia Lee",
      phone: "+1 (555) 567-8901",
      email: "sophia.lee@nestora.com",
      image:
        "https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=100&h=100&fit=crop",
    },
  },
  "historic-townhouse-boston": {
    price: "$1,875,000",
    title: "Historic Townhouse",
    location: "Boston, MA",
    description:
      "Charming restored townhouse with original hardwood floors, fireplaces, and modern kitchen updates.",
    category: "Townhouse",
    bedrooms: 3,
    bathrooms: 2,
    area: "2,100 sqft",
    image:
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amenities: [
      "Fireplace",
      "Hardwood Floors",
      "Garden",
      "Parking",
      "Elevator",
      "Gym",
      "Security",
      "Rooftop",
    ],
    features: [
      "Original hardwood floors",
      "Historic fireplaces",
      "Modern kitchen renovation",
      "Private garden space",
      "Exposed brick walls",
      "High ceilings",
      "Private entrance",
      "Rooftop deck access",
    ],
    longDescription:
      "A charming restored historic townhouse in Boston. This 3-bedroom, 2-bathroom property combines classic New England charm with modern updates. Original hardwood floors, fireplaces, and the newly renovated kitchen make this 2,100 sqft home a perfect blend of old and new.",
    yearBuilt: 1895,
    propertyTax: "$7,200/year",
    hoaFees: "$400/month",
    agent: {
      name: "David Thompson",
      phone: "+1 (555) 678-9012",
      email: "david.thompson@nestora.com",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
  },
};

export default function PropertyDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const property = properties[id];

  if (!property) {
    return (
      <main className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold text-neutral-900 mb-2">
            Property not found
          </h1>
          <p className="text-neutral-600 mb-8">
            The property you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-xl transition-colors"
          >
            <FaArrowLeft className="text-sm" />
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <MainLayout>
      <main className="min-h-screen bg-neutral-50 py-24">
        {/* Top bar */}
    

        <div className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-6xl mx-auto">
            {/* Hero Image - full bleed style */}
            <div className="relative h-[min(70vh,28rem)] -mx-4 sm:mx-0 sm:rounded-xl overflow-hidden mt-4 mb-8 bg-neutral-200">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 1152px"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold mb-2">
                    {property.category}
                  </span>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                    {property.title}
                  </h1>
                  <p className="flex items-center gap-1.5 text-white/90 text-sm mt-1">
                    <FaMapMarkerAlt className="shrink-0" />
                    {property.location}
                  </p>
                </div>
                <span className="px-4 py-2.5 bg-white text-teal-900 font-bold text-lg rounded-xl">
                  {property.price}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Property Specs - card */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    {
                      icon: FaBed,
                      label: "Bedrooms",
                      value: property.bedrooms,
                    },
                    {
                      icon: FaBath,
                      label: "Bathrooms",
                      value: property.bathrooms,
                    },
                    {
                      icon: FaRuler,
                      label: "Area",
                      value: property.area,
                    },
                  ].map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="bg-white rounded-xl p-5 border border-gray-200 hover:border-teal-100 transition-all duration-200"
                    >
                      <Icon className="text-teal-600 w-5 h-5 mb-2" />
                      <p className="text-neutral-500 text-xs font-medium uppercase tracking-wider">
                        {label}
                      </p>
                      <p className="text-neutral-900 font-bold text-xl mt-0.5">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* About */}
                <section className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
                  <h2 className="text-lg font-semibold text-neutral-900 mb-4">
                    About this property
                  </h2>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {property.longDescription}
                  </p>
                </section>

                {/* Key Features */}
                <section className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
                  <h2 className="text-lg font-semibold text-neutral-900 mb-5">
                    Key features
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {property.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <MdCheckCircle className="text-teal-500 w-5 h-5 shrink-0 mt-0.5" />
                        <span className="text-neutral-700 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Amenities */}
                <section className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
                  <h2 className="text-lg font-semibold text-neutral-900 mb-4">
                    Amenities
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((amenity: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-neutral-100 text-neutral-700 text-sm font-medium rounded-lg border border-neutral-100"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-24 space-y-6">
                  {/* Property Details card */}
                  <div className="bg-white rounded-xl border border-gray-200  p-6">
                    <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">
                      Property details
                    </h3>
                    <dl className="space-y-4">
                      <div>
                        <dt className="text-neutral-500 text-xs font-medium uppercase tracking-wider">
                          Year built
                        </dt>
                        <dd className="text-neutral-900 font-semibold mt-0.5">
                          {property.yearBuilt}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-neutral-500 text-xs font-medium uppercase tracking-wider">
                          Property tax
                        </dt>
                        <dd className="text-neutral-900 font-semibold mt-0.5">
                          {property.propertyTax}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-neutral-500 text-xs font-medium uppercase tracking-wider">
                          HOA fees
                        </dt>
                        <dd className="text-neutral-900 font-semibold mt-0.5">
                          {property.hoaFees}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  {/* Agent card */}
                  <div className="bg-white rounded-xl border border-teal-200 shadow-sm p-6 ring-1 ring-teal-50/50">
                    <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">
                      Contact agent
                    </h3>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden bg-neutral-100 ring-2 ring-white ">
                        <Image
                          src={property.agent.image}
                          alt={property.agent.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900">
                          {property.agent.name}
                        </p>
                        <p className="text-neutral-500 text-sm">
                          Real estate agent
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <a
                        href={`tel:${property.agent.phone}`}
                        className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-neutral-50 hover:bg-teal-50 text-neutral-800 hover:text-teal-800 transition-colors text-sm font-medium"
                      >
                        <FaPhone className="text-teal-600 shrink-0" />
                        {property.agent.phone}
                      </a>
                      <a
                        href={`mailto:${property.agent.email}`}
                        className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-neutral-50 hover:bg-teal-50 text-neutral-800 hover:text-teal-800 transition-colors text-sm font-medium truncate"
                      >
                        <FaEnvelope className="text-teal-600 shrink-0" />
                        {property.agent.email}
                      </a>
                    </div>
                  </div>

                  <button className="w-full py-3.5 px-4 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-xl transition-colors shadow-sm hover:shadow-md">
                    Schedule a viewing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
