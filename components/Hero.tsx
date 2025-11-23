"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PackagePopup from "./PackagePopup";
import Footer from "@/components/Footer";

interface MousePosition {
  x: number;
  y: number;
}

interface Bubble {
  id: number;
  xInitial: number;
  yInitial: number;
  scale: number;
  xAnimate: number;
  yAnimate: number;
  duration: number;
  left: number;
  top: number;
  opacity: number;
  color: string;
}

const Hero = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  // Generate random bubbles ONCE when component mounts (client only)
  useEffect(() => {
    const newBubbles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      xInitial: Math.random() * 100 - 50,
      yInitial: Math.random() * 100 - 50,
      scale: Math.random() * 0.5 + 0.5,
      xAnimate: Math.random() * 100 - 50,
      yAnimate: Math.random() * 100 - 50,
      duration: Math.random() * 5 + 5,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.2 + 0.1,
      color: i % 2 === 0 ? "var(--primary-blue)" : "var(--primary-green)",
    }));
    setBubbles(newBubbles);
  }, []);

  // Mouse move parallax (separate effect)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculateMovement = (axis: "x" | "y"): number => {
    if (typeof window === "undefined") return 0;

    const movement =
      axis === "x"
        ? (mousePosition.x / window.innerWidth - 0.5) * 20
        : (mousePosition.y / window.innerHeight - 0.5) * 20;
    return movement;
  };

  return (
    <section id="home" className="hero">
      <PackagePopup showPopup={showPopup} setShowPopup={setShowPopup} />

      <div className="hero-bubbles">
        {bubbles.map((b) => (
          <motion.div
            key={b.id}
            className="bubble"
            initial={{ x: b.xInitial, y: b.yInitial, scale: b.scale }}
            animate={{ x: b.xAnimate, y: b.yAnimate }}
            transition={{
              duration: b.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            style={{
              left: `${b.left}%`,
              top: `${b.top}%`,
              background: b.color,
              opacity: b.opacity,
            }}
          />
        ))}
      </div>

      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            animate={{
              x: calculateMovement("x") * -0.5,
              y: calculateMovement("y") * -0.5,
            }}
          >
            Welcome to <span>Alpha Medi Lab</span>
          </motion.h1>

          <motion.p
            animate={{
              x: calculateMovement("x") * -0.3,
              y: calculateMovement("y") * -0.3,
            }}
          >
            Your Trusted Partner in Medical Diagnostics
          </motion.p>

          <motion.div
            className="hero-actions"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#services" className="btn">
              Explore Our Services
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: calculateMovement("x"),
            y: calculateMovement("y"),
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/assets/images/alphaHome.png"
            alt="Lab equipment illustration"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
