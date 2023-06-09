import { Post } from '@/models/postModels';

export const postMocks: Post[] = [
  {
    id: 1,
    title: 'Post 1',
    body: 'Post 1 body',
    author: {
      id: 1,
      name: 'Author 1',
    },
  },
  {
    id: 2,
    title: 'Post 2',
    body: 'Post 2 body',
    author: {
      id: 2,
      name: 'Author 2',
    },
  },
  {
    id: 3,
    title: 'Post 3',
    body: 'Post 3 body',
    author: {
      id: 3,
      name: 'Author 3',
    },
  },
  {
    id: 4,
    title: 'Post 4',
    body: 'Post 4 body',
    author: {
      id: 4,
      name: 'Author 4',
    },
  },
];
