"use client";
import { useEffect } from "react";
import SmoothScroll from "../components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </>
  );
}

useEffect(() => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}, []);