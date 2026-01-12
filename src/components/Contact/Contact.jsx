import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaTiktok,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    color: "from-blue-500 to-blue-700",
    link: "https://facebook.com",
    desc: "Community & updates",
  },
  {
    name: "Telegram",
    icon: <FaTelegramPlane />,
    color: "from-sky-400 to-sky-600",
    link: "https://t.me",
    desc: "Instant support",
  },
  {
    name: "TikTok",
    icon: <FaTiktok />,
    color: "from-gray-800 to-black",
    link: "https://tiktok.com",
    desc: "Trading videos",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    color: "from-pink-500 to-yellow-500",
    link: "https://instagram.com",
    desc: "Behind the scenes",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#070C0F] via-[#0A1219] to-[#070C0F] text-white mt-28 px-6">

      {/* ================= HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto py-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#BAFD00] mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-400 text-lg">
          Choose the platform you prefer — we respond fast 🚀
        </p>
      </motion.div>

      {/* ================= SOCIAL GRID ================= */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {socialLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-2xl p-6 bg-gradient-to-br ${item.color} shadow-xl`}
          >
            <div className="text-3xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-sm text-white/80 mt-2">{item.desc}</p>
          </motion.a>
        ))}
      </div>

      {/* ================= EMAIL CTA ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-[#0F1A22] border border-[#BAFD00]/30 rounded-2xl p-10 text-center"
      >
        <FaEnvelope className="text-[#BAFD00] text-4xl mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-3">Prefer Email?</h2>
        <p className="text-gray-400 mb-6">
          Send us a detailed message and our team will reply shortly.
        </p>
        <a
          href="mailto:support@smarttradingea.com"
          className="inline-block bg-[#A8E900] text-black font-semibold px-8 py-3 rounded-lg shadow-[0_0_25px_rgba(168,233,0,0.5)] hover:brightness-110 transition"
        >
          support@smarttradingea.com
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
