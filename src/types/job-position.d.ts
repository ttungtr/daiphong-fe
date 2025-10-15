import { IImage } from "./image";

interface ISection {
  title: string;
  subTitle?: string;
  items: string[];
}

export type TJobPosition = {
  id: string;
  title: string;
  sections: ISection[];
  images: IImage[];
  quantity: string;
  salary: string;
};
