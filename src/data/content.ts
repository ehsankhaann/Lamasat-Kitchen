import {
  KitchenCollection,
  Language,
  MaterialLibraryItem,
  Milestone,
  PageId,
  ProjectItem,
  Showroom,
  SpaceItem,
} from '../types';

export const WHATSAPP_NUMBER = '96891240024';

export function buildWhatsAppUrl(lang: Language, customMessage?: string): string {
  const defaultMsg =
    lang === 'ar'
      ? 'السلام عليكم، أرغب في حجز استشارة خاصة لدى لمسات للمطابخ.'
      : 'Hello Lamasat Kitchen, I would like to book a private showroom consultation.';
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export const SITE_COPY = {
  brand: {
    wordmark: { en: 'LAMASAT', ar: 'لمسات' },
    fullName: { en: 'Lamasat Kitchen', ar: 'لمسات للمطابخ' },
    tagline: {
      en: 'Bespoke Kitchens & Architectural Joinery · Oman',
      ar: 'مطابخ مفصّلة ونجارة معمارية · عُمان',
    },
    est: { en: 'Est. 2004', ar: 'منذ ٢٠٠٤' },
    documentTitle: {
      en: 'Lamasat Kitchen — Bespoke Kitchens & Architectural Joinery | Oman',
      ar: 'لمسات للمطابخ — مطابخ مفصّلة ومساحات معمارية | عُمان',
    },
  },
  nav: {
    home: { en: 'Home', ar: 'الرئيسية' },
    kitchens: { en: 'Kitchens', ar: 'المطابخ' },
    spaces: { en: 'Spaces', ar: 'المساحات' },
    projects: { en: 'Projects', ar: 'المشاريع' },
    about: { en: 'About', ar: 'عن لمسات' },
    contact: { en: 'Contact', ar: 'تواصل معنا' },
    switchToAr: 'العربية',
    switchToEn: 'EN',
    menuOpen: { en: 'Menu', ar: 'القائمة' },
    menuClose: { en: 'Close', ar: 'إغلاق' },
    bookVisit: { en: 'Book a Visit', ar: 'احجز موعداً' },
  },
  home: {
    heroLocation: {
      en: 'Muscat, Oman · Est. 2004',
      ar: 'مسقط، عُمان · منذ ٢٠٠٤',
    },
    heroTitle: {
      en: 'Quiet architecture for the home.',
      ar: 'عمارة هادئة تنتمي إلى المنزل.',
    },
    heroSub: {
      en: 'Bespoke kitchens and architectural furniture, designed and manufactured in Oman for enduring daily life.',
      ar: 'مطابخ مفصّلة وأثاث معماري، تُصمَّم وتُصنَّع في سلطنة عُمان لتدوم بتفاصيلها كل يوم.',
    },
    heroPrimaryCta: {
      en: 'Explore Kitchens',
      ar: 'استكشف المطابخ',
    },
    heroSecondaryCta: {
      en: 'Book Consultation',
      ar: 'احجز استشارة',
    },
    introEyebrow: {
      en: 'Since 2004',
      ar: 'منذ ٢٠٠٤',
    },
    introTitle: {
      en: 'Crafted in millimetre proportion, never built to repeat.',
      ar: 'تُصاغ بدقّة المليمتر، ولا تتكرر أبداً.',
    },
    introBody1: {
      en: 'For more than two decades, Lamasat has conceived and crafted made-to-measure kitchens, dressing systems, and custom interior millwork from our workshops in Muscat.',
      ar: 'لأكثر من عقدين، تصمّم لمسات وتنفّذ مطابخ مفصّلة وخزائن ملابس وأعمال نجارة معمارية خاصة، انطلاقاً من ورشها ومعارضها في مسقط.',
    },
    introBody2: {
      en: 'We pair architectural restraint with warm natural stone, European veneers, and joinery engineered quietly for Oman’s climate and coastal light.',
      ar: 'نجمع بين بساطة الخط المعماري ودفء الأحجار الطبيعية والقشرة الخشبية الأوروبية، بهندسة متقنة تراعي طبيعة مناخ عُمان وضوءها الهادئ.',
    },
    introCta: {
      en: 'Our Story',
      ar: 'قصتنا منذ ٢٠٠٤',
    },
    introCaption: {
      en: 'Material study — Honed travertine, smoked oak, brushed bronze. Muscat Studio.',
      ar: 'دراسة خامات — ترافرتين مصقول، بلوط مدخّن، وبرونز مطفي. أستوديو مسقط.',
    },
    featuredEyebrow: {
      en: 'Kitchen Collections',
      ar: 'مجموعات المطابخ',
    },
    featuredHeading: {
      en: 'Designed around light, stone, and stillness.',
      ar: 'مصمّمة على إيقاع الضوء والحجر والسكينة.',
    },
    featuredAllLink: {
      en: 'View All Kitchens',
      ar: 'عرض جميع المطابخ',
    },
    spacesEyebrow: {
      en: 'Beyond the Kitchen',
      ar: 'ما بعد المطبخ',
    },
    spacesHeading: {
      en: 'Architectural spaces in unified dialogue.',
      ar: 'مساحات معمارية بلغةٍ واحدة متناغمة.',
    },
    spacesBody: {
      en: 'From illuminated glass-and-oak dressing rooms to full-height living wall joinery and shaded preparation kitchens, we work beside homeowners and architects to bring seamless material continuity to the entire residence.',
      ar: 'من غرف الملابس المضاءة بالزجاج والبلوط إلى الجدران الخشبية في صالات المعيشة ومطابخ التحضير الهادئة، نعمل مع المُلّاك والمعماريين لتحقيق انسجام واحد يمتد في أرجاء المسكن بالكامل.',
    },
    spacesCta: {
      en: 'Explore Spaces',
      ar: 'استكشف المساحات',
    },
    projectsEyebrow: {
      en: 'Selected Residences',
      ar: 'مشاريع مُنجزة',
    },
    projectsHeading: {
      en: 'Completed private homes across Oman.',
      ar: 'منازل خاصة منفّذة في أنحاء عُمان.',
    },
    projectsCta: {
      en: 'All Completed Projects',
      ar: 'جميع المشاريع',
    },
    closingEyebrow: {
      en: 'Private Appointment',
      ar: 'موعد خاص',
    },
    closingHeading: {
      en: 'Begin with a conversation in one of our Muscat showrooms.',
      ar: 'ابدأ رحلتك بجلسة خاصة في أحد معرضَينا بمسقط.',
    },
    closingBody: {
      en: 'Bring floor plans, architectural sketches, or simply an idea. Meet our senior kitchen architects in Al Qurum or Al Mouj to review physical stone and timber finishes in daylight.',
      ar: 'أحضر مخططات منزلك أو رسوماتك المعمارية أو فكرتك الأولى؛ والتقِ بمصممينا في شاطئ القرم أو الموج مسقط لمعاينة خامات الحجر والخشب عن قرب تحت الضوء الطبيعي.',
    },
    closingPrimaryCta: {
      en: 'Book a Showroom Visit',
      ar: 'احجز زيارة للمعرض',
    },
    closingWhatsappCta: {
      en: 'Message on WhatsApp',
      ar: 'تواصل عبر واتساب',
    },
  },
  kitchensPage: {
    eyebrow: { en: 'Collection', ar: 'المجموعة' },
    title: { en: 'Bespoke Kitchens', ar: 'المطابخ المفصّلة' },
    intro: {
      en: 'Each collection serves as an architectural foundation—tailored completely in dimension, timber grain, natural stone, and internal fit-out around the proportions of your home.',
      ar: 'تمثّل كل مجموعة نقطة انطلاق معمارية؛ نعيد تفصيلها بالكامل من حيث المقاسات، اتجاه عروق الخشب، الحجر الطبيعي، والتقسيمات الداخلية بما يناسب أبعاد منزلك.',
    },
    filters: {
      all: { en: 'All', ar: 'الكل' },
      timber: { en: 'Timber', ar: 'الأخشاب الطبيعية' },
      stone: { en: 'Monolith Stone', ar: 'الأحجار المصمتة' },
      lacquer: { en: 'Silk Lacquer', ar: 'الطلاء المطفي' },
      courtyard: { en: 'Prep & Courtyard', ar: 'مطابخ التحضير والفناء' },
    },
    inspectLabel: { en: 'View Specification', ar: 'عرض المواصفات' },
    materialsEyebrow: { en: 'Material Archive', ar: 'أرشيف الخامات' },
    materialsHeading: {
      en: 'Finishes curated to age with dignity.',
      ar: 'خامات مُنتقاة تزداد جمالاً مع مرور الزمن.',
    },
    materialsIntro: {
      en: 'Every timber, honed limestone, silk matte lacquer, and metallic channel is kept in full-format samples across both Muscat showrooms for calm evaluation in daylight.',
      ar: 'تتوفر عينات كاملة من جميع الأخشاب والأحجار المصقولة والطلاءات المطفية وتشطيبات المعادن في معرضَينا بمسقط لمعاينتها بهدوء تحت الإضاءة الطبيعية.',
    },
    processEyebrow: { en: 'Commission Process', ar: 'منهجية التنفيذ' },
    processHeading: {
      en: 'Four calm stages from sketch to handover.',
      ar: 'أربع خطوات واضحة من الفكرة حتى التسليم.',
    },
    steps: [
      {
        num: '01',
        title: { en: 'Dialogue & Measurement', ar: 'الحوار والرفع المساحي' },
        text: {
          en: 'Showroom consultation around architectural plans, appliance preferences, and an exact laser survey on site.',
          ar: 'جلسة أولية في المعرض لمراجعة المخططات واحتياجات الاستخدام، يليها رفع مساحي دقيق للموقع بالليزر.',
        },
      },
      {
        num: '02',
        title: { en: 'Spatial Design & Finishes', ar: 'التصميم واختيار الخامات' },
        text: {
          en: 'Technical elevations, ergonomic work zones, and curated stone, veneer, and hardware sample boards tailored to your interior.',
          ar: 'إعداد الرسومات التنفيذية وتوزيع مسارات الحركة، مع لوحة عينات متكاملة من الحجر والخشب والإكسسوارات الملائمة للمنزل.',
        },
      },
      {
        num: '03',
        title: { en: 'Manufacture in Muscat', ar: 'التصنيع في مسقط' },
        text: {
          en: 'Precision CNC fabrication and hand-finished veneer matching inside our Rusayl workshop with certified European hardware.',
          ar: 'تصنيع عالي الدقّة ومطابقة يدوية لعروق القشرة الخشبية في مصنعنا بالرسيل مع تجهيزات وآليات أوروبية معتمدة.',
        },
      },
      {
        num: '04',
        title: { en: 'Dedicated Installation', ar: 'التركيب والضمان' },
        text: {
          en: 'Installed solely by our in-house master fitters, millimetre-calibrated, and supported by a ten-year joinery warranty.',
          ar: 'تركيب متكامل بأيدي فنيّينا المتخصصين وبمعايرة دقيقة للمفاصل، مدعوماً بضمان عشر سنوات على أعمال النجارة.',
        },
      },
    ],
  },
  spacesPage: {
    eyebrow: { en: 'Architectural Interiors', ar: 'المساحات المعمارية' },
    title: { en: 'Beyond the Kitchen', ar: 'المساحات والتكامل' },
    intro: {
      en: 'The same architectural discipline, quiet detailing, and material honesty applied across wardrobes, living sanctuaries, auxiliary kitchens, and custom collaborations throughout your home.',
      ar: 'نمتد بذات الدقّة المعمارية وصدق الخامات إلى غرف الملابس، جدران المعيشة، مطابخ التحضير، والتعاونات الخاصة مع المكاتب المعمارية في مختلف أنحاء المنزل.',
    },
    inquireSpace: { en: 'Discuss a Space', ar: 'ناقش مساحتك' },
    collabEyebrow: { en: 'Trade & Collaborations', ar: 'التعاون المعماري' },
    collabHeading: {
      en: 'Built beside Oman’s architects and interior studios.',
      ar: 'شريك تنفيذي للمعماريين وأستوديوهات التصميم في عُمان.',
    },
    collabBody: {
      en: 'We act as a seamless technical and manufacturing partner for private architectural practices, boutique developers, and residential interior studios. Send tender drawings or schedule a material working session at our Qurum studio.',
      ar: 'نعمل كشريك تقني وتصنيعي للمكاتب الهندسية ومطوّري المشاريع السكنية الراقية وأستوديوهات التصميم الداخلي، منذ مراجعة الرسومات التنفيذية وحتى التسليم النهائي في الموقع.',
    },
    collabPillars: [
      {
        title: { en: 'Shop Drawing Engineering', ar: 'إعداد المخططات التنفيذية' },
        detail: {
          en: 'Full millwork CAD packs, concealed service coordination, and lighting profile integration.',
          ar: 'مخططات تفصيلية كاملة للأعمال الخشبية، وتنسيق التمديدات المخفية ومجاري الإضاءة المدمجة.',
        },
      },
      {
        title: { en: 'Bespoke Sample Prototyping', ar: 'نماذج عينات مخصّصة' },
        detail: {
          en: 'Custom veneer tones, stained ash, fluted timber mockups, and client-approved corner joints.',
          ar: 'تطوير درجات لونية خاصة للقشرة الخشبية ونماذج فعلية للحواف والتفاصيل قبل بدء التصنيع.',
        },
      },
      {
        title: { en: 'Full-Residence Production', ar: 'تنفيذ شامل للمشروع' },
        detail: {
          en: 'One responsible production schedule spanning kitchens, dressing rooms, vanities, and living joinery.',
          ar: 'جدول إنتاج موحّد يشمل المطابخ، الخزائن، المغاسل، وأعمال الجدران الخشبية للمسكن بالكامل.',
        },
      },
    ],
    collabCta: { en: 'Arrange a Studio Meeting', ar: 'ترتيب لقاء مع فريقنا' },
  },
  projectsPage: {
    eyebrow: { en: 'Selected Archive', ar: 'أرشيف الأعمال' },
    title: { en: 'Completed Projects', ar: 'المشاريع المُنجزة' },
    intro: {
      en: 'A curated survey of completed private villas, coastal residences, and collaborative developments delivered by Lamasat across the Sultanate of Oman.',
      ar: 'مختارات من الفلل الخاصة والمساكن الساحلية والمشاريع السكنية التي أنجزتها لمسات في مختلف مناطق سلطنة عُمان.',
    },
    filters: {
      all: { en: 'All Works', ar: 'جميع المشاريع' },
      villa: { en: 'Private Villas', ar: 'فلل خاصة' },
      waterfront: { en: 'Waterfront', ar: 'مشاريع ساحلية' },
      collaborations: { en: 'Studio Commissions', ar: 'تعاون معماري' },
    },
    viewStudy: { en: 'View Project', ar: 'تفاصيل المشروع' },
    closingPrompt: {
      en: 'Planning a new build or residence renovation in Oman?',
      ar: 'تخطّط لبناء منزل جديد أو تجديد مسكنك في عُمان؟',
    },
    closingAction: { en: 'Share Your Plans With Us', ar: 'شاركنا مخططاتك' },
  },
  aboutPage: {
    eyebrow: { en: 'Lamasat · Est. 2004', ar: 'لمسات · منذ ٢٠٠٤' },
    title: {
      en: 'Twenty years of considered craft in Oman.',
      ar: 'أكثر من عشرين عاماً من الإتقان الهادئ في عُمان.',
    },
    lead: {
      en: 'Founded in Muscat in 2004, Lamasat began with a singular conviction: a kitchen should feel built into the quiet architecture of a house, not placed inside it like seasonal furniture.',
      ar: 'تأسست لمسات في مسقط عام ٢٠٠٤ على قناعة واضحة: أن يكون المطبخ جزءاً أصيلاً من عمارة المنزل الهادئة، لا مجرد قطعة أثاث مؤقتة تُوضع بداخله.',
    },
    storyCol1: {
      en: 'From an independent workshop serving Muscat families, we have grown carefully into one of the Sultanate’s most trusted names in bespoke kitchens and custom residential cabinetry. Every decision—how a travertine corner meets a shadow gap, how a full-height pocket door glides silently into smoked oak—reflects patience over volume.',
      ar: 'بدأت رحلتنا من ورشة مستقلة تخدم عائلات مسقط، ونمَتْ بهدوء لتصبح اليوم من أبرز الأسماء الموثوقة في السلطنة لتصنيع المطابخ المفصّلة والأثاث المعماري. كل تفصيل صغير—من التقاء زاوية الحجر بالفراغ المعماري إلى انسيابية الباب الخشبي المخفي—يعبّر عن التزامنا بالجودة قبل الكمّ.',
    },
    storyCol2: {
      en: 'Manufacturing locally in our Rusayl facility gives our clients something rare: total control over custom measurements, direct quality oversight at every phase, resilient humidity-engineered joinery suited for Oman, and direct accountability years after keys are handed over.',
      ar: 'يمنحنا التصنيع المحلي في مصنعنا بالرسيل ميزة نادرة: تحكّماً كاملاً بالمقاسات المخصّصة، وإشرافاً مباشراً على الجودة في كل مرحلة، ومواد معالَجة لملاءمة رطوبة ومناخ عُمان، مع التزام حقيقي بخدمة عملائنا لسنوات طويلة بعد التسليم.',
    },
    stats: [
      { value: { en: '2004', ar: '٢٠٠٤' }, label: { en: 'Founded in Muscat', ar: 'التأسيس في مسقط' } },
      { value: { en: '1,400+', ar: '+١٬٤٠٠' }, label: { en: 'Residences Completed', ar: 'منزلاً ومشروعاً منجزاً' } },
      { value: { en: '02', ar: '٠٢' }, label: { en: 'Showrooms in Muscat', ar: 'معرضان في مسقط' } },
      { value: { en: '10 yrs', ar: '١٠ سنوات' }, label: { en: 'Joinery Guarantee', ar: 'ضمان على النجارة' } },
    ],
    principlesEyebrow: { en: 'Craft Philosophy', ar: 'فلسفة الصنعة' },
    principlesHeading: {
      en: 'What defines a Lamasat piece.',
      ar: 'ما يميّز كل عمل يحمل توقيع لمسات.',
    },
    principles: [
      {
        index: '01',
        title: { en: 'Measured Restraint', ar: 'بساطة مدروسة' },
        body: {
          en: 'We edit away decorative noise in favour of uninterrupted stone planes, balanced vertical shadows, and calm proportions that never fatigue the eye.',
          ar: 'نستبعد الزخرف الزائد لنمنح الأولوية لامتداد الحجر الطبيعي، وتوازن الظلال، والنسب الهادئة التي تبقى معاصرة على الدوام.',
        },
      },
      {
        index: '02',
        title: { en: 'Climate-Engineered Core', ar: 'ملاءمة لمناخ عُمان' },
        body: {
          en: 'High-density moisture-resistant timber cores, architectural seals, and concealed European motion systems selected explicitly for Gulf coastal living.',
          ar: 'ألواح عالية الكثافة مقاومة للرطوبة، وعزل دقيق للحواف، ومفصلات أوروبية مخفية مختارة خصيصاً لتحمّل الأجواء الساحلية في الخليج.',
        },
      },
      {
        index: '03',
        title: { en: 'Show & Heavy-Use Kitchens', ar: 'مطبخ الاستقبال ومطبخ التحضير' },
        body: {
          en: 'Deep fluency in Omani home culture—seamlessly designing luminous sculptural open kitchens paired with hardworking private back-of-house kitchens.',
          ar: 'فهم عميق لخصوصية البيت العُماني؛ نصمّم المطبخ المفتوح بجماليته الهادئة، إلى جانب مطبخ التحضير العملي بأعلى كفاءة يومية.',
        },
      },
      {
        index: '04',
        title: { en: 'Enduring Stewardship', ar: 'عناية تستمر بعد التسليم' },
        body: {
          en: 'Our permanent local service team handles fine realignments, care guidance, and lifetime spare components long after project handover.',
          ar: 'يتولى فريقنا المحلي الدائم أعمال الضبط والصيانة الدورية وتوفير القطع الأصلية لعقود بعد تسليم المشروع.',
        },
      },
    ],
    timelineEyebrow: { en: 'Chronicle', ar: 'مسيرة التطوّر' },
    timelineHeading: { en: 'Two decades, step by step.', ar: 'عقدان من النمو الهادئ.' },
    factoryNote: {
      en: 'Rusayl Joinery Facility · Private technical factory visits available by prior request for clients and partnering architects.',
      ar: 'مصنع لمسات في الرسيل الصناعية · تتوفر زيارات فنية خاصة للمصنع بموعد مسبق للعملاء والمعماريين الشركاء.',
    },
  },
  contactPage: {
    eyebrow: { en: 'Appointments & Showrooms', ar: 'المواعيد والمعارض' },
    title: { en: 'Visit Us in Muscat', ar: 'تفضّل بزيارتنا في مسقط' },
    intro: {
      en: 'We welcome homeowners, architects, and developers by appointment across both Muscat showrooms—or direct message via WhatsApp for an immediate reply.',
      ar: 'نرحب بالمُلّاك والمعماريين والمطورين بموعد مسبق في معرضَينا بمسقط، كما يمكنك مراسلتنا مباشرة عبر واتساب للاستجابة الفورية.',
    },
    formTitle: { en: 'Request a Private Consultation', ar: 'طلب موعد استشارة خاصة' },
    formNote: {
      en: 'Appointments are one-to-one with a senior kitchen designer and typically allow sixty quiet minutes around the material library.',
      ar: 'تُعقد الجلسة بشكل فردي مع أحد مصممينا المختصين وتستغرق قرابة ساعة هادئة لاستعراض الخامات ومناقشة المخططات.',
    },
    fields: {
      name: { en: 'Full Name', ar: 'الاسم الكامل' },
      namePlaceholder: { en: 'e.g. Tariq Al Harthy', ar: 'مثال: طارق الحارثي' },
      phone: { en: 'Phone / WhatsApp', ar: 'رقم الهاتف / واتساب' },
      phonePlaceholder: { en: '+968 9XXX XXXX', ar: '+968 9XXX XXXX' },
      email: { en: 'Email Address', ar: 'البريد الإلكتروني' },
      emailPlaceholder: { en: 'name@domain.com', ar: 'name@domain.com' },
      showroom: { en: 'Preferred Showroom', ar: 'المعرض المفضّل' },
      showroomOptions: [
        { value: 'qurum', label: { en: 'Al Qurum Flagship Showroom', ar: 'معرض شاطئ القرم الرئيسي' } },
        { value: 'almouj', label: { en: 'Al Mouj Design Gallery', ar: 'معرض الموج مسقط' } },
        { value: 'site', label: { en: 'On-Site Residence Visit', ar: 'زيارة ميدانية للموقع' } },
      ],
      scope: { en: 'Project Scope', ar: 'نطاق المشروع' },
      scopeOptions: [
        { value: 'kitchen', label: { en: 'Bespoke Kitchen', ar: 'مطبخ مفصّل' } },
        { value: 'dual', label: { en: 'Show Kitchen & Prep Kitchen', ar: 'مطبخ مفتوح + مطبخ تحضير' } },
        { value: 'spaces', label: { en: 'Wardrobes & Architectural Spaces', ar: 'خزائن ملابس ومساحات داخلية' } },
        { value: 'residence', label: { en: 'Complete Villa Package', ar: 'باقة فيلا متكاملة' } },
        { value: 'architect', label: { en: 'Architect / Studio Collaboration', ar: 'تعاون مع مكتب معماري' } },
      ],
      date: { en: 'Preferred Date', ar: 'التاريخ المفضّل' },
      time: { en: 'Time Window', ar: 'الفترة الزمنية' },
      timeOptions: [
        { value: 'morning', label: { en: 'Morning · 10:00 – 13:00', ar: 'صباحاً · ١٠:٠٠ – ١:٠٠' } },
        { value: 'afternoon', label: { en: 'Late Afternoon · 16:30 – 18:30', ar: 'مساءً · ٤:٣٠ – ٦:٣٠' } },
        { value: 'evening', label: { en: 'Evening · 18:30 – 20:30', ar: 'مساءً متأخراً · ٦:٣٠ – ٨:٣٠' } },
      ],
      notes: { en: 'Notes or Inquiry Reference', ar: 'ملاحظات إضافية أو تفاصيل المشروع' },
      notesPlaceholder: {
        en: 'Share location, architectural status, or collections of interest...',
        ar: 'يمكنك ذكر المنطقة، مرحلة البناء الحالية، أو المجموعة التي لفتت انتباهك...',
      },
      submit: { en: 'Confirm Appointment Request', ar: 'تأكيد طلب الموعد' },
      requiredError: {
        en: 'Please provide your name and phone or email so our team may confirm your visit.',
        ar: 'يرجى إدخال الاسم ورقم الهاتف أو البريد الإلكتروني لتأكيد موعدكم.',
      },
    },
    confirmation: {
      eyebrow: { en: 'Appointment Requested', ar: 'تم استلام طلبك' },
      title: { en: 'Thank you. We look forward to welcoming you.', ar: 'شكراً لك، نتطلّع لاستقبالك قريباً.' },
      body: {
        en: 'Our showroom coordinator in Muscat will reach out within one business day to finalize your private session and prepare the requested finishes.',
        ar: 'سيتواصل معك منسّق المعرض في مسقط خلال يوم عمل واحد لتأكيد الموعد وتجهيز عينات الخامات المطلوبة قبل وصولك.',
      },
      sendWhatsapp: { en: 'Also Confirm via WhatsApp', ar: 'إرسال الملخص عبر واتساب' },
      reset: { en: 'Submit Another Request', ar: 'تقديم طلب آخر' },
    },
    whatsappPanel: {
      eyebrow: { en: 'Direct Line', ar: 'تواصل فوري' },
      title: { en: 'Prefer WhatsApp?', ar: 'تفضّل المراسلة عبر واتساب؟' },
      body: {
        en: 'Speak directly with our Muscat showroom concierge to book a same-week appointment, send a floor plan photo, or enquire about lead times.',
        ar: 'تحدّث مباشرة مع فريق الاستقبال في مسقط لحجز موعد سريع أو مشاركة صورة المخطط أو الاستفسار عن مدد التنفيذ.',
      },
      cta: { en: 'Start WhatsApp Chat', ar: 'ابدأ محادثة واتساب' },
      numberDisplay: '+968 9124 0024',
      hours: { en: 'Sun – Thu · 09:00 – 20:30 GST', ar: 'الأحد – الخميس · ٩:٠٠ ص – ٨:٣٠ م' },
    },
    showroomsEyebrow: { en: 'Our Galleries', ar: 'معارضنا' },
    showroomsHeading: { en: 'Two Showrooms in Muscat', ar: 'معرضان في مسقط' },
    hoursLabel: { en: 'Opening Hours', ar: 'ساعات العمل' },
    directLabel: { en: 'Direct Contact', ar: 'التواصل المباشر' },
    directionsLabel: { en: 'Open Directions', ar: 'خريطة الموقع' },
    bookHereLabel: { en: 'Select This Showroom', ar: 'احجز في هذا المعرض' },
  },
  modal: {
    close: { en: 'Close', ar: 'إغلاق' },
    enquire: { en: 'Book Consultation for This Piece', ar: 'احجز استشارة حول هذا التصميم' },
    whatsapp: { en: 'Ask via WhatsApp', ar: 'استفسر عبر واتساب' },
    paletteLabel: { en: 'Signature Finishes', ar: 'لوحة التشطيبات' },
    specs: {
      materials: { en: 'Materials', ar: 'الخامات' },
      system: { en: 'System', ar: 'نظام الخزائن' },
      worktop: { en: 'Surface', ar: 'السطح' },
      hardware: { en: 'Hardware', ar: 'الآليات والمفصلات' },
      leadTime: { en: 'Production', ar: 'مدة التصنيع' },
      location: { en: 'Location', ar: 'الموقع' },
      year: { en: 'Completed', ar: 'سنة الإنجاز' },
      architect: { en: 'Collaboration', ar: 'بالتعاون مع' },
      scope: { en: 'Scope', ar: 'نطاق العمل' },
      area: { en: 'Footprint', ar: 'المساحة' },
    },
  },
  footer: {
    statement: {
      en: 'Bespoke kitchens, dressing architecture, and custom residence joinery crafted in Muscat since 2004.',
      ar: 'مطابخ مفصّلة، خزائن ملابس، ونجارة معمارية خاصة، تُصنع في مسقط منذ عام ٢٠٠٤.',
    },
    navHeading: { en: 'Navigation', ar: 'الصفحات' },
    showroomsHeading: { en: 'Showrooms', ar: 'المعارض' },
    directHeading: { en: 'Enquiries', ar: 'التواصل' },
    whatsapp: { en: 'WhatsApp Desk', ar: 'واتساب المعرض' },
    rights: {
      en: '© 2026 Lamasat Kitchen LLC. Sultanate of Oman.',
      ar: '© ٢٠٢٦ لمسات للمطابخ ش.م.م. سلطنة عُمان.',
    },
    conceptNote: {
      en: 'Design Concept Preview · Curated sample showcase',
      ar: 'نموذج عرض تصميمي أولي · محتوى وصور تجريبية',
    },
  },
};

export const NAV_PAGES: PageId[] = [
  'kitchens',
  'spaces',
  'projects',
  'about',
  'contact',
];

export const KITCHEN_COLLECTIONS: KitchenCollection[] = [
  {
    id: 'mirbat',
    code: '01',
    name: { en: 'Mirbat', ar: 'مرباط' },
    subtitle: {
      en: 'Honed Travertine & Smoked Oak',
      ar: 'ترافرتين مصقول وبلوط مدخّن',
    },
    category: 'stone',
    categoryLabel: { en: 'Monolith Stone', ar: 'الأحجار المصمتة' },
    image: '/images/hero-kitchen.jpg',
    aspect: 'wide',
    summary: {
      en: 'Flagship architectural island cut in warm cream travertine, anchored against full-height handleless European smoked oak cabinetry.',
      ar: 'جزيرة مطبخ منحوتة من حجر الترافرتين الدافئ، تنسجم أمام خزائن كاملة الارتفاع من البلوط الأوروبي المدخّن بدون مقابض.',
    },
    description: {
      en: 'Mirbat sets our quietest benchmark. Book-matched vertical oak tall units conceal complete refrigeration and recessed stone tea niche behind feather-light shadow seams, anchored by a singular bevelled waterfall block crafted from cross-cut Italian travertine.',
      ar: 'تمثّل مجموعة مرباط أهدأ تعبير معماري لدينا؛ خزائن كاملة الارتفاع من خشب البلوط المتصل العروق تخفي أجهزة التبريد مع تجويف حجري مضاء بدفء، تتوسطها جزيرة من الترافرتين الطبيعي بحواف مشطوفة بدقة متناهية.',
    },
    primaryMaterials: {
      en: 'Cross-cut honed cream travertine, European smoked oak veneer',
      ar: 'ترافرتين مصقول بقص عرضي، قشرة بلوط أوروبي مدخّن',
    },
    cabinetrySystem: {
      en: 'Integrated bronze recessed channel · Soft-close pocket bays',
      ar: 'مجاري فتح مخفية بلون برونز مطفي · أبواب منزلقة داخلية',
    },
    worktop: {
      en: '60 mm mitred monolithic travertine, natural matte sealer',
      ar: 'ترافرتين مصمت بسمك ٦٠ مم، حماية مطفية طبيعية',
    },
    hardware: {
      en: 'Concealed Austrian full-extension motion & brushed bronze tapware',
      ar: 'آليات سحب نمساوية مخفية وخلاطات برونز مصقول',
    },
    leadTime: { en: '8 – 10 weeks, custom made', ar: '٨ – ١٠ أسابيع (تفصيل خاص)' },
    swatches: [
      { name: { en: 'Cream Travertine', ar: 'ترافرتين كريمي' }, color: '#DFD6C7', finish: { en: 'Honed', ar: 'مصقول مطفي' } },
      { name: { en: 'Smoked Oak', ar: 'بلوط مدخّن' }, color: '#6F5A46', finish: { en: 'Wire Brushed', ar: 'مفرّش طبيعي' } },
      { name: { en: 'Aged Bronze', ar: 'برونز معتّق' }, color: '#8C6D4F', finish: { en: 'Anodized', ar: 'أنودايز مطفي' } },
    ],
  },
  {
    id: 'qurm',
    code: '02',
    name: { en: 'Qurm', ar: 'القرم' },
    subtitle: {
      en: 'Fluted White Oak & Beige Limestone',
      ar: 'بلوط أبيض مضلّع وحجر جيري دافئ',
    },
    category: 'timber',
    categoryLabel: { en: 'Timber', ar: 'الأخشاب الطبيعية' },
    image: '/images/kitchen-qurum.jpg',
    summary: {
      en: 'Tactile vertical fluting milled in natural European oak, softened by pale continuous limestone planes and slender floating stone shelving.',
      ar: 'ضلوع رأسية ناعمة محفورة في خشب البلوط الأبيض الطبيعي، يقابلها امتداد نقي من الحجر الجيري ورفّ عائم فائق الرشاقة.',
    },
    description: {
      en: 'Inspired by morning light entering Muscat’s older coastal residences, Qurm uses delicate CNC-carved oak ribs that register soft shadows throughout the afternoon. Overhead storage retreats cleanly in favour of calm hand-applied plaster walls.',
      ar: 'مستلهمة من ضوء الصباح في بيوت القرم الساحلية، تعتمد المجموعة على شرائح بلوط محفورة بدقة تلتقط تدرجات الظل طوال النهار، مع تحرير الجدار العلوي لإبراز هدوء الجص الطبيعي والرف الحجري الرفيع.',
    },
    primaryMaterials: {
      en: 'Solid-edged fluted European white oak, honed beige limestone',
      ar: 'بلوط أبيض أوروبي مضلّع، حجر جيري بيج مصقول',
    },
    cabinetrySystem: {
      en: 'Continuous grain-matched milled fronts, concealed magnetic touch',
      ar: 'واجهات محفورة متصلة العروق بفتح لمسي مخفي',
    },
    worktop: {
      en: 'Honed natural limestone slab & matching full-height splashback',
      ar: 'لوح حجر جيري طبيعي مصقول مع امتداد جداري متجانس',
    },
    hardware: {
      en: 'Brushed satin bronze fittings, smoked timber drawer inserts',
      ar: 'تفاصيل برونز ساتان، تقسيمات أدراج داخلية من الخشب الصلب',
    },
    leadTime: { en: '8 weeks, custom made', ar: '٨ أسابيع (تفصيل خاص)' },
    swatches: [
      { name: { en: 'Natural White Oak', ar: 'بلوط أبيض طبيعي' }, color: '#C6B093', finish: { en: 'Fluted Matte', ar: 'مضلّع مطفي' } },
      { name: { en: 'Omani Limestone', ar: 'حجر جيري عُماني' }, color: '#E3DCCF', finish: { en: 'Honed', ar: 'مطفي ناعم' } },
      { name: { en: 'Warm Plaster', ar: 'جص دافئ' }, color: '#EFECE5', finish: { en: 'Mineral Lime', ar: 'جيري طبيعي' } },
    ],
  },
  {
    id: 'monolith',
    code: '03',
    name: { en: 'Monolith', ar: 'مونوليث' },
    subtitle: {
      en: 'Smoked Walnut & Pietra Grey Stone',
      ar: 'جوز داكن ورخام بييترا جراي',
    },
    category: 'stone',
    categoryLabel: { en: 'Monolith Stone', ar: 'الأحجار المصمتة' },
    image: '/images/kitchen-monolith.jpg',
    summary: {
      en: 'Poised and evening-toned architectural kitchen combining full-height European walnut pockets with a dense veined dark charcoal marble island.',
      ar: 'تعبير معماري عميق يجمع خزائن الجوز الأوروبي الداكن مع جزيرة مصمتة من رخام بييترا جراي المعرّق وإضاءة دافئة مخفية.',
    },
    description: {
      en: 'Built for tall formal entertaining volumes, Monolith commands space without ornament. Floor-to-ceiling pocket doors hide complete espresso bars and high-output cooking walls, transforming effortlessly into a quiet timber backdrop during evening gatherings.',
      ar: 'صُمّمت للمجالس وصالات الاستقبال الفسيحة؛ تخفي أبوابها المنزلقة ركن القهوة ومنطقة الطهي بالكامل عند عدم الاستخدام، لتتحول الواجهة إلى خلفية خشبية هادئة تليق بأمسيات الضيافة.',
    },
    primaryMaterials: {
      en: 'Deep smoked American walnut, honed Pietra Grey natural stone',
      ar: 'خشب جوز أمريكي مدخّن، حجر بييترا جراي طبيعي مصقول',
    },
    cabinetrySystem: {
      en: 'Retractable full-height architectural pocket wall · 2700K cove glow',
      ar: 'أبواب منزلقة مخفية بارتفاع كامل مع إضاءة خطية دافئة ٢٧٠٠ كلفن',
    },
    worktop: {
      en: 'Velvet-honed Pietra Grey marble block with integrated stone basin',
      ar: 'رخام بييترا جراي بلمسة مخملية مع حوض مدمج من ذات الحجر',
    },
    hardware: {
      en: 'Dark anodized bronze track & silent European heavy-duty slides',
      ar: 'مجاري برونز داكن مؤكسد وآليات حركة أوروبية صامتة',
    },
    leadTime: { en: '9 – 11 weeks, custom made', ar: '٩ – ١١ أسبوعاً (تفصيل خاص)' },
    swatches: [
      { name: { en: 'Smoked Walnut', ar: 'جوز مدخّن' }, color: '#4B3C31', finish: { en: 'Open Pore Oil', ar: 'زيت طبيعي' } },
      { name: { en: 'Pietra Grey', ar: 'بييترا جراي' }, color: '#5D5A55', finish: { en: 'Leathered', ar: 'مصقول مطفي' } },
      { name: { en: 'Dark Bronze', ar: 'برونز داكن' }, color: '#58493A', finish: { en: 'Brushed', ar: 'مصقول ناعم' } },
    ],
  },
  {
    id: 'sifah',
    code: '04',
    name: { en: 'Sifah', ar: 'السيفة' },
    subtitle: {
      en: 'Silk Sand Lacquer & Taj Mahal Quartzite',
      ar: 'طلاء رملي حريري وكوارتزايت تاج محل',
    },
    category: 'lacquer',
    categoryLabel: { en: 'Silk Lacquer', ar: 'الطلاء المطفي' },
    image: '/images/kitchen-linen.jpg',
    summary: {
      en: 'Ultra-matte mineral taupe fronts matched to pale translucent quartzite with a cantilevered morning table that pulls family life gently to the window.',
      ar: 'واجهات بلون رملي مطفي فائق النعومة، مع سطح كوارتزايت عاجي يمتد لطاولة إفطار عائمة تستقبل ضوء الصباح.',
    },
    description: {
      en: 'Softly calibrated to the muted dune palette between Muscat and Jebel Sifah. Seven-coat silk micro-lacquer achieves an anti-fingerprint surface as calm as pale plaster, contrasted with luminous pale gold-veined natural quartzite engineered for constant family cooking.',
      ar: 'ألوان مستوحاة من هدوء الرمال الساحلية بين مسقط وجبل السيفة؛ طلاء حريري من سبع طبقات مقاوم للبصمات يمنح ملمساً ناعماً كالجص الهادئ، يتكامل مع متانة الكوارتزايت الطبيعي المثالي للاستخدام العائلي اليومي.',
    },
    primaryMaterials: {
      en: 'Hand-rubbed silk matte architectural lacquer, Taj Mahal quartzite',
      ar: 'طلاء معماري مطفي حريري، حجر كوارتزايت تاج محل الطبيعي',
    },
    cabinetrySystem: {
      en: 'Bevelled 45° grip profiles, zero visible pulls',
      ar: 'حواف مائلة بزاوية ٤٥ درجة للفتح السلس بدون مقابض',
    },
    worktop: {
      en: 'Silky honed natural quartzite with seamless integrated counter extension',
      ar: 'كوارتزايت طبيعي مطفي مع امتداد مدمج لطاولة الجلوس',
    },
    hardware: {
      en: 'Anthracite precision alloy inner frames & warm felt dividers',
      ar: 'هياكل أدراج داخلية دقيقة بلون رمادي داكن وفواصل لبّاد فاخرة',
    },
    leadTime: { en: '7 – 9 weeks, custom made', ar: '٧ – ٩ أسابيع (تفصيل خاص)' },
    swatches: [
      { name: { en: 'Warm Sand', ar: 'رملي دافئ' }, color: '#CEC5B7', finish: { en: 'Silk Matte', ar: 'مطفي حريري' } },
      { name: { en: 'Taj Mahal', ar: 'تاج محل' }, color: '#E8E2D6', finish: { en: 'Honed Vein', ar: 'معرّق ناعم' } },
      { name: { en: 'Natural Ash', ar: 'خشب الرماد' }, color: '#B59E82', finish: { en: 'Raw Matte', ar: 'طبيعي مطفي' } },
    ],
  },
  {
    id: 'jabal',
    code: '05',
    name: { en: 'Jabal', ar: 'الجبل' },
    subtitle: {
      en: 'Sintered Sandstone & Courtyard Architecture',
      ar: 'حجر رملي معالج وعمارة الفناء',
    },
    category: 'courtyard',
    categoryLabel: { en: 'Prep & Courtyard', ar: 'مطابخ التحضير والفناء' },
    image: '/images/kitchen-outdoor.jpg',
    summary: {
      en: 'Built for shaded open verandas and heavy domestic culinary craft: heat-, steam-, and humidity-proof stoneware encased within serene matte surfaces.',
      ar: 'مصمّم للشرفات المظلّلة ومطابخ التحضير اليومية الكثيفة؛ أسطح حجرية مقاومة للحرارة والبخار والرطوبة بلون رملي هادئ.',
    },
    description: {
      en: 'True to Omani house plans where culinary life thrives across a main preparation bay and shaded courtyard terrace, Jabal fuses marine-grade structural carcasses with large-format sintered desert sandstone clad across every front and vertical reveal.',
      ar: 'يواكب تقاليد البيت العُماني الذي يجمع بين المطبخ العملي والانفتاح على الفناء المظلّل؛ يدمج هياكل مقاومة للرطوبة والحرارة مع ألواح حجرية مصنّعة عالية التحمّل تكسو الواجهات والأسطح في انسجام تام.',
    },
    primaryMaterials: {
      en: 'Sintered desert sandstone fronts, anodized bronze linear reveals',
      ar: 'واجهات حجر رملي ملبّد عالي التحمّل، حواف برونز مؤكسد',
    },
    cabinetrySystem: {
      en: 'Humidity-sealed structural core · Flush exterior-grade sealing',
      ar: 'هياكل معزولة بالكامل ومقاومة للرطوبة والحرارة',
    },
    worktop: {
      en: 'Non-porous thermal-shock sintered stone, dual commercial wash area',
      ar: 'حجر صناعي غير مسامي مقاوم للحرارة مع منطقة غسيل مزدوجة',
    },
    hardware: {
      en: '316 stainless coastal-grade runners & dark bronze lever trim',
      ar: 'آليات ستانلس ستيل ٣١٦ مقاومة للأجواء الساحلية',
    },
    leadTime: { en: '8 weeks, custom made', ar: '٨ أسابيع (تفصيل خاص)' },
    swatches: [
      { name: { en: 'Desert Sand', ar: 'رمل الصحراء' }, color: '#D3C5B0', finish: { en: 'Sintered Stone', ar: 'حجر معالج' } },
      { name: { en: 'Raw Limewash', ar: 'طلاء جيري' }, color: '#EAE4D8', finish: { en: 'Architectural', ar: 'معماري مطفي' } },
      { name: { en: 'Oil Bronze', ar: 'برونز داكن' }, color: '#5E5144', finish: { en: 'Matte Finish', ar: 'مطفي' } },
    ],
  },
  {
    id: 'almouj-series',
    code: '06',
    name: { en: 'Al Mouj', ar: 'الموج' },
    subtitle: {
      en: 'Whitewashed Oak & Coastal Limestone',
      ar: 'بلوط فاتح مغسول وحجر ساحلي',
    },
    category: 'timber',
    categoryLabel: { en: 'Timber', ar: 'الأخشاب الطبيعية' },
    image: '/images/project-almouj.jpg',
    summary: {
      en: 'Weightless pale-oak volume developed for seaside villas and bright penthouses, holding clear unobstructed sightlines to sky and horizon.',
      ar: 'تكوين خفيف من البلوط الفاتح المغسول، مُصمّم للفلل الساحلية والشقق المطلة على البحر ليحافظ على صفاء الضوء وامتداد الأفق.',
    },
    description: {
      en: 'Designed around panoramic seaside glazing where reflection matters as much as surface. Bleached matte oak carries quiet horizontal clarity along full walls, stepping smoothly into a fine chamfered dining island that frames the horizon rather than obstructing it.',
      ar: 'صُمّمت للمساحات المفتوحة على الواجهات البحرية حيث يكتسب انعكاس الضوء دوراً رئيسياً؛ يمنح البلوط الفاتح صفاءً بصرياً متصلاً يمتد نحو جزيرة من الحجر الجيري تحترم المشهد وتندمج معه بسلاسة.',
    },
    primaryMaterials: {
      en: 'Quarter-sawn whitewashed oak, pale honed coastal limestone',
      ar: 'بلوط أبيض فاتح مقطوع بدقّة، حجر جيري ساحلي مصقول',
    },
    cabinetrySystem: {
      en: 'Frameless continuous full-height veneer panels, ghost shadow line',
      ar: 'ألواح مستمرة بلا إطارات مع فاصل ظل معماري دقيق',
    },
    worktop: {
      en: 'Slim 20 mm coastal limestone island with mitred bevel drip-edge',
      ar: 'حجر جيري بسمك رفيع ٢٠ مم وحواف مشطوفة بانسيابية',
    },
    hardware: {
      en: 'Soft champagne brushed inlays, integrated flush induction & tap',
      ar: 'تطعيمات شامبين مطفية وموقد وحوض مدمجان بمستوى السطح',
    },
    leadTime: { en: '7 – 9 weeks, custom made', ar: '٧ – ٩ أسابيع (تفصيل خاص)' },
    swatches: [
      { name: { en: 'Bleached Oak', ar: 'بلوط فاتح' }, color: '#D6C8B5', finish: { en: 'Raw Oil', ar: 'زيت طبيعي فاتح' } },
      { name: { en: 'Chalk Limestone', ar: 'حجر طباشيري' }, color: '#ECE8DF', finish: { en: 'Honed', ar: 'مطفي' } },
      { name: { en: 'Champagne Metal', ar: 'معدن شامبين' }, color: '#A99984', finish: { en: 'Brushed', ar: 'مصقول ناعم' } },
    ],
  },
];

export const MATERIAL_LIBRARY: MaterialLibraryItem[] = [
  {
    name: { en: 'Navona Travertine', ar: 'ترافرتين نافونا' },
    origin: { en: 'Natural Honed Stone', ar: 'حجر طبيعي مصقول' },
    finish: { en: 'Open Pore, Matte Sealed', ar: 'مطفي محمي بمسام طبيعية' },
    tone: '#DED5C6',
    application: { en: 'Islands & Splashbacks', ar: 'الجزر والواجهات' },
  },
  {
    name: { en: 'Smoked European Oak', ar: 'بلوط أوروبي مدخّن' },
    origin: { en: 'Quarter-Sawn Veneer', ar: 'قشرة طبيعية منتقاة' },
    finish: { en: 'Brushed Natural Oil', ar: 'مفرّش بالزيت الطبيعي' },
    tone: '#745E4A',
    application: { en: 'Tall Cabinetry & Dressing', ar: 'الخزائن وغرف الملابس' },
  },
  {
    name: { en: 'Fluted White Oak', ar: 'بلوط أبيض مضلّع' },
    origin: { en: 'Precision Milled Timber', ar: 'خشب محفور بدقة' },
    finish: { en: 'Ultra-Matte Raw Seal', ar: 'طلاء شفاف مطفي' },
    tone: '#C8B397',
    application: { en: 'Feature Fronts & Living Walls', ar: 'الواجهات وجدران المعيشة' },
  },
  {
    name: { en: 'Silk Sand Lacquer', ar: 'طلاء رملي حريري' },
    origin: { en: 'Seven-Coat Matte System', ar: 'نظام طلاء بسبع طبقات' },
    finish: { en: 'Anti-Fingerprint Soft Touch', ar: 'مقاوم للبصمات ناعم الملمس' },
    tone: '#CFC6B8',
    application: { en: 'Minimalist Cabinetry', ar: 'واجهات الخزائن الهادئة' },
  },
  {
    name: { en: 'Pietra Grey Stone', ar: 'رخام بييترا جراي' },
    origin: { en: 'Veined Natural Marble', ar: 'رخام طبيعي معرّق' },
    finish: { en: 'Velvet Honed', ar: 'مصقول بملمس مخملي' },
    tone: '#5C5852',
    application: { en: 'Monolith Blocks & Counters', ar: 'الجزر والأسطح المصمتة' },
  },
  {
    name: { en: 'Aged Brushed Bronze', ar: 'برونز مصقول معتّق' },
    origin: { en: 'Anodized Architectural Alloy', ar: 'سبيكة معمارية مؤكسدة' },
    finish: { en: 'Satin Hand-Brushed', ar: 'ساتان مصقول يدوياً' },
    tone: '#8B6E51',
    application: { en: 'Channels, Frames & Hardware', ar: 'المجاري والإطارات والمقابض' },
  },
];

export const SPACES_ITEMS: SpaceItem[] = [
  {
    id: 'wardrobes',
    index: '01',
    title: { en: 'Dressing Rooms & Wardrobes', ar: 'غرف الملابس والخزائن' },
    discipline: { en: 'Private Suites', ar: 'الأجنحة الخاصة' },
    image: '/images/space-wardrobe.jpg',
    description: {
      en: 'Serene floor-to-ceiling wardrobe architectures framed in slim bronze-tinted glass, continuous brushed oak carcases, concealed vertical LED ribbons, and leather-lined stone island drawers tailored to every belonging.',
      ar: 'غرف ملابس هادئة بارتفاع كامل، تجمع بين الزجاج الملوّن بالبرونز وإطارات رفيعة داكنة مع رفوف من البلوط المدخّن وإضاءة خطية خافتة، تتوسطها وحدة ترافرتين بأدراج مبطّنة لحفظ المقتنيات الخاصة.',
    },
    detailNote: {
      en: 'Custom shelf lighting · Velvet & walnut jewellery trays · Quiet whisper-close pivots',
      ar: 'إضاءة مدمجة للرفوف · تقسيمات مجوهرات من الجوز والمخمل · مفصلات إغلاق صامتة',
    },
    applications: {
      en: ['Walk-in suites', 'Bronze-glass vitrines', 'Fluted bedroom closets', 'Dressing islands'],
      ar: ['غرف ملابس مفتوحة', 'واجهات زجاج برونزي', 'خزائن غرف النوم', 'جزر الإكسسوارات'],
    },
  },
  {
    id: 'living',
    index: '02',
    title: { en: 'Living & Architectural Joinery', ar: 'صالات المعيشة والنجارة المعمارية' },
    discipline: { en: 'Formal & Family Halls', ar: 'المجالس وصالات المعيشة' },
    image: '/images/space-living.jpg',
    description: {
      en: 'Continuous full-wall acoustic wood panelling, floating natural stone media plinths, bespoke shelving libraries, and calm wall credenzas crafted to merge furniture seamlessly into the proportions of the room.',
      ar: 'تكسية جدارية متكاملة بشرائح الخشب الطبيعي، وقواعد منخفضة من الترافرتين المصقول، ومكتبات مفتوحة وخزائن جانبية تندمج كجزء أصيل من المعمار الداخلي للصالة أو المجلس.',
    },
    detailNote: {
      en: 'Integrated concealed cabling · Continuous architectural panelling · Matched grain veneers',
      ar: 'تمديدات مخفية بالكامل · تجاليد جدارية متصلة · تطابق دقيق لعروق الخشب',
    },
    applications: {
      en: ['Majlis wall architecture', 'Media stone consoles', 'Bespoke libraries', 'Sculptural sideboards'],
      ar: ['جدران المجالس', 'وحدات تلفاز حجرية', 'مكتبات مفصّلة', 'خزائن ضيافة'],
    },
  },
  {
    id: 'courtyard-prep',
    index: '03',
    title: { en: 'Prep Kitchens & Utility Suites', ar: 'مطابخ التحضير والخدمات' },
    discipline: { en: 'Culinary Back-of-House', ar: 'المساحات المساندة' },
    image: '/images/kitchen-outdoor.jpg',
    description: {
      en: 'Designed around the enduring hospitality of the Omani household—dedicated chef preparation zones, climate-resistant veranda kitchens, butler pantries, and structured laundry rooms wearing the same calm visual register as the home’s main rooms.',
      ar: 'مراعاةً لأصالة الضيافة في البيت العُماني، نصمّم مطابخ التحضير الداخلية، ومطابخ الفناء المقاومة للرطوبة، ومخازن المؤن وغرف الغسيل المنظّمة بذات الأناقة والهدوء البصري للمنزل الرئيسي.',
    },
    detailNote: {
      en: 'High-extraction specification · Sintered non-porous slabs · Moisture-proof interiors',
      ar: 'تهوية عالية الكفاءة · أسطح حجرية غير مسامية · هياكل مقاومة للرطوبة والحرارة',
    },
    applications: {
      en: ['Secondary heavy kitchens', 'Covered garden terraces', 'Walk-in pantries', 'Integrated laundries'],
      ar: ['مطابخ التحضير اليومية', 'مطابخ الشرفات المظلّلة', 'مخازن المؤن', 'غرف الغسيل المدمجة'],
    },
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'shatti-villa',
    title: { en: 'Shatti Courtyard Villa', ar: 'فيلا فناء شاطئ القرم' },
    location: { en: 'Shatti Al Qurum, Muscat', ar: 'شاطئ القرم، مسقط' },
    year: '2025',
    category: 'villa',
    categoryLabel: { en: 'Private Villa', ar: 'فيلا خاصة' },
    image: '/images/project-shatti.jpg',
    featured: true,
    architect: { en: 'Al Bahr Architectural Studio', ar: 'أستوديو البحر المعماري' },
    scope: {
      en: 'Show kitchen, private prep kitchen, formal dining joinery, and master wardrobes',
      ar: 'مطبخ استقبال مفتوح، مطبخ تحضير خاص، أعمال نجارة غرفة الطعام، وغرف الملابس الرئيسية',
    },
    materials: {
      en: 'Smoked walnut, honed Roman travertine, raw cream lime plaster',
      ar: 'خشب جوز مدخّن، ترافرتين روماني مصقول، جص طبيعي دافئ',
    },
    area: { en: '740 m² residence', ar: 'مساحة الفيلا ٧٤٠ م²' },
    story: {
      en: 'Set quietly behind a hand-dressed sandstone perimeter two streets back from the sea, this family villa calls for fluid transitions between host gathering spaces and serene family living. Lamasat manufactured an uninterrupted gallery connecting open walnut-and-travertine cooking to an eight-metre dining hall bathed in indirect courtyard light.',
      ar: 'تقع هذه الفيلا العائلية في حي هادئ قرب البحر بشاطئ القرم، وتقوم فكرتها على الانتقال السلس بين مساحات الضيافة والحياة العائلية اليومية. نفّذت لمسات مطبخاً مفتوحاً من الجوز والترافرتين يتكامل بانسيابية مع قاعة الطعام المطلّة على الفناء المضيء.',
    },
    notes: {
      en: 'A concealed swing walnut panel behind the primary hearth steps silently into a dual-range service kitchen and temperature-managed larder.',
      ar: 'يخفي باب خشبي مندمج خلف الواجهة الرئيسية ممراً هادئاً نحو مطبخ تحضير متكامل ومخزن مؤن مكيّف.',
    },
  },
  {
    id: 'almouj-residence',
    title: { en: 'Horizon Waterfront Residence', ar: 'مسكن الأفق الساحلي' },
    location: { en: 'Al Mouj, Muscat', ar: 'الموج، مسقط' },
    year: '2025',
    category: 'waterfront',
    categoryLabel: { en: 'Waterfront', ar: 'ساحلي' },
    image: '/images/project-almouj.jpg',
    architect: { en: 'Dar Design Collaborative', ar: 'دار للتصميم المعماري' },
    scope: {
      en: 'Coastal panoramic kitchen, custom kitchen island, oak feature cladding',
      ar: 'مطبخ مفتوح بإطلالة بحرية، جزيرة حجرية مفصّلة، وتكسية خشب البلوط',
    },
    materials: {
      en: 'Whitewashed quarter-sawn oak, pale honed limestone, satin bronze',
      ar: 'بلوط أبيض فاتح، حجر جيري مصقول، تفاصيل برونز ساتان',
    },
    area: { en: '460 m² apartment', ar: 'مساحة ٤٦٠ م²' },
    story: {
      en: 'Rather than competing with sweeping morning glare off the Sea of Oman, every finish was calibrated several tones lighter and fully matte. Tall columns hold integrated cooling and morning coffee stations completely free of interruption from the horizon.',
      ar: 'بدلاً من منافسة المشهد البحري الهادئ، جرى ضبط جميع التشطيبات بدرجات فاتحة مطفية تمتص وهج الصباح برفق، مع إخفاء جميع الأجهزة داخل الخزائن الكاملة للحفاظ على صفاء الأفق البحري.',
    },
    notes: {
      en: 'Installed over twelve clean days in strict marine-humidity seal specification.',
      ar: 'تم التركيب خلال اثني عشر يوماً بمواصفات عزل مخصّصة للأجواء الساحلية.',
    },
  },
  {
    id: 'msq-house',
    title: { en: 'Madinat Al Sultan Qaboos House', ar: 'منزل مدينة السلطان قابوس' },
    location: { en: 'Madinat Al Sultan Qaboos', ar: 'مدينة السلطان قابوس، مسقط' },
    year: '2024',
    category: 'villa',
    categoryLabel: { en: 'Private Villa', ar: 'فيلا خاصة' },
    image: '/images/kitchen-monolith.jpg',
    architect: { en: 'Private Architect Commission', ar: 'تصميم معماري خاص' },
    scope: {
      en: 'Monolithic open culinary space, wine-free tea gallery, study wall',
      ar: 'مطبخ مفتوح مصمت، ركن ضيافة وقهوة عُمانية، وجدار مكتبة خاصة',
    },
    materials: {
      en: 'Smoked walnut, velvet-honed Pietra Grey, dark anodized brass',
      ar: 'جوز مدخّن، رخام بييترا جراي مخملي، نحاس داكن مؤكسد',
    },
    area: { en: '620 m² renovation', ar: 'إعادة تأهيل ٦٢٠ م²' },
    story: {
      en: 'A thoughtful renovation of an established 1990s Muscat family residence. The brief called for architectural calm able to welcome large multi-generational Friday gatherings while staying composed like a minimalist sculpture during quiet weekday mornings.',
      ar: 'تجديد شامل لمنزل عائلي عريق في مدينة السلطان قابوس، يجمع بين رحابة الاستقبال في تجمّعات نهاية الأسبوع والهدوء النحتي الأنيق في الأيام العادية.',
    },
    notes: {
      en: 'Full slab single-block island lifted manually into ground-level frame prior to facade glazing.',
      ar: 'تم إدخال كتلة الجزيرة الحجرية الموحّدة وضبطها بمستوى الأرضية قبل تركيب الواجهات الزجاجية.',
    },
  },
  {
    id: 'bousher-penthouse',
    title: { en: 'Bousher Hill Dressing & Living', ar: 'أجنحة ومعيشة مرتفعات بوشر' },
    location: { en: 'Bousher Heights, Muscat', ar: 'مرتفعات بوشر، مسقط' },
    year: '2024',
    category: 'collaborations',
    categoryLabel: { en: 'Studio Commission', ar: 'تعاون معماري' },
    image: '/images/space-wardrobe.jpg',
    architect: { en: 'Noor Interiors Studio', ar: 'أستوديو نور للتصميم' },
    scope: {
      en: 'Full-floor wardrobes, illuminated linen suite, master living joinery',
      ar: 'خزائن الطابق العلوي بالكامل، غرفة ملابس رئيسية مضاءة، وأعمال معيشة',
    },
    materials: {
      en: 'Bronze-tinted low-iron glass, brushed smoked oak, light travertine',
      ar: 'زجاج برونزي نقي، بلوط مدخّن مفرّش، وترافرتين فاتح',
    },
    area: { en: '510 m² interior', ar: 'مساحة ٥١٠ م²' },
    story: {
      en: 'Conceived alongside an independent Muscat interior studio, this complete residential millwork scope replaced fragmented plaster niches with serene smoked oak dressing chambers lined in discreet perimeter warmth.',
      ar: 'بتعاون وثيق مع مكتب تصميم داخلي في مسقط، نفّذنا منظومة كاملة من الخزائن والأجنحة الخاصة بلغة بصرية موحّدة تتسم بالدفء والانضباط المعماري.',
    },
    notes: {
      en: 'Sixteen custom linear glass fronts delivered to single-millimetre spacing along full suite wing.',
      ar: 'ست عشرة واجهة زجاجية متصلة نُفّذت بتباعد متساوٍ لا يتجاوز المليمتر الواحد.',
    },
  },
  {
    id: 'sifah-bay',
    title: { en: 'Jebel Sifah Retreat', ar: 'استراحة جبل السيفة' },
    location: { en: 'Jebel Sifah, Muscat Governorate', ar: 'جبل السيفة، محافظة مسقط' },
    year: '2024',
    category: 'waterfront',
    categoryLabel: { en: 'Waterfront', ar: 'ساحلي' },
    image: '/images/kitchen-linen.jpg',
    architect: { en: 'Studio Wadi Architecture', ar: 'أستوديو وادي للعمارة' },
    scope: {
      en: 'Weekend home kitchen, sand lacquer bedrooms, dining terrace furniture',
      ar: 'مطبخ المنزل الساحلي، خزائن غرف النوم، وأثاث الشرفة المطلة',
    },
    materials: {
      en: 'Warm sand silk lacquer, Taj Mahal quartzite, raw ash wood',
      ar: 'طلاء رملي حريري مطفي، كوارتزايت تاج محل، وخشب رماد طبيعي',
    },
    area: { en: '380 m² retreat', ar: 'مساحة ٣٨٠ م²' },
    story: {
      en: 'Between rugged coastal limestone ridges and stillness along the Gulf, this holiday house trades bold contrasts for low glare and gentle sandy restraint. Surfaces hold salty coastal breeze calmly through summer and winter alike.',
      ar: 'بين تضاريس الساحل الجبلية وهدوء البحر، يستعيض هذا المسكن الموسمي عن التباينات الحادّة بدرجات رملية هادئة وخامات متينة تحتفظ برونقها في الأجواء الساحلية طوال العام.',
    },
    notes: {
      en: 'Custom cantilevered dining leg seats six comfortably facing morning hills.',
      ar: 'امتداد مصمّم لطاولة طعام تتسع لستة أشخاص بإطلالة مفتوحة على التلال الساحلية.',
    },
  },
  {
    id: 'al-ansab-house',
    title: { en: 'Al Ansab Limestone House', ar: 'بيت الحجر في الأنصب' },
    location: { en: 'Al Ansab, Muscat', ar: 'الأنصب، مسقط' },
    year: '2023',
    category: 'collaborations',
    categoryLabel: { en: 'Studio Commission', ar: 'تعاون معماري' },
    image: '/images/space-living.jpg',
    architect: { en: 'Qasr Architectural Practice', ar: 'مكتب قصر للعمارة' },
    scope: {
      en: 'Dual family kitchens, bespoke living hearth wall, private study',
      ar: 'مطبخان رئيسي وتحضيراً، جدار معيشة خشبي وحجري، ومكتب خاص',
    },
    materials: {
      en: 'Vertical slatted walnut, Omani honed limestone, sand ceramic plaster',
      ar: 'شرائح جوز رأسية، حجر جيري عُماني مصقول، وجص رملي ناعم',
    },
    area: { en: '820 m² residence', ar: 'مساحة ٨٢٠ م²' },
    story: {
      en: 'A sculptural single-family estate grounded in Omani sandstone light. Over fourteen weeks our Rusayl craftsmen supplied kitchen installations, complete fluted-walnut salon panelling, and bespoke solid stone plinth consoles across two levels.',
      ar: 'فيلا رحبة مستلهمة من هدوء الحجر العُماني؛ أنتج فريق مصنع الرسيل خلال أربعة عشر أسبوعاً المطابخ وتكسية الصالة الكاملة بشرائح الجوز ووحدات الحجر المنخفضة عبر طابقَين.',
    },
    notes: {
      en: 'Hand-selected mineral plaster tone verified directly alongside raw wood finish boards on site.',
      ar: 'تمت مطابقة درجة الجص الحجري مع عينات الخشب مباشرة داخل الموقع قبل التركيب.',
    },
  },
];

export const MILESTONES: Milestone[] = [
  {
    year: '2004',
    title: { en: 'Foundation in Muscat', ar: 'التأسيس في مسقط' },
    detail: {
      en: 'Opened as a family-run bespoke kitchen studio rooted in handmade accuracy and honest client relationships across Muscat.',
      ar: 'انطلقت لمسات كأستوديو مستقل للمطابخ المفصّلة يضع دقّة الصنعة والثقة الممتدة مع العملاء في مقدمة أولوياته.',
    },
  },
  {
    year: '2009',
    title: { en: 'Rusayl Manufacturing Facility', ar: 'افتتاح مصنع الرسيل' },
    detail: {
      en: 'Commissioned our dedicated industrial joinery plant with European precision machinery, expanding local craftsmanship in Oman.',
      ar: 'تأسيس مصنعنا المتخصص في الرسيل الصناعية بأحدث خطوط التصنيع الأوروبية الدقيقة لرفع جودة الإنتاج المحلي في عُمان.',
    },
  },
  {
    year: '2015',
    title: { en: 'Al Qurum Flagship & Whole-Home Spaces', ar: 'معرض القرم وتوسّع المساحات' },
    detail: {
      en: 'Unveiled the architectural material gallery in Shatti Al Qurum, extending Lamasat beyond kitchens to dressing rooms and architectural joinery.',
      ar: 'افتتاح المعرض الرئيسي ومكتبة الخامات في شاطئ القرم، مع التوسع نحو غرف الملابس وأعمال النجارة المعمارية المتكاملة.',
    },
  },
  {
    year: '2021',
    title: { en: 'Al Mouj Design Gallery', ar: 'افتتاح معرض الموج مسقط' },
    detail: {
      en: 'Opened a second daylight showroom serving waterfront communities, collaborative architects, and private villa builders across Muscat.',
      ar: 'إطلاق المعرض الثاني في الموج مسقط لخدمة المجمعات الساحلية والمكاتب الهندسية ومُلّاك الفلل الخاصة.',
    },
  },
  {
    year: 'Today',
    title: { en: 'A Second Generation of Quiet Craft', ar: 'فصل جديد من الحرفية الهادئة' },
    detail: {
      en: 'Over 1,400 bespoke kitchens and residences delivered throughout Oman—continuing with architectural modesty, precision, and enduring care.',
      ar: 'أكثر من ١٬٤٠٠ منزل ومشروع منجز في أنحاء السلطنة، مع استمرار الالتزام بذات الدقّة والهدوء والرعاية بعد التسليم.',
    },
  },
];

export const SHOWROOMS: Showroom[] = [
  {
    id: 'qurum',
    index: '01',
    name: { en: 'Al Qurum Flagship Showroom', ar: 'معرض شاطئ القرم الرئيسي' },
    role: { en: 'Primary Gallery & Material Library', ar: 'المعرض الرئيسي ومكتبة الخامات' },
    district: { en: 'Shatti Al Qurum, Muscat', ar: 'شاطئ القرم، مسقط' },
    address: {
      en: 'Al Sarooj Street, Way 3018, Building 42 · Shatti Al Qurum, Muscat, Oman',
      ar: 'شارع الصاروج، سكة ٣٠١٨، مبنى ٤٢ · شاطئ القرم، مسقط، سلطنة عُمان',
    },
    hoursWeekday: {
      en: 'Sun – Thu · 09:00 – 13:00 & 16:30 – 20:30',
      ar: 'الأحد – الخميس · ٩:٠٠ ص – ١:٠٠ م و ٤:٣٠ – ٨:٣٠ م',
    },
    hoursSaturday: {
      en: 'Saturday · 10:00 – 18:00',
      ar: 'السبت · ١٠:٠٠ ص – ٦:٠٠ م',
    },
    hoursFriday: {
      en: 'Friday · Closed',
      ar: 'الجمعة · مغلق',
    },
    phone: '+968 2469 4120',
    email: 'qurum@lamasatkitchen.om',
    coordinates: '23.6139° N, 58.4648° E',
    mapUrl: 'https://maps.google.com/?q=Shatti+Al+Qurum+Muscat+Oman',
    note: {
      en: 'Five full-size kitchen installations, comprehensive travertine and wood finish room, and dedicated architect consultation suite.',
      ar: 'يضم خمسة مطابخ عرض بالحجم الكامل، وقاعة متكاملة لعينات الحجر والأخشاب، وغرفة استشارات خاصة للمعماريين.',
    },
  },
  {
    id: 'almouj',
    index: '02',
    name: { en: 'Al Mouj Design Gallery', ar: 'معرض الموج مسقط للتصميم' },
    role: { en: 'Contemporary Collections & Wardrobes', ar: 'المجموعات المعاصرة وغرف الملابس' },
    district: { en: 'Al Mouj Muscat, Seeb', ar: 'الموج مسقط، السيب' },
    address: {
      en: 'The Walk, Pavilion East, Suite 14 · Al Mouj Muscat, Sultanate of Oman',
      ar: 'الممشى، الجناح الشرقي، جناح ١٤ · الموج مسقط، سلطنة عُمان',
    },
    hoursWeekday: {
      en: 'Sun – Thu · 10:00 – 21:00',
      ar: 'الأحد – الخميس · ١٠:٠٠ ص – ٩:٠٠ م',
    },
    hoursSaturday: {
      en: 'Saturday · 10:00 – 20:00',
      ar: 'السبت · ١٠:٠٠ ص – ٨:٠٠ م',
    },
    hoursFriday: {
      en: 'Friday · By Private Appointment',
      ar: 'الجمعة · بموعد خاص مسبق',
    },
    phone: '+968 2453 8840',
    email: 'almouj@lamasatkitchen.om',
    coordinates: '23.6285° N, 58.2584° E',
    mapUrl: 'https://maps.google.com/?q=Al+Mouj+Muscat+Oman',
    note: {
      en: 'Focuses on minimalist sunlit kitchens, bronze-glass dressing systems, and calm waterfront home fit-outs with direct parking.',
      ar: 'يركّز على المطابخ المعاصرة الهادئة، وأنظمة غرف الملابس الزجاجية، وتجهيزات المساكن الساحلية مع مواقف قريبة ومباشرة.',
    },
  },
];
