import { APIEvent, json } from 'solid-start/api';

export async function GET({ params }: APIEvent) {
  return json({ posts: [] });
}
