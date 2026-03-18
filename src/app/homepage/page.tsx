"use client";

import MainLayout from "@/shared/mainLayout";
import Hero from "./components/hero";
import ServicesSection from "./components/services";
import FeaturedProperties from "./components/featuredProperties";
import TestimonialsSection from "./components/testimonials";
import CTA from "./components/callToAction";

const Homepage = () => {
  return (
    <div>
      <MainLayout>
        <div>
          <Hero />
          <ServicesSection />
          <FeaturedProperties />
          <TestimonialsSection />
          <CTA />
        </div>
      </MainLayout>
    </div>
  );
};

export default Homepage;
