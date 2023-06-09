export type Author = {
  id: number;
  name: string;
};

export type Post = {
  id: number;
  title: string;
  body: string;
  author: Author;
};
