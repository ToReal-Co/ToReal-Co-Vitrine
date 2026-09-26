import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import { useBooking } from '../common/BookingContext';
import { setJsonLd } from '../lib/seo';
import { buildFaqJsonLd } from '../lib/routes';
import { SITE_URL } from '../lib/siteConfig';
import { useI18n } from '../i18n';

const Faq = () => {
  const { t } = useI18n();
  const [faqs, setFaqs] = useState(t.faq.items);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const { openBooking } = useBooking();
  const { pathname } = useLocation();

  useEffect(() => {
    setFaqs(t.faq.items);
    setOpenFaqIndex(null);
  }, [t]);

  useEffect(() => {
    const url = `${SITE_URL}${pathname.endsWith('/') ? pathname : `${pathname}/`}`;
    setJsonLd('faq-jsonld', buildFaqJsonLd(url, faqs));
  }, [faqs, pathname]);

  const toggleFaq = (index) => setOpenFaqIndex(openFaqIndex === index ? null : index);

  return (
    <section
      id="faq"
      className="mx-auto max-w-[980px] px-[clamp(20px,4vw,48px)]"
      style={{ paddingTop: 'clamp(56px,7vw,96px)' }}
    >
      <div className="text-center">
        <SectionHeading align="center" eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <p className="mx-auto mt-5 max-w-xl text-[18px] text-muted">
          {t.faq.leadBefore}{' '}
          <button
            type="button"
            onClick={openBooking}
            className="font-semibold text-darkBlue underline decoration-[1.5px] underline-offset-4"
          >
            {t.faq.leadCta}
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
              <h3 className="m-0">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-5 px-7 py-6 text-left text-[clamp(17px,1.5vw,20px)] font-semibold text-darkBlue"
                >
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-[20px] font-normal transition-[transform,background,color] duration-[350ms]"
                    style={{
                      background: isOpen ? '#1570EF' : 'rgba(21,112,239,.1)',
                      color: isOpen ? '#fff' : '#1570EF',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>
              </h3>

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
