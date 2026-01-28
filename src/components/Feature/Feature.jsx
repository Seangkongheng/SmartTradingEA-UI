import React, { useState } from "react";
import { motion } from "framer-motion";
import FeatureModal from "../modal/FeatureModal";
import { title } from "framer-motion/client";
import { FaLayerGroup, FaCog } from "react-icons/fa";

const AdaptiveGridIcon = () => (
  <svg width="140" height="140" viewBox="0 0 140 140">
    <defs>
      <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#BAFD00" />
        <stop offset="1" stopColor="#A8E900" />
      </linearGradient>
    </defs>

    {/* Pulsing center circle */}
    <circle
      cx="70"
      cy="70"
      r="18"
      fill="none"
      stroke="#A8E900"
      strokeWidth="4"
      opacity="0.35"
    >
      <animate
        attributeName="r"
        values="14;22;14"
        dur="1.6s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0.45;0.1;0.45"
        dur="1.6s"
        repeatCount="indefinite"
      />
    </circle>

    {/* Grid blocks */}
    {[...Array(3)].map((_, row) =>
      [...Array(3)].map((_, col) => (
        <rect
          key={`${row}-${col}`}
          x={50 + col * 20}
          y={50 + row * 20}
          width="20"
          height="20"
          rx="3"
          fill="url(#g1)"
        >
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur={`${1 + (row + col) * 0.2}s`}
            repeatCount="indefinite"
          />
        </rect>
      )),
    )}
  </svg>
);

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 18 },
  },
};

const Card = ({ children, big }) => (
  <motion.div
    variants={item}
    className={`
      group relative overflow-hidden rounded-3xl border border-white/10
      hover:border-lime-400 transition-all
      ${big ? "p-10" : "p-6"}  border border-lime-100 hover:border-[hsl(59,100%,50%)]
    `}
  >
    {children}
  </motion.div>
);

const Feature = () => {
  // Risk icon
  const RiskIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="140"
      height="140"
      viewBox="0 0 140 140"
    >
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#BAFD00"></stop>
          <stop offset="1" stop-color="#A8E900"></stop>
        </linearGradient>
      </defs>
      <path
        d="M70 18 L108 34 V70c0 25-18 42-38 52C50 112 32 95 32 70V34Z"
        fill="none"
        stroke="url(#g1)"
        stroke-width="6"
        stroke-linejoin="round"
      ></path>
      <circle
        cx="70"
        cy="66"
        r="18"
        fill="none"
        stroke="#A8E900"
        stroke-width="4"
        opacity="0.35"
      >
        <animate
          attributeName="r"
          values="14;22;14"
          dur="1.6s"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="opacity"
          values="0.45;0.1;0.45"
          dur="1.6s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <path
        d="M58 66 l8 8 18-20"
        fill="none"
        stroke="#A8E900"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <animate
          attributeName="strokeDasharray"
          values="0,80;80,0;0,80"
          dur="1.6s"
          repeatCount="indefinite"
        ></animate>
      </path>
    </svg>
  );

  const RealtimeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="140"
      height="140"
      viewBox="0 0 140 140"
      class="shrink-0"
    >
      <rect
        x="20"
        y="28"
        width="100"
        height="70"
        rx="10"
        fill="none"
        stroke="#64748b"
        stroke-width="6"
      ></rect>
      <path
        d="M55 112h30"
        fill="none"
        stroke="#64748b"
        stroke-width="6"
        stroke-linecap="round"
      ></path>
      <path
        d="M70 98v14"
        fill="none"
        stroke="#64748b"
        stroke-width="6"
        stroke-linecap="round"
      ></path>
      <path
        d="M28 72 C38 72, 38 52, 48 52 C58 52, 58 84, 68 84 C78 84, 78 60, 88 60 C98 60, 98 78, 108 78 C116 78, 116 72, 124 72"
        fill="none"
        stroke="#BAFD00"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="260"
        stroke-dashoffset="260"
      >
        <animate
          attributeName="strokeDashoffset"
          values="260;0;0;260"
          dur="1.4s"
          repeatCount="indefinite"
        ></animate>
      </path>
      <circle cx="112" cy="40" r="6" fill="#A8E900">
        <animate
          attributeName="opacity"
          values="1;0.15;1"
          dur="0.8s"
          repeatCount="indefinite"
        ></animate>
      </circle>
    </svg>
  );

  const FrequencyIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="140"
      height="140"
      viewBox="0 0 140 140"
    >
      <circle
        cx="70"
        cy="70"
        r="50"
        fill="none"
        stroke="#64748b"
        stroke-width="4"
        opacity="0.3"
      ></circle>
      <circle
        cx="70"
        cy="70"
        r="35"
        fill="none"
        stroke="#64748b"
        stroke-width="4"
        opacity="0.5"
      ></circle>
      <circle
        cx="70"
        cy="70"
        r="20"
        fill="none"
        stroke="#64748b"
        stroke-width="4"
        opacity="0.7"
      ></circle>
      <g>
        <path
          d="M70 20 L70 40"
          stroke="#BAFD00"
          stroke-width="6"
          stroke-linecap="round"
        >
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur="0.4s"
            repeatCount="indefinite"
          ></animate>
        </path>
        <path
          d="M70 100 L70 120"
          stroke="#BAFD00"
          stroke-width="6"
          stroke-linecap="round"
        >
          <animate
            attributeName="opacity"
            values="1;0.3;1"
            dur="0.4s"
            repeatCount="indefinite"
          ></animate>
        </path>
        <path
          d="M20 70 L40 70"
          stroke="#A8E900"
          stroke-width="6"
          stroke-linecap="round"
        >
          <animate
            attributeName="opacity"
            values="0.5;1;0.5"
            dur="0.4s"
            repeatCount="indefinite"
            begin="0.1s"
          ></animate>
        </path>
        <path
          d="M100 70 L120 70"
          stroke="#A8E900"
          stroke-width="6"
          stroke-linecap="round"
        >
          <animate
            attributeName="opacity"
            values="1;0.5;1"
            dur="0.4s"
            repeatCount="indefinite"
            begin="0.1s"
          ></animate>
        </path>
      </g>
      <circle cx="70" cy="70" r="8" fill="#BAFD00">
        <animate
          attributeName="r"
          values="6;10;6"
          dur="0.8s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <text
        x="70"
        y="75"
        font-family="monospace"
        font-size="10"
        fill="#070C0F"
        text-anchor="middle"
        font-weight="700"
      >
        M1
      </text>
    </svg>
  );

  const HedgedIcon = (
    <svg
      width="140"
      height="140"
      viewBox="0 0 140 140"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hedgeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#BAFD00" />
          <stop offset="100%" stopColor="#A8E900" />
        </linearGradient>

        <style>
          {`
            .orbit {
              stroke-dasharray: 120 80;
              animation: orbit 2.6s linear infinite;
            }
            .orbit.reverse {
              animation-direction: reverse;
            }
            .core {
              animation: corePulse 1.8s ease-in-out infinite;
            }
            @keyframes orbit {
              to { stroke-dashoffset: -200; }
            }
            @keyframes corePulse {
              0%,100% { r: 7; opacity: .6; }
              50% { r: 11; opacity: 1; }
            }
          `}
        </style>
      </defs>

      <circle
        cx="70"
        cy="70"
        r="42"
        fill="none"
        stroke="#64748b"
        strokeWidth="3"
        opacity="0.25"
      />

      <path
        d="M70 28 A42 42 0 0 1 112 70"
        fill="none"
        stroke="url(#hedgeGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        className="orbit"
      />

      <path
        d="M28 70 A42 42 0 0 1 70 112"
        fill="none"
        stroke="#A8E900"
        strokeWidth="6"
        strokeLinecap="round"
        className="orbit reverse"
        opacity="0.9"
      />

      <circle cx="70" cy="70" r="9" fill="#BAFD00" className="core" />
    </svg>
  );

const SmartLogicIcon = () => (
  <svg width="140" height="140" viewBox="0 0 140 140">
    <defs>
      <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#BAFD00" />
        <stop offset="1" stopColor="#A8E900" />
      </linearGradient>
    </defs>

    {/* Pulsing center circle */}
    <circle
      cx="70"
      cy="70"
      r="18"
      fill="none"
      stroke="#A8E900"
      strokeWidth="4"
      opacity="0.35"
    >
      <animate
        attributeName="r"
        values="14;22;14"
        dur="1.6s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0.45;0.1;0.45"
        dur="1.6s"
        repeatCount="indefinite"
      />
    </circle>

    {/* Brain nodes */}
    {[50, 70, 90].map((cx, i) =>
      [50, 70, 90].map((cy, j) => (
        <circle
          key={`${i}-${j}`}
          cx={cx}
          cy={cy}
          r="5"
          fill="url(#g1)"
          opacity="0.6"
        >
          <animate
            attributeName="r"
            values="3;6;3"
            dur={`${1 + (i + j) * 0.3}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur={`${1 + (i + j) * 0.3}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))
    )}

    {/* Connections */}
    <line x1="50" y1="50" x2="70" y2="50" stroke="url(#g1)" strokeWidth="2">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
    </line>
    <line x1="70" y1="50" x2="90" y2="50" stroke="url(#g1)" strokeWidth="2">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" />
    </line>
    <line x1="70" y1="50" x2="70" y2="70" stroke="url(#g1)" strokeWidth="2">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite" />
    </line>
  </svg>
);
const SmartLockIcon = () => (
  <svg width="140" height="140" viewBox="0 0 140 140">
    <defs>
      <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#BAFD00" />
        <stop offset="1" stopColor="#A8E900" />
      </linearGradient>
    </defs>

    {/* Outer circle */}
    <circle
      cx="70"
      cy="70"
      r="42"
      fill="none"
      stroke="#94a3b8"
      strokeWidth="6"
    />

    {/* Inner circle */}
    <circle
      cx="70"
      cy="70"
      r="26"
      fill="none"
      stroke="#94a3b8"
      strokeWidth="6"
    />

    {/* Pulsing center */}
    <circle
      cx="70"
      cy="70"
      r="10"
      fill="url(#g1)"
      opacity="0.9"
    >
      <animate
        attributeName="r"
        values="8;12;8"
        dur="1.2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0.3;1;0.3"
        dur="1.2s"
        repeatCount="indefinite"
      />
    </circle>

    {/* Lock shackle */}
    <path
      d="M50 70 V50a20 20 0 0 1 40 0v20"
      fill="none"
      stroke="url(#g1)"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <animate
        attributeName="stroke-dasharray"
        values="0,80;80,0;0,80"
        dur="1.6s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

const ControlledLotGrowthIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="140"
    height="140"
    viewBox="0 0 140 140"
    className="shrink-0"
  >
    {/* Base gray structure */}
    <g
      fill="none"
      stroke="#64748b"
      strokeWidth="6"
      strokeLinejoin="round"
    >
      <rect x="34" y="86" width="72" height="18" rx="9" />
      <rect x="38" y="64" width="64" height="18" rx="9" />
      <rect x="42" y="42" width="56" height="18" rx="9" />
    </g>

    {/* Animated controlled growth overlay */}
    <g opacity="0.55">
      <rect
        x="34"
        y="86"
        width="72"
        height="18"
        rx="9"
        fill="none"
        stroke="#BAFD00"
        strokeWidth="6"
      />
      <rect
        x="38"
        y="64"
        width="64"
        height="18"
        rx="9"
        fill="none"
        stroke="#BAFD00"
        strokeWidth="6"
      />
      <rect
        x="42"
        y="42"
        width="56"
        height="18"
        rx="9"
        fill="none"
        stroke="#A8E900"
        strokeWidth="6"
      />

      {/* Vertical controlled movement */}
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0 18; 0 -10; 0 18"
        dur="1.6s"
        repeatCount="indefinite"
      />

      <animate
        attributeName="opacity"
        values="0.15;0.65;0.15"
        dur="1.6s"
        repeatCount="indefinite"
      />
    </g>

    {/* Growth cap indicator */}
    <text
      x="92"
      y="34"
      fontFamily="system-ui, Segoe UI, Roboto, Arial"
      fontSize="20"
      fill="#BAFD00"
      fontWeight="700"
    >
      1.2X
      <animate
        attributeName="opacity"
        values="0.3;1;0.3"
        dur="1.6s"
        repeatCount="indefinite"
      />
    </text>
  </svg>
);
const AdvancedSafetyFiltersIcon = () => (
  <svg width="120" height="120" viewBox="0 0 140 140">
    <defs>
      <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#BAFD00" />
        <stop offset="1" stopColor="#A8E900" />
      </linearGradient>
    </defs>

    {/* Shield outline */}
    <path
      d="M70 20 L110 36 V68c0 28-18 44-40 56C48 112 30 96 30 68V36Z"
      fill="none"
      stroke="#64748b"
      strokeWidth="6"
      strokeLinejoin="round"
    />

    {/* Animated shield glow */}
    <path
      d="M70 20 L110 36 V68c0 28-18 44-40 56C48 112 30 96 30 68V36Z"
      fill="none"
      stroke="url(#g1)"
      strokeWidth="6"
      opacity="0.4"
    >
      <animate
        attributeName="opacity"
        values="0.2;0.7;0.2"
        dur="1.6s"
        repeatCount="indefinite"
      />
    </path>

    {/* Filter lines */}
    {[52, 66, 80].map((y, i) => (
      <line
        key={i}
        x1="48"
        y1={y}
        x2="92"
        y2={y}
        stroke="url(#g1)"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.6"
      >
        <animate
          attributeName="opacity"
          values="0.2;1;0.2"
          dur={`${1.2 + i * 0.3}s`}
          repeatCount="indefinite"
        />
      </line>
    ))}

    {/* Pulsing core */}
    <circle cx="70" cy="70" r="8" fill="#A8E900">
      <animate
        attributeName="r"
        values="6;10;6"
        dur="1.2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0.4;1;0.4"
        dur="1.2s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

const LiveTradingDashboardIcon = () => (
  <svg width="140" height="140" viewBox="0 0 140 140">
    <defs>
      <linearGradient id="dashGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#BAFD00" />
        <stop offset="100%" stopColor="#A8E900" />
      </linearGradient>
    </defs>

    {/* Dashboard frame */}
    <rect
      x="26"
      y="34"
      width="88"
      height="64"
      rx="12"
      fill="none"
      stroke="#64748b"
      strokeWidth="6"
    />

    {/* Animated chart bars */}
    {[44, 60, 76].map((x, i) => (
      <rect
        key={i}
        x={x}
        y="58"
        width="10"
        height="28"
        rx="3"
        fill="url(#dashGrad)"
        opacity="0.7"
      >
        <animate
          attributeName="height"
          values="16;36;16"
          dur={`${1.2 + i * 0.3}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="70;50;70"
          dur={`${1.2 + i * 0.3}s`}
          repeatCount="indefinite"
        />
      </rect>
    ))}

    {/* Live pulse dot */}
    <circle cx="98" cy="44" r="6" fill="#A8E900">
      <animate
        attributeName="r"
        values="4;8;4"
        dur="1.2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0.4;1;0.4"
        dur="1.2s"
        repeatCount="indefinite"
      />
    </circle>

    {/* Data line */}
    <polyline
      points="38,80 54,70 70,76 86,62 102,68"
      fill="none"
      stroke="url(#dashGrad)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.6"
    >
      <animate
        attributeName="opacity"
        values="0.2;1;0.2"
        dur="1.6s"
        repeatCount="indefinite"
      />
    </polyline>
  </svg>
);
const BuySellIndependenceIcon = () => (
  <svg width="140" height="140" viewBox="0 0 140 140">
    <defs>
      <linearGradient id="bsGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#BAFD00" />
        <stop offset="100%" stopColor="#A8E900" />
      </linearGradient>
    </defs>

    {/* Divider */}
    <line
      x1="70"
      y1="30"
      x2="70"
      y2="110"
      stroke="#64748b"
      strokeWidth="4"
      strokeDasharray="6 6"
      opacity="0.4"
    />

    {/* BUY side */}
    <circle cx="46" cy="70" r="16" fill="none" stroke="url(#bsGrad)" strokeWidth="5">
      <animate
        attributeName="r"
        values="14;18;14"
        dur="1.4s"
        repeatCount="indefinite"
      />
    </circle>

    <path
      d="M46 52 V30 M46 30 L38 38 M46 30 L54 38"
      fill="none"
      stroke="#A8E900"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <animate
        attributeName="opacity"
        values="0.3;1;0.3"
        dur="1.2s"
        repeatCount="indefinite"
      />
    </path>

    {/* SELL side */}
    <circle cx="94" cy="70" r="16" fill="none" stroke="url(#bsGrad)" strokeWidth="5">
      <animate
        attributeName="r"
        values="14;18;14"
        dur="1.4s"
        repeatCount="indefinite"
        begin="0.4s"
      />
    </circle>

    <path
      d="M94 88 V110 M94 110 L86 102 M94 110 L102 102"
      fill="none"
      stroke="#A8E900"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <animate
        attributeName="opacity"
        values="0.3;1;0.3"
        dur="1.2s"
        repeatCount="indefinite"
        begin="0.4s"
      />
    </path>

    {/* Independent logic pulses */}
    <circle cx="46" cy="70" r="4" fill="#BAFD00">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
    </circle>

    <circle cx="94" cy="70" r="4" fill="#BAFD00">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
    </circle>
  </svg>
);

const SessionAwareTradingIcon = () => (
  <svg width="140" height="140" viewBox="0 0 140 140">
    <defs>
      <linearGradient id="sessionGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#BAFD00" />
        <stop offset="100%" stopColor="#A8E900" />
      </linearGradient>
    </defs>

    {/* Clock base */}
    <circle
      cx="70"
      cy="70"
      r="40"
      fill="none"
      stroke="#64748b"
      strokeWidth="6"
      opacity="0.35"
    />

    {/* Session arcs */}
    {[0, 120, 240].map((deg, i) => (
      <path
        key={i}
        d="M70 30 A40 40 0 0 1 110 70"
        fill="none"
        stroke="url(#sessionGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.6"
        transform={`rotate(${deg} 70 70)`}
      >
        <animate
          attributeName="opacity"
          values="0.2;1;0.2"
          dur={`${1.4 + i * 0.3}s`}
          repeatCount="indefinite"
        />
      </path>
    ))}

    {/* Clock hand */}
    <line
      x1="70"
      y1="70"
      x2="70"
      y2="44"
      stroke="#A8E900"
      strokeWidth="5"
      strokeLinecap="round"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 70 70"
        to="360 70 70"
        dur="6s"
        repeatCount="indefinite"
      />
    </line>

    {/* Active session pulse */}
    <circle cx="70" cy="70" r="8" fill="#BAFD00">
      <animate
        attributeName="r"
        values="6;10;6"
        dur="1.2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0.4;1;0.4"
        dur="1.2s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);




  const [modalData, setModalData] = useState(null);

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className=" max-w-[1570px] px-4 mx-auto  md:px-12"
    >
      {/* HEADER */}
      <motion.div variants={item} className="text-center mb-20">
        <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full border border-lime-300 text-lime-300">
          Feature
        </span>

        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold bg-gradient-to-r from-[#FFD700] via-[#BAFD00] to-[#9EFF00] bg-clip-text text-transparent">
          Expert Advisor Features
        </h1>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Professional automation engineered specifically for Gold volatility
        </p>
      </motion.div>

      {/* ================= PRIMARY FEATURES ================= */}
      <motion.div
        variants={container}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mb-8"
      >
        {/* Risk Control */}
        <Card big>
          <button>
            <div className="flex justify-center mb-8">
              {" "}
              <AdaptiveGridIcon />
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-3">
              Adaptive Grid Engine
            </h3>

            <p className="text-gray-400 text-center line-clamp-3">
              Auto-adjusts grid spacing based on market volatility to avoid
              over-trading during strong Gold moves.
            </p>
          </button>
        </Card>

        {/* Smart Pip */}
        <Card big>
          <button>
            <div className="flex justify-center mb-8">
              <SmartLogicIcon />
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-3">
              Smart Take Profit
            </h3>
            <p className="text-gray-400 line-clamp-4 text-center">
              Dynamic take-profit logic adapts to volatility for balanced exits
              instead of fixed, risky targets.
            </p>
          </button>
        </Card>

        {/* Basket TP */}
        <Card big>
          <button>
            <div className="flex justify-center mb-8">
            <SmartLockIcon/>
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-3">
              Smart Lock Protection
            </h3>
            <p className="text-gray-400 text-center">
              Locks profit and activates break-even once a basket reaches safe
              profit levels.
            </p>
          </button>
        </Card>

        {/* Martingale */}
        <Card big>
          <button>
            <div className="flex justify-center mb-8">
              <ControlledLotGrowthIcon/>
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-3">
              Controlled Lot Growth
            </h3>
            <p className="text-gray-400 text-center line-clamp-3">
              No unlimited martingale — lot size, trade count, and exposure are
              strictly capped.
            </p>
          </button>
        </Card>
      </motion.div>

      {/* ================= SECONDARY FEATURES ================= */}
      <motion.div
        variants={container}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {/* Realtime */}
        <Card>
          <div className="flex justify-center mb-4"><AdvancedSafetyFiltersIcon/></div>
          <h4 className="text-lg font-semibold text-white">
            Advanced Safety Filters
          </h4>
          <p className="text-sm text-gray-500 mt-2">
            Built-in margin, spread, and execution checks protect your account
            from bad market conditions.
          </p>
        </Card>

        {/* High Frequency */}
        <Card className="p-6 bg-slate-900/70 border border-slate-800 rounded-2xl">
          {/* ICON */}
          <div className="flex justify-center mb-5"><SessionAwareTradingIcon/></div>

          {/* TEXT */}
          <h4 className="text-lg font-semibold text-white text-center">
            Session-Aware Trading
          </h4>

          <p className="text-sm text-gray-400 mt-2 text-center leading-relaxed">
            Optimized to trade Gold during cleaner, high-liquidity sessions for
            more stable behavior.
          </p>
        </Card>

        {/* Dual Hedged */}
        <Card className="p-6 bg-slate-900/70 border border-slate-800 rounded-2xl">
          {/* ICON */}
          <div className="flex justify-center mb-5"><BuySellIndependenceIcon/></div>

          {/* TEXT */}
          <h4 className="text-lg font-semibold text-white text-center">
            Buy & Sell Independence
          </h4>

          <p className="text-sm text-gray-400 mt-2 text-center leading-relaxed">
            Separate Buy & Sell logic with unique magic numbers for better
            control and tracking.
          </p>
        </Card>

        {/* Configurable Risk */}
        <Card className="p-6 bg-slate-900/70 border border-slate-800 rounded-2xl">
          {/* ICON */}
          <div className="flex justify-center mb-5">
           <LiveTradingDashboardIcon/>
          </div>

          {/* TEXT */}
          <h4 className="text-lg font-semibold text-white text-center">
            Live Trading Dashboard
          </h4>

          <p className="text-sm text-gray-400 mt-2 text-center leading-relaxed">
            Real-time stats, ATR values, and trade data — full transparency, no
            black-box trading.
          </p>
        </Card>
      </motion.div>
      <FeatureModal
        open={!!modalData}
        title={modalData?.title}
        description={modalData?.description}
        onClose={() => setModalData(null)}
      />
    </motion.section>
  );
};

export default Feature;
