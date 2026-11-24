export type Language = 'en' | 'ar';

export type PageId =
  | 'home'
  | 'kitchens'
  | 'spaces'
  | 'projects'
  | 'about'
  | 'contact';

export interface LocalizedText {
  en: string;
  ar: string;
}

export type KitchenCategory = 'all' | 'timber' | 'stone' | 'lacquer' | 'courtyard';

export interface MaterialSwatch {
  name: LocalizedText;
  color: string;
  finish: LocalizedText;
}

export interface KitchenCollection {
  id: string;
  code: string;
  name: LocalizedText;
  subtitle: LocalizedText;
  category: Exclude<KitchenCategory, 'all'>;
  categoryLabel: LocalizedText;
  image: string;
  aspect?: 'wide' | 'standard';
  summary: LocalizedText;
  description: LocalizedText;
  primaryMaterials: LocalizedText;
  cabinetrySystem: LocalizedText;
  worktop: LocalizedText;
  hardware: LocalizedText;
  leadTime: LocalizedText;
  swatches: MaterialSwatch[];
}

export interface SpaceItem {
  id: string;
  index: string;
  title: LocalizedText;
  discipline: LocalizedText;
  image: string;
  description: LocalizedText;
  detailNote: LocalizedText;
  applications: { en: string[]; ar: string[] };
}

export type ProjectCategory = 'all' | 'villa' | 'waterfront' | 'collaborations';

export interface ProjectItem {
  id: string;
  title: LocalizedText;
  location: LocalizedText;
  year: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: LocalizedText;
  image: string;
  featured?: boolean;
  architect: LocalizedText;
  scope: LocalizedText;
  materials: LocalizedText;
  area: LocalizedText;
  story: LocalizedText;
  notes: LocalizedText;
}

export interface Showroom {
  id: 'qurum' | 'almouj';
  index: string;
  name: LocalizedText;
  role: LocalizedText;
  district: LocalizedText;
  address: LocalizedText;
  hoursWeekday: LocalizedText;
  hoursSaturday: LocalizedText;
  hoursFriday: LocalizedText;
  phone: string;
  email: string;
  coordinates: string;
  mapUrl: string;
  note: LocalizedText;
}

export interface MaterialLibraryItem {
  name: LocalizedText;
  origin: LocalizedText;
  finish: LocalizedText;
  tone: string;
  application: LocalizedText;
}

export interface Milestone {
  year: string;
  title: LocalizedText;
  detail: LocalizedText;
}

export interface DetailModalData {
  kind: 'kitchen' | 'project';
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  extraNote?: string;
  specs: { label: string; value: string }[];
  swatches?: MaterialSwatch[];
  enquirySubject: string;
}
