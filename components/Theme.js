/* @jsx React.createElement */
const { useEffect, useState } = React;

var useTheme = function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  return { theme, toggle };
};

var ThemeToggle = function ThemeToggle(props) {
  const { theme, onToggle } = props;
  return (
    React.createElement('button', { className: 'theme-toggle', onClick: onToggle, 'aria-label': 'Toggle color theme' },
      theme === 'dark' ? '☀️ Light' : '🌙 Dark'
    )
  );
};


