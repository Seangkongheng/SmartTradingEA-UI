import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Verify() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}verify-login/${id}`,
        );

        // Save token
        localStorage.setItem("token", res.data.access_token);

        // ✅ Redirect to success page
        navigate("/verify-success");
      } catch (err) {
        console.error("VERIFY ERROR:", err);
        navigate("/verify-login?status=failed");
      }
    };

    verifyEmail();
  }, [id, navigate]);
  return (
    <p className="text-center mt-20 text-white">Verifying your email...</p>
  );
}
