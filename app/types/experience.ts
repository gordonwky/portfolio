export type Experience =  {
    role: string;
    company?: string;
    companyLogo?: string;
    period: string;
    description: string[];
  }
// types/experience.ts
export type ProjectCardProps =
  | {
      loading: true;
    }
  | {
      title: string;
      description: string;
      imageUrl: string;
      technologies: string[];
      pageUrl: string;
      source: string;
      loading?: false;

    };
