function Experience() {
  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "itCenter Manado.",
      duration: "Jan 2021 - Present",
      description:
        "Developed and maintained web applications using React, Next.js, and Node.js. Worked closely with product managers and backend developers to deliver high-quality products.",
    },
    {
      role: "Frontend Developer",
      company: "PT. SMP",
      duration: "May 2018 - Dec 2020",
      description:
        "Designed and developed responsive user interfaces using HTML, CSS, and JavaScript. Worked closely with designers and backend developers to deliver high-quality products.",
    },
    {
      role: "Junior Web Developer",
      company: "Paratronik Manado.",
      duration: "Jan 2016 - Apr 2018",
      description:
        "Assisted in developing pulse platforms and integrating third-party APIs. Gained experience in building user-friendly web applications.",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Experience</h1>
        <p className="text-gray-600 leading-relaxed mb-12">
          Here's an overview of my professional journey so far.
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-6 shadow-md bg-white"
          >
            <h2 className="text-2xl font-semibold text-blue-600">
              {experience.role}
            </h2>
            <h3 className="text-lg text-gray-700">{experience.company}</h3>
            <p className="text-sm text-gray-500">{experience.duration}</p>
            <p className="mt-4 text-gray-600">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
