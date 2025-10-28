const Header = ({ theme, onToggle }) => (
  <header className="site-header">
    <div className="container header-inner">
      <a className="site-title" href="#home">JH</a>
      <nav className="site-nav" aria-label="Main">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#roadmap">Roadmap</a>
        <a href="#contact">Contact</a>
        <ThemeToggle theme={theme} onToggle={onToggle} />
      </nav>
    </div>
  </header>
);


