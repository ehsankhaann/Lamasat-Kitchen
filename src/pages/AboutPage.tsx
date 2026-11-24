import React from 'react';
import { Language, PageId } from '../types';
import { MILESTONES, SITE_COPY } from '../data/content';
import { Reveal } from '../components/Reveal';
import { DirectionalArrow } from '../components/DirectionalArrow';

interface AboutPageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang, onNavigate }) => {
  const copy = SITE_COPY.aboutPage;

  return (
    <div className="page-enter pt-[84px]">
      {/* Opening Statement */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pt-16 sm:pt-24 lg:pt-28 pb-16 sm:pb-24">
        <div className="max-w-4xl space-y-6">
          <p className="eyebrow">{copy.eyebrow[lang]}</p>
          <h1 className="font-display text-[2.7rem] sm:text-[4rem] lg:text-[4.8rem] leading-[1.04] text-[#1C1A17]">
            {copy.title[lang]}
          </h1>
        </div>

        {/* Full architectural craft plate */}
        <div className="mt-14 sm:mt-20 image-frame aspect-[16/10] sm:aspect-[21/9]">
          <img
            src="/images/atelier-craft.jpg"
            alt={
              lang === 'ar'
                ? 'طاولة عينات خامات لمسات للمطابخ — مسقط'
                : 'Honed limestone, European smoked oak, and aged bronze samples inside the Lamasat Muscat studio'
            }
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Two-Column Story Narrative */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pb-24 sm:pb-32">
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="font-display text-[1.65rem] sm:text-[2rem] leading-[1.32] text-[#1C1A17]">
              {copy.lead[lang]}
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-[0.96rem] leading-[1.9] text-[#5B554D] font-light">
            <p>{copy.storyCol1[lang]}</p>
            <p>{copy.storyCol2[lang]}</p>
          </div>
        </Reveal>

        {/* Quiet Editorial Fact Row */}
        <Reveal delay={80} className="mt-20 sm:mt-24 pt-12 border-t border-b border-[#DDD6CA] pb-12 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          {copy.stats.map((item) => (
            <div key={item.value.en} className="space-y-2.5">
              <p className="font-display text-[2.4rem] sm:text-[3.2rem] leading-none text-[#1C1A17] font-light">
                {item.value[lang]}
              </p>
              <p className="text-[0.82rem] text-[#7A7267] font-light">
                {item.label[lang]}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Philosophy in Clean Architectural Rows */}
      <section className="bg-[#ECE8DF]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
          <Reveal className="max-w-xl space-y-4 pb-14">
            <p className="eyebrow">{copy.principlesEyebrow[lang]}</p>
            <h2 className="font-display text-[2.15rem] sm:text-[2.9rem] leading-[1.1] text-[#1C1A17]">
              {copy.principlesHeading[lang]}
            </h2>
          </Reveal>

          <div className="divide-y divide-[#D4CDC0] border-t border-b border-[#D4CDC0]">
            {copy.principles.map((p, idx) => (
              <Reveal
                key={p.index}
                delay={idx * 60}
                className="py-9 sm:py-11 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline"
              >
                <span className="md:col-span-2 text-[0.74rem] tracking-[0.2em] text-[#8C6D4F]">
                  {p.index}
                </span>
                <h3 className="md:col-span-4 font-display text-[1.65rem] sm:text-[1.85rem] text-[#1C1A17]">
                  {p.title[lang]}
                </h3>
                <p className="md:col-span-6 text-[0.94rem] leading-[1.85] text-[#554F47] font-light">
                  {p.body[lang]}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quiet Chronicle Since 2004 */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-24 sm:py-32 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-4 space-y-5">
            <p className="eyebrow">{copy.timelineEyebrow[lang]}</p>
            <h2 className="font-display text-[2.15rem] sm:text-[2.85rem] leading-[1.1] text-[#1C1A17]">
              {copy.timelineHeading[lang]}
            </h2>
            <p className="text-[0.86rem] leading-[1.8] text-[#847C71] font-light pt-2">
              {copy.factoryNote[lang]}
            </p>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6 divide-y divide-[#DDD6CA] border-t border-b border-[#DDD6CA]">
            {MILESTONES.map((m, i) => (
              <Reveal
                key={m.year}
                delay={i * 50}
                className="py-7 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline"
              >
                <span className="sm:col-span-3 font-display text-[1.4rem] text-[#8C6D4F]">
                  {m.year === 'Today' && lang === 'ar' ? 'اليوم' : m.year}
                </span>
                <div className="sm:col-span-9 space-y-1.5">
                  <h3 className="text-[1rem] text-[#1C1A17] font-normal">
                    {m.title[lang]}
                  </h3>
                  <p className="text-[0.9rem] leading-[1.8] text-[#5B554D] font-light">
                    {m.detail[lang]}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Visual Companion & Visit CTA */}
        <Reveal className="mt-20 sm:mt-28 grid grid-cols-1 md:grid-cols-12 gap-10 items-center pt-16 border-t border-[#DDD6CA]">
          <div className="md:col-span-7 image-frame aspect-[16/10]">
            <img
              src="/images/kitchen-qurum.jpg"
              alt={
                lang === 'ar'
                  ? 'مطبخ القرم بتشطيب البلوط الأبيض المضلّع'
                  : 'Qurm fluted white oak showcase inside Lamasat Muscat gallery'
              }
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-5 space-y-6">
            <h3 className="font-display text-[1.95rem] sm:text-[2.4rem] leading-[1.15] text-[#1C1A17]">
              {lang === 'ar'
                ? 'اختبر دقّة الخامات عن قرب في معارضنا.'
                : 'Experience the joinery in person across Muscat.'}
            </h3>
            <p className="text-[0.92rem] leading-[1.82] text-[#5B554D] font-light">
              {lang === 'ar'
                ? 'استقبلنا أجيالاً من العائلات والمعماريين في شاطئ القرم والموج مسقط. يسعدنا مرافقتكم بهدوء لاختيار مطبخكم القادم.'
                : 'Our showrooms in Al Qurum and Al Mouj are designed to move slowly—open a drawer, trace a honed stone bevel, and speak directly with the people building your kitchen.'}
            </p>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="group inline-flex items-center gap-3 px-7 py-4 bg-[#1C1A17] text-[#FAF9F6] hover:bg-[#332E28] transition-colors text-[0.74rem] tracking-[0.16em] uppercase cursor-pointer"
            >
              <span>{SITE_COPY.home.closingPrimaryCta[lang]}</span>
              <DirectionalArrow lang={lang} size={14} />
            </button>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
