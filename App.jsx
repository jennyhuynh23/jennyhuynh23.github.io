const App = () => {
  const { theme, toggle } = useTheme();
  return (
    <>
      <Header theme={theme} onToggle={toggle} />
      <Bubbles />
      <PixieDust />
      <SpacePopup />
      <main>
        <Hero />
        <About />
        <Projects />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


