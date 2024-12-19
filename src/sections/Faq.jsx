import React, { useState, useRef, useEffect } from 'react';
import plusIcon from '../assets/icons/plus.svg';
import minusIcon from '../assets/icons/minus.svg';

const faqs = [
  {
    question: 'How do you ensure the quality of your work?',
    answer:
      'We ensure quality through rigorous testing, peer reviews, and adhering to industry best practices.',
  },
  {
    question: 'What tools and technologies do you use?',
    answer:
      'We use cutting-edge tools such as React, Tailwind, Node.js, and various cloud services to deliver high-quality solutions.',
  },
  {
    question: 'How do you ensure the quality of your work?',
    answer:
      'We ensure quality through rigorous testing, peer reviews, and adhering to industry best practices.',
  },
  {
    question: 'Can you develop Web3 or blockchain-based applications?',
    answer:
      'Yes, we have expertise in developing Web3 and blockchain-based applications using technologies like Ethereum, Solidity, and more.',
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
            href="https://calendly.com/d/crkr-jbr-n53/one-off-meeting"
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
              <p className="pb-4 text-[14px] sm:text-[16px] text-regular">
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
