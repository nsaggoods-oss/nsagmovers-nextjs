
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "../lib/apiService";
import { toast, Toaster } from "react-hot-toast";
import DotLoader from "react-spinners/DotLoader";
import Image from "next/image";

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setFormError("");

    let hasError = false;

    if (!email.trim()) {
      setEmailError("Email is required");
      hasError = true;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      hasError = true;
    }

    if (hasError) return;

    setLoading(true);

    try {
      const data = await loginUser(email, password);

      // Only run in client-side
      if (typeof window !== "undefined") {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      toast.success("User Login");

      // Redirect to blog-list
      router.push("/blog-list");
    } catch (err) {
      const status = err.response?.status;
      const message = err.response?.data?.message || "Login failed";

      if (status === 401) {
        toast.error("Unauthorized: Invalid email or password.");
      } else if (status === 500) {
        toast.error("Invalid email & password.");
      } else {
        toast.error(message);
      }

      setFormError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />

      {loading && (
        <div className="loader-overlay">
          <DotLoader color="#FF5722" size={60} />
        </div>
      )}

      <div className="login-page">
        <div className="login-card">
          <Image
            src="/assets/img/logo.webp"
            alt="Logo"
            width={150}
            height={80}
            className="login-logo"
          />
          <h2 className="title">Welcome SNAG</h2>

          <form className="form" onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="error-text">{emailError}</p>}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p className="error-text">{passwordError}</p>}
            </div>

            {formError && <p className="error-text">{formError}</p>}

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
