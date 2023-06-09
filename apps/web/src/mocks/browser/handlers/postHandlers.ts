import { DefaultBodyType, RequestHandler, rest } from 'msw';

import { postMocks } from '@/mocks/data';
import { Post } from '@/models/postModels';

export const postHandlers: RequestHandler[] = [
  rest.get<DefaultBodyType, never, Post[]>('http://localhost:3000/api/posts', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(postMocks))
  ),
];
