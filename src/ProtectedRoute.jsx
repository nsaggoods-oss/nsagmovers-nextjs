import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!token) {
        // Not logged in, redirect to login
        router.push("/login");
      }
    }
  }, [token, router]);

  // If token is not available, return null or loading state while redirecting
  if (!token) {
    return null; // Or you can show a loading spinner here
  }

  // Logged in, allow access
  return children;
};

export default ProtectedRoute;
