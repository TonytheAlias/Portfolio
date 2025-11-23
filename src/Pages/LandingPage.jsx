import { useEffect } from "react";
import "../CSS/LandingPage.css";
import ProjectCard from "../components/ProjectCard";
import ProjectData from "../data/ProjectData.js";
import SkillCard from "../components/SkillCard.jsx";
import SkillData from "../data/SkillData.js";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiFile3Fill,
  RiArrowDownWideFill,
} from "@remixicon/react";

function LandingPage() {
  useEffect(() => {
    //Allow fade in/out animation through observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible"); // Remove when out of view
        }
      });
    }, observerOptions);

    document.querySelectorAll(".section").forEach((section) => {
      observer.observe(section);
    });
    //Allow header links to Scroll to Section
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          const headerHeight = 70;
          const targetPosition = target.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      });
    });

    //Allows down arrow to scroll down page
    const arrow = document.querySelector(".down-arrow a");

    const handleClick = (e) => {
      e.preventDefault();
      window.scrollBy({
        top: 500,
        behavior: "smooth",
      });
    };

    if (arrow) {
      arrow.addEventListener("click", handleClick);
    }

    return () => {
      if (arrow) {
        arrow.removeEventListener("click", handleClick);
      }
    };
  }, []);
  return (
    <div className="body">
      <div className="greeting-section">
        <div className="title">
          <h1>Hi, I'm</h1>
          <h1 id="title-name">Tyreek Brasfield</h1>
        </div>
        <div className="title-body">
          <h3 id="role"> Full Stack Developer</h3>
          <p>
            I build accessible and user-friendly experiences for apps and the
            web.
          </p>
        </div>
        <div className="contact-icons">
          <a
            href="https://github.com/TonytheAlias"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            aria-label="GitHub"
          >
            <RiGithubFill size={32} />
          </a>
          <a
            href="https://linkedin.com/in/Tyreek-Brasfield"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
            aria-label="Linkedin"
          >
            <RiLinkedinBoxFill size={32} />
          </a>
          <a
            href="/CareerResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Resume"
            aria-label="Resume"
          >
            <RiFile3Fill size={32} />
          </a>
        </div>
        <div className="down-arrow">
          <a href="" target="_blank" rel="noopener noreferrer">
            <RiArrowDownWideFill size={32} />
          </a>
        </div>
      </div>
      <div className="about-section section" id="about-me">
        <div className="section-title">
          <div className="box"></div>
          <h2>About Me</h2>
        </div>
        <p>
          Hey, I'm a recent Computer Science graduate from the University of
          Southern Mississippi with hands-on experience building{" "}
          <b>full-stack applications </b> and <b>responsive websites</b>. I work
          primarily with <b>HTML</b>, <b>CSS</b>,<b>JavaScript</b>, <b>React</b>
          , and <b>Python</b>, and I've led projects from concept to
          deployment—including a <b>finance management app</b> and a{" "}
          <b>ML-powered browser extension</b>. I'm passionate about creating
          innovative, user-centered solutions that solve real problems. I'd love
          to discuss opportunities where I can contribute to impactful projects.
        </p>
      </div>
      <div className="education-section section" id="education">
        <div className="section-title">
          <div className="box"></div>
          <h2>Education</h2>
        </div>
        <div className="education-history">
          <div className="college">
            <div className="college-name">
              <h3>University of Southern Mississippi</h3>
              <h4 id="degree">
                <h4 id="highlights">Bachelor's Degree</h4> of Computer Science
              </h4>
            </div>
            <h3 id="date">
              August <h3 id="highlights">2022</h3>- May{" "}
              <h3 id="highlights">2025</h3>
            </h3>
          </div>
          <div className="college">
            <div className="college-name">
              <h3>Hinds Community College</h3>
              <h4 id="degree">
                <h4 id="highlights">Associoate's Degree</h4> of General Studies
              </h4>
            </div>
            <h3 id="date">
              August <h3 id="highlights">2022</h3>- May{" "}
              <h3 id="highlights"> 2021</h3>
            </h3>
          </div>
        </div>
      </div>
      <div className="project-section section" id="project">
        <div className="section-title">
          <div className="box"></div>
          <h2>Featured Projects</h2>
        </div>
        <div className="project-grid">
          {ProjectData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              icon={project.icon}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
      <div className="skill-section section" id="skills">
        <div className="section-title">
          <div className="box"></div>
          <h2>Skills</h2>
        </div>
        <div className="skill-grid">
          {SkillData.map((skill) => (
            <SkillCard key={skill.id} title={skill.title} items={skill.items} />
          ))}
        </div>
      </div>
      <div className="footer-section">
        <p id="footer-description">
          Website was loosely designed in <span>Figma</span> and coded in{" "}
          <span>VS Code </span>
          by me. Built with <span>React.js</span> and <span>Node.js</span>,
          deployed with <span>GitHub Pages</span>. Thanks for checking out my
          portfolio.
        </p>
      </div>
    </div>
  );
}
export default LandingPage;
