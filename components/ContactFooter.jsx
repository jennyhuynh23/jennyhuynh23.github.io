const Contact = () => (
  <section id="contact" className="section contact">
    <div className="container">
      <h2>Contact</h2>
      <p className="muted">Interested in working together or just want to say hi?</p>
      <div className="cta-row">
        <a className="button primary" href="mailto:jennyh23@stanford.edu">Email</a>
        <a className="button" href="https://www.linkedin.com/in/jennyhuynh23/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="button" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div className="social-icons">
        <a className="icon-link" href="https://www.instagram.com/jenny.huynh._/" target="_blank" rel="noreferrer" aria-label="Instagram">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
          </svg>
        </a>
        <a className="icon-link" href="https://www.tiktok.com/@jenny.huynh._" target="_blank" rel="noreferrer" aria-label="TikTok">
          <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 3v8.5a3.5 3.5 0 1 1-2-3.15V5h2c1.2 1.7 3.1 2.8 5 3v2c-1.8-.2-3.6-1-5-2.3V17a5 5 0 1 1-2-3.9V3h2z" fill="currentColor"/>
          </svg>
        </a>
        <a className="icon-link" href="https://www.youtube.com/@jennyhuynh" target="_blank" rel="noreferrer" aria-label="YouTube">
          <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="6" width="18" height="12" rx="3" ry="3" fill="currentColor"/>
            <polygon points="11,10 16,12 11,14" fill="#0b0c0f"/>
          </svg>
        </a>
        <a className="icon-link" href="https://www.facebook.com/officialjennyhuynh/" target="_blank" rel="noreferrer" aria-label="Facebook">
          <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8H15V5h-2c-2 0-3 1.2-3 3v2H8v3h2v6h3v-6h1.8l.2-3H13V8.4c0-.3.2-.4.5-.4z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span className="muted">© {year} Jenny Huynh</span>
        <a className="muted" href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
};


