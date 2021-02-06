import { createHash } from 'crypto';

export function hash(word: string): string {
  const hasher = createHash('SHA256');
  hasher.update(word);
  return hasher.digest('base64');
}
