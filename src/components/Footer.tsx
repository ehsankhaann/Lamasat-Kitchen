import React from 'react';
import { Language, PageId } from '../types';
import {
  buildWhatsAppUrl,
  NAV_PAGES,
  SHOWROOMS,
  SITE_COPY,
} from '../data/content';

interface FooterProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onToggleLang: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onNavigate,
  onToggleLang,
}) => {
  const allPages: PageId[] = ['home', ...NAV_PAGES];

  return (
    <footer className="bg-[#1A1815] text-[#ECE8E0] border-t border-[#2E2A24]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pt-20 pb-12 lg:pt-24 lg:pb-14">
        {/* Top architectural grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pb-16 lg:pb-20 border-b border-[#312C26]">
          {/* Brand lockup */}
          <div className="lg:col-span-4 space-y-6">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 cursor-pointer text-[#F6F4EF] hover:opacity-80 transition-opacity"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 2.5V15.5H15.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M7 2.5V11H15.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeOpacity="0.45"
                />
              </svg>
              <span
                className={
                  lang === 'ar'
                    ? 'font-display text-[1.5rem] leading-none'
                    : 'text-[0.95rem] tracking-[0.28em] uppercase'
                }
              >
                {SITE_COPY.brand.wordmark[lang]}
              </span>
            </button>
            <p className="text-[0.88rem] leading-[1.75] text-[#ACA499] max-w-xs font-light">
              {SITE_COPY.footer.statement[lang]}
            </p>
            <button
              type="button"
              onClick={onToggleLang}
              className="text-[0.74rem] text-[#C8BEAF] hover:text-[#F6F4EF] border-b border-[#4A433A] pb-1 transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'عرض الموقع بالعربية' : 'View in English'}
            </button>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-5">
            <p className="text-[0.68rem] tracking-[0.2em] uppercase text-[#8A8276]">
              {SITE_COPY.footer.navHeading[lang]}
            </p>
            <ul className="space-y-3">
              {allPages.map((page) => (
                <li key={page}>
                  <button
                    type="button"
                    onClick={() => onNavigate(page)}
                    className="text-[0.86rem] text-[#C9C2B6] hover:text-[#FAF9F6] transition-colors cursor-pointer font-light"
                  >
                    {SITE_COPY.nav[page][lang]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Showrooms */}
          <div className="lg:col-span-4 space-y-5">
            <p className="text-[0.68rem] tracking-[0.2em] uppercase text-[#8A8276]">
              {SITE_COPY.footer.showroomsHeading[lang]}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {SHOWROOMS.map((s) => (
                <div key={s.id} className="space-y-1">
                  <p className="text-[0.88rem] text-[#F2EFE8]">
                    {s.name[lang]}
                  </p>
                  <p className="text-[0.8rem] text-[#9E968B] leading-relaxed font-light">
                    {s.district[lang]}
                  </p>
                  <p
                    dir="ltr"
                    className="text-[0.78rem] text-[#C2B7A8] font-light inline-block"
                  >
                    {s.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Enquiries & Direct */}
          <div className="lg:col-span-2 space-y-5">
            <p className="text-[0.68rem] tracking-[0.2em] uppercase text-[#8A8276]">
              {SITE_COPY.footer.directHeading[lang]}
            </p>
            <div className="space-y-3 text-[0.84rem] font-light">
              <div>
                <a
                  href="mailto:studio@lamasatkitchen.om"
                  dir="ltr"
                  className="text-[#C9C2B6] hover:text-[#FAF9F6] transition-colors inline-block"
                >
                  studio@lamasatkitchen.om
                </a>
              </div>
              <div>
                <a
                  href={buildWhatsAppUrl(lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4BC9F] hover:text-[#FAF9F6] border-b border-[#8C6D4F]/60 pb-0.5 transition-colors inline-block"
                >
                  {SITE_COPY.footer.whatsapp[lang]}
                </a>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="text-[#C9C2B6] hover:text-[#FAF9F6] transition-colors cursor-pointer"
                >
                  {SITE_COPY.nav.bookVisit[lang]}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom baseline */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[0.74rem] text-[#847C71] font-light">
          <p>{SITE_COPY.footer.rights[lang]}</p>
          <p className="text-[#6F685E]">{SITE_COPY.footer.conceptNote[lang]}</p>
        </div>
      </div>
    </footer>
  );
};
