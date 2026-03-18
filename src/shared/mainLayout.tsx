"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
