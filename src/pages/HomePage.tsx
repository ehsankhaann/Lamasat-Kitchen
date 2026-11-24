import React from 'react';
import { KitchenCollection, Language, PageId, ProjectItem } from '../types';
import {
  buildWhatsAppUrl,
  KITCHEN_COLLECTIONS,
  PROJECTS,
  SITE_COPY,
} from '../data/content';
import { Reveal } from '../components/Reveal';
import { DirectionalArrow } from '../components/DirectionalArrow';

interface HomePageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onSelectKitchen: (kitchen: KitchenCollection) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  lang,
  onNavigate,
  onSelectKitchen,
  onSelectProject,
}) => {
  const copy = SITE_COPY.home;
  const featuredKitchens = [
    KITCHEN_COLLECTIONS[1], // Qurm
    KITCHEN_COLLECTIONS[2], // Monolith
    KITCHEN_COLLECTIONS[3], // Sifah
  ];
  const featuredProjects = [PROJECTS[0], PROJECTS[1]];

  return (
    <div className="page-enter">
      {/* 1. Full-Bleed Architectural Hero */}
      <section className="relative w-full h-[100svh] min-h-[620px] max-h-[1040px] overflow-hidden bg-[#26231F]">
        <img
          src="/images/hero-kitchen.jpg"
          alt={
            lang === 'ar'
              ? 'مطبخ معماري مفصّل من لمسات للمطابخ في مسقط'
              : 'Bespoke honed travertine and smoked oak kitchen by Lamasat Kitchen in Muscat'
          }
          className="hero-image-motion absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Quiet graduated dark scrim calibrated for sunlit travertine legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#15130F]/78 via-[#15130F]/26 to-[#15130F]/10"
          aria-hidden="true"
        />

        <div className="relative h-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pb-12 sm:pb-16 lg:pb-20 flex flex-col justify-end">
          <div className="max-w-2xl text-[#FAF8F4]">
            <p className="text-[0.68rem] sm:text-[0.72rem] tracking-[0.22em] uppercase text-[#EAE4DA]/85 mb-5">
              {copy.heroLocation[lang]}
            </p>
            <h1 className="font-display text-[2.75rem] sm:text-[4rem] lg:text-[5rem] leading-[1.03] font-light text-[#FAF8F4]">
              {copy.heroTitle[lang]}
            </h1>
            <p className="mt-5 sm:mt-6 text-[0.95rem] sm:text-[1.04rem] leading-[1.7] text-[#EAE4DA]/90 max-w-lg font-light">
              {copy.heroSub[lang]}
            </p>

            <div className="mt-9 sm:mt-10 flex flex-wrap items-center gap-7 sm:gap-9">
              <button
                type="button"
                onClick={() => onNavigate('kitchens')}
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#FAF8F4] text-[#1C1A17] hover:bg-[#EDE8DE] transition-colors duration-300 text-[0.74rem] tracking-[0.16em] uppercase cursor-pointer"
              >
                <span>{copy.heroPrimaryCta[lang]}</span>
                <DirectionalArrow lang={lang} size={14} />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="group link-editorial text-[#FAF8F4] text-[0.76rem] tracking-[0.15em] uppercase cursor-pointer"
              >
                <span>{copy.heroSecondaryCta[lang]}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Introduction — Editorial Asymmetry */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-24 sm:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5 space-y-7">
            <p className="eyebrow">{copy.introEyebrow[lang]}</p>
            <h2 className="font-display text-[2.2rem] sm:text-[2.9rem] lg:text-[3.25rem] leading-[1.1] text-[#1C1A17]">
              {copy.introTitle[lang]}
            </h2>
            <div className="space-y-4 text-[0.96rem] leading-[1.85] text-[#5B554D] font-light">
              <p>{copy.introBody1[lang]}</p>
              <p>{copy.introBody2[lang]}</p>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="group link-editorial text-[#1C1A17] text-[0.76rem] tracking-[0.16em] uppercase cursor-pointer"
              >
                <span>{copy.introCta[lang]}</span>
                <DirectionalArrow lang={lang} size={14} />
              </button>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <figure>
              <div className="image-frame aspect-[4/3]">
                <img
                  src="/images/atelier-craft.jpg"
                  alt={copy.introCaption[lang]}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="mt-4 text-[0.78rem] text-[#847C71] font-light">
                {copy.introCaption[lang]}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* 3. Selected Kitchen Collections */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pt-6 pb-24 sm:pb-32 lg:pb-40 border-t border-[#DDD6CA]">
        <Reveal className="pt-16 sm:pt-20 pb-12 sm:pb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl space-y-4">
            <p className="eyebrow">{copy.featuredEyebrow[lang]}</p>
            <h2 className="font-display text-[2.15rem] sm:text-[2.85rem] leading-[1.1] text-[#1C1A17]">
              {copy.featuredHeading[lang]}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('kitchens')}
            className="group link-editorial self-start md:self-auto text-[#1C1A17] text-[0.76rem] tracking-[0.16em] uppercase cursor-pointer shrink-0"
          >
            <span>{copy.featuredAllLink[lang]}</span>
            <DirectionalArrow lang={lang} size={14} />
          </button>
        </Reveal>

        {/* Lead wide diptych + two architectural study frames */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-14 md:gap-x-8 lg:gap-x-10">
          {/* Primary asymmetric wide pair */}
          <Reveal className="md:col-span-7">
            <article
              onClick={() => onSelectKitchen(featuredKitchens[0])}
              className="group cursor-pointer"
            >
              <div className="image-frame aspect-[16/11]">
                <img
                  src={featuredKitchens[0].image}
                  alt={featuredKitchens[0].name[lang]}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <div>
                  <h3 className="font-display text-[1.65rem] text-[#1C1A17] group-hover:text-[#6D523A] transition-colors">
                    {featuredKitchens[0].name[lang]}
                  </h3>
                  <p className="text-[0.84rem] text-[#7A7267] font-light mt-0.5">
                    {featuredKitchens[0].subtitle[lang]}
                  </p>
                </div>
                <span className="text-[0.7rem] tracking-[0.2em] text-[#847C71]">
                  {featuredKitchens[0].code}
                </span>
              </div>
            </article>
          </Reveal>

          <Reveal delay={100} className="md:col-span-5 md:mt-16">
            <article
              onClick={() => onSelectKitchen(featuredKitchens[1])}
              className="group cursor-pointer"
            >
              <div className="image-frame aspect-[4/3]">
                <img
                  src={featuredKitchens[1].image}
                  alt={featuredKitchens[1].name[lang]}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <div>
                  <h3 className="font-display text-[1.65rem] text-[#1C1A17] group-hover:text-[#6D523A] transition-colors">
                    {featuredKitchens[1].name[lang]}
                  </h3>
                  <p className="text-[0.84rem] text-[#7A7267] font-light mt-0.5">
                    {featuredKitchens[1].subtitle[lang]}
                  </p>
                </div>
                <span className="text-[0.7rem] tracking-[0.2em] text-[#847C71]">
                  {featuredKitchens[1].code}
                </span>
              </div>
            </article>
          </Reveal>

          {/* Horizontal quiet anchor piece below */}
          <Reveal delay={120} className="md:col-span-10 md:col-start-2 lg:col-span-9 lg:col-start-3 md:mt-8">
            <article
              onClick={() => onSelectKitchen(featuredKitchens[2])}
              className="group cursor-pointer"
            >
              <div className="image-frame aspect-[16/9]">
                <img
                  src={featuredKitchens[2].image}
                  alt={featuredKitchens[2].name[lang]}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <div>
                  <h3 className="font-display text-[1.65rem] text-[#1C1A17] group-hover:text-[#6D523A] transition-colors">
                    {featuredKitchens[2].name[lang]}
                  </h3>
                  <p className="text-[0.84rem] text-[#7A7267] font-light mt-0.5">
                    {featuredKitchens[2].subtitle[lang]}
                  </p>
                </div>
                <span className="text-[0.7rem] tracking-[0.2em] text-[#847C71]">
                  {featuredKitchens[2].code}
                </span>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* 4. Architectural Spaces Band (soft honed travertine background) */}
      <section className="bg-[#ECE8DF]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-24 sm:py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <Reveal className="lg:col-span-7 order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-end">
                <div className="sm:col-span-7 image-frame aspect-[4/3] sm:aspect-[5/4]">
                  <img
                    src="/images/space-wardrobe.jpg"
                    alt={
                      lang === 'ar'
                        ? 'غرفة ملابس مفصّلة من لمسات'
                        : 'Bespoke bronze-glass and smoked oak walk-in dressing room'
                    }
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="sm:col-span-5 image-frame aspect-[4/3] sm:aspect-[4/4]">
                  <img
                    src="/images/space-living.jpg"
                    alt={
                      lang === 'ar'
                        ? 'جدار معيشة خشبي وحجري مفصّل'
                        : 'Custom architectural slatted walnut and travertine living wall'
                    }
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-5 order-1 lg:order-2 space-y-7">
              <p className="eyebrow">{copy.spacesEyebrow[lang]}</p>
              <h2 className="font-display text-[2.15rem] sm:text-[2.85rem] leading-[1.1] text-[#1C1A17]">
                {copy.spacesHeading[lang]}
              </h2>
              <p className="text-[0.95rem] leading-[1.85] text-[#565048] font-light">
                {copy.spacesBody[lang]}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('spaces')}
                  className="group link-editorial text-[#1C1A17] text-[0.76rem] tracking-[0.16em] uppercase cursor-pointer"
                >
                  <span>{copy.spacesCta[lang]}</span>
                  <DirectionalArrow lang={lang} size={14} />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Selected Completed Projects */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-24 sm:py-32 lg:py-40">
        <Reveal className="pb-12 sm:pb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl space-y-4">
            <p className="eyebrow">{copy.projectsEyebrow[lang]}</p>
            <h2 className="font-display text-[2.15rem] sm:text-[2.85rem] leading-[1.1] text-[#1C1A17]">
              {copy.projectsHeading[lang]}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="group link-editorial self-start md:self-auto text-[#1C1A17] text-[0.76rem] tracking-[0.16em] uppercase cursor-pointer shrink-0"
          >
            <span>{copy.projectsCta[lang]}</span>
            <DirectionalArrow lang={lang} size={14} />
          </button>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {featuredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 100}>
              <article
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer"
              >
                <div className="image-frame aspect-[16/11]">
                  <img
                    src={project.image}
                    alt={project.title[lang]}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="font-display text-[1.6rem] text-[#1C1A17] group-hover:text-[#6D523A] transition-colors">
                      {project.title[lang]}
                    </h3>
                    <p className="text-[0.84rem] text-[#7A7267] font-light mt-0.5">
                      {project.location[lang]}
                    </p>
                  </div>
                  <span className="text-[0.76rem] text-[#847C71] font-light">
                    {project.year}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6. Calm Direct Consultation Close */}
      <section className="border-t border-[#DDD6CA] bg-[#FAF9F6]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-24 sm:py-32 lg:py-36">
          <Reveal className="max-w-2xl mx-auto text-center space-y-6">
            <p className="eyebrow">{copy.closingEyebrow[lang]}</p>
            <h2 className="font-display text-[2.25rem] sm:text-[3.1rem] lg:text-[3.4rem] leading-[1.1] text-[#1C1A17]">
              {copy.closingHeading[lang]}
            </h2>
            <p className="text-[0.95rem] sm:text-[1rem] leading-[1.85] text-[#5B554D] font-light max-w-xl mx-auto">
              {copy.closingBody[lang]}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1C1A17] text-[#FAF9F6] hover:bg-[#332E28] transition-colors duration-300 text-[0.75rem] tracking-[0.16em] uppercase cursor-pointer"
              >
                <span>{copy.closingPrimaryCta[lang]}</span>
                <DirectionalArrow lang={lang} size={14} />
              </button>
              <a
                href={buildWhatsAppUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-[#CFC7B9] text-[#1C1A17] hover:border-[#1C1A17] transition-colors duration-300 text-[0.75rem] tracking-[0.16em] uppercase"
              >
                {copy.closingWhatsappCta[lang]}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
