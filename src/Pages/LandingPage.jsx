import "../CSS/LandingPage.css";
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
        <div className="contact-icons"></div>
      </div>
    </div>
  );
}
export default LandingPage;
