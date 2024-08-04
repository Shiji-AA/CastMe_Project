import { lazy, Suspense } from "react";
import LoadingSpinner from "../Components/Common/LoadingSpinner";
const Footer = lazy(() => import("../Components/Users/Footer"));
const Login = lazy(() => import("../Components/Users/Login"));
const Navbar = lazy(() => import("../Components/Users/Navbar"));

function LandingPage() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner/>}>
        <Navbar />
        <Login />
        <Footer />
      </Suspense>
    </>
  );
}
export default LandingPage;
