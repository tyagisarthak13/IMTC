import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Solution from "./pages/Solution.jsx";
import ServicesList from "./pages/ServicesList.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import Partners from "./pages/Partners.jsx";
import Contact from "./pages/Contact.jsx";
import APIBanking from "./pages/APIBanking.jsx";
import Home from "./pages/Home.jsx";
import Company from "./pages/Company.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/SignUp.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import BeneficiaryDashboard from "./pages/Agent.jsx";
import BeneficiaryDashboard2 from "./pages/Agent2.jsx";
import Dashboard from "./pages/DashboardHome.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import DashboardHome from "./pages/DashboardHome.jsx";
import AEPSPage from "./pages/dashboardpages/Aeps.jsx";
import Flight from "./pages/dashboardpages/Flight.jsx";
import Recharge from "./pages/dashboardpages/Recharge.jsx";
import ImagesPage from "./pages/Images.jsx";

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
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/solution",
        element: <Solution />,
      },
      {
        path: "/services",
        element: <ServicesList />,
      },
      {
        path: "/services/:serviceName",
        element: <ServicesPage />,
      },
      {
        path: "/partners",
        element: <Partners />,
      },
      {
        path: "/apibanking",
        element: <APIBanking />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/company",
        element: <Company />,
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
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "", element: <DashboardHome /> },
      { path: "Aeps", element: <AEPSPage /> },
      {
        path: "Flight",
        element: <Flight />,
      },
      { path: "recharge", element: <Recharge /> },
      { path: "images", element: <ImagesPage /> },
      // ... other dashboard routes
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
