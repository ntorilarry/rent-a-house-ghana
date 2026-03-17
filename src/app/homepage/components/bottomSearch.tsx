"use client";

import { MdHome, MdLocationOn, MdAttachMoney } from "react-icons/md";
import { PiTag } from "react-icons/pi";
import SearchDropdown from "./searchDropdown";
import { IoSearch } from "react-icons/io5";

const LOOKING_FOR_OPTIONS = [
  "Apartment",
  "House",
  "Land",
  "Office",
  "Retail",
  "Town house",
  "Warehouse",
];

const LOCATION_OPTIONS = ["Accra", "East Legon", "Teshie", "Achimota"];

const PRICE_RANGE_OPTIONS = [
  "Any price",
  "Under 50,000",
  "50,000 - 100,000",
  "100,000 - 200,000",
  "200,000 - 500,000",
  "500,000+",
];

const PROPERTY_TYPE_OPTIONS = ["For sale", "For rent"];

export default function BottomSearch() {
  return (
    <section className="bg-white border-b border-teal-100 px-4  sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* <div className="mb-6">
          <h2 className="text-2xl font-bold text-teal-900">Find your property</h2>
          <p className="text-teal-700/80 text-sm mt-1">
            Narrow your search by type, location, price, and listing type.
          </p>
        </div> */}

        <div className="flex flex-col lg:flex-row gap-4 p-4 bg-white rounded-xl border border-teal-100 shadow-sm">
          <SearchDropdown
            icon={MdHome}
            label="Looking for"
            placeholder="Looking for"
            options={LOOKING_FOR_OPTIONS}
          />
          <SearchDropdown
            icon={MdLocationOn}
            label="Location"
            placeholder="Location"
            options={LOCATION_OPTIONS}
          />
          <SearchDropdown
            icon={MdAttachMoney}
            label="Price range"
            placeholder="Price range"
            options={PRICE_RANGE_OPTIONS}
          />
          <SearchDropdown
            icon={PiTag}
            label="Property type"
            placeholder="Property type"
            options={PROPERTY_TYPE_OPTIONS}
          />
          <button
            type="button"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-800 text-white font-medium rounded-lg hover:bg-teal-700 transition shrink-0"
          >
            <IoSearch className="w-5 h-5" />
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
