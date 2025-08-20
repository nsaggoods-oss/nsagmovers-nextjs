"use client";

import { useEffect, useState, Fragment, Suspense } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Preloader from "../elements/Preloader";

// Dynamically import LoginPage
const LoginPage = dynamic(() => import("../components/LoginPage"), {
  suspense: true,
});

const Login = () => {
  const router = useRouter();
  const [shouldShowLogin, setShouldShowLogin] = useState(false);

  useEffect(() => {
    // Check client-side only
    const token = localStorage.getItem("token");

    if (token) {
      router.replace("/"); // Redirect to home if token exists
    } else {
      setShouldShowLogin(true); // Show login component
    }
  }, [router]);

  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        {shouldShowLogin && <LoginPage />}
      </Suspense>
    </Fragment>
  );
};

export default Login;
