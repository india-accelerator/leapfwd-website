"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function BubbleBackground({
  interactive = false,
  transition = { stiffness: 100, damping: 20 },
  colors = {
    first: "18,113,255",
    second: "221,74,255",
    third: "0,220,255",
    fourth: "200,50,50",
    fifth: "180,180,50",
    sixth: "140,100,255",
  },
  className,
  ...props
}) {
  const canvasRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Bubble class
    class Bubble {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 300 + 150;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.color = Object.values(colors)[
          Math.floor(Math.random() * Object.values(colors).length)
        ];
        this.targetX = this.x;
        this.targetY = this.y;
      }

      update() {
        // Normal movement
        this.targetX += this.speedX;
        this.targetY += this.speedY;

        // Interactive mode - repel from mouse
        if (interactive) {
          const dx = mousePosition.current.x - this.x;
          const dy = mousePosition.current.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 300) {
            const force = (300 - distance) / 300;
            this.targetX -= dx * force * 0.02;
            this.targetY -= dy * force * 0.02;
          }
        }

        // Smooth interpolation
        this.x += (this.targetX - this.x) * 0.05;
        this.y += (this.targetY - this.y) * 0.05;

        // Wrap around edges
        if (this.targetX < -this.radius) this.targetX = canvas.width + this.radius;
        if (this.targetX > canvas.width + this.radius) this.targetX = -this.radius;
        if (this.targetY < -this.radius) this.targetY = canvas.height + this.radius;
        if (this.targetY > canvas.height + this.radius) this.targetY = -this.radius;
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius
        );
        gradient.addColorStop(0, `rgba(${this.color}, 0.4)`);
        gradient.addColorStop(0.4, `rgba(${this.color}, 0.2)`);
        gradient.addColorStop(0.7, `rgba(${this.color}, 0.1)`);
        gradient.addColorStop(1, `rgba(${this.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create bubbles
    const bubbles = Array.from({ length: 8 }, () => new Bubble());

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      bubbles.forEach((bubble) => {
        bubble.update();
        bubble.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Mouse move handler
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [interactive, colors]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none", className)}
      {...props}
    />
  );
}

