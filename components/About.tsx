"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Award, Clock, Truck } from "lucide-react";
import Image from "next/image";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Award, text: "Premium Quality Products" },
    { icon: Clock, text: "Serving Since 2018" },
    { icon: Truck, text: "Reliable Distribution Network" },
    { icon: CheckCircle2, text: "Trusted by 46K+ Customers" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-gradient-to-r from-pink-100 to-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                Frozen Food Partner
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A.Eliver Frozen Products Trading has been serving Bacolod City and
              nearby areas with premium frozen food products since 2018. We are your
              one-stop shop for all frozen food needs - from hotdogs and
              processed meats to frozen seafood and ready-to-cook items.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Owned and operated by{" "}
              <span className="font-semibold text-gray-900">
                Angelie Balinas Eliver-Braca
              </span>
              , we pride ourselves on providing quality products at competitive
              wholesale prices. With over 46,000 satisfied customers, we have
              built a reputation for reliability and excellent service.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl" />
              
              <div className="relative bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400 rounded-3xl p-8 sm:p-12">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
                  <div className="text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src="/images/logo.png"
                        alt="A.Eliver Frozen Products Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      A.Eliver Frozen Products
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Bacolod&apos;s Premier Frozen Food Wholesaler
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Serving since 2018
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-white/90 backdrop-blur rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">46K+</div>
                    <div className="text-xs text-gray-600">Followers</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-cyan-600">10+</div>
                    <div className="text-xs text-gray-600">Partner Brands</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
