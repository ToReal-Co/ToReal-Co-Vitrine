import React, { useState } from 'react';
import berealImage from '../assets/images/bereal.png';
import sowbeezImage from '../assets/images/sowBeez.png';
import djangoImage from '../assets/images/django.png';
import berealLogo from '../assets/icons/bereal.png';

// Example project data
const projects = [
  {
    name: 'Bereal',
    image: berealImage,
    logo: berealLogo,
    description:
      'Bereal is your personal companion for capturing and sharing real moments in a visually engaging way.',
  },
  {
    name: 'Sowbeez',
    image: sowbeezImage,
    logo: berealLogo,
    description:
      'SowBeez helps you track and improve emotional well-being with an intuitive interface for daily mood logging.',
  },
  {
    name: 'Django',
    image: djangoImage,
    logo: berealLogo,
    description:
      'Django is a powerful backend framework for building scalable and robust web applications efficiently.',
  },
  {
    name: 'Bereal',
    image: berealImage,
    logo: berealLogo,
    description:
      'Bereal is your personal companion for capturing and sharing real moments in a visually engaging way.',
  },
  {
    name: 'Sowbeez',
    image: sowbeezImage,
    logo: berealLogo,
    description:
      'SowBeez helps you track and improve emotional well-being with an intuitive interface for daily mood logging.',
  },
  {
    name: 'Django',
    image: djangoImage,
    logo: berealLogo,
    description:
      'Django is a powerful backend framework for building scalable and robust web applications efficiently.',
  },
  {
    name: 'Bereal',
    image: berealImage,
    logo: berealLogo,
    description:
      'Bereal is your personal companion for capturing and sharing real moments in a visually engaging way.',
  },
  {
    name: 'Sowbeez',
    image: sowbeezImage,
    logo: berealLogo,
    description:
      'SowBeez helps you track and improve emotional well-being with an intuitive interface for daily mood logging.',
  },
  {
    name: 'Django',
    image: djangoImage,
    logo: berealLogo,
    description:
      'Django is a powerful backend framework for building scalable and robust web applications efficiently.',
  },
  {
    name: 'Bereal',
    image: berealImage,
    logo: berealLogo,
    description:
      'Bereal is your personal companion for capturing and sharing real moments in a visually engaging way.',
  },
  {
    name: 'Sowbeez',
    image: sowbeezImage,
    logo: berealLogo,
    description:
      'SowBeez helps you track and improve emotional well-being with an intuitive interface for daily mood logging.',
  },
  {
    name: 'Django',
    image: djangoImage,
    logo: berealLogo,
    description:
      'Django is a powerful backend framework for building scalable and robust web applications efficiently.',
  },
  // Add more projects as needed
];

function OurProjects() {
  const [flipped, setFlipped] = useState(Array(projects.length).fill(false));
  const [visibleCount, setVisibleCount] = useState(6); // Number of projects to show initially

  const handleFlip = (index) => {
    const updatedFlipped = [...flipped];
    updatedFlipped[index] = !updatedFlipped[index];
    setFlipped(updatedFlipped);
  };

  const handleViewMore = () => {
    if (visibleCount < projects.length) {
      // Show 3 more projects or all remaining projects
      setVisibleCount((prev) => Math.min(prev + 3, projects.length));
    } else {
      // Reset to show the initial 6 projects
      setVisibleCount(6);
    }
  };

  return (
    <section className="our-projects py-10 px-6 sm:px-12">
      <div className="text-left flex text-[22px] sm:text-[32px] font-medium mb-10">
        <h1 className="text-trBlue">✦</h1>
        <h1 className="ml-2 text-darkBlue">Our Projects</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.slice(0, visibleCount).map((project, index) => (
          <div
            key={index}
            className="relative w-full max-w-[480px] mx-auto"
            style={{ perspective: '1000px' }} // Perspective for the flip effect
          >
            <div
              className={`relative w-full h-0`}
              style={{
                paddingTop: '100%', // Maintain square aspect ratio
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                className={`absolute inset-0 transition-transform duration-500 transform ${
                  flipped[index] ? 'rotate-y-180' : ''
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                }}
                onClick={() => handleFlip(index)}
              >
                {/* Front Side */}
                <div
                  className="absolute inset-0 flex flex-col justify-center items-center rounded-[20px] shadow-md"
                  style={{
                    transform: 'rotateY(0deg)',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
                  />
                </div>

                {/* Back Side */}
                <div
                  className="absolute inset-0 bg-darkBlue p-6 flex flex-col justify-between items-start rounded-[20px] shadow-lg"
                  style={{
                    transform: 'rotateY(180deg)',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={project.logo}
                      alt={`${project.name} logo`}
                      className="h-10"
                    />
                    <h3 className="text-lg text-white font-medium">
                      {project.name}
                    </h3>
                  </div>
                  <p className="mt-4 md:text-[16px] lg:text-[18px] text-[16px] text-white leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
            <h3 className="text-left mt-4 text-lg font-medium text-darkBlue">
              {project.name}
            </h3>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          className="bg-trBlue text-white px-6 py-2 rounded-lg shadow-lg hover:bg-darkBlue transition-colors"
          onClick={handleViewMore}
        >
          {visibleCount < projects.length ? 'View More' : 'View Less'}
        </button>
      </div>
    </section>
  );
}

export default OurProjects;
