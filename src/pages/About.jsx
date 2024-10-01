function About() {
  return (
    <div className="container mx-auto p-6">
      {/* About Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
        <p className="text-gray-600 leading-relaxed">
          Hi, I’m Brilliant Rarumangkay, a passionate web developer with over 5
          years of experience in building interactive, responsive, and
          high-quality websites. I specialize in full-stack development, with a
          strong focus on creating seamless user experiences.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
            HTML
          </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
            CSS
          </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
            JavaScript
          </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
            React
          </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
            Node.js
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
