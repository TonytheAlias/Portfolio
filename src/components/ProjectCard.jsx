import "../CSS/ProjectCard.css";
import Image from "../images/OtusFinance.png";
function ProjectCard({
  githubLink,
  title,
  description,
  image = Image,
  technologies,
  icon,
}) {
  return (
    <div className="project-card">
      <div className="project-img">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
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
