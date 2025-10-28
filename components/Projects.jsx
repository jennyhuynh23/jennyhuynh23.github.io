const { useMemo } = React;

const ProjectCard = ({ project }) => (
  <article className="project-card card">
    <div className="project-card__body">
      <h3>{project.title}</h3>
      <p className="muted">{project.description}</p>
      <ul className="pill-list">
        {project.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
    <div className="project-card__actions">
      {project.live && (
        <a className="button" href={project.live} target="_blank" rel="noreferrer">Live</a>
      )}
      {project.source && (
        <a className="button" href={project.source} target="_blank" rel="noreferrer">Code</a>
      )}
    </div>
  </article>
);

const Projects = () => {
  const projects = useMemo(() => [
    {
      title: 'PhotoBooth',
      description: 'A playful camera app with filters and stickers built in React.',
      tags: ['React', 'Web APIs', 'CSS'],
      live: '#',
      source: '#',
    },
    {
      title: 'Portfolio Template',
      description: 'Minimal personal site template with theming and sections.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      live: '#',
      source: '#',
    },
    {
      title: 'Visual Notes',
      description: 'Lightweight note taking with markdown and drag-and-drop boards.',
      tags: ['React', 'TypeScript'],
      live: '#',
      source: '#',
    },
  ], []);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};


