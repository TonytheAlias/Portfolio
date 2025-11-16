function ProjectCard(
  githubLink,
  title,
  description,
  image,
  technologies,
  icon
) {
  return (
    <div className="project-card">
      <div className="project-img">
        <a href={githubLink}>
          <img src={image} alt={title} />
        </a>
      </div>
      <div className="project-content">
        <div className="top-section">
          <img src={icon} alt={title} />
          <h3>{title}</h3>
        </div>
        <p className="project-description">{description}</p>

        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
