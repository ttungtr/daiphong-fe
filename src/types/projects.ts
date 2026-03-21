export interface IProject {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  location: string;
  owner: string;
  productConsumptionCapacity: string;
  slug: string;
  category: string;
  images: string[];
}

export interface IProjectsPageData {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
  heroSection: {
    title: string;
    description: string;
  };
  projects: IProject[];
  subProjects: IProject[];
}
