// every app types
export type projectType = {
  id?: string;
  link: string;
  title: string;
  img: string;
  description: string;
  role: string;
  startDate: string;
  endDate: string;
  tech: string[];
};

export type projectsType = projectType[];
