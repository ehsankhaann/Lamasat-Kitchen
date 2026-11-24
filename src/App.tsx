import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  DetailModalData,
  KitchenCollection,
  Language,
  PageId,
  ProjectItem,
} from './types';
import { KITCHEN_COLLECTIONS, PROJECTS, SITE_COPY } from './data/content';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DetailModal } from './components/DetailModal';
import { HomePage } from './pages/HomePage';
import { KitchensPage } from './pages/KitchensPage';
import { SpacesPage } from './pages/SpacesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

const VALID_PAGES: PageId[] = [
  'home',
  'kitchens',
  'spaces',
  'projects',
  'about',
  'contact',
];

function readHashPage(): PageId {
  const hash = window.location.hash.replace('#', '').toLowerCase() as PageId;
  return VALID_PAGES.includes(hash) ? hash : 'home';
}

type ActiveModalRef =
  | { kind: 'kitchen'; id: string }
  | { kind: 'project'; id: string }
  | null;

export function App() {
  const [page, setPage] = useState<PageId>(() => readHashPage());
  const [lang, setLang] = useState<Language>('en');
  const [modalRef, setModalRef] = useState<ActiveModalRef>(null);
  const [bookingPrefill, setBookingPrefill] = useState<{
    subject?: string;
    scope?: string;
  }>({});

  // Sync HTML dir, lang, and title cleanly for authentic RTL/LTR
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = SITE_COPY.brand.documentTitle[lang];
  }, [lang]);

  // Listen for browser back/forward navigation
  useEffect(() => {
    const onHashChange = () => {
      setPage(readHashPage());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((target: PageId) => {
    setPage(target);
    const nextHash = target === 'home' ? '' : `#${target}`;
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, '', nextHash || window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  }, []);

  const handleOpenKitchen = useCallback((kitchen: KitchenCollection) => {
    setModalRef({ kind: 'kitchen', id: kitchen.id });
  }, []);

  const handleOpenProject = useCallback((project: ProjectItem) => {
    setModalRef({ kind: 'project', id: project.id });
  }, []);

  const handleBookWithSubject = useCallback(
    (subject: string, scope?: string) => {
      setBookingPrefill({ subject, scope });
      navigate('contact');
    },
    [navigate]
  );

  const clearPrefill = useCallback(() => {
    setBookingPrefill({});
  }, []);

  // Dynamically derive localized modal contents so toggling language updates open modal seamlessly
  const activeModalData: DetailModalData | null = useMemo(() => {
    if (!modalRef) return null;
    const specLabels = SITE_COPY.modal.specs;

    if (modalRef.kind === 'kitchen') {
      const k = KITCHEN_COLLECTIONS.find((item) => item.id === modalRef.id);
      if (!k) return null;
      return {
        kind: 'kitchen',
        id: k.id,
        eyebrow: `${k.code} · ${k.categoryLabel[lang]}`,
        title: k.name[lang],
        subtitle: k.subtitle[lang],
        image: k.image,
        description: k.description[lang],
        swatches: k.swatches,
        specs: [
          { label: specLabels.materials[lang], value: k.primaryMaterials[lang] },
          { label: specLabels.system[lang], value: k.cabinetrySystem[lang] },
          { label: specLabels.worktop[lang], value: k.worktop[lang] },
          { label: specLabels.hardware[lang], value: k.hardware[lang] },
          { label: specLabels.leadTime[lang], value: k.leadTime[lang] },
        ],
        enquirySubject: `${k.name[lang]} (${k.subtitle[lang]})`,
      };
    }

    const p = PROJECTS.find((item) => item.id === modalRef.id);
    if (!p) return null;
    return {
      kind: 'project',
      id: p.id,
      eyebrow: `${p.categoryLabel[lang]} · ${p.year}`,
      title: p.title[lang],
      subtitle: p.location[lang],
      image: p.image,
      description: p.story[lang],
      extraNote: p.notes[lang],
      specs: [
        { label: specLabels.location[lang], value: p.location[lang] },
        { label: specLabels.year[lang], value: p.year },
        { label: specLabels.architect[lang], value: p.architect[lang] },
        { label: specLabels.scope[lang], value: p.scope[lang] },
        { label: specLabels.materials[lang], value: p.materials[lang] },
        { label: specLabels.area[lang], value: p.area[lang] },
      ],
      enquirySubject: `${p.title[lang]}`,
    };
  }, [modalRef, lang]);

  return (
    <div
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className="min-h-screen flex flex-col bg-[#F6F4EF] text-[#1C1A17]"
    >
      <Navbar
        currentPage={page}
        onNavigate={navigate}
        lang={lang}
        onToggleLang={toggleLang}
      />

      <main className="flex-1">
        {page === 'home' && (
          <HomePage
            lang={lang}
            onNavigate={navigate}
            onSelectKitchen={handleOpenKitchen}
            onSelectProject={handleOpenProject}
          />
        )}
        {page === 'kitchens' && (
          <KitchensPage
            lang={lang}
            onSelectKitchen={handleOpenKitchen}
            onNavigate={navigate}
          />
        )}
        {page === 'spaces' && (
          <SpacesPage lang={lang} onBookWithSubject={handleBookWithSubject} />
        )}
        {page === 'projects' && (
          <ProjectsPage
            lang={lang}
            onSelectProject={handleOpenProject}
            onNavigate={navigate}
          />
        )}
        {page === 'about' && <AboutPage lang={lang} onNavigate={navigate} />}
        {page === 'contact' && (
          <ContactPage
            lang={lang}
            prefillSubject={bookingPrefill.subject}
            prefillScope={bookingPrefill.scope}
            onClearPrefill={clearPrefill}
          />
        )}
      </main>

      <Footer lang={lang} onNavigate={navigate} onToggleLang={toggleLang} />

      <DetailModal
        data={activeModalData}
        lang={lang}
        onClose={() => setModalRef(null)}
        onBookWithSubject={(subject) => handleBookWithSubject(subject, 'kitchen')}
      />
    </div>
  );
}

export default App;
