import React from "react";

export default function WaitingVerify() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">⏳ Please verify your email</h1>
      <p className="mb-6 text-gray-300">
        We have sent a verification email to your inbox. 
        Please check your email and click the verification link to continue.
      </p>
    </div>
  );
}
