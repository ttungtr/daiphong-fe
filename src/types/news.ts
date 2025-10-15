import { ENewCategory } from "@/enum/new";

export interface INew {
  id: string;
  title: string;
  images: string[];
  createdAt: string;
  slug: string;
  category: ENewCategory;
  tags: string[];
  paragraphs: string[];
  order: number;
}
