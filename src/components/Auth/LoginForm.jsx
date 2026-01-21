import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthModal } from "../../context/AuthModalContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const { closeModal, openSignup } = useAuthModal();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}user/login`,
        form
      );

      closeModal();
      navigate("/waiting-verify");
    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2 className="text-xl font-semibold mb-4">Sign In</h2>

      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        className="w-full mb-3 p-2 rounded bg-black/20"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        className="w-full mb-4 p-2 rounded bg-black/20"
      />

      <button
        disabled={loading}
        className="w-full bg-[#A8E900] py-2 rounded text-black"
      >
        {loading ? "Processing..." : "Login"}
      </button>

      <p className="text-sm mt-4 text-center">
        Don’t have an account?{" "}
        <span
          onClick={openSignup}
          className="text-[#BAFD00] cursor-pointer"
        >
          Sign Up
        </span>
      </p>
    </form>
  );
};

export default LoginForm;
