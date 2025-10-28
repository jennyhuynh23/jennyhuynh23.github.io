const { useEffect, useState } = React;

const Typewriter = ({ text, speed = 70, delay = 0 }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index <= text.length) {
      const timeout = setTimeout(() => setIndex((i) => i + 1), index === 0 ? delay * 1000 : speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, delay]);
  const display = text.slice(0, index);
  return (
    <span className="typewriter">
      {display}
      <span className="caret" aria-hidden="true" />
    </span>
  );
};

const Hero = () => (
  <section id="home" className="section hero">
    <div className="container">
      <p className="eyebrow">Hello, I’m</p>
      <h1 className="headline"><Typewriter text="Jenny Huynh" speed={70} /></h1>
      <p className="tagline">I bring ideas to life through product thinking and storytelling.</p>
      <p className="tagline">👋 Hi! I am an undergrad at Stanford University studying Symbolic Systems, and passionate about entrepreneurship, content creation, social media, marketing, tech & product!</p>
      <div className="cta-row">
        <a className="button primary" href="#projects">View Projects</a>
        <a className="button" href="#contact">Get in Touch</a>
      </div>
    </div>
  </section>
);


