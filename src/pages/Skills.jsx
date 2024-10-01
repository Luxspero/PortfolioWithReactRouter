import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
  faGit,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";

function Skills() {
  const skills = [
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3 },
    { name: "JavaScript", icon: faJs },
    { name: "React", icon: faReact },
    { name: "Node.js", icon: faNodeJs },
    { name: "Git", icon: faGit },
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Skills Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Skills</h1>
        <p className="text-gray-600 leading-relaxed mb-12">
          A showcase of my technical skills and proficiencies.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md"
          >
            <FontAwesomeIcon
              icon={skill.icon}
              className="text-6xl text-blue-600 mb-4"
            />
            <p className="text-gray-700 font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
