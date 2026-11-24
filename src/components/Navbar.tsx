import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Language, PageId } from '../types';
import { NAV_PAGES, SITE_COPY } from '../data/content';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  lang: Language;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  lang,
  onToggleLang,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isTransparentHero = currentPage === 'home' && !scrolled && !mobileOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleLinkClick = (page: PageId) => {
    setMobileOpen(false);
    onNavigate(page);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          isTransparentHero
            ? 'bg-gradient-to-b from-[#161411]/45 via-[#161411]/18 to-transparent text-[#FAF8F4]'
            : 'bg-[#F6F4EF]/94 backdrop-blur-md text-[#1C1A17] border-b border-[#DDD6CA]/85'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 h-[76px] sm:h-[84px] flex items-center justify-between gap-6">
          {/* Wordmark — returns Home */}
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-start cursor-pointer group focus:outline-none focus-visible:opacity-75"
            aria-label={SITE_COPY.brand.fullName[lang]}
          >
            {/* Ultra-restrained geometric architectural mark */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="shrink-0 opacity-90 transition-opacity group-hover:opacity-65"
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
                strokeOpacity="0.5"
              />
            </svg>
            <span
              className={
                lang === 'ar'
                  ? 'font-display text-[1.45rem] leading-none font-medium tracking-normal'
                  : 'font-sans-ui text-[0.95rem] font-normal tracking-[0.28em] uppercase'
              }
            >
              {SITE_COPY.brand.wordmark[lang]}
            </span>
          </button>

          {/* Desktop primary links */}
          <nav
            aria-label={lang === 'ar' ? 'التنقل الرئيسي' : 'Primary Navigation'}
            className="hidden lg:flex items-center gap-9 xl:gap-11"
          >
            {NAV_PAGES.map((page) => {
              const active = currentPage === page;
              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => handleLinkClick(page)}
                  aria-current={active ? 'page' : undefined}
                  className={`relative py-1 cursor-pointer transition-opacity duration-300 ${
                    lang === 'ar'
                      ? 'text-[0.92rem] font-normal'
                      : 'text-[0.76rem] tracking-[0.14em] uppercase font-normal'
                  } ${
                    active
                      ? 'opacity-100'
                      : 'opacity-72 hover:opacity-100'
                  }`}
                >
                  {SITE_COPY.nav[page][lang]}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-[1px] transition-all duration-300 ${
                      isTransparentHero ? 'bg-[#FAF8F4]' : 'bg-[#1C1A17]'
                    } ${active ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Right cluster: Bilingual switcher & mobile trigger */}
          <div className="flex items-center gap-5 sm:gap-6">
            <button
              type="button"
              onClick={onToggleLang}
              aria-label={
                lang === 'en'
                  ? 'Switch website to Arabic'
                  : 'التبديل إلى اللغة الإنجليزية'
              }
              className={`inline-flex items-center gap-2 cursor-pointer transition-opacity duration-300 py-1 px-2.5 border ${
                isTransparentHero
                  ? 'border-[#FAF8F4]/35 text-[#FAF8F4] hover:border-[#FAF8F4]/80'
                  : 'border-[#CFC7B9] text-[#1C1A17] hover:border-[#1C1A17]'
              }`}
            >
              <span
                className={`text-[0.72rem] tracking-[0.12em] uppercase transition-opacity ${
                  lang === 'en' ? 'opacity-100 font-medium' : 'opacity-45'
                }`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                EN
              </span>
              <span className="opacity-30 text-[0.7rem]" aria-hidden="true">
                /
              </span>
              <span
                className={`text-[0.8rem] transition-opacity ${
                  lang === 'ar' ? 'opacity-100 font-medium' : 'opacity-55'
                }`}
                style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
              >
                عربي
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden inline-flex items-center justify-center p-1 cursor-pointer opacity-90 hover:opacity-65 transition-opacity"
              aria-label={
                mobileOpen
                  ? SITE_COPY.nav.menuClose[lang]
                  : SITE_COPY.nav.menuOpen[lang]
              }
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X size={22} strokeWidth={1.3} />
              ) : (
                <Menu size={22} strokeWidth={1.3} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Editorial Drawer */}
      <div
        className={`fixed inset-0 z-30 bg-[#F6F4EF] text-[#1C1A17] transition-all duration-500 lg:hidden flex flex-col justify-between pt-28 pb-10 px-8 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav
          aria-label={lang === 'ar' ? 'قائمة الجوال' : 'Mobile Navigation'}
          className="flex flex-col divide-y divide-[#DDD6CA] border-t border-b border-[#DDD6CA]"
        >
          {(['home', ...NAV_PAGES] as PageId[]).map((page, index) => {
            const active = currentPage === page;
            return (
              <button
                key={page}
                type="button"
                onClick={() => handleLinkClick(page)}
                className={`py-4 flex items-baseline justify-between text-start cursor-pointer transition-opacity ${
                  active ? 'text-[#1C1A17]' : 'text-[#5B554D] hover:text-[#1C1A17]'
                }`}
              >
                <span className="font-display text-[1.9rem] leading-tight">
                  {SITE_COPY.nav[page][lang]}
                </span>
                <span className="text-[0.68rem] tracking-[0.2em] text-[#847C71]">
                  0{index + 1}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-[0.8rem] text-[#5B554D]">
          <div>
            <p className="text-[#1C1A17]">{SITE_COPY.brand.fullName[lang]}</p>
            <p className="text-[#847C71] mt-1">
              {lang === 'ar'
                ? 'شاطئ القرم · الموج مسقط'
                : 'Al Qurum · Al Mouj Muscat'}
            </p>
          </div>
          <p className="text-[0.72rem] tracking-[0.14em] uppercase text-[#847C71]">
            {SITE_COPY.brand.est[lang]}
          </p>
        </div>
      </div>
    </>
  );
};
