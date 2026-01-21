import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function VerifyLogin() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("verifying"); // "verifying" | "success" | "failed"

  useEffect(() => {
    const verifyLogin = async () => {
      const token = params.get("token");
      const user = params.get("user");

      if (!token || !user) {
        setStatus("failed");
        return navigate("/verify-failed");
      }

      try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}verify-login`, {
          token,
          user,
        });

        // Save JWT token
        localStorage.setItem("token", res.data.access_token);

        setStatus("success");
        navigate("/verify-success");
      } catch (err) {
        console.error("VERIFY ERROR:", err.response?.data || err);
        setStatus("failed");
        navigate("/verify-failed");
      }
    };

    verifyLogin();
  }, [params, navigate]);

  // Optional: display different messages based on status
  const getMessage = () => {
    switch (status) {
      case "verifying":
        return "⏳ Verifying your login...";
      case "success":
        return "✅ Login verified successfully!";
      case "failed":
        return "❌ Verification failed. Link may be expired or invalid.";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">{getMessage()}</h1>
      {status === "verifying" && (
        <p className="text-gray-300">
          Please wait while we verify your login. You will be redirected shortly.
        </p>
      )}
    </div>
  );
}
