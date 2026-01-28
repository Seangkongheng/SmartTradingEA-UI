import React from "react";
import { motion } from "framer-motion";

const FeaturePage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        mass: 0.8,
      },
    },
  };

  const RealtimeIcon = (
    <svg
      className="w-12 h-12 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
    </svg>
  );

  const FrequencyIcon = (
    <svg
      className="w-12 h-12 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
        clipRule="evenodd"
      />
    </svg>
  );

  const HedgedIcon = (
    <svg
      className="w-12 h-12 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
        clipRule="evenodd"
      />
    </svg>
  );
  // bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700
  const Card = ({ children, big, className = "" }) => (
    <motion.div
      variants={item}
      className={`rounded-2xl p-6 border border-lime-100 hover:border-[hsl(59,100%,50%)] transition-all duration-300 shadow-xl hover:shadow-yellow-500/10 flex flex-col h-full ${className}`}
    >
      {children}
    </motion.div>
  );

  return (
    <div className=" text-white p-10">
      {/* Hero Section */}

      <div className=" mt-16 text-white max-w-6xl mx-auto px-5">
        {/* Noted : Title */}

        <motion.h1
          variants={item}
          className="mb-6  bg-gradient-to-r from-[#FFD700] via-[#BAFD00] to-[#9EFF00]
                         bg-clip-text text-transparent text-2xl sm:text-6xl font-bold text-center"
        >
          Features
        </motion.h1>

        <motion.p
          variants={item}
          className="text-center text-gray-500 mb-10 mt-5"
        >
          Professional automation engineered for Gold volatility
        </motion.p>
      </div>

      {/* Features Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container  mx-auto px-4 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {/* Feature 1: Advanced Adaptive Grid System */}
        <Card>
          <div className="flex items-start justify-center  gap-4 mb-4">
            <div className="flex-shrink-0">
              <svg
                className="w-12 h-12 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-white mb-2">
                Advanced Adaptive Grid System (Volatility-Aware)
              </h3>
            </div>
          </div>

          <p className="text-slate-300 mb-4 leading-relaxed">
            Our EA uses an adaptive grid engine that automatically adjusts trade
            spacing based on market volatility, instead of fixed or aggressive
            martingale behavior.
          </p>
          <ul className="text-slate-400 space-y-2 mb-4 text-sm">
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              <span>Wider grid during high volatility</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              <span>Prevents over-stacking trades</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              <span>Designed to survive strong Gold movements</span>
            </li>
          </ul>
          <div className="mt-auto pt-4 border-t border-slate-700 space-y-1 text-sm">
            <p className="text-yellow-400 font-semibold">
              ✓ ATR-based adaptive PipStep
            </p>
            <p className="text-yellow-400 font-semibold">
              ✓ Dynamic expansion from 300% to 500% of base grid
            </p>
            <p className="text-yellow-400 font-semibold">
              ✓ Optimized for XAUUSD market behavior
            </p>
          </div>
        </Card>

        {/* Feature 2: Intelligent Take Profit Management */}
        <Card>
          <div className="flex items-start justify-center items-center gap-4 mb-4">
            <div className="flex-shrink-0">
              <svg
                className="w-12 h-12 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold  text-white mb-2">
                Intelligent Take Profit Management
              </h3>
            </div>
          </div>
          <p className="text-slate-300 mb-4 leading-relaxed">
            The EA dynamically adapts take-profit levels based on market
            conditions using ATR volatility logic, instead of static TP targets.
          </p>
          <div className="mb-4">
            <p className="text-slate-400 font-semibold mb-2">Benefits:</p>
            <ul className="text-slate-400 space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Avoids too-small TP in volatile markets</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Captures reasonable profit without over-holding</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Improves trade cycle efficiency</span>
              </li>
            </ul>
          </div>
          <div className="mt-auto pt-4 border-t border-slate-700 space-y-1 text-sm">
            <p className="text-yellow-400 font-semibold">
              ✓ Adaptive Take Profit
            </p>
            <p className="text-yellow-400 font-semibold">
              ✓ Volatility-based TP range (50% – 300%)
            </p>
            <p className="text-yellow-400 font-semibold">
              ✓ Balanced profit-taking logic
            </p>
          </div>
        </Card>

        {/* Feature 3: Smart Lock Protection System */}
        <Card>
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0">
              <svg
                className="w-12 h-12 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold  text-white mb-2">
                Smart Lock Protection System
              </h3>
            </div>
          </div>
          <p className="text-slate-300 mb-4 leading-relaxed">
            A built-in Smart Lock mode protects profits when the basket reaches
            a defined level
          </p>
          <div className="mb-4">
            <p className="text-slate-400 font-semibold mb-2">
              How it protects you:
            </p>
            <ul className="text-slate-400 space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Locks minimum profit once reached</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Automatically moves trades to break-even</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Reduces risk of winning baskets turning into losses</span>
              </li>
            </ul>
          </div>
          <div className="mt-auto pt-4 border-t border-slate-700 space-y-1 text-sm">
            <p className="text-yellow-400 font-semibold">
              ✓ Profit lock activation
            </p>
            <p className="text-yellow-400 font-semibold">
              ✓ Automatic break-even protection
            </p>
            <p className="text-yellow-400 font-semibold">
              ✓ Designed for drawdown control
            </p>
          </div>
        </Card>

        {/* Feature 4: Controlled Lot Growth */}
        <Card>
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 relative">
              <svg
                className="w-12 h-12 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-slate-900 text-xs font-bold px-2 py-1 rounded-full">
                2x
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold  text-white mb-2">
                Controlled Lot Growth (No Dangerous Martingale)
              </h3>
            </div>
          </div>
          <p className="text-slate-300 mb-4 leading-relaxed">
            The EA uses controlled DCA logic with defined limits — not unlimited
            martingale.
          </p>
          <div className="mb-4">
            <p className="text-slate-400 font-semibold mb-2">
              Risk-aware design:
            </p>
            <ul className="text-slate-400 space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Fixed starting lot with capped growth</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Maximum lot size protection</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Maximum trade count limit</span>
              </li>
            </ul>
          </div>
          <div className="mt-auto pt-4 border-t border-slate-700 space-y-1 text-sm">
            <p className="text-yellow-400 font-semibold">
              ✓ Layer multiplier: controlled (1.4x)
            </p>
            <p className="text-yellow-400 font-semibold">
              ✓ Maximum trades capped
            </p>
            <p className="text-yellow-400 font-semibold">
              ✓ Maximum lot size enforced
            </p>
          </div>
        </Card>

        {/* Feature 5: Built-In Safety & Risk Filters */}
        <Card>
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0">{RealtimeIcon}</div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold  text-whitemb-2">
                Built-In Safety & Risk Filters
              </h3>
            </div>
          </div>
          <p className="text-slate-300 mb-4 leading-relaxed">
            Multiple safety layers protect your account from unfavorable trading
            conditions.
          </p>
          <div className="mb-4">
            <p className="text-slate-400 font-semibold mb-2">Includes:</p>
            <ul className="text-slate-400 space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Margin protection</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Spread filter to avoid bad execution</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Optional volatility pause</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Optional daily loss limit</span>
              </li>
            </ul>
          </div>
          <div className="mt-auto pt-4 border-t border-slate-700 space-y-1 text-sm">
            <p className="text-yellow-400 font-semibold">✓ Free margin check</p>
            <p className="text-yellow-400 font-semibold">✓ Spread protection</p>
            <p className="text-yellow-400 font-semibold">
              ✓ Loss prevention logic
            </p>
            <p className="text-yellow-400 font-semibold">
              ✓ Broker execution aware
            </p>
          </div>
        </Card>

        {/* Feature 6: Session-Aware Trading */}
        <Card>
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0">{FrequencyIcon}</div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold  text-white mb-2">
                Session-Aware Trading (Gold-Optimized)
              </h3>
            </div>
          </div>
          <p className="text-slate-300 mb-4 leading-relaxed">
            The EA is designed to work best during specific market sessions
            where Gold liquidity behaves more predictably.
          </p>
          <div className="mb-4">
            <p className="text-slate-400 font-semibold mb-2">
              Why this is important:
            </p>
            <ul className="text-slate-400 space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Avoids random low-liquidity hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Trades when Gold has cleaner price action</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Optional auto-close after session</span>
              </li>
            </ul>
          </div>
          <div className="mt-auto pt-4 border-t border-slate-700 space-y-1 text-sm">
            <p className="text-yellow-400 font-semibold">
              ✓ CBDR / Asia / Evening sessions
            </p>
            <p className="text-yellow-400 font-semibold">
              ✓ Time-based execution control
            </p>
            <p className="text-yellow-400 font-semibold">
              ✓ Optional session close logic
            </p>
          </div>
        </Card>

        {/* Feature 7: Buy & Sell Logic */}
        <Card>
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0">{HedgedIcon}</div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold  text-white mb-2">
                Buy & Sell Logic with Independent Control
              </h3>
            </div>
          </div>
          <p className="text-slate-300 mb-4 leading-relaxed">
            The EA can trade Buy and Sell independently, each with its own magic
            number.
          </p>
          <div className="mb-4">
            <p className="text-slate-400 font-semibold mb-2">
              What this gives you:
            </p>
            <ul className="text-slate-400 space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Better trade separation</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Cleaner risk management</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Easier monitoring & optimization</span>
              </li>
            </ul>
          </div>
          <div className="mt-auto pt-4 border-t border-slate-700 space-y-1 text-sm">
            <p className="text-yellow-400 font-semibold">
              ✓ Independent Buy/Sell logic
            </p>
            <p className="text-yellow-400 font-semibold">
              ✓ Clean trade identification
            </p>
            <p className="text-yellow-400 font-semibold">
              ✓ Advanced portfolio setups possible
            </p>
          </div>
        </Card>

        {/* Feature 8: Real-Time Dashboard */}
        <Card>
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0">
              <svg
                className="w-12 h-12 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold  text-white mb-2">
                Real-Time Dashboard & Transparency
              </h3>
            </div>
          </div>
          <p className="text-slate-300 mb-4 leading-relaxed">
            The EA includes a live dashboard so you always know what the system
            is doing.
          </p>
          <div className="mb-4">
            <p className="text-slate-400 font-semibold mb-2">
              Displayed information:
            </p>
            <ul className="text-slate-400 space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>ATR value & volatility</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Trade statistics</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Advanced performance data</span>
              </li>
            </ul>
          </div>
          <div className="mt-auto pt-4 border-t border-slate-700 space-y-1 text-sm">
            <p className="text-yellow-400 font-semibold">✓ Full transparency</p>
            <p className="text-yellow-400 font-semibold">
              ✓ No "black box" behavior
            </p>
            <p className="text-yellow-400 font-semibold">
              ✓ Trader-friendly interface
            </p>
          </div>
        </Card>

        {/* Feature 9: Designed for Exness & Gold Traders */}
        <Card>
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0">
              <svg
                className="w-12 h-12 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold  text-white mb-2">
                Designed for Exness & Gold Traders
              </h3>
            </div>
          </div>
          <p className="text-slate-300 mb-4 leading-relaxed">
            This EA is built specifically for:
          </p>
          <ul className="text-slate-400 space-y-2 mb-4 text-sm">
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              <span>XAUUSD (Gold)</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              <span>Exness execution environment</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              <span>Cent or Standard accounts</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              <span>Traders who prioritize account survival</span>
            </li>
          </ul>
          <div className="mt-auto pt-4 border-t border-slate-700 space-y-1 text-sm">
            <p className="text-yellow-400 font-semibold">
              ✓ Exness-friendly logic
            </p>
            <p className="text-yellow-400 font-semibold">
              ✓ Gold-specific behavior
            </p>
            <p className="text-yellow-400 font-semibold">
              ✓ Community-tested settings
            </p>
          </div>
        </Card>

        {/* Feature 10: Why This EA Is Different */}
        <Card className="md:col-span-2 lg:col-span-3">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0">
              <svg
                className="w-12 h-12 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold  text-white mb-4">
                Why This EA Is Different
              </h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Unlike aggressive grid or martingale EAs, this system focuses
                on:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <ul className="text-slate-400 space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Market-adaptive spacing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Controlled exposure</span>
                  </li>
                </ul>
                <ul className="text-slate-400 space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Profit protection logic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Long-term account survival</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Community-driven optimization</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-yellow-500/30">
                <p className="text-slate-300 text-lg font-semibold">
                  This EA is not a get-rich-quick robot.
                </p>
                <p className="text-slate-400 mt-2">
                  It is designed for traders who understand{" "}
                  <span className="text-yellow-400 font-semibold">
                    risk management first, profit second
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Feature 11: Honest Note */}
        <Card className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-yellow-900/20 to-slate-900 border-yellow-500/50">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg
                className="w-12 h-12 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold  text-whitemb-3">
                Honest Note (Builds Trust)
              </h3>
              <p className="text-lg text-slate-200 leading-relaxed">
                <span className="font-semibold text-yellow-300">
                  No EA can eliminate risk.
                </span>
                <br />
                This system is designed to{" "}
                <span className="text-yellow-300">
                  manage risk intelligently
                </span>
                , not remove it.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default FeaturePage;
