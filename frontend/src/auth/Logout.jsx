import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/user/login"); // or "/admin/login" based on your preference
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <p className="text-gray-600 text-lg">Logging you out...</p>
    </div>
  );
};

export default Logout;
