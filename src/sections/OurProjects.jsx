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
import castMateLogo from '../assets/images/castmateLogo.svg';
import tagnaLogo from '../assets/images/tagnaLogo.svg';
import dapperdashLogo from '../assets/images/dapperdashLogo.svg';
import puretiopiaLogo from '../assets/images/puretopiaLogo.svg';
import AMLogo from '../assets/images/AMLogo.svg';
import SyncroWaveLogo from '../assets/images/syncroWaveLoge.svg';
import teamUnityLogo from '../assets/images/teamUnityLogo.svg';
import sushiManLogo from '../assets/images/sushiManLogo.svg';
import glamoraLogo from '../assets/images/glamoraLogo.svg';
import serenityLogo from '../assets/images/serenityLogo.svg';

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
    name: 'CastMate',
    image: podcastImage,
    logo: castMateLogo,
    logoWithText: false,
    description:
      'Find and listen to podcasts according to your preferences with simplicity. Get access to a broad range of offline content, an intelligent recommendation system, and a huge collection of media. All on a single app!',
  },
  {
    name: 'Tagna',
    image: kathrynImage,
    logo: tagnaLogo,
    logoWithText: true,
    description:
      'This app helps you build relationships through dating, making it easier to find love or friendship. With smart matching, chatting, and customizable profiles, connecting with others has never been simpler.',
  },
  {
    name: 'Dapperdash',
    image: clothesImage,
    logo: dapperdashLogo,
    logoWithText: true,
    description:
      'An application that allows you to shop for clothes in the most interesting of ways. Go through a variety of styles, mix and match clothes to create outfits of your choice and much more, all while being catered for.',
  },
  {
    name: 'Puretopia',
    image: childEducationImage,
    logo: puretiopiaLogo,
    logoWithText: true,
    description:
      'An educational platform for preschoolers, featuring fun games and activities that support early learning and development.',
  },
  {
    name: 'Avocado Mood',
    image: bioFoodImage,
    logo: AMLogo,
    logoWithText: false,
    description:
      'Discover bio food with Avocado Mood. Find expert tips, healthy recipes, and insights on organic food to help you make nutritious choices for a balanced lifestyle.',
  },
  {
    name: 'SyncroWave',
    image: salesOverviewImage,
    logo: SyncroWaveLogo,
    logoWithText: false,
    description:
      'Manage your finances effortlessly with SyncroWave, an all-in-one dashboard designed to help you track your income, expenses, investments, and budgets. Get real-time insights and easily stay on top of your financial goals.',
  },
  {
    name: 'Serenity',
    image: meditationImage,
    logo: serenityLogo,
    logoWithText: false,
    description:
      'Find peace with Serenity, the meditation app designed for relaxation, stress relief, and enhanced focus in just a few minutes each day.',
  },
  {
    name: 'Team Unity',
    image: teamUnityImage,
    logo: teamUnityLogo,
    logoWithText: false,
    description:
      'Enhance team collaboration and productivity with Team Unity. Organize tasks, monitor performance, and simplify communication, all within a single app for effortless teamwork.',
  },
  {
    name: 'SushiMan',
    image: sushiImage,
    logo: sushiManLogo,
    logoWithText: true,
    description:
      'Sushiman is the app that allows you to discover, personalize and order your favorite sushi dishes easily, and enjoy the best sushi.',
  },
  {
    name: 'Glamora',
    image: glamoraImage,
    logo: glamoraLogo,
    logoWithText: false,
    description:
      'Shop fashion with Glamora, your ultimate app for trendy clothing, accessories, and more. Experience hassle-free ordering, secure payments, and quick delivery. Stay stylish with just a few taps!',
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
    <section className="our-projects py-8 px-6 sm:px-12" id="ourProjects">
      <div className="text-left flex text-[22px] sm:text-[32px] font-medium mb-10">
        <h1 className="text-trBlue">✦</h1>
        <h1 className="ml-2 text-darkBlue">Our Projects</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.slice(0, visibleCount).map((project, index) => (
          <div
            key={index}
            className="group relative w-full max-w-[480px] mx-auto cursor-pointer"
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
                  className="absolute inset-0 flex flex-col justify-center items-center rounded-[20px] shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-[1.015]"
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
                  <span className="absolute bottom-3 left-3 rounded-full bg-darkBlue/80 px-3 py-1 text-xs font-medium text-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                    <span className="sm:hidden">Tap to flip</span>
                    <span className="hidden sm:inline">Flip card</span>
                  </span>
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
                    {!project.logoWithText ? (
                      <h3 className="text-lg text-white font-medium">
                        {project.name}
                      </h3>
                    ) : null}
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
