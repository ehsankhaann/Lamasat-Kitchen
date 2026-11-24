import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { buildWhatsAppUrl, SHOWROOMS, SITE_COPY } from '../data/content';
import { Reveal } from '../components/Reveal';
import { DirectionalArrow } from '../components/DirectionalArrow';

interface ContactPageProps {
  lang: Language;
  prefillSubject?: string;
  prefillScope?: string;
  onClearPrefill?: () => void;
}

interface BookingState {
  name: string;
  phone: string;
  email: string;
  showroom: string;
  scope: string;
  date: string;
  time: string;
  notes: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  lang,
  prefillSubject,
  prefillScope,
  onClearPrefill,
}) => {
  const copy = SITE_COPY.contactPage;
  const f = copy.fields;
  const formRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<BookingState>({
    name: '',
    phone: '',
    email: '',
    showroom: 'qurum',
    scope: prefillScope || 'kitchen',
    date: '',
    time: 'morning',
    notes: prefillSubject
      ? lang === 'ar'
        ? `استفسار حول: ${prefillSubject}`
        : `Reference: ${prefillSubject}`
      : '',
  });
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState<string>('LM-0426');

  useEffect(() => {
    if (prefillSubject || prefillScope) {
      setForm((prev) => ({
        ...prev,
        scope: prefillScope || prev.scope,
        notes: prefillSubject
          ? lang === 'ar'
            ? `استفسار حول: ${prefillSubject}`
            : `Reference: ${prefillSubject}`
          : prev.notes,
      }));
      setSubmitted(false);
      onClearPrefill?.();
    }
  }, [prefillSubject, prefillScope, lang, onClearPrefill]);

  const todayIso = new Date().toISOString().split('T')[0];

  const handleSelectShowroom = (id: 'qurum' | 'almouj') => {
    setForm((prev) => ({ ...prev, showroom: id }));
    setSubmitted(false);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || (!form.phone.trim() && !form.email.trim())) {
      setError(f.requiredError[lang]);
      return;
    }
    const code = String(Math.floor(1000 + Math.random() * 9000));
    setReferenceId(`LM-${code}`);
    setError(null);
    setSubmitted(true);
  };

  const showroomLabel =
    f.showroomOptions.find((o) => o.value === form.showroom)?.label[lang] || '';
  const scopeLabel =
    f.scopeOptions.find((o) => o.value === form.scope)?.label[lang] || '';
  const timeLabel =
    f.timeOptions.find((o) => o.value === form.time)?.label[lang] || '';

  const confirmationWhatsAppText =
    lang === 'ar'
      ? `طلب موعد لدى لمسات للمطابخ\nالاسم: ${form.name}\nالمعرض: ${showroomLabel}\nالنطاق: ${scopeLabel}${
          form.date ? `\nالتاريخ: ${form.date}` : ''
        }\nالفترة: ${timeLabel}${form.notes ? `\nملاحظات: ${form.notes}` : ''}`
      : `Lamasat Kitchen Appointment Request\nName: ${form.name}\nShowroom: ${showroomLabel}\nScope: ${scopeLabel}${
          form.date ? `\nDate: ${form.date}` : ''
        }\nTime: ${timeLabel}${form.notes ? `\nNotes: ${form.notes}` : ''}`;

  const inputBase =
    'w-full bg-transparent border-b border-[#CFC7B9] focus:border-[#1C1A17] focus:outline-none py-3 text-[0.94rem] text-[#1C1A17] placeholder:text-[#A49C90] transition-colors rounded-none font-light';

  const labelBase = `block mb-1.5 text-[#7A7267] ${
    lang === 'ar'
      ? 'text-[0.82rem]'
      : 'text-[0.69rem] tracking-[0.18em] uppercase'
  }`;

  return (
    <div className="page-enter pt-[84px]">
      {/* Page Intro */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pt-16 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 border-b border-[#DDD6CA]">
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

      {/* Appointment Form + WhatsApp Direct Panel */}
      <section
        ref={formRef}
        className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-20 sm:py-28 scroll-mt-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-[#FAF9F6] border border-[#DDD6CA] p-8 sm:p-12 space-y-7 page-enter">
                <div className="flex items-center gap-3 text-[#6D523A]">
                  <span className="w-7 h-7 border border-[#8C6D4F] inline-flex items-center justify-center">
                    <Check size={14} strokeWidth={1.6} />
                  </span>
                  <span className="eyebrow text-[#6D523A]">
                    {copy.confirmation.eyebrow[lang]}
                  </span>
                </div>

                <h2 className="font-display text-[2rem] sm:text-[2.6rem] leading-[1.12] text-[#1C1A17]">
                  {copy.confirmation.title[lang]}
                </h2>

                <p className="text-[0.94rem] leading-[1.85] text-[#5B554D] font-light max-w-xl">
                  {copy.confirmation.body[lang]}
                </p>

                {/* Crisp Booking Summary */}
                <dl className="divide-y divide-[#E4DDD2] border-t border-b border-[#E4DDD2] text-[0.86rem]">
                  <div className="py-3 grid grid-cols-12 gap-3">
                    <dt className="col-span-4 text-[#847C71]">
                      {lang === 'ar' ? 'رقم المرجع' : 'Reference'}
                    </dt>
                    <dd
                      dir="ltr"
                      className={`col-span-8 text-[#6D523A] font-normal ${
                        lang === 'ar' ? 'text-right' : ''
                      }`}
                    >
                      {referenceId}
                    </dd>
                  </div>
                  <div className="py-3 grid grid-cols-12 gap-3">
                    <dt className="col-span-4 text-[#847C71]">{f.name[lang]}</dt>
                    <dd className="col-span-8 text-[#1C1A17]">{form.name}</dd>
                  </div>
                  <div className="py-3 grid grid-cols-12 gap-3">
                    <dt className="col-span-4 text-[#847C71]">
                      {f.showroom[lang]}
                    </dt>
                    <dd className="col-span-8 text-[#1C1A17]">{showroomLabel}</dd>
                  </div>
                  <div className="py-3 grid grid-cols-12 gap-3">
                    <dt className="col-span-4 text-[#847C71]">
                      {f.scope[lang]}
                    </dt>
                    <dd className="col-span-8 text-[#1C1A17]">{scopeLabel}</dd>
                  </div>
                  {form.date && (
                    <div className="py-3 grid grid-cols-12 gap-3">
                      <dt className="col-span-4 text-[#847C71]">
                        {f.date[lang]}
                      </dt>
                      <dd className="col-span-8 text-[#1C1A17]">
                        {form.date} · {timeLabel}
                      </dd>
                    </div>
                  )}
                </dl>

                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <a
                    href={buildWhatsAppUrl(lang, confirmationWhatsAppText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#1C1A17] text-[#FAF9F6] hover:bg-[#332E28] transition-colors text-[0.74rem] tracking-[0.15em] uppercase"
                  >
                    <MessageCircle size={15} strokeWidth={1.4} />
                    <span>{copy.confirmation.sendWhatsapp[lang]}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: '',
                        phone: '',
                        email: '',
                        showroom: 'qurum',
                        scope: 'kitchen',
                        date: '',
                        time: 'morning',
                        notes: '',
                      });
                    }}
                    className="inline-flex items-center justify-center px-6 py-3.5 border border-[#CFC7B9] text-[#5B554D] hover:text-[#1C1A17] hover:border-[#1C1A17] transition-colors text-[0.74rem] tracking-[0.15em] uppercase cursor-pointer"
                  >
                    {copy.confirmation.reset[lang]}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-9">
                <div className="space-y-3">
                  <h2 className="font-display text-[2rem] sm:text-[2.45rem] leading-[1.12] text-[#1C1A17]">
                    {copy.formTitle[lang]}
                  </h2>
                  <p className="text-[0.9rem] leading-[1.8] text-[#7A7267] font-light max-w-xl">
                    {copy.formNote[lang]}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                  <div className="sm:col-span-2">
                    <label htmlFor="bk-name" className={labelBase}>
                      {f.name[lang]} *
                    </label>
                    <input
                      id="bk-name"
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder={f.namePlaceholder[lang]}
                      className={inputBase}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="bk-phone" className={labelBase}>
                      {f.phone[lang]} *
                    </label>
                    <input
                      id="bk-phone"
                      type="tel"
                      dir="ltr"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder={f.phonePlaceholder[lang]}
                      className={`${inputBase} ${
                        lang === 'ar' ? 'text-right' : ''
                      }`}
                    />
                  </div>

                  <div>
                    <label htmlFor="bk-email" className={labelBase}>
                      {f.email[lang]}
                    </label>
                    <input
                      id="bk-email"
                      type="email"
                      dir="ltr"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder={f.emailPlaceholder[lang]}
                      className={`${inputBase} ${
                        lang === 'ar' ? 'text-right' : ''
                      }`}
                    />
                  </div>

                  <div>
                    <label htmlFor="bk-showroom" className={labelBase}>
                      {f.showroom[lang]}
                    </label>
                    <select
                      id="bk-showroom"
                      value={form.showroom}
                      onChange={(e) =>
                        setForm({ ...form, showroom: e.target.value })
                      }
                      className={`${inputBase} cursor-pointer`}
                    >
                      {f.showroomOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label[lang]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="bk-scope" className={labelBase}>
                      {f.scope[lang]}
                    </label>
                    <select
                      id="bk-scope"
                      value={form.scope}
                      onChange={(e) =>
                        setForm({ ...form, scope: e.target.value })
                      }
                      className={`${inputBase} cursor-pointer`}
                    >
                      {f.scopeOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label[lang]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="bk-date" className={labelBase}>
                      {f.date[lang]}
                    </label>
                    <input
                      id="bk-date"
                      type="date"
                      min={todayIso}
                      value={form.date}
                      onChange={(e) =>
                        setForm({ ...form, date: e.target.value })
                      }
                      className={inputBase}
                    />
                  </div>

                  <div>
                    <label htmlFor="bk-time" className={labelBase}>
                      {f.time[lang]}
                    </label>
                    <select
                      id="bk-time"
                      value={form.time}
                      onChange={(e) =>
                        setForm({ ...form, time: e.target.value })
                      }
                      className={`${inputBase} cursor-pointer`}
                    >
                      {f.timeOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label[lang]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="bk-notes" className={labelBase}>
                      {f.notes[lang]}
                    </label>
                    <textarea
                      id="bk-notes"
                      rows={3}
                      value={form.notes}
                      onChange={(e) =>
                        setForm({ ...form, notes: e.target.value })
                      }
                      placeholder={f.notesPlaceholder[lang]}
                      className={`${inputBase} resize-none`}
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-[0.86rem] text-[#8B3F2E] font-normal">
                    {error}
                  </p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-4 px-9 py-4 bg-[#1C1A17] text-[#FAF9F6] hover:bg-[#332E28] transition-colors duration-300 text-[0.75rem] tracking-[0.16em] uppercase cursor-pointer"
                  >
                    <span>{f.submit[lang]}</span>
                    <DirectionalArrow lang={lang} size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Direct WhatsApp Concierge Column */}
          <aside className="lg:col-span-4 lg:col-start-9 bg-[#ECE8DF] p-8 sm:p-10 space-y-6">
            <p className="eyebrow">{copy.whatsappPanel.eyebrow[lang]}</p>
            <h3 className="font-display text-[1.95rem] leading-[1.15] text-[#1C1A17]">
              {copy.whatsappPanel.title[lang]}
            </h3>
            <p className="text-[0.9rem] leading-[1.82] text-[#554F47] font-light">
              {copy.whatsappPanel.body[lang]}
            </p>

            <div className="pt-2 pb-2 border-t border-b border-[#D4CDC0] space-y-1">
              <p
                dir="ltr"
                className="font-display text-[1.5rem] text-[#1C1A17] inline-block"
              >
                {copy.whatsappPanel.numberDisplay}
              </p>
              <p className="text-[0.78rem] text-[#7A7267] font-light">
                {copy.whatsappPanel.hours[lang]}
              </p>
            </div>

            <a
              href={buildWhatsAppUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full inline-flex items-center justify-between px-6 py-4 bg-[#1C1A17] text-[#FAF9F6] hover:bg-[#332E28] transition-colors text-[0.74rem] tracking-[0.15em] uppercase"
            >
              <span className="inline-flex items-center gap-2.5">
                <MessageCircle size={15} strokeWidth={1.4} />
                {copy.whatsappPanel.cta[lang]}
              </span>
              <DirectionalArrow lang={lang} size={14} />
            </a>
          </aside>
        </div>
      </section>

      {/* Two Muscat Showrooms */}
      <section className="border-t border-[#DDD6CA] bg-[#FAF9F6]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
          <Reveal className="space-y-4 pb-14 border-b border-[#E3DDD2]">
            <p className="eyebrow">{copy.showroomsEyebrow[lang]}</p>
            <h2 className="font-display text-[2.2rem] sm:text-[3rem] leading-[1.1] text-[#1C1A17]">
              {copy.showroomsHeading[lang]}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#E3DDD2] rtl:lg:divide-x-reverse">
            {SHOWROOMS.map((showroom, idx) => (
              <Reveal
                key={showroom.id}
                delay={idx * 90}
                className={`py-12 lg:py-14 space-y-7 ${
                  idx === 0 ? 'lg:pe-14' : 'lg:ps-14'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[0.7rem] tracking-[0.2em] uppercase text-[#847C71]">
                    <span className="text-[#8C6D4F]">{showroom.index}</span>
                    <span>·</span>
                    <span>{showroom.role[lang]}</span>
                  </div>
                  <h3 className="font-display text-[1.95rem] sm:text-[2.25rem] text-[#1C1A17] leading-tight">
                    {showroom.name[lang]}
                  </h3>
                </div>

                <p className="text-[0.94rem] leading-[1.8] text-[#1C1A17] font-light">
                  {showroom.address[lang]}
                </p>

                <p className="text-[0.88rem] leading-[1.82] text-[#6B645A] font-light">
                  {showroom.note[lang]}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#E6E0D6] text-[0.84rem] font-light">
                  <div className="space-y-1.5">
                    <p className="eyebrow mb-2.5">{copy.hoursLabel[lang]}</p>
                    <p className="text-[#4B463F]">
                      {showroom.hoursWeekday[lang]}
                    </p>
                    <p className="text-[#4B463F]">
                      {showroom.hoursSaturday[lang]}
                    </p>
                    <p className="text-[#847C71]">
                      {showroom.hoursFriday[lang]}
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <p className="eyebrow mb-2.5">{copy.directLabel[lang]}</p>
                    <p>
                      <a
                        href={`tel:${showroom.phone.replace(/\s+/g, '')}`}
                        dir="ltr"
                        className="text-[#1C1A17] hover:text-[#6D523A] transition-colors inline-block"
                      >
                        {showroom.phone}
                      </a>
                    </p>
                    <p>
                      <a
                        href={`mailto:${showroom.email}`}
                        dir="ltr"
                        className="text-[#4B463F] hover:text-[#1C1A17] transition-colors inline-block"
                      >
                        {showroom.email}
                      </a>
                    </p>
                    <p
                      dir="ltr"
                      className="text-[0.74rem] text-[#9A9287] pt-1 inline-block"
                    >
                      {showroom.coordinates}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-7">
                  <button
                    type="button"
                    onClick={() => handleSelectShowroom(showroom.id)}
                    className="group link-editorial text-[#1C1A17] text-[0.74rem] tracking-[0.15em] uppercase cursor-pointer"
                  >
                    <span>{copy.bookHereLabel[lang]}</span>
                    <DirectionalArrow lang={lang} size={13} />
                  </button>
                  <a
                    href={showroom.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[0.74rem] tracking-[0.15em] uppercase text-[#7A7267] hover:text-[#1C1A17] transition-colors"
                  >
                    <span>{copy.directionsLabel[lang]}</span>
                    <ArrowUpRight size={13} strokeWidth={1.4} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
