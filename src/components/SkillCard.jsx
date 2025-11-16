import "../CSS/SkillCard.css";
function SkillCard({
  title = "Languages",
  items = ["C#", "JavaScript", "Python", "HTML & CSS", "SQL"],
}) {
  return (
    <div className="skill-card">
      <h4>{title}</h4>
      <div className="skill-items">
        {items.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}
export default SkillCard;
