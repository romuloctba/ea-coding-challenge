import { Fetcher } from 'swr';

export function getFetcher<T>(): Fetcher<T, string> {
  return (...args) => fetch(...args).then((res) => res.json());
}
