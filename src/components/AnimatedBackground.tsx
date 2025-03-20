
import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    type Point = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      size: number;
    };
    
    // Create points for neural network visualization
    const colors = ['#36a3f7', '#6cc24a', '#ffd700', '#ff7f00', '#ff5252'];
    const points: Point[] = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 3 + 2
    }));
    
    const drawNetwork = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      ctx.globalAlpha = 0.15;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            
            // Create gradient lines
            const gradient = ctx.createLinearGradient(
              points[i].x, points[i].y, points[j].x, points[j].y
            );
            gradient.addColorStop(0, points[i].color);
            gradient.addColorStop(1, points[j].color);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1 * (1 - distance / 200);
            ctx.stroke();
          }
        }
      }
      
      // Draw points
      ctx.globalAlpha = 0.8;
      points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fillStyle = point.color;
        ctx.fill();
        
        // Update point position
        point.x += point.vx;
        point.y += point.vy;
        
        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
      });
      
      requestAnimationFrame(drawNetwork);
    };
    
    const animationId = requestAnimationFrame(drawNetwork);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-60"
    />
  );
};

export default AnimatedBackground;
