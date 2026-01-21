import React from "react";
import { motion } from "framer-motion";

const Product = () => {
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
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className=" mt-16 text-white max-w-6xl mx-auto px-5">
        {/* Noted : Title */}
        <motion.h1
          variants={item}
          className="text-center py-5 text-[#A8E900] text-3xl font-bold md:text-5xl"
        >
          Our Products
        </motion.h1>
        <motion.p
          variants={item}
          className="text-center text-gray-500 mb-10 mt-5"
        >
          Professional automation engineered for Gold volatility
        </motion.p>
      </div>

      <div className="marketplace-content grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {/* Noted : Card 1 */}
        <div className="content-card flex flex-col  border border-neutral-700 hover:border-[#BAFD00] cursor-pointer p-6 bg-[#111] rounded-lg">
          <div className="card-title">
            <h3 className="text-lg font-bold mb-2 text-white">Trading Robot</h3>
          </div>
          <div className="card-body">
            <p className="text-gray-500 line-clamp-2 mb-5">
              Sn1P3r Flip is a pro-level Grid Martingale EA for MetaTrader 5
              that uses dual-direction Smart Hedge technology, strong safety
              systems, and an advanced dashboard. It’s highly customizable,
              balancing aggressive profit potential with institutional-style
              risk management to suit both conservative and aggressive trading
              styles.
            </p>
            <p className="text-3xl text-[#BAFD00] font-bold">$200.00</p>
            <p className="text-sm text-gray-300 mb-5">Monothly</p>

            <div class="border-t pt-3">
              <ul class="space-y-2 text-gray-500">
                <li class="flex items-start gap-2  text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span class="text-muted-foreground">Grid trading system</span>
                </li>
                <li class="flex items-start gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span class="text-muted-foreground">Dynamic lot sizing</span>
                </li>
                <li class="flex items-start gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span class="text-muted-foreground">Adaptive trading</span>
                </li>
                <li class="flex items-start gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span class="text-muted-foreground">Smart hedge system</span>
                </li>
                <li class="flex items-start gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span class="text-muted-foreground">Smart lock system</span>
                </li>
                <li class="pl-6 text-sm text-muted-foreground">
                  +9 more features
                </li>
              </ul>

              <button
                onClick={() => navigate("/order")}
                class="mt-4 w-full  rounded-md  px-4 py-2 text-sm bg-[#A8E900]  text-black/70 font-bold text-primary-foreground  focus:outline-none focus:ring-2  text-black  transition shadow-[0_0_20px_rgba(168,233,0,0.45)] hover:brightness-110 hover:shadow-[0_0_35px_rgba(168,233,0,0.85)] focus:ring-primary focus:ring-offset-2"
              >
                View Details & Order
              </button>
            </div>
          </div>
        </div>

        {/* Noted : Card 1 */}
        <div className="content-card flex flex-col  border border-neutral-700 hover:border-[#BAFD00] cursor-pointer p-6 bg-[#111] rounded-lg">
          <div className="card-title">
            <h3 className="text-lg font-bold mb-2 text-white">Trading Robot</h3>
          </div>
          <div className="card-body">
            <p className="text-gray-500 line-clamp-2 mb-5">
              Sn1P3r Flip is a pro-level Grid Martingale EA for MetaTrader 5
              that uses dual-direction Smart Hedge technology, strong safety
              systems, and an advanced dashboard. It’s highly customizable,
              balancing aggressive profit potential with institutional-style
              risk management to suit both conservative and aggressive trading
              styles.
            </p>
            <p className="text-3xl text-[#BAFD00] font-bold">$200.00</p>
            <p className="text-sm text-gray-300 mb-5">Monothly</p>

            <div class="border-t pt-3">
              <ul class="space-y-2 text-gray-500">
                <li class="flex items-start gap-2  text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span class="text-muted-foreground">Grid trading system</span>
                </li>
                <li class="flex items-start gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span class="text-muted-foreground">Dynamic lot sizing</span>
                </li>
                <li class="flex items-start gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span class="text-muted-foreground">Adaptive trading</span>
                </li>
                <li class="flex items-start gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span class="text-muted-foreground">Smart hedge system</span>
                </li>
                <li class="flex items-start gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span class="text-muted-foreground">Smart lock system</span>
                </li>
                <li class="pl-6 text-sm text-muted-foreground">
                  +9 more features
                </li>
              </ul>

              <button
                onClick={() => navigate("/order")}
                class="mt-4 w-full  rounded-md  px-4 py-2 text-sm bg-[#A8E900]  text-black/70 font-bold text-primary-foreground  focus:outline-none focus:ring-2  text-black  transition shadow-[0_0_20px_rgba(168,233,0,0.45)] hover:brightness-110 hover:shadow-[0_0_35px_rgba(168,233,0,0.85)] focus:ring-primary focus:ring-offset-2"
              >
                View Details & Order
              </button>
            </div>
          </div>
        </div>

        {/* Noted : Card 1 */}
        <div className="content-card flex flex-col  border border-neutral-700 hover:border-[#BAFD00] cursor-pointer p-6 bg-[#111] rounded-lg">
          <div className="card-title">
            <h3 className="text-lg font-bold mb-2 text-white">Trading Robot</h3>
          </div>
          <div className="card-body">
            <p className="text-gray-500 line-clamp-2 mb-5">
              Sn1P3r Flip is a pro-level Grid Martingale EA for MetaTrader 5
              that uses dual-direction Smart Hedge technology, strong safety
              systems, and an advanced dashboard. It’s highly customizable,
              balancing aggressive profit potential with institutional-style
              risk management to suit both conservative and aggressive trading
              styles.
            </p>
            <p className="text-3xl text-[#BAFD00] font-bold">$200.00</p>
            <p className="text-sm text-gray-300 mb-5">Monothly</p>

            <div class="border-t pt-3">
              <ul class="space-y-2 text-gray-500">
                <li class="flex items-start gap-2  text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span class="text-muted-foreground">Grid trading system</span>
                </li>
                <li class="flex items-start gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span class="text-muted-foreground">Dynamic lot sizing</span>
                </li>
                <li class="flex items-start gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span class="text-muted-foreground">Adaptive trading</span>
                </li>
                <li class="flex items-start gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span class="text-muted-foreground">Smart hedge system</span>
                </li>
                <li class="flex items-start gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span class="text-muted-foreground">Smart lock system</span>
                </li>
                <li class="pl-6 text-sm text-muted-foreground">
                  +9 more features
                </li>
              </ul>

              <button
                onClick={() => navigate("/order")}
                class="mt-4 w-full  rounded-md  px-4 py-2 text-sm bg-[#A8E900]  text-black/70 font-bold text-primary-foreground  focus:outline-none focus:ring-2  text-black  transition shadow-[0_0_20px_rgba(168,233,0,0.45)] hover:brightness-110 hover:shadow-[0_0_35px_rgba(168,233,0,0.85)] focus:ring-primary focus:ring-offset-2"
              >
                View Details & Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
