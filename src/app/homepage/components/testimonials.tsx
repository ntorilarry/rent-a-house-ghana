"use client";

import Image from "next/image";
import React from "react";

type Testimonial = {
  name: string;
  company: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Jenny Wilson",
    company: "Grower.io",
    image:
      "https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/4/woman.png",
    quote:
      "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
  },
  {
    name: "Devon Lane",
    company: "DLDesign.co",
    image:
      "https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/4/man.png",
    quote:
      "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
  },
];

const StarRating = () => {
  return (
    <div className="flex items-center justify-center sm:justify-start">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="flex flex-col sm:flex-row lg:items-center">
      <Image
        className="object-cover w-48 h-48 mx-auto sm:mx-0 lg:w-60 lg:h-60 shrink-0 rounded-2xl"
        src={testimonial.image}
        alt={testimonial.name}
        width={250}
        height={250}
      />

      <div className="mt-8 sm:mt-0 sm:ml-10">
        <StarRating />

        <blockquote className="mt-8">
          <p className="text-lg font-medium leading-8 text-gray-900">
            &quot;{testimonial.quote}&quot;
          </p>
        </blockquote>

        <div className="flex flex-col items-center justify-center gap-1 mt-5 sm:flex-row sm:justify-start sm:gap-4">
          <p className="text-base font-semibold text-gray-900">
            {testimonial.name}
          </p>
          <p className="text-base text-gray-600">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className=" bg-white pb-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className=" mx-auto text-left">
          <h2 className=" text-3xl font-semibold tracking-tight text-teal-800 sm:text-4xl lg:text-5xl ">
            Client Testimonials
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid max-w-3xl grid-cols-1 gap-12 mx-auto mt-16 text-center xl:grid-cols-2 xl:max-w-none sm:text-left">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
