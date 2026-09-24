import React from 'react';
import TiltCard, { CardSpotlight } from '../common/TiltCard';
import SectionHeading from '../common/SectionHeading';

const icons = {
  mobile: (
    <span className="grid h-[18px] w-[28px] place-items-center rounded-[5px] border-2 border-white" />
  ),
  web: (
    <span className="h-[22px] w-[28px] rounded-[5px] border-2 border-white border-t-[6px]" />
  ),
  design: (
    <span className="h-5 w-5 rotate-45 rounded-[3px] border-2 border-trBlue shadow-[5px_5px_0_-2px_rgba(21,112,239,0.35)]" />
  ),
};

const servicesData = [
  {
    icon: 'mobile',
    number: '01',
    title: 'Mobile Development',
    description:
      'Building and deploying mobile apps with seamless backend integration — from architecture and API design through App Store and Play Store release, with monitoring and support after launch.',
    command: 'build ios && build android',
    badge: 'bg-trBlue',
  },
  {
    icon: 'web',
    number: '02',
    title: 'Web Development',
    description:
      'Responsive websites with a secure backend and ongoing support — covering everything from server architecture and performance tuning to SEO, analytics and long-term maintenance.',
    command: 'vite build --mode production',
    badge: 'bg-navy',
  },
  {
    icon: 'design',
    number: '03',
    title: 'AI Workflows',
    description:
      'Designing and automating intelligent workflows that connect your tools, data and AI models — from prompt design and integration to deployment, monitoring and continuous optimization.',
    command: 'design → automate → deploy',
    badge: 'bg-trBlue/[0.12]',
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="mx-auto max-w-[1280px] px-[clamp(20px,4vw,48px)]"
      style={{ paddingTop: 'clamp(90px,11vw,150px)' }}
    >
      <div
        className="grid items-end gap-x-16 gap-y-6"
        style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))' }}
      >
        <SectionHeading
          eyebrow="[01] Services"
          title={
            <>
              Crafting digital solutions with <span className="text-trBlue">innovation and expertise</span>
            </>
          }
        />
        <p className="max-w-[440px] text-[18px] leading-relaxed text-muted">
          Three practices, one team — from the first wireframe to the production release.
        </p>
      </div>

      <div
        className="mt-14 grid gap-5"
        style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))' }}
      >
        {servicesData.map((service) => (
          <TiltCard key={service.title} max={5} spotlight className="group h-full">
            <article className="relative flex h-full min-h-[380px] flex-col overflow-hidden rounded-[28px] border border-darkBlue/[0.07] bg-white/[0.78] p-8 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_30px_60px_-40px_rgba(10,20,51,0.35)]">
              <CardSpotlight />

              <div className="relative flex items-start justify-between">
                <span
                  className={`grid h-[60px] w-[60px] place-items-center rounded-[18px] shadow-[0_12px_24px_-10px_rgba(21,112,239,0.8)] ${service.badge}`}
                >
                  {icons[service.icon]}
                </span>
                <span className="font-mono text-[13px] text-haze">{service.number}</span>
              </div>

              <h3 className="relative mt-9 text-[26px] font-semibold tracking-[-0.02em] text-darkBlue">
                {service.title}
              </h3>
              <p className="relative mt-3 text-[16px] leading-relaxed text-muted">{service.description}</p>

              <div className="relative mt-auto pt-7">
                <div className="rounded-[10px] bg-darkBlue/[0.04] px-3 py-2.5 font-mono text-[12px] text-mutedSoft">
                  <span className="text-trBlue">$</span> {service.command}
                </div>
              </div>
            </article>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
