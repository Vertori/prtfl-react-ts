export type TechItemType = {
  id: number;
  name: string;
  image: string;
};

export type ProjectType = {
  id: number;
  name: string;
  description: string;
  images: string[];
  tags: string[];
  liveLink: string;
  codeLink: string;
};
