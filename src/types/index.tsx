export type workNode = {
  title: string;
  web: string;
  time: string;
  post?: string;
  description: string;
  projects?: Project[];
};

export type Project = {
  name: string;
  period: string;
  tools: string[];
  description: string;
};

export type IHistory = {
  title: string;
  time: string;
  description: string;
  web: string;
};

export type educationNode = {
  title: string;
  type: string;
  web: string;
  time: string;
  post?: string;
  description: string;
};

export type IMenu = {
  to: string;
  name: string;
  class?: string;
  click?: () => void;
};

export type ContactData = {
  name: string;
  email: string;
  message: string;
};

export type ModalProps = {
  title: string;
  description: string;
  type: string;
  children?: JSX.Element | JSX.Element[];
};

export type IOther = {
  title: string;
  post: string;
  time: string;
  description: string;
  web: string;
};

export type ISkill = {
  name: string;
  level: string;
};
