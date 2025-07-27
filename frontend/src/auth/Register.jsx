// src/auth/Register.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { registerMember } = useAuth();
  const [form, setForm] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await registerMember(form);
    if (result.success) {
      navigate("/login");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-2xl mb-4 text-center font-semibold">User Registration</h2>
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <input name="name" placeholder="Full Name" className="w-full p-2 border mb-3 rounded" onChange={handleChange} required />
        <input name="dob" type="date" className="w-full p-2 border mb-3 rounded" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" className="w-full p-2 border mb-3 rounded" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" className="w-full p-2 border mb-3 rounded" onChange={handleChange} required />
        <input name="mobile" placeholder="Mobile Number" className="w-full p-2 border mb-3 rounded" onChange={handleChange} required />
        <input name="address" placeholder="Address" className="w-full p-2 border mb-3 rounded" onChange={handleChange} required />
        <button className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800">Register</button>
      </form>
    </div>
  );
};

export default Register;
