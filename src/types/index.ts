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
  details?: string[];
};

export type IMenu = {
  to: string;
  type?: string;
  name: string;
  active?: boolean;
  click?: () => void;
};

export type ContactData = {
  name: string;
  email: string;
  message: string;
};

export type ModalProps = {
  title: string;
  description: string | string[] | undefined;
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

export type title = {
  name: string;
};

export type HistoryType = {
  type: string;
};

export type LangType = {
  type?: string;
};
