import React, { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system for matrix effect
    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = Math.random() > 0.5 ? '#00D4FF' : '#FF2D92';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        this.opacity = Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.3 + 0.4;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Grid lines
    const drawGrid = () => {
      const gridSize = 50;
      const time = Date.now() * 0.001;

      ctx.strokeStyle = 'rgba(0, 212, 255, 0.1)';
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        const opacity = Math.sin(time + x * 0.01) * 0.1 + 0.05;
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        const opacity = Math.sin(time + y * 0.01) * 0.1 + 0.05;
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Connection lines between particles
    const drawConnections = () => {
      ctx.strokeStyle = 'rgba(255, 45, 146, 0.2)';
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (150 - distance) / 150 * 0.3;
            ctx.globalAlpha = opacity;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      drawGrid();

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      drawConnections();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Canvas Animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
        style={{ pointerEvents: 'none' }}
      />

      {/* Static Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Corner Brackets */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary animate-pulse-glow" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-accent animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-secondary animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 left-1/6 w-8 h-8 border border-accent/40 rotate-45 animate-pulse-glow" />
        <div className="absolute top-3/4 right-1/6 w-6 h-6 border border-primary/40 rotate-12 animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-secondary/30 rounded-full animate-pulse-glow" style={{ animationDelay: '1.2s' }} />

        {/* Scanning Lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-data-stream" />
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-data-stream" style={{ animationDelay: '3s' }} />
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background" />
    </>
  );
};

export default BackgroundAnimation;