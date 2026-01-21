import React from "react";

const SignUpForm = () => {
  return (
    <div className="modal-content">
      <form onSubmit={handleSubmit}>
        <p className="mb-4 text-sm text-gray-500">
          Create your account by filling the form below.
        </p>

        {/* Name Input */}
        <div className="relative mb-4 grid grid-cols-2 gap-4">
          <div className="div">
            <label className="block mb-1 text-sm font-medium dark:text-gray-200">
              First Name
            </label>
            <input
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              type="text"
              placeholder="John"
              className={`w-full pl-3 h-10 rounded-lg border bg-black/20  focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                error.first_name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {error.first_name && (
              <p className="text-red-500 text-sm mt-1">{error.first_name[0]}</p>
            )}
          </div>
          <div className="div">
            <label className="block mb-1 text-sm font-medium dark:text-gray-200">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              placeholder="Doe"
              className={`w-full pl-3 h-10 rounded-lg border bg-black/20  focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                error.last_name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {error.last_name && (
              <p className="text-red-500 text-sm mt-1">{error.last_name[0]}</p>
            )}
          </div>
        </div>

        {/* Email Input */}
        <div className="relative mb-4">
          <label className="block mb-1 text-sm font-medium dark:text-gray-200">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="name@example.com"
            className={`w-full pl-3 h-10 rounded-lg border bg-black/20  focus:ring-2 focus:ring-blue-500 focus:outline-none ${
              error.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {error.email && (
            <p className="text-red-500 text-sm mt-1">{error.email[0]}</p>
          )}
        </div>

        {/* Password Input */}
        <div className="relative mb-4">
          <label className="block mb-1 text-sm font-medium dark:text-gray-200">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className={`w-full pl-3 h-10 rounded-lg border bg-black/20  focus:ring-2 focus:ring-blue-500 focus:outline-none ${
              error.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {error.password && (
            <p className="text-red-500 text-sm mt-1">{error.password[0]}</p>
          )}
        </div>

        {/* Confirm Password Input */}
        <div className="relative mb-4">
          <label className="block mb-1 text-sm font-medium dark:text-gray-200">
            Confirm Password
          </label>
          <input
            type="password"
            name="password_confirmation"
            value={form.password_confirmation}
            onChange={handleChange}
            placeholder="Confirm Password"
            className={`w-full pl-3 h-10 rounded-lg border bg-black/20  focus:ring-2 focus:ring-blue-500 focus:outline-none ${
              error.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {error.password_confirmation && (
            <p className="text-red-500 text-sm mt-1">
              {error.password_confirmation[0]}
            </p>
          )}
        </div>

        {/* Notd : Captcha Token */}
        {/* <div className="flex items-center justify-center">
                <Turnstile
                  siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                  onSuccess={(token) => setCaptchaToken(token)}
                  onExpire={() => setCaptchaToken("")}
                />
              </div> */}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 mt-2 font-medium bg-[#A8E900] text-black rounded-md   flex items-center justify-center gap-2  disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Processing..." : "Sign Up"}
        </button>

        {/* Switch to Sign In */}
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <span
            className="text-[#BAFD00] font-semibold hover:underline cursor-pointer"
            onClick={() => setIsSignUp(false)}
          >
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
