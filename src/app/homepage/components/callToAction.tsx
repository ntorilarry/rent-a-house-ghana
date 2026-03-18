import Image from "next/image";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="relative py-12 overflow-hidden bg-gray-100">
      <div className="absolute bottom-0 right-0">
        <Image
          className="w-full max-w-2xl -mb-16 sm:-mb-56 lg:mb-0"
          src="https://landingfoliocom.imgix.net/store/collection/saasui/images/cta/4/ring-pattern.svg"
          alt=""
          width={1000}
          height={500}
        />
      </div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start sm:max-w-md lg:max-w-2xl">
            <p className="text-3xl sm:text-4xl lg:text-5xl shrink-0">👋</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-teal-800 sm:text-4xl lg:text-5xl md:ml-4 lg:ml-8 md:mt-0">
              Ready to find your dream home?
            </h2>
          </div>

          <div className="flex flex-col items-center mt-8 space-y-6 md:mt-0">
            <Link
              href="/contact-us"
              title=""
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-all duration-200 bg-teal-800 border border-transparent rounded-full shadow-sm hover:bg-teal-700"
              role="button"
            >
              Make an inquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
