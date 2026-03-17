"use client";

import MainLayout from "@/shared/mainLayout";
import Hero from "./components/hero";
import ServicesSection from "./components/services";
import FeaturedProperties from "./components/featuredProperties";
import TestimonialsSection from "./components/testimonials";


const Homepage = () => {
  return (
    <div>
      <MainLayout>
        <div>
          <Hero />
          <ServicesSection />
          <FeaturedProperties/>
          <TestimonialsSection />
        </div>
      </MainLayout>
    </div>
  );
};

export default Homepage;
