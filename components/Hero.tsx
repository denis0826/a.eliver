"use client";

import { motion } from "framer-motion";
import { MessageCircle, Users, MapPin, Calendar } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const stats = [
    { icon: Users, value: "46K+", label: "Trusted Followers" },
    { icon: MapPin, value: "Bacolod", label: "City Based" },
    { icon: Calendar, value: "2018", label: "Since" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-400 via-cyan-400 via-green-300 to-yellow-300" />
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 mx-auto">
              <Image
                src="/images/logo.png"
                alt="A.Eliver Frozen Products Trading Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg"
          >
            Aeliver Frozen
            <br />
            <span className="text-yellow-300 drop-shadow-lg">Products Trading</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/95 max-w-2xl mx-auto mb-10 drop-shadow-md"
          >
            Bacolod&apos;s Trusted Frozen Food Wholesaler Since 2018 - Quality Products at
            Wholesale Prices. Your one-stop shop for all frozen food needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="https://m.me/A.EliverFrozen"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-purple-700 transition-all hover:scale-105 hover:shadow-2xl shadow-lg"
              aria-label="Contact us on Facebook Messenger"
            >
              <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
              Contact Us on Messenger
            </a>
            <a
              href="#products"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#products")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all shadow-lg"
              aria-label="View our products"
              tabIndex={0}
            >
              View Our Brands
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300 mx-auto mb-2" />
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/90">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
