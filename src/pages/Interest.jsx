function Interest() {
  const interests = [
    {
      name: "Reading",
      description: "I enjoy reading fiction, non-fiction, and tech blogs.",
    },
    {
      name: "Traveling",
      description: "I love exploring new cultures and places.",
    },
    {
      name: "Coding",
      description: "Solving problems through code is my passion.",
    },
    {
      name: "Gaming",
      description: "I enjoy playing strategy and puzzle games in my free time.",
    },
    {
      name: "Music",
      description: "Listening to music helps me relax and focus.",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Interests</h1>
        <p className="text-gray-600 leading-relaxed mb-12">
          A few activities and hobbies I enjoy in my free time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {interests.map((interest, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">{interest.name}</h2>
            <p className="text-gray-700 text-center">{interest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interest;
