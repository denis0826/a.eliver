"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const brands = [
  { name: "El Rancho", color: "from-rose-400 to-pink-500" },
  { name: "Winner", color: "from-amber-300 to-yellow-400" },
  { name: "San Miguel Pure Foods", color: "from-pink-400 to-rose-500" },
  { name: "Tender Juicy", color: "from-fuchsia-400 to-pink-500" },
  { name: "Virginia", color: "from-emerald-400 to-green-500" },
  { name: "Champion", color: "from-sky-400 to-blue-500" },
  { name: "King's", color: "from-violet-400 to-purple-500" },
  { name: "Ganado", color: "from-orange-400 to-amber-500" },
  { name: "CDO", color: "from-red-400 to-rose-500" },
  { name: "Frabelle", color: "from-cyan-400 to-teal-500" },
  { name: "Purefoods", color: "from-lime-400 to-green-500" },
  { name: "And More...", color: "from-pink-400 via-purple-400 to-cyan-400" },
];

const productCategories = [
  "Hotdogs & Sausages",
  "Tocino & Longganisa",
  "Bacon & Ham",
  "Nuggets & Patties",
  "Frozen Seafood",
  "Ready-to-Cook Items",
  "Processed Meats",
  "Deli Products",
];

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-gradient-to-r from-cyan-100 to-green-100 text-cyan-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              Partner Brands
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We supply a wide variety of frozen products from the most trusted
            brands in the Philippines. Quality you can count on.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="group"
            >
              <div
                className={`bg-gradient-to-br ${brand.color} rounded-2xl p-6 h-28 flex items-center justify-center text-white font-bold text-center text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-default`}
              >
                {brand.name}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Product Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {productCategories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:via-purple-50 hover:to-cyan-50 transition-colors"
              >
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500" />
                <span className="text-gray-700 font-medium text-sm sm:text-base">
                  {category}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-6">
              Looking for specific products? Contact us for our complete price
              list and availability.
            </p>
            <a
              href="https://m.me/A.EliverFrozen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all"
              aria-label="Inquire about products on Facebook Messenger"
            >
              Inquire on Messenger
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
