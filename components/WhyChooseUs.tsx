"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ShoppingBag,
  BadgeDollarSign,
  ShieldCheck,
  Truck,
  Users,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: ShoppingBag,
    title: "Wide Product Selection",
    description:
      "From hotdogs to seafood, we offer a comprehensive range of frozen products from top brands.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Wholesale Prices",
    description:
      "Get the best value for your money with our wholesale pricing designed for businesses.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured Products",
    description:
      "All our products are sourced from trusted manufacturers ensuring freshness and quality.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Truck,
    title: "Fast & Reliable Delivery",
    description:
      "Timely delivery to Bacolod City and surrounding areas with proper cold chain handling.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "Trusted by 46K+ Customers",
    description:
      "Join thousands of satisfied customers who trust us for their frozen food needs.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: MapPin,
    title: "Bacolod's Premier Wholesaler",
    description:
      "Established presence in Bacolod City since 2018, serving local businesses and retailers.",
    color: "from-red-500 to-pink-500",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Partner in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              Quality & Value
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re committed to providing the best frozen food products and
            services to our valued customers since 2018.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
