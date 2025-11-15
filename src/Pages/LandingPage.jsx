import "../CSS/LandingPage.css";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiFile3Fill,
  RiArrowDownWideFill,
} from "@remixicon/react";
function LandingPage() {
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
    </div>
  );
}
export default LandingPage;
