import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const LoginPage = () => {
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [membership, setMembership] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ mobile, email, membership })
    });

    const data = await res.json();
    alert(data.message);

    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>LOGIN / SIGN UP</h2>

        <input
          placeholder="Mobile Number"
          onChange={(e) => setMobile(e.target.value)}
        />

        <input
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Membership ID"
          onChange={(e) => setMembership(e.target.value)}
        />

        <button onClick={handleSubmit}>CONTINUE</button>
      </div>
    </div>
  );
};

export default LoginPage;