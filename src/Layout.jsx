import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <>
      <Header />

      {/* ⭐ THIS WRAPPER IS THE IMPORTANT PART */}
      <main className="page-container">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}