import Logo from "../images/Portfolio-Logo.png";
import "../CSS/header.css";
function header() {
  return (
    <div className="container">
      <div className="left">
        <img src={Logo} alt="Portfolio Logo" />
      </div>
      <div className="right">
        <ul>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default header;
