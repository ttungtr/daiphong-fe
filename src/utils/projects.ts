import { projectsData } from "@/data/projects";
import { IProject } from "@/types";

export const getProjectBySlug = (slug: string): IProject | undefined => {
  return projectsData.projects.find((project) => project.slug === slug);
};

export const getProjectsByCategory = (category: string): IProject[] => {
  if (category === "tat-ca" || category === "all") return projectsData.projects;

  const categoryMap: Record<string, string> = {
    "cong-nghiep": "industrial",
    "khach-san": "hotel",
    "biet-thu": "villa",
    "thuong-mai": "commercial",
    "giao-duc": "education",
    "van-phong": "office",
    "ngan-hang": "banking",
  };

  const mappedCategory = categoryMap[category] || category;
  return projectsData.projects.filter(
    (project) => project.category === mappedCategory
  );
};

export const getRelatedProjects = (
  currentProject: IProject,
  limit: number = 3
): IProject[] => {
  return projectsData.projects
    .filter(
      (project) =>
        project.id !== currentProject.id &&
        project.category === currentProject.category
    )
    .slice(0, limit);
};

export const getProjectStructuredData = (project: IProject) => {
  return {
    "@context": "https://schema.org",
    "@type": "ConstructionProject",
    name: project.title,
    description: project.workScope,
    location: {
      "@type": "Place",
      address: project.location,
    },
    contractor: {
      "@type": "Organization",
      name: "Đại Phong Corp",
      url: "https://philongcorp.vn",
    },
    budget: project.contractValue,
    startDate: project.duration.split(" ~ ")[0],
    endDate: project.duration.split(" ~ ")[1] || "Đang thực hiện",
  };
};

export const getProjectsPageStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Đại Phong Corp",
    description:
      "Công ty chuyên thi công hệ thống MEP (điện, nước, điều hòa) với hơn 100 dự án thành công",
    url: "https://philongcorp.vn",
    sameAs: [
      "https://facebook.com/people/Phi-Long-Corp/61577256883038/",
      "https://linkedin.com/company/philongcorp",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Công trình đã thực hiện",
      itemListElement: projectsData.projects.map((project, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: project.title,
          description: project.workScope,
        },
      })),
    },
  };
};
