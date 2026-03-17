"use client";

import Link from "next/link";
import Image from "next/image";
import { FaBed, FaBath, FaRuler } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

interface PropertyCardProps {
  id: string;
  image: string;
  price: string;
  title: string;
  location: string;
  description: string;
  category: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  amenities: string[];
}

export default function PropertyCard({
  id,
  image,
  price,
  title,
  location,
  description,
  category,
  bedrooms,
  bathrooms,
  area,
  amenities,
}: PropertyCardProps) {
  return (
    <Link href={`/property/${id}`}>
      <div className="group h-full border bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative h-48 w-full overflow-hidden bg-gray-200">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-teal-700 rounded-full">
              {category}
            </span>
          </div>
          {/* Price Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-lime-400 text-xs font-bold text-gray-900 rounded-full">
              {price}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Title and Location */}
          <div className="mb-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{location}</p>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">
            {description}
          </p>

          {/* Property Details */}
          <div className="flex gap-4 mb-4 py-3 border-y border-gray-100">
            <div className="flex items-center gap-1">
              <FaBed className="text-teal-600 text-lg" />
              <span className="text-sm font-medium text-gray-700">
                {bedrooms} Beds
              </span>
            </div>
            <div className="flex items-center gap-1">
              <FaBath className="text-teal-600 text-lg" />
              <span className="text-sm font-medium text-gray-700">
                {bathrooms} Baths
              </span>
            </div>
            <div className="flex items-center gap-1">
              <FaRuler className="text-teal-600 text-lg" />
              <span className="text-sm font-medium text-gray-700">{area}</span>
            </div>
          </div>

          {/* Amenities */}
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-700 mb-2">
              Amenities
            </p>
            <div className="flex flex-wrap gap-2">
              {amenities.slice(0, 3).map((amenity, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-gray-100 text-xs text-gray-700 rounded-lg"
                >
                  {amenity}
                </span>
              ))}
              {amenities.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-xs text-gray-700 rounded-lg">
                  +{amenities.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:text-lime-500 transition-colors">
            <span className="text-sm font-semibold text-gray-900">
              View Details
            </span>
            <IoArrowForward className="text-lg opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </div>
    </Link>
  );
}
