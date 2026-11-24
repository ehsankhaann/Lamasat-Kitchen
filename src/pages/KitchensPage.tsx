import React, { useState } from 'react';
import { KitchenCategory, KitchenCollection, Language, PageId } from '../types';
import {
  KITCHEN_COLLECTIONS,
  MATERIAL_LIBRARY,
  SITE_COPY,
} from '../data/content';
import { Reveal } from '../components/Reveal';
import { DirectionalArrow } from '../components/DirectionalArrow';

interface KitchensPageProps {
  lang: Language;
  onSelectKitchen: (kitchen: KitchenCollection) => void;
  onNavigate: (page: PageId) => void;
}

const FILTER_KEYS: KitchenCategory[] = [
  'all',
  'stone',
  'timber',
  'lacquer',
  'courtyard',
];

export const KitchensPage: React.FC<KitchensPageProps> = ({
  lang,
  onSelectKitchen,
  onNavigate,
}) => {
  const [filter, setFilter] = useState<KitchenCategory>('all');
  const copy = SITE_COPY.kitchensPage;

  const items =
    filter === 'all'
      ? KITCHEN_COLLECTIONS
      : KITCHEN_COLLECTIONS.filter((item) => item.category === filter);

  return (
    <div className="page-enter pt-[84px]">
      {/* Editorial Header */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pt-16 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
        <div className="max-w-3xl space-y-5">
          <p className="eyebrow">{copy.eyebrow[lang]}</p>
          <h1 className="font-display text-[2.8rem] sm:text-[4rem] lg:text-[4.6rem] leading-[1.04] text-[#1C1A17]">
            {copy.title[lang]}
          </h1>
          <p className="text-[0.98rem] sm:text-[1.06rem] leading-[1.82] text-[#5B554D] font-light max-w-2xl pt-1">
            {copy.intro[lang]}
          </p>
        </div>

        {/* Hairline Architectural Filter */}
        <div
          role="tablist"
          aria-label={lang === 'ar' ? 'تصنيف المطابخ' : 'Filter kitchens'}
          className="mt-14 pt-6 border-t border-[#DDD6CA] flex flex-wrap gap-x-8 gap-y-3"
        >
          {FILTER_KEYS.map((key) => {
            const active = filter === key;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(key)}
                className={`relative pb-2 cursor-pointer transition-colors duration-300 ${
                  lang === 'ar'
                    ? 'text-[0.9rem]'
                    : 'text-[0.74rem] tracking-[0.16em] uppercase'
                } ${
                  active
                    ? 'text-[#1C1A17]'
                    : 'text-[#847C71] hover:text-[#1C1A17]'
                }`}
              >
                {copy.filters[key][lang]}
                <span
                  className={`absolute inset-x-0 bottom-0 h-[1px] bg-[#1C1A17] transition-opacity duration-300 ${
                    active ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </section>

      {/* Kitchen Showcase Gallery */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pb-24 sm:pb-32 lg:pb-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-12 gap-y-16 sm:gap-y-24">
          {items.map((kitchen, index) => {
            const isHeroWide = filter === 'all' && index === 0;
            return (
              <Reveal
                key={kitchen.id}
                delay={(index % 2) * 80}
                className={isHeroWide ? 'md:col-span-2' : ''}
              >
                <article
                  onClick={() => onSelectKitchen(kitchen)}
                  className="group cursor-pointer"
                >
                  <div
                    className={`image-frame ${
                      isHeroWide
                        ? 'aspect-[16/10] sm:aspect-[16/9]'
                        : 'aspect-[4/3]'
                    }`}
                  >
                    <img
                      src={kitchen.image}
                      alt={kitchen.name[lang]}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div
                    className={`mt-6 ${
                      isHeroWide
                        ? 'grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline'
                        : 'space-y-2.5'
                    }`}
                  >
                    <div
                      className={
                        isHeroWide
                          ? 'md:col-span-5 flex items-baseline gap-4'
                          : 'flex items-baseline justify-between gap-4'
                      }
                    >
                      <h2 className="font-display text-[1.9rem] sm:text-[2.2rem] leading-tight text-[#1C1A17] group-hover:text-[#6D523A] transition-colors">
                        {kitchen.name[lang]}
                      </h2>
                      <span className="text-[0.7rem] tracking-[0.2em] text-[#847C71]">
                        {kitchen.code}
                      </span>
                    </div>

                    <div
                      className={
                        isHeroWide
                          ? 'md:col-span-5 text-[0.9rem] text-[#5B554D] font-light leading-relaxed'
                          : 'space-y-3'
                      }
                    >
                      <p className="text-[0.86rem] text-[#847C71] font-light">
                        {kitchen.subtitle[lang]}
                      </p>
                      <p className="text-[0.9rem] leading-[1.75] text-[#5B554D] font-light max-w-lg">
                        {kitchen.summary[lang]}
                      </p>
                    </div>

                    {isHeroWide && (
                      <div className="md:col-span-2 md:text-end">
                        <span className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.16em] uppercase text-[#1C1A17] border-b border-[#1C1A17]/30 pb-1 group-hover:border-[#1C1A17] transition-colors">
                          {copy.inspectLabel[lang]}
                        </span>
                      </div>
                    )}
                  </div>

                  {!isHeroWide && (
                    <div className="mt-5 pt-4 border-t border-[#E4DEC9]/80 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {kitchen.swatches.map((sw, idx) => (
                          <span
                            key={idx}
                            title={sw.name[lang]}
                            className="w-4 h-4 border border-[#1C1A17]/12 inline-block"
                            style={{ backgroundColor: sw.color }}
                          />
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.15em] uppercase text-[#5B554D] group-hover:text-[#1C1A17] transition-colors">
                        <span>{copy.inspectLabel[lang]}</span>
                        <DirectionalArrow lang={lang} size={13} />
                      </span>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Curated Material Palette */}
      <section className="bg-[#ECE8DF]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
          <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-[#D5CEC2]">
            <div className="lg:col-span-6 space-y-4">
              <p className="eyebrow">{copy.materialsEyebrow[lang]}</p>
              <h2 className="font-display text-[2.1rem] sm:text-[2.75rem] leading-[1.1] text-[#1C1A17]">
                {copy.materialsHeading[lang]}
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="text-[0.92rem] leading-[1.82] text-[#565048] font-light">
                {copy.materialsIntro[lang]}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10 pt-14">
            {MATERIAL_LIBRARY.map((mat, i) => (
              <Reveal key={mat.name.en} delay={i * 50} className="space-y-4">
                <div
                  className="aspect-square w-full border border-[#1C1A17]/10"
                  style={{ backgroundColor: mat.tone }}
                />
                <div className="space-y-1">
                  <h3 className="font-display text-[1.22rem] leading-snug text-[#1C1A17]">
                    {mat.name[lang]}
                  </h3>
                  <p className="text-[0.76rem] text-[#6B645A] font-light">
                    {mat.origin[lang]}
                  </p>
                  <p className="text-[0.72rem] text-[#847C71] font-light">
                    {mat.finish[lang]}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Process */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <Reveal className="max-w-xl space-y-4 pb-14">
          <p className="eyebrow">{copy.processEyebrow[lang]}</p>
          <h2 className="font-display text-[2.1rem] sm:text-[2.75rem] leading-[1.1] text-[#1C1A17]">
            {copy.processHeading[lang]}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#DDD6CA]">
          {copy.steps.map((step, i) => (
            <Reveal
              key={step.num}
              delay={i * 70}
              className="py-10 sm:pe-8 border-b border-[#DDD6CA] lg:border-b-0 space-y-4"
            >
              <span className="text-[0.72rem] tracking-[0.2em] text-[#8C6D4F]">
                {step.num}
              </span>
              <h3 className="font-display text-[1.5rem] text-[#1C1A17] leading-snug">
                {step.title[lang]}
              </h3>
              <p className="text-[0.88rem] leading-[1.8] text-[#5B554D] font-light">
                {step.text[lang]}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 pt-10 border-t border-[#DDD6CA] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="text-[0.94rem] text-[#5B554D] font-light">
            {lang === 'ar'
              ? 'جميع المطابخ تُصمَّم وتُفصَّل حصرياً وفق مقاسات منزلك في مسقط.'
              : 'Every kitchen is engineered to exact room dimensions in Muscat.'}
          </p>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#1C1A17] text-[#FAF9F6] hover:bg-[#332E28] transition-colors text-[0.74rem] tracking-[0.16em] uppercase cursor-pointer self-start sm:self-auto"
          >
            <span>{SITE_COPY.home.closingPrimaryCta[lang]}</span>
            <DirectionalArrow lang={lang} size={14} />
          </button>
        </div>
      </section>
    </div>
  );
};
