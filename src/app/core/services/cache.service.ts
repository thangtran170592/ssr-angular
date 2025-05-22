import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService<T> {
  private cacheSignal = signal<Map<string, { data: T; timestamp: number }>>(
    new Map<string, { data: T; timestamp: number }>()
  );
  private readonly CACHE_DURATION = 5000; // 5 phút

  set(key: string, data: T): void {
    const currentCache = this.cacheSignal();
    currentCache.set(key, {
      data,
      timestamp: Date.now(),
    });
    this.cacheSignal.set(currentCache);
  }

  get(key: string): T | null {
    const currentCache = this.cacheSignal();
    const cached = currentCache.get(key);
    if (!cached) {
      return null;
    }
    const isExpired = Date.now() - cached.timestamp > this.CACHE_DURATION;
    if (isExpired) {
      currentCache.delete(key);
      this.cacheSignal.set(currentCache);
      return null;
    }

    return cached.data;
  }

  clear(key: string): void {
    const currentCache = this.cacheSignal();
    currentCache.delete(key);
    this.cacheSignal.set(currentCache);
  }

  clearExpired(): void {
    const now = Date.now();
    const currentCache = this.cacheSignal();
    this.cacheSignal().forEach((entry, key) => {
      if (now - entry.timestamp > this.CACHE_DURATION) {
        currentCache.delete(key);
      }
    });
    this.cacheSignal.set(currentCache);
  }

  clearAll(): void {
    const currentCache = this.cacheSignal();
    currentCache.clear();
    this.cacheSignal.set(currentCache);
  }
}
