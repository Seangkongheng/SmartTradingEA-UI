import React from "react";
import { useNavigate } from "react-router-dom";

export default function VerifySuccess() {
  const navigate = useNavigate();

  const handleOk = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">✅ Email Verified Successfully!</h1>
      <p className="mb-6 text-gray-300">
        Your email has been verified. Click "OK" to go to your dashboard.
      </p>
      <button
        onClick={handleOk}
        className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold"
      >
        OK
      </button>
    </div>
  );
}
