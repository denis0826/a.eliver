"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";
import FacebookIcon from "./icons/FacebookIcon";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone Numbers",
    values: ["Globe: 09544128989", "Smart: 09752618594", "Landline: 4321363"],
  },
  {
    icon: MapPin,
    label: "Location",
    values: ["Bacolod City, Philippines"],
  },
  {
    icon: Clock,
    label: "Business Hours",
    values: ["Monday - Saturday", "8:00 AM - 6:00 PM"],
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-br from-purple-900 via-purple-800 to-cyan-900"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-300 to-cyan-400">
              Order?
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Message us directly on Facebook Messenger for inquiries, price
            lists, and orders. We&apos;re here to serve you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 rounded-3xl p-1">
              <div className="bg-purple-900 rounded-3xl p-8 sm:p-10">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Us on Facebook
                  </h3>
                  <p className="text-gray-300">
                    The fastest way to reach us for orders and inquiries
                  </p>
                </div>

                <a
                  href="https://m.me/A.EliverFrozen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 w-full bg-[#0084FF] hover:bg-[#0073E6] text-white py-4 px-8 rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 mb-6"
                  aria-label="Open Facebook Messenger to contact A.Eliver"
                >
                  <MessageCircle className="w-6 h-6" />
                  Open Messenger
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href="https://www.facebook.com/A.EliverFrozen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 w-full bg-white/10 hover:bg-white/20 text-white py-4 px-8 rounded-full font-semibold transition-all"
                  aria-label="Visit our Facebook page"
                >
                  <FacebookIcon className="w-5 h-5" />
                  Visit Our Facebook Page
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-4 bg-white/5 backdrop-blur rounded-2xl p-6 hover:bg-white/10 transition-colors border border-white/10"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{info.label}</h4>
                  {info.values.map((value, i) => (
                    <p key={i} className="text-gray-300">
                      {value}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            <div className="bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl p-6 mt-8 border border-white/10">
              <p className="text-white font-medium mb-2">
                Prefer to call or visit?
              </p>
              <p className="text-gray-300 text-sm">
                Feel free to call us during business hours or visit our location
                in Bacolod City. For the fastest response, we recommend
                messaging us on Facebook.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-6">
            Find Us on the Map
          </h3>
          <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 rounded-3xl p-1">
            <div className="rounded-3xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.123456789!2d122.9687492!3d10.7000235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aed1d167401477%3A0xb4cd28ac2313a9b9!2sAeliver%20Frozen%20Foods!5e0!3m2!1sen!2sph!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="A.Eliver Frozen Products Trading Location"
                className="w-full"
              />
            </div>
          </div>
          <div className="text-center mt-4">
            <a
              href="https://www.google.com/maps/place/Aeliver+Frozen+Foods/@10.7000235,122.9687492,17z/data=!3m1!4b1!4m6!3m5!1s0x33aed1d167401477:0xb4cd28ac2313a9b9!8m2!3d10.7000182!4d122.9713241!16s%2Fg%2F11pwvb7155"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              aria-label="Open in Google Maps"
            >
              <MapPin className="w-4 h-4" />
              Open in Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
