import { setupServer } from 'msw/node';

import { postHandlers } from '@/mocks/server';

export const server = setupServer(...postHandlers);
