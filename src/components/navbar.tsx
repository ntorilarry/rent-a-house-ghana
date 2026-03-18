"use client";

import { useState, useEffect, useRef } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHome } from "react-icons/io5";

const navigation = [
  { name: "About Us", href: "/about-us" },
  { name: "Properties", href: "/properties" },
  { name: "Faqs", href: "/faqs" },
];

const SCROLL_THRESHOLD = 300;

const Navbar = () => {
  const pathname = usePathname();
  const [scrollingDown, setScrollingDown] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const lastScrollY = useRef(0);

  const isActive = (href: string) => {
    if (href === "#") return false;
    if (href === "/homepage") {
      return pathname === "/" || pathname === "/homepage";
    }
    return pathname === href;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setHasScrolled(currentScrollY > SCROLL_THRESHOLD);

      if (
        currentScrollY <= SCROLL_THRESHOLD ||
        currentScrollY < lastScrollY.current
      ) {
        setScrollingDown(false);
      } else if (
        currentScrollY > SCROLL_THRESHOLD &&
        currentScrollY > lastScrollY.current
      ) {
        setScrollingDown(true);
      }

      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = typeof window !== "undefined" ? window.scrollY : 0;
    setHasScrolled(lastScrollY.current > SCROLL_THRESHOLD);

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ease-in-out ${
        scrollingDown ? "-translate-y-full" : "translate-y-0"
      } ${hasScrolled ? "bg-white" : "bg-transparent"}`}
    >
      <Disclosure>
        {({ open }: { open: boolean }) => (
          <>
            <nav className=" relative max-w-7xl w-full  sm:mx-auto">
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12">
                  {/* Logo */}
                  <Link href="/" className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-teal-900 rounded flex items-center justify-center">
                      <IoHome className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-teal-900">
                      RentAHouse
                    </span>
                  </Link>

                  {/* Desktop Navigation */}
                  <div className="hidden lg:flex lg:items-center lg:space-x-2 lg:mx-auto">
                    {navigation.map((item) => {
                      const active = isActive(item.href);
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`px-3 py-2 text-base font-medium tracking-tighter transition-colors ${
                            active
                              ? "text-teal-800 font-semibold"
                              : "text-teal-800 hover:text-teal-700 "
                          }`}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>

                  {/* Actions */}
                  <div className="hidden lg:flex lg:items-center lg:space-x-4">
                    <Link href="/contact-us">
                      <button className="px-3 py-2 text-sm font-medium text-white bg-teal-800 rounded-md hover:bg-teal-700">
                        Contact Us
                      </button>
                    </Link>
                  </div>

                  {/* Mobile menu button */}
                  <div className="lg:hidden">
                    <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-full text-neutral-500 hover:bg-neutral-200 hover:text-[#000626]/90 transition-colors">
                      {open ? (
                        <HiX className="h-6 w-6" />
                      ) : (
                        <HiMenu className="h-6 w-6" />
                      )}
                    </DisclosureButton>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation */}
              <DisclosurePanel className="lg:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 border-t border-neutral-200">
                  {navigation.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                          active
                            ? "bg-neutral-100 text-[#000626]/90 font-bold"
                            : "text-[#000626]/60 hover:text-[#000626]/90 font-medium"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}

                  <Link
                    href="/contact-us"
                    className={`block px-3 py-2 text-base rounded-md transition-colors ${
                      pathname === "/contact-us"
                        ? "bg-neutral-100 text-[#000626]/90 font-bold"
                        : "text-[#000626]/60 hover:text-[#000626]/90 font-medium"
                    }`}
                  >
                    Contact Us
                  </Link>
                </div>
              </DisclosurePanel>
            </nav>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default Navbar;
