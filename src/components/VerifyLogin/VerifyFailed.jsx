import { useNavigate } from "react-router-dom";

export default function VerifyFailed() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-md rounded-xl bg-gray-800 p-8 text-center shadow-lg">
        
        {/* Icon */}
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-600/20">
          <span className="text-3xl">❌</span>
        </div>

        {/* Title */}
        <h1 className="mb-2 text-2xl font-bold text-white">
          Verification Failed
        </h1>

        {/* Message */}
        <p className="mb-6 text-sm text-gray-400">
          This verification link is invalid or has expired.
          Please try logging in again to receive a new verification email.
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/login")}
            className="w-full rounded-lg bg-green-500 px-4 py-2 font-medium text-white transition hover:bg-green-600"
          >
            Back to Login
          </button>

          <button
            onClick={() => navigate("/")}
            className="w-full rounded-lg border border-gray-600 px-4 py-2 text-sm text-gray-300 transition hover:bg-gray-700"
          >
            Go to Home
          </button>
        </div>

        {/* Footer */}
        <p className="mt-6 text-xs text-gray-500">
          If you continue to have problems, please contact support.
        </p>
      </div>
    </div>
  );
}
