import { setupWorker } from 'msw';

import { postHandlers } from '@/mocks/browser';

export const browser = setupWorker(...postHandlers);
