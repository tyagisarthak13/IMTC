import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingButtons from "./components/FloatingButtons";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <Header />
      <ScrollToTop />
      <main className="pt-24">
        {" "}
        <Outlet />
      </main>
      <FloatingButtons />
      <Footer />
    </>
  );
}

export default App;
