"use client";

import { Heart } from "lucide-react";
import FacebookIcon from "./icons/FacebookIcon";
import Image from "next/image";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, href: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleNavClick(href);
    }
  };

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-10">
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="flex items-center gap-3 mb-4"
              aria-label="A.Eliver Frozen Products - Home"
            >
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.png"
                  alt="A.Eliver Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">A.Eliver Frozen Products</span>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Bacolod City&apos;s trusted frozen food wholesaler since 2018. Quality
              products at competitive wholesale prices.
            </p>
            <a
              href="https://www.facebook.com/A.EliverFrozen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#166FE5] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
              aria-label="Follow us on Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
              Follow Us on Facebook
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    onKeyDown={(e) => handleKeyDown(e, link.href)}
                    tabIndex={0}
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <span className="block text-white font-medium">Location</span>
                Bacolod City, Philippines
              </li>
              <li>
                <span className="block text-white font-medium">Phone</span>
                Globe: 09544128989
                <br />
                Landline: 4321363
              </li>
              <li>
                <span className="block text-white font-medium">Facebook</span>
                <a
                  href="https://www.facebook.com/A.EliverFrozen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition-colors"
                  aria-label="Visit Facebook page"
                >
                  @A.EliverFrozen
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} A.Eliver Frozen Products Trading.
              All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-pink-500" /> in Bacolod
              City
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
