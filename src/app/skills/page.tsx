import SkillItem from "../components/SkillItem";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";

const skills = [
  { id: 1, name: "HTML5", icon: <FaHtml5 className="text-orange-600" size={64} /> },
  { id: 2, name: "CSS3", icon: <FaCss3Alt className="text-blue-600" size={64} /> },
  { id: 3, name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" size={64} /> },
  { id: 4, name: "React", icon: <FaReact className="text-cyan-500" size={64} /> },
  { id: 5, name: "Node.js", icon: <FaNodeJs className="text-green-600" size={64} /> },
];

const Skills: React.FC = () => {
  return (
    <div 
      className="flex flex-col min-h-screen dark:text-white relative"
      style={{
        backgroundImage: "url('/wallpaper.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay untuk meningkatkan readability */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
      
      <main className="container px-6 py-12 max-w-4xl flex-grow relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">MY SKILLS</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map(({ id, name, icon }) => (
            <SkillItem key={id} name={name} icon={icon} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Skills;