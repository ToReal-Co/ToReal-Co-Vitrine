import React from 'react';
import BookaCallButton from '../common/BookACallButton';

const CALENDLY_URL =
  'https://calendly.com/ahmedmahouachi66/project-discussion';

const steps = [
  {
    phase: 'Discovery',
    title: 'Initial contact',
    description:
      'We discuss your vision, goals, and project scope in a free discovery call.',
  },
  {
    phase: 'Planning',
    title: 'Requirements document',
    description:
      'We draft a detailed specification: features, timeline, and deliverables.',
  },
  {
    phase: 'Planning',
    title: 'Specification validation',
    description:
      'You review and approve the document before any development starts.',
  },
  {
    phase: 'Build',
    title: 'Development kickoff',
    description:
      'Once validated, we begin building your product with a clear roadmap.',
  },
  {
    phase: 'Build',
    title: 'Weekly demos',
    description:
      'Every week, a 30-minute session to review progress and gather your feedback.',
  },
  {
    phase: 'Launch',
    title: 'Scrum delivery',
    description:
      'Sprints, backlog prioritization, and continuous validation until launch.',
  },
];

const StepBadge = ({ index, phase }) => (
  <span className="inline-block px-5 py-2 rounded-full text-trWhite text-sm sm:text-base font-semibold shadow-md bg-trBlue whitespace-nowrap">
    Step {String(index + 1).padStart(2, '0')} · {phase}
  </span>
);

const StepContent = ({ title, description, showTitleAbove = true }) => (
  <div className="w-full max-w-md">
    {showTitleAbove && (
      <h3 className="text-[18px] sm:text-[22px] font-bold text-darkBlue mb-3 sm:mb-4">
        {title}
      </h3>
    )}
    <div className="bg-trWhite rounded-2xl p-5 sm:p-6 shadow-[0_8px_30px_rgba(4,17,54,0.08)] border border-blueBg/80">
      {!showTitleAbove && (
        <h3 className="text-[17px] sm:text-[19px] font-bold text-darkBlue mb-2">
          {title}
        </h3>
      )}
      <p className="text-[14px] sm:text-[15px] text-darkBlue/80 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const TimelineDot = () => (
  <span
    className="relative z-10 flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 rounded-full bg-trBlue ring-4 ring-trWhite shadow-md"
    aria-hidden
  />
);

const HowWeWork = () => {
  const handleBookCall = () => {
    window.open(CALENDLY_URL, '_blank');
  };

  return (
    <section id="how-we-work" className="py-12 px-6 sm:px-12 overflow-hidden">
      <div className="mx-auto text-left flex text-[24px] sm:text-[32px] font-medium mb-6 sm:mb-12">
        <h1 className="text-trBlue">✦</h1>
        <h1 className="ml-2 text-darkBlue">How We Work</h1>
      </div>

      <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16 px-1">
        <p className="text-[16px] sm:text-[24px] text-darkBlue font-medium leading-relaxed">
          A clear, transparent process from first contact to launch—no surprises,
          full collaboration at every step.
        </p>
      </div>

      {/* Desktop: alternating vertical timeline */}
      <div className="hidden md:block max-w-5xl mx-auto relative">
        <div
          className="absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-trBlue/20"
          aria-hidden
        />
        <ol className="space-y-14 lg:space-y-20 relative z-10">
          {steps.map((step, index) => {
            const contentOnRight = index % 2 === 0;

            return (
              <li
                key={step.title}
                className="grid grid-cols-[1fr_auto_1fr] gap-x-6 lg:gap-x-10 items-start"
              >
                <div
                  className={`flex pt-1 ${
                    contentOnRight
                      ? 'justify-end pr-2 lg:pr-6'
                      : 'justify-end flex-col items-end pr-2 lg:pr-6'
                  }`}
                >
                  {contentOnRight ? (
                    <StepBadge index={index} phase={step.phase} />
                  ) : (
                    <StepContent
                      title={step.title}
                      description={step.description}
                    />
                  )}
                </div>

                <div className="flex justify-center pt-2">
                  <TimelineDot />
                </div>

                <div
                  className={`flex pt-1 ${
                    contentOnRight
                      ? 'justify-start pl-2 lg:pl-6'
                      : 'justify-start pl-2 lg:pl-6'
                  }`}
                >
                  {contentOnRight ? (
                    <StepContent
                      title={step.title}
                      description={step.description}
                    />
                  ) : (
                    <StepBadge index={index} phase={step.phase} />
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Mobile: line on the left of cards */}
      <ol className="md:hidden mx-auto w-full max-w-sm px-2">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;

          return (
            <li key={step.title} className="relative w-full pl-11 pb-6 last:pb-0">
              {!isLast && (
                <div
                  className="absolute left-4 top-8 bottom-0 w-[2px] bg-trBlue/25"
                  aria-hidden
                />
              )}
              <span
                className="absolute left-0 top-0 z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-trBlue text-sm font-bold text-trWhite shadow-sm"
                aria-hidden
              >
                {index + 1}
              </span>

              <article className="relative z-10 w-full rounded-[20px] bg-blueBg p-5 text-left shadow-sm">
                <div className="mb-3 flex flex-wrap items-center justify-start gap-2">
                  <span className="rounded-md bg-trWhite px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-trBlue">
                    {step.phase}
                  </span>
                </div>
                <h3 className="text-[17px] font-bold leading-snug text-darkBlue">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-darkBlue/75">
                  {step.description}
                </p>
              </article>
            </li>
          );
        })}
      </ol>

      <div className="max-w-2xl mx-auto text-center mt-10 md:mt-20 px-2">
        <p className="text-[16px] sm:text-[18px] text-darkBlue mb-6">
          Ready to start? Book a free discovery call and we&apos;ll walk you
          through step 1.
        </p>
        <BookaCallButton color="blue" onClick={handleBookCall}>
          Book a call
        </BookaCallButton>
      </div>
    </section>
  );
};

export default HowWeWork;
