"use client";

import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdAttachMoney, MdHome, MdLocationOn } from "react-icons/md";
import { PiTag } from "react-icons/pi";
import SearchDropdown from "./searchDropdown";

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

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[url(/images/hero_bg.jpg)] bg-no-repeat bg-cover bg-top flex flex-col">
      <div className="flex-1 pt-28 overflow-hidden lg:relative lg:py-40">
        <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div className="lg:mt-16">
            <div className="mx-auto text-center sm:max-w-lg lg:max-w-xl lg:text-left lg:mx-0">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl sm:tracking-tight">
                Find the{" "}
                <span className="font-serif italic">Right property,</span>{" "}
                anywhere in the world
              </h1>
            </div>

            <div className="gap-4 mt-8 mx-auto flex justify-center lg:justify-start sm:mt-10">
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white transition-all duration-200 bg-teal-800 border border-transparent rounded-full shadow-sm hover:bg-teal-700"
                role="button"
              >
                Explore real estate
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search bar at bottom of hero */}
      <div className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 p-4 bg-white rounded-xl border border-teal-100 shadow-lg">
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
      </div>
    </section>
  );
};

export default Hero;
