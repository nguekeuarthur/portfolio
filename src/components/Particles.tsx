import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  opacity: number;
  type: 'dot' | 'symbol' | 'datavis';
  symbol?: string;
  rotation: number;
  dr: number;
}

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mathSymbols = ['∑', '∫', 'μ', 'σ', '≈', '∞', '∆', 'π', '%', '√'];
    const dataVisSymbols = ['📊', '📈', '📉', '🔢', '📋'];
    const particles: Particle[] = [];
    const particleCount = {
      dots: 60,
      symbols: 15,
      datavis: 10
    };
    const mouseMoveRadius = 100;
    let animationSpeed = 0.5;

    // Resize handler
    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      // Reset particles
      particles.length = 0;
      
      // Create dot particles
      for (let i = 0; i < particleCount.dots; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * animationSpeed,
          dy: (Math.random() - 0.5) * animationSpeed,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          type: 'dot',
          rotation: Math.random() * Math.PI * 2,
          dr: (Math.random() - 0.5) * 0.02
        });
      }

      // Create math symbol particles
      for (let i = 0; i < particleCount.symbols; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * animationSpeed,
          dy: (Math.random() - 0.5) * animationSpeed,
          radius: 12,
          opacity: Math.random() * 0.4 + 0.1,
          type: 'symbol',
          symbol: mathSymbols[Math.floor(Math.random() * mathSymbols.length)],
          rotation: Math.random() * Math.PI * 2,
          dr: (Math.random() - 0.5) * 0.02
        });
      }

      // Create data visualization particles
      for (let i = 0; i < particleCount.datavis; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * animationSpeed,
          dy: (Math.random() - 0.5) * animationSpeed,
          radius: 14,
          opacity: Math.random() * 0.4 + 0.1,
          type: 'datavis',
          symbol: dataVisSymbols[Math.floor(Math.random() * dataVisSymbols.length)],
          rotation: Math.random() * Math.PI * 2,
          dr: (Math.random() - 0.5) * 0.02
        });
      }
    };

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
      animationSpeed = 1;
      setTimeout(() => {
        animationSpeed = 0.5;
      }, 100);
    };

    // Initial setup
    handleResize();
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation
    function animate() {
      animationFrameRef.current = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.dx;
        particle.y += particle.dy;
        particle.rotation += particle.dr;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseMoveRadius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouseMoveRadius - distance) / mouseMoveRadius;
          particle.dx -= Math.cos(angle) * force * 0.5;
          particle.dy -= Math.sin(angle) * force * 0.5;
        }

        // Draw particle
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);

        if (particle.type === 'dot') {
          ctx.beginPath();
          ctx.arc(0, 0, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 200, 200, ${particle.opacity})`;
          ctx.fill();
        } else {
          ctx.font = `${particle.radius * 2}px Arial`;
          ctx.fillStyle = `rgba(200, 200, 200, ${particle.opacity})`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(particle.symbol!, 0, 0);
        }
        ctx.restore();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const particle2 = particles[j];
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(200, 200, 200, ${0.15 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        }
      });
    }

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 h-screen overflow-hidden pointer-events-auto">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
}