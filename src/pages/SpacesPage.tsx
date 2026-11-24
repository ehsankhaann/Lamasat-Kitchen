import React from 'react';
import { Language } from '../types';
import { SITE_COPY, SPACES_ITEMS } from '../data/content';
import { Reveal } from '../components/Reveal';
import { DirectionalArrow } from '../components/DirectionalArrow';

interface SpacesPageProps {
  lang: Language;
  onBookWithSubject: (subject: string, scope?: string) => void;
}

export const SpacesPage: React.FC<SpacesPageProps> = ({
  lang,
  onBookWithSubject,
}) => {
  const copy = SITE_COPY.spacesPage;

  return (
    <div className="page-enter pt-[84px]">
      {/* Page Header */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pt-16 sm:pt-24 lg:pt-28 pb-16 sm:pb-24 border-b border-[#DDD6CA]">
        <div className="max-w-3xl space-y-5">
          <p className="eyebrow">{copy.eyebrow[lang]}</p>
          <h1 className="font-display text-[2.8rem] sm:text-[4rem] lg:text-[4.6rem] leading-[1.04] text-[#1C1A17]">
            {copy.title[lang]}
          </h1>
          <p className="text-[0.98rem] sm:text-[1.06rem] leading-[1.82] text-[#5B554D] font-light max-w-2xl pt-1">
            {copy.intro[lang]}
          </p>
        </div>
      </section>

      {/* Alternating Architectural Interior Chapters */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 divide-y divide-[#DDD6CA]">
        {SPACES_ITEMS.map((space, idx) => {
          const reversed = idx % 2 === 1;
          return (
            <div
              key={space.id}
              className="py-20 sm:py-28 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            >
              <Reveal
                className={`lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}
              >
                <div className="image-frame aspect-[4/3]">
                  <img
                    src={space.image}
                    alt={space.title[lang]}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>

              <Reveal
                delay={100}
                className={`lg:col-span-5 space-y-6 ${
                  reversed ? 'lg:order-1' : ''
                }`}
              >
                <div className="flex items-center gap-4 text-[0.7rem] tracking-[0.2em] uppercase text-[#847C71]">
                  <span className="text-[#8C6D4F]">{space.index}</span>
                  <span>—</span>
                  <span>{space.discipline[lang]}</span>
                </div>

                <h2 className="font-display text-[2.1rem] sm:text-[2.65rem] leading-[1.1] text-[#1C1A17]">
                  {space.title[lang]}
                </h2>

                <p className="text-[0.95rem] leading-[1.85] text-[#5B554D] font-light">
                  {space.description[lang]}
                </p>

                <p className="text-[0.82rem] leading-[1.7] text-[#847C71] font-light pt-1">
                  {space.detailNote[lang]}
                </p>

                <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 pt-4 border-t border-[#E2DCD1] text-[0.83rem] text-[#3F3B35] font-light">
                  {space.applications[lang].map((app) => (
                    <li key={app} className="flex items-center gap-2.5">
                      <span
                        className="w-1.5 h-[1px] bg-[#8C6D4F] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() =>
                      onBookWithSubject(space.title[lang], 'spaces')
                    }
                    className="group link-editorial text-[#1C1A17] text-[0.74rem] tracking-[0.16em] uppercase cursor-pointer"
                  >
                    <span>{copy.inquireSpace[lang]}</span>
                    <DirectionalArrow lang={lang} size={14} />
                  </button>
                </div>
              </Reveal>
            </div>
          );
        })}
      </section>

      {/* Architectural & Interior Studio Collaborations */}
      <section className="bg-[#ECE8DF]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-24 sm:py-32 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <Reveal className="lg:col-span-5 space-y-6">
              <p className="eyebrow">{copy.collabEyebrow[lang]}</p>
              <h2 className="font-display text-[2.2rem] sm:text-[2.95rem] leading-[1.1] text-[#1C1A17]">
                {copy.collabHeading[lang]}
              </h2>
              <p className="text-[0.95rem] leading-[1.85] text-[#554F47] font-light">
                {copy.collabBody[lang]}
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() =>
                    onBookWithSubject(
                      lang === 'ar'
                        ? 'تعاون معماري — جلسة أستوديو'
                        : 'Architect & Studio Collaboration',
                      'architect'
                    )
                  }
                  className="group inline-flex items-center gap-3 px-7 py-4 bg-[#1C1A17] text-[#FAF9F6] hover:bg-[#332E28] transition-colors text-[0.74rem] tracking-[0.16em] uppercase cursor-pointer"
                >
                  <span>{copy.collabCta[lang]}</span>
                  <DirectionalArrow lang={lang} size={14} />
                </button>
              </div>
            </Reveal>

            <Reveal
              delay={100}
              className="lg:col-span-6 lg:col-start-7 divide-y divide-[#D4CDC0] border-t border-b border-[#D4CDC0] self-center"
            >
              {copy.collabPillars.map((pillar, i) => (
                <div key={i} className="py-7 space-y-2">
                  <h3 className="font-display text-[1.5rem] text-[#1C1A17]">
                    {pillar.title[lang]}
                  </h3>
                  <p className="text-[0.9rem] leading-[1.8] text-[#5A544C] font-light">
                    {pillar.detail[lang]}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};
