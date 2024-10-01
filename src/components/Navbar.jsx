import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-center space-x-8 bg-gray-800 text-white">
      <Link to="/" className="hover:text-gray-400">
        Home
      </Link>
      <Link to="about" className="hover:text-gray-400">
        About
      </Link>
      <Link to="experience" className="hover:text-gray-400">
        Experience
      </Link>
      <Link to="skills" className="hover:text-gray-400">
        Skills
      </Link>
      <Link to="interest" className="hover:text-gray-400">
        Interest
      </Link>
      <Link to="awards" className="hover:text-gray-400">
        Awards
      </Link>
    </nav>
  );
};

export default Navbar;
