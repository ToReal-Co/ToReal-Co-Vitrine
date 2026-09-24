import React, { useEffect, useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import { useBooking } from '../common/BookingContext';
import { getCmsFaq } from '../lib/faqApi';
import { setJsonLd } from '../lib/seo';

const FALLBACK_FAQS = [
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
    answer: `We start with a free discovery call (about 30 minutes) — pick a slot right on this site and we'll confirm by email. During the call, we review your idea, goals, budget, and timeline, and outline the next steps together.

You can also reach us in other ways:
• WhatsApp — for quick messages and short requests (+216 58 693 946).
• Discord — join our channel for reviews, feedback, and project updates during development.

After the discovery call, we follow up with a summary and, if needed, a proposal for the requirements document.`,
  },
];

const Faq = () => {
  const [faqs, setFaqs] = useState(FALLBACK_FAQS);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const { openBooking } = useBooking();

  useEffect(() => {
    let cancelled = false;
    getCmsFaq().then((cmsFaqs) => {
      if (cancelled || !cmsFaqs) return;
      const sorted = cmsFaqs.slice().sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
      setFaqs(sorted);
      setOpenFaqIndex(0);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    setJsonLd('faq-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    });
  }, [faqs]);

  const toggleFaq = (index) => setOpenFaqIndex(openFaqIndex === index ? null : index);

  return (
    <section
      id="faq"
      className="mx-auto max-w-[980px] px-[clamp(20px,4vw,48px)]"
      style={{ paddingTop: 'clamp(90px,11vw,150px)' }}
    >
      <div className="text-center">
        <SectionHeading align="center" eyebrow="[07] FAQ" title="Frequently asked questions" />
        <p className="mx-auto mt-5 max-w-xl text-[18px] text-muted">
          Quick answers to questions you may have. Can&apos;t find what you&apos;re looking for?{' '}
          <button
            type="button"
            onClick={openBooking}
            className="font-semibold text-darkBlue underline decoration-[1.5px] underline-offset-4"
          >
            Book a call now
          </button>
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-3">
        {faqs.map((faq, index) => {
          const isOpen = openFaqIndex === index;
          return (
            <div
              key={faq.id || faq.question}
              className="rounded-3xl bg-white/[0.82] transition-[border-color,box-shadow] duration-300"
              style={{
                border: `1px solid ${isOpen ? 'rgba(21,112,239,.35)' : 'rgba(10,20,51,.07)'}`,
                boxShadow: isOpen ? '0 30px 60px -40px rgba(21,112,239,.5)' : 'none',
              }}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between gap-5 px-7 py-6 text-left"
              >
                <span className="text-[clamp(17px,1.5vw,20px)] font-semibold text-darkBlue">
                  {faq.question}
                </span>
                <span
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-[20px] transition-[transform,background,color] duration-[350ms]"
                  style={{
                    background: isOpen ? '#1570EF' : 'rgba(21,112,239,.1)',
                    color: isOpen ? '#fff' : '#1570EF',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  +
                </span>
              </button>

              <div
                className="grid transition-[grid-template-rows] duration-[450ms] ease-out-magnet"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <p className="max-w-[760px] whitespace-pre-line px-7 pb-7 text-[16px] leading-[1.7] text-muted">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
