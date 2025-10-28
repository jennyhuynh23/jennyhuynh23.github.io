const { useEffect, useMemo, useRef, useState } = React;

const Bubbles = () => {
  const count = 16;
  const bubbles = useMemo(() => Array.from({ length: count }, (_, i) => ({
    size: 8 + Math.round(Math.random() * 22),
    left: Math.round(Math.random() * 100),
    delay: (Math.random() * -20).toFixed(2),
    duration: (18 + Math.random() * 18).toFixed(2),
    color: i % 3 === 0 ? 'var(--secondary)' : 'var(--accent)'
  })), []);
  return (
    <div className="bubbles" aria-hidden="true">
      {bubbles.map((b, i) => (
        <span key={i} className="bubble" style={{
          left: b.left + '%', width: b.size + 'px', height: b.size + 'px',
          animationDelay: b.delay + 's', animationDuration: b.duration + 's',
          background: b.color, opacity: 0.65,
        }}/>
      ))}
    </div>
  );
};

const PixieDust = () => {
  const containerRef = useRef(null);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const textSelector = 'p, h1, h2, h3, h4, h5, h6, a, li, span, .site-title';
    const spawn = (x, y) => {
      for (let i = 0; i < 3; i++) {
        const el = document.createElement('span');
        el.className = 'pixie';
        const size = 2 + Math.random() * 4;
        const color = '#FFF58A';
        el.style.left = x + 'px';
        el.style.top = y + 'px';
        el.style.width = size + 'px';
        el.style.height = size + 'px';
        el.style.background = color;
        el.style.opacity = '0.9';
        el.style.setProperty('--dx', (Math.random() * 16 - 8) + 'px');
        el.style.setProperty('--dy', (-8 - Math.random() * 18) + 'px');
        el.style.animationDuration = (400 + Math.random() * 600) + 'ms';
        container.appendChild(el);
        el.addEventListener('animationend', () => el.remove());
      }
    };
    const onMove = (e) => {
      const now = performance.now();
      if (now - lastTimeRef.current < 40) return;
      lastTimeRef.current = now;
      const target = e.target;
      if (!(target instanceof Element)) return;
      if (!target.closest(textSelector)) return;
      spawn(e.clientX, e.clientY);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
  return <div className="pixies" ref={containerRef} aria-hidden="true"></div>;
};

const SpacePopup = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onKey = (e) => {
      if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault();
        setVisible((v) => !v);
      } else if (e.key === 'Escape') {
        setVisible(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  if (!visible) return null;
  return (
    <div className="space-image" onClick={() => setVisible(false)}>
      <img src="./bambi.png" alt="Space popup" />
    </div>
  );
};


