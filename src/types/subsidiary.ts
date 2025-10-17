export interface Subsidiary {
  id: string;
  name: string;
  slogan: string;
  description: string;
  sector: string;
  logo: string;
  color: string;
  services: string[];
  stats: {
    label: string;
    value: string;
  }[];
  contact: {
    email: string;
    phone: string;
    address: string;
  };
}

export type SubsidiaryId = 'tech' | 'finance' | 'immo' | 'conseil';



