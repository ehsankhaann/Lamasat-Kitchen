import React, { useState } from 'react';
import { Language, PageId, ProjectCategory, ProjectItem } from '../types';
import { PROJECTS, SITE_COPY } from '../data/content';
import { Reveal } from '../components/Reveal';
import { DirectionalArrow } from '../components/DirectionalArrow';

interface ProjectsPageProps {
  lang: Language;
  onSelectProject: (project: ProjectItem) => void;
  onNavigate: (page: PageId) => void;
}

const FILTER_KEYS: ProjectCategory[] = [
  'all',
  'villa',
  'waterfront',
  'collaborations',
];

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  lang,
  onSelectProject,
  onNavigate,
}) => {
  const [filter, setFilter] = useState<ProjectCategory>('all');
  const copy = SITE_COPY.projectsPage;

  const list =
    filter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="page-enter pt-[84px]">
      {/* Page Intro */}
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

        {/* Hairline category tabs */}
        <div
          role="tablist"
          aria-label={lang === 'ar' ? 'تصنيف المشاريع' : 'Filter completed projects'}
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

      {/* Monograph Project Grid */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pb-24 sm:pb-32 lg:pb-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-12 gap-y-16 sm:gap-y-24">
          {list.map((project, index) => {
            const isLead = filter === 'all' && index === 0;
            return (
              <Reveal
                key={project.id}
                delay={(index % 2) * 80}
                className={isLead ? 'md:col-span-2' : ''}
              >
                <article
                  onClick={() => onSelectProject(project)}
                  className="group cursor-pointer"
                >
                  <div
                    className={`image-frame ${
                      isLead
                        ? 'aspect-[16/10] sm:aspect-[16/9]'
                        : 'aspect-[16/11]'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title[lang]}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6">
                    <div>
                      <h2 className="font-display text-[1.8rem] sm:text-[2.1rem] text-[#1C1A17] group-hover:text-[#6D523A] transition-colors leading-tight">
                        {project.title[lang]}
                      </h2>
                      <p className="text-[0.86rem] text-[#7A7267] font-light mt-1">
                        {project.location[lang]} · {project.architect[lang]}
                      </p>
                    </div>
                    <span className="text-[0.76rem] text-[#847C71] tracking-[0.14em] uppercase shrink-0">
                      {project.year}
                    </span>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-[#E4DDD2] flex items-center justify-between text-[0.8rem]">
                    <span className="text-[#847C71] font-light truncate pe-4">
                      {project.materials[lang]}
                    </span>
                    <span className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.15em] uppercase text-[#5B554D] group-hover:text-[#1C1A17] transition-colors shrink-0">
                      <span>{copy.viewStudy[lang]}</span>
                      <DirectionalArrow lang={lang} size={13} />
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Restrained Consultation Transition */}
      <section className="border-t border-[#DDD6CA] bg-[#ECE8DF]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-20 sm:py-24 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <h2 className="font-display text-[1.9rem] sm:text-[2.5rem] leading-[1.15] text-[#1C1A17] max-w-xl">
            {copy.closingPrompt[lang]}
          </h2>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1C1A17] text-[#FAF9F6] hover:bg-[#332E28] transition-colors text-[0.74rem] tracking-[0.16em] uppercase cursor-pointer self-start md:self-auto shrink-0"
          >
            <span>{copy.closingAction[lang]}</span>
            <DirectionalArrow lang={lang} size={14} />
          </button>
        </div>
      </section>
    </div>
  );
};
