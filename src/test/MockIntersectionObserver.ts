import { vi } from 'vitest';

export class MockIntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];

  callback: IntersectionObserverCallback;
  options?: IntersectionObserverInit;
  
  constructor(
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ) {
    this.callback = callback;
    this.options = options;
  }

  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn(() => []);
}

export function stubIntersectionObserver() {
  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
}