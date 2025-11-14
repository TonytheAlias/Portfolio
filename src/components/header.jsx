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
            <a href="">About Me</a>
          </li>
          <li>
            <a href="">Education</a>
          </li>
          <li>
            <a href="">Project</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default header;
