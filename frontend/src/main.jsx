import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import ServicesList from "./pages/ServicesList.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Company from "./pages/Company.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/SignUp.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import RefundPolicy from "./pages/RefundPolicy.jsx";
import Terms from "./pages/Terms.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      // {
      //   path: "/signup",
      //   element: <Signup />,
      // },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/services",
        element: <ServicesList />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/refund",
        element: <RefundPolicy />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      // {
      //   path: "/agent",
      //   element: <BeneficiaryDashboard />,
      // },
      // {
      //   path: "/agent2",
      //   element: <BeneficiaryDashboard2 />,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
