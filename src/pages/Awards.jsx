import React from "react";

function Awards() {
  const awards = [
    {
      title: "Best Developer Award",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      year: 2022,
    },
    {
      title: "Outstanding Achievement in Web Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      year: 2021,
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Awards</h1>
        <p className="text-gray-600 leading-relaxed mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {awards.map((award, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">{award.title}</h2>
            <p className="text-gray-700 text-center mb-4">
              {award.description}
            </p>
            <span className="text-gray-500">{award.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Awards;
