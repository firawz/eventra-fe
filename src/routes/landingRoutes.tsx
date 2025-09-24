import { RouteObject } from "react-router-dom";
import LandingLayout from "../layouts/LandingLayout";
import HomePage from "../pages/landing/HomePage";
import AboutPage from "../pages/landing/AboutPage";
import BlogPage from "../pages/landing/BlogPage";
import ContactPage from "../pages/landing/ContactPage";
import FeaturesPage from "../pages/landing/FeaturesPage";
import PricingPage from "../pages/landing/PricingPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

const landingRoutes: RouteObject[] = [
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/features", element: <FeaturesPage /> },
      { path: "/pricing", element: <PricingPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <RegisterPage /> },
      // { path: "/event", element: <EventPage /> },
    ],
  },
];

export default landingRoutes;
