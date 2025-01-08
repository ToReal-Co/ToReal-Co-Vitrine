import React, { useState } from 'react';
import podcastImage from '../assets/images/podcast.jpg';
import kathrynImage from '../assets/images/kathryn.png';
import clothesImage from '../assets/images/clothes.png';
import childEducationImage from '../assets/images/childEducation.png';
import bioFoodImage from '../assets/images/bioFood.png';
import salesOverviewImage from '../assets/images/salesOverviewImage.png';
import meditationImage from '../assets/images/meditationImage.png';
import teamUnityImage from '../assets/images/teamUnity.png';
import sushiImage from '../assets/images/sushi.png';
import glamoraImage from '../assets/images/glamoraImage.png';
import berealLogo from '../assets/icons/bereal.png';

const styles = {
  rotateY180: {
    transform: 'rotateY(180deg)',
  },
  transformBase: {
    transformStyle: 'preserve-3d',
    transition: 'transform 0.5s',
  },
};

// Example project data
const projects = [
  {
    name: 'Bereal',
    image: podcastImage,
    logo: berealLogo,
    description:
      'Bereal is your personal companion for capturing and sharing real moments in a visually engaging way.',
  },
  {
    name: 'Sowbeez',
    image: kathrynImage,
    logo: berealLogo,
    description:
      'SowBeez helps you track and improve emotional well-being with an intuitive interface for daily mood logging.',
  },
  {
    name: 'Sowbeez',
    image: clothesImage,
    logo: berealLogo,
    description:
      'SowBeez helps you track and improve emotional well-being with an intuitive interface for daily mood logging.',
  },
  {
    name: 'Sowbeez',
    image: childEducationImage,
    logo: berealLogo,
    description:
      'SowBeez helps you track and improve emotional well-being with an intuitive interface for daily mood logging.',
  },
  {
    name: 'Sowbeez',
    image: bioFoodImage,
    logo: berealLogo,
    description:
      'SowBeez helps you track and improve emotional well-being with an intuitive interface for daily mood logging.',
  },
  {
    name: 'Sowbeez',
    image: salesOverviewImage,
    logo: berealLogo,
    description:
      'SowBeez helps you track and improve emotional well-being with an intuitive interface for daily mood logging.',
  },
  {
    name: 'Sowbeez',
    image: meditationImage,
    logo: berealLogo,
    description:
      'SowBeez helps you track and improve emotional well-being with an intuitive interface for daily mood logging.',
  },
 {
    name: 'Sowbeez',
    image: teamUnityImage,
    logo: berealLogo,
    description:
      'SowBeez helps you track and improve emotional well-being with an intuitive interface for daily mood logging.',
  }, 
 {
    name: 'Sowbeez',
    image: sushiImage,
    logo: berealLogo,
    description:
      'SowBeez helps you track and improve emotional well-being with an intuitive interface for daily mood logging.',
  }, 
 {
    name: 'Sowbeez',
    image: glamoraImage,
    logo: berealLogo,
    description:
      'SowBeez helps you track and improve emotional well-being with an intuitive interface for daily mood logging.',
  }, 
];

function OurProjects() {
  const [flipped, setFlipped] = useState(Array(projects.length).fill(false));
  const [visibleCount, setVisibleCount] = useState(6); // Number of projects to show initially

  const handleFlip = (index) => {
    console.log(
      `Card at index ${index} clicked. Current flipped state: ${flipped[index]}`
    );
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
    <section className="our-projects py-10 px-6 sm:px-12" id="ourProjects">
      <div className="text-left flex text-[22px] sm:text-[32px] font-medium mb-10">
        <h1 className="text-trBlue">✦</h1>
        <h1 className="ml-2 text-darkBlue">Our Projects</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.slice(0, visibleCount).map((project, index) => (
          <div
            key={index}
            className="relative w-full max-w-[480px] mx-auto cursor-pointer"
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
                className="absolute inset-0"
                style={{
                  ...styles.transformBase,
                  ...(flipped[index] ? styles.rotateY180 : {}),
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
