import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { DetailModalData, Language } from '../types';
import { buildWhatsAppUrl, SITE_COPY } from '../data/content';
import { DirectionalArrow } from './DirectionalArrow';

interface DetailModalProps {
  data: DetailModalData | null;
  lang: Language;
  onClose: () => void;
  onBookWithSubject: (subject: string) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  data,
  lang,
  onClose,
  onBookWithSubject,
}) => {
  useEffect(() => {
    if (!data) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [data, onClose]);

  if (!data) return null;

  const waMessage =
    lang === 'ar'
      ? `السلام عليكم، أود الاستفسار عن "${data.title}" لدى لمسات للمطابخ.`
      : `Hello Lamasat Kitchen, I would like to enquire about "${data.title}".`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#181613]/65 backdrop-blur-[3px] p-0 sm:p-6 lg:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="detail-modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FAF9F6] text-[#1C1A17] w-full max-w-[1160px] h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto border border-[#DDD6CA] page-enter"
      >
        {/* Modal sticky header bar */}
        <div className="sticky top-0 z-10 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-[#E3DDD2] px-6 sm:px-10 py-4 flex items-center justify-between">
          <span className="eyebrow">{data.eyebrow}</span>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-[0.75rem] tracking-[0.14em] uppercase text-[#5B554D] hover:text-[#1C1A17] cursor-pointer transition-colors"
            aria-label={SITE_COPY.modal.close[lang]}
          >
            <span className="hidden sm:inline">{SITE_COPY.modal.close[lang]}</span>
            <X size={18} strokeWidth={1.3} />
          </button>
        </div>

        {/* Photographic showcase */}
        <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-[#E6E1D7] overflow-hidden">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Architectural dossier body */}
        <div className="p-6 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2
                id="detail-modal-title"
                className="font-display text-[2.25rem] sm:text-[3rem] leading-[1.08] text-[#1C1A17]"
              >
                {data.title}
              </h2>
              <p className="mt-2.5 text-[0.95rem] text-[#847C71] font-light">
                {data.subtitle}
              </p>
            </div>

            <p className="text-[0.95rem] sm:text-[1rem] leading-[1.85] text-[#4A453E] font-light">
              {data.description}
            </p>

            {data.extraNote && (
              <p className="text-[0.88rem] leading-[1.8] text-[#6B645A] border-s border-[#8C6D4F] ps-4 font-light">
                {data.extraNote}
              </p>
            )}

            {data.swatches && data.swatches.length > 0 && (
              <div className="pt-4">
                <p className="eyebrow mb-4">{SITE_COPY.modal.paletteLabel[lang]}</p>
                <div className="grid grid-cols-3 gap-4">
                  {data.swatches.map((swatch, i) => (
                    <div key={i} className="space-y-2">
                      <div
                        className="h-14 w-full border border-[#1C1A17]/10"
                        style={{ backgroundColor: swatch.color }}
                      />
                      <p className="text-[0.8rem] text-[#1C1A17] leading-tight">
                        {swatch.name[lang]}
                      </p>
                      <p className="text-[0.72rem] text-[#847C71] font-light">
                        {swatch.finish[lang]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right specifications table + CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            <dl className="divide-y divide-[#E3DDD2] border-t border-b border-[#E3DDD2]">
              {data.specs.map((spec, idx) => (
                <div key={idx} className="py-3.5 grid grid-cols-12 gap-3">
                  <dt className="col-span-4 text-[0.74rem] text-[#847C71] uppercase tracking-[0.12em]">
                    {spec.label}
                  </dt>
                  <dd className="col-span-8 text-[0.86rem] text-[#1C1A17] font-light leading-relaxed">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => {
                  const subj = data.enquirySubject;
                  onClose();
                  onBookWithSubject(subj);
                }}
                className="group w-full py-4 px-6 bg-[#1C1A17] text-[#FAF9F6] hover:bg-[#332E28] transition-colors duration-300 text-[0.78rem] tracking-[0.14em] uppercase flex items-center justify-between cursor-pointer"
              >
                <span>{SITE_COPY.modal.enquire[lang]}</span>
                <DirectionalArrow lang={lang} />
              </button>
              <a
                href={buildWhatsAppUrl(lang, waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 border border-[#CFC7B9] text-[#1C1A17] hover:border-[#1C1A17] transition-colors duration-300 text-[0.76rem] tracking-[0.14em] uppercase flex items-center justify-center"
              >
                {SITE_COPY.modal.whatsapp[lang]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
