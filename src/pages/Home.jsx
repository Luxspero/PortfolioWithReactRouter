function Home() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-6">
        <div className="flex-shrink-0">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile Photo"
            className="w-40 h-40 rounded-full shadow-lg"
          />
        </div>

        <div className="mt-6 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800">
            Brilliant Rarumangkay
          </h1>
          <p className="mt-2 text-gray-600">
            I am a web developer with a passion for building responsive and
            user-friendly websites. I enjoy working with JavaScript frameworks
            and creating seamless user experiences.
          </p>
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-700">Experience</h2>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Full Stack Developer</li>
              <li>UI/UX Designer</li>
              <li>Freelance Web Developer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
