import React from 'react';
import { Link } from 'react-router-dom';
import TiltCard, { CardSpotlight } from '../common/TiltCard';
import SectionHeading from '../common/SectionHeading';
import { IconArrowRight } from '../common/Icons';
import { useI18n } from '../i18n';

const icons = {
  mobile: (
    <span className="relative block h-[28px] w-[17px] rounded-[5px] border-[3px] border-white">
      <span className="absolute bottom-[3px] left-1/2 h-[3.5px] w-[7px] -translate-x-1/2 rounded-full bg-white" />
    </span>
  ),
  web: <span className="h-[22px] w-[28px] rounded-[5px] border-2 border-white border-t-[6px]" />,
  design: (
    <span className="h-5 w-5 rotate-45 rounded-[3px] border-2 border-trBlue shadow-[5px_5px_0_-2px_rgba(21,112,239,0.35)]" />
  ),
};

const badges = ['bg-trBlue', 'bg-navy', 'bg-trBlue/[0.12]'];

const Services = () => {
  const { t } = useI18n();

  return (
    <section
      id="services"
      className="mx-auto max-w-[1280px] px-[clamp(20px,4vw,48px)]"
      style={{ paddingTop: 'clamp(56px,7vw,96px)' }}
    >
      <div
        className="grid items-end gap-x-16 gap-y-6"
        style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))' }}
      >
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={
            <>
              {t.services.titleLead} <span className="text-trBlue">{t.services.titleAccent}</span>
            </>
          }
        />
        <p className="max-w-[440px] text-[18px] leading-relaxed text-muted">{t.services.lead}</p>
      </div>

      <div
        className="mt-14 grid gap-5"
        style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))' }}
      >
        {t.services.items.map((service, index) => (
          <TiltCard key={service.title} max={5} spotlight className="group h-full">
            <Link
              to={service.href}
              title={service.linkLabel}
              className="relative flex h-full min-h-[380px] flex-col overflow-hidden rounded-[28px] border border-darkBlue/[0.07] bg-white/[0.78] p-8 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_30px_60px_-40px_rgba(10,20,51,0.35)] outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-trBlue focus-visible:ring-offset-2"
            >
              <CardSpotlight />

              <div className="relative flex items-start justify-between">
                <span
                  className={`grid h-[60px] w-[60px] place-items-center rounded-[18px] shadow-[0_12px_24px_-10px_rgba(21,112,239,0.8)] ${badges[index % badges.length]}`}
                >
                  {icons[service.icon]}
                </span>
                <span className="font-mono text-[13px] text-haze">{service.number}</span>
              </div>

              <h3 className="relative mt-9 text-[26px] font-semibold tracking-[-0.02em] text-darkBlue">
                {service.title}
              </h3>
              <p className="relative mt-3 text-[16px] leading-relaxed text-muted">
                {service.description}
              </p>

              <div className="relative mt-auto pt-7">
                <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-trBlue transition-colors group-hover:text-darkBlue">
                  {service.linkLabel}
                  <IconArrowRight className="h-4 w-4" />
                </span>
                <div className="mt-4 rounded-[10px] bg-darkBlue/[0.04] px-3 py-2.5 font-mono text-[12px] text-mutedSoft">
                  <span className="text-trBlue">$</span> {service.command}
                </div>
              </div>
            </Link>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
