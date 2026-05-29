import React, { useState, useRef, useEffect } from 'react';
import plusIcon from '../assets/icons/plus.svg';
import minusIcon from '../assets/icons/minus.svg';

const faqs = [
  {
    question: 'How do you ensure the quality of your work?',
    answer: `Quality is built in at every stage—not just at the end. We run a full testing campaign before each release to make sure your product is reliable and ready for users.

Our approach includes:
• Functional testing — every feature is checked against the approved specification.
• Cross-device & cross-browser testing — consistent experience on mobile, tablet, and desktop.
• Performance & security checks — fast load times and protection of user data.
• Peer code reviews — a second developer reviews the code before it ships.
• User acceptance testing (UAT) — you validate the build before we deliver.

We fix issues as we find them and only move forward when the quality bar is met.`,
  },
  {
    question: 'What tools and technologies do you use?',
    answer: `We choose modern, proven technologies based on your project—mobile app, web platform, or both. Our stack is built for performance, scalability, and long-term maintenance.

• Frontend & mobile — React, React Native, Tailwind CSS, and Vite for fast, responsive interfaces on web and mobile.
• Backend & APIs — Node.js, REST APIs, and secure authentication for your business logic and data.
• Design — Figma for wireframes, UI design, and interactive prototypes before development starts.
• Cloud & hosting — Netlify and Render for reliable deployment, storage, and scaling.
• Payments & analytics — Stripe, in-app purchases, and tools like Google Analytics or Mixpanel to track growth.
• Collaboration — Git, Jira/Linear, Discord, and WhatsApp to keep you updated throughout the project.

We pick the right combination for your goals—not every tool on every project.`,
  },
  {
    question: 'How does your project process work?',
    answer: `Our process follows clear steps from first contact to delivery:

1. Initial contact — We discuss your vision, goals, and project scope.
2. Requirements document — We draft a detailed specification (features, timeline, and deliverables).
3. Specification validation — You review and approve the document before any development starts.
4. Development kickoff — Once validated, we begin building your product.
5. Weekly demos — Every week, a 30-minute session to review progress and gather your feedback.
6. Scrum delivery — We apply Agile/Scrum practices: sprints, backlog prioritization, and continuous validation until launch.`,
  },
  {
    question: 'How will we discuss your project?',
    answer: `We start with a free discovery call (about 30 minutes) booked through Calendly. During the call, we review your idea, goals, budget, and timeline, and outline the next steps together.

You can also reach us in other ways:
• WhatsApp — for quick messages and short requests (+216 58 693 946).
• Discord — join our channel for reviews, feedback, and project updates during development.

After the discovery call, we follow up with a summary and, if needed, a proposal for the requirements document.`,
  },
];

const Faq = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [maxHeight, setMaxHeight] = useState({});

  const descriptionRefs = useRef([]);

  useEffect(() => {
    const heights = {};
    descriptionRefs.current.forEach((ref, index) => {
      if (ref) heights[index] = ref.scrollHeight;
    });
    setMaxHeight(heights);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="FAQ" className="py-12 px-6 sm:px-12">
      {/* Title */}
      <div className="mx-auto text-left flex text-[24px] sm:text-[32px] font-medium mb-6 sm:mb-12">
        <h1 className="text-trBlue">✦</h1>
        <h1 className="ml-2 text-darkBlue">FAQs</h1>
      </div>

      {/* Subtitle */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[24px] sm:text-[32px] font-semibold text-darkBlue">
          Frequently asked questions
        </h2>
        <p className="text-[18px] sm:text-[24px] mt-4 leading-[1.5] px-4 sm:px-6">
          Quick answers to questions you may have. Can’t find what you’re
          looking for?{' '}
          <a
            href="https://calendly.com/ahmedmahouachi66/project-discussion"
            target="_blank"
            rel="noopener noreferrer"
            className="text-trBlue cursor-pointer"
          >
            Book a call now
          </a>
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto mt-8 sm:mt-10 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-blueBg text-darkBlue rounded-lg overflow-hidden transition-all duration-500"
          >
            {/* Question and Icon */}
            <button
              className="w-full flex items-center justify-between px-6 py-4 md:py-5 text-left focus:outline-none"
              onClick={() => toggleFaq(index)}
            >
              <img
                src={openFaqIndex === index ? minusIcon : plusIcon}
                alt={openFaqIndex === index ? 'Minus' : 'Plus'}
                className="w-6 h-6 shrink-0"
              />
              <span className="text-[16px] sm:text-[20px] font-medium flex-1 ml-4">
                {' '}
                {faq.question}
              </span>
            </button>
            {/* Description with Animation */}
            <div
              ref={(el) => (descriptionRefs.current[index] = el)}
              className={`transition-all duration-500 ease-in-out px-6 ${
                openFaqIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                maxHeight:
                  openFaqIndex === index ? `${maxHeight[index]}px` : '0',
              }}
            >
              <p className="pb-4 text-[14px] sm:text-[16px] text-regular whitespace-pre-line">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
