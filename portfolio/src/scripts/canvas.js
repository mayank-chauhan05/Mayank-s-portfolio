/**
 * HTML5 Canvas Neural Network & AI Core Visualizer Engine
 * Mayank Singh Chauhan Portfolio
 */

export function initNeuralCanvas() {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 180 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  resize();

  const particleCount = Math.min(Math.floor((width * height) / 18000), 75);

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2 + 1.2;
      this.baseAlpha = Math.random() * 0.5 + 0.3;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse attraction
      if (mouse.x && mouse.y) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 242, 254, ${this.baseAlpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#00f2fe';
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw synapse connections
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          const alpha = (1 - dist / 130) * 0.25;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}


export function initHeroVisualizerCanvas() {
  const canvas = document.getElementById('hero-visualizer-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let angle = 0;

  function drawAIHeroCore() {
    const w = canvas.width = canvas.parentElement.clientWidth;
    const h = canvas.height = canvas.parentElement.clientHeight;

    ctx.clearRect(0, 0, w, h);
    const centerX = w / 2;
    const centerY = h / 2;

    angle += 0.015;

    // Outer spinning ring
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.arc(0, 0, 70, 0, Math.PI * 1.5);
    ctx.strokeStyle = 'rgba(0, 242, 254, 0.6)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Secondary reverse ring
    ctx.rotate(-angle * 2);
    ctx.beginPath();
    ctx.arc(0, 0, 50, 0, Math.PI * 1.2);
    ctx.strokeStyle = 'rgba(127, 0, 255, 0.7)';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Central pulsing node
    const pulseScale = 1 + Math.sin(angle * 3) * 0.15;
    ctx.beginPath();
    ctx.arc(0, 0, 20 * pulseScale, 0, Math.PI * 2);
    ctx.fillStyle = '#00f2fe';
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#00f2fe';
    ctx.fill();

    ctx.restore();

    requestAnimationFrame(drawAIHeroCore);
  }

  drawAIHeroCore();
}
