import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <SiHtml5 className="skill-icon" /> },
    { name: "CSS", icon: <SiCss3 className="skill-icon" /> },
    { name: "JavaScript", icon: <SiJavascript className="skill-icon" /> },
    { name: "React", icon: <SiReact className="skill-icon" /> },
    { name: "Next.js", icon: <SiNextdotjs className="skill-icon" /> },
  ];

  return (
    <section>
      <h2 style={{ textAlign: "center", marginTop: "2rem", color: "#f5f5dc" }}>
        Skills
      </h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item" title={skill.name}>
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}