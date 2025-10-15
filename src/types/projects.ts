export interface IProject {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  location: string;
  scale: string;
  contractValue: string;
  duration: string;
  workScope: string;
  images: string[];
  slug: string;
  category:
    | "khach-san"
    | "biet-thu"
    | "thuong-mai"
    | "giao-duc"
    | "van-phong"
    | "ngan-hang"
    | "khu-dan-cu"
    | "cong-nghiep"
    | "chung-cu";
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
  categories: {
    id: string;
    name: string;
    count: number;
    image: string;
    link: string;
  }[];
  mainProject: IProject;
  subProjects: IProject[];
}
