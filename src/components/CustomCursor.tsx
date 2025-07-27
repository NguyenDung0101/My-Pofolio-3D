import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isClicked, setIsClicked] = useState(false);
  const trailRef = useRef([]);

  useEffect(() => {
    let rafId = null;
    const updateMousePosition = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        // Update trail
        trailRef.current.push({ x: e.clientX, y: e.clientY });
        if (trailRef.current.length > 8) trailRef.current.shift();
      });
    };

    const handleMouseEnter = () => setCursorVariant("hover");
    const handleMouseLeave = () => setCursorVariant("default");
    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("click", handleClick);

    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, [role="button"], [data-cursor="hover"]',
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("click", handleClick);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      opacity: 0.6,
      borderColor: "#ffffff",
      boxShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.4,
      opacity: 0.8,
      borderColor: "#22d3ee",
      boxShadow: "0 0 12px rgba(34, 211, 238, 0.5)",
    },
    click: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.8,
      opacity: 0.9,
      borderColor: "#22d3ee",
      boxShadow: "0 0 16px rgba(34, 211, 238, 0.7)",
    },
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1,
      backgroundColor: "#ffffff",
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 0.6,
      backgroundColor: "#22d3ee",
    },
    click: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1.2,
      backgroundColor: "#22d3ee",
    },
  };

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block">
      {/* Trailing effect */}
      {trailRef.current.map((point, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full mix-blend-difference"
          style={{
            x: point.x - 2,
            y: point.y - 2,
            opacity: ((index + 1) / trailRef.current.length) * 0.3,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 0.05,
          }}
        />
      ))}

      {/* Cursor Outline */}
      <motion.div
        className="absolute w-8 h-8 border-2 rounded-full mix-blend-difference"
        variants={variants}
        animate={isClicked ? "click" : cursorVariant}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          mass: 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      {/* Cursor Dot */}
      <motion.div
        className="absolute w-2 h-2 rounded-full mix-blend-difference"
        variants={dotVariants}
        animate={isClicked ? "click" : cursorVariant}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.05,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
    </div>
  );
};

export default CustomCursor;
