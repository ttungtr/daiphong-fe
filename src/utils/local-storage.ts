// utils/localStorage.util.ts

export class LocalStorageUtil {
  /**
   * Check if window is available (avoid SSR error in Next.js)
   */
  private static isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  /**
   * Set value to localStorage
   */
  static set<T>(key: string, value: T): void {
    if (!this.isBrowser()) return;

    try {
      const serialized = JSON.stringify(value);
      window.localStorage.setItem(key, serialized);
    } catch (error) {
      console.error(`LocalStorage set error (key: ${key})`, error);
    }
  }

  /**
   * Get value from localStorage
   */
  static get<T>(key: string, defaultValue?: T): T | null {
    if (!this.isBrowser()) return defaultValue ?? null;

    try {
      const item = window.localStorage.getItem(key);
      if (!item) return defaultValue ?? null;

      return JSON.parse(item) as T;
    } catch (error) {
      console.error(`LocalStorage get error (key: ${key})`, error);
      return defaultValue ?? null;
    }
  }

  /**
   * Remove key from localStorage
   */
  static remove(key: string): void {
    if (!this.isBrowser()) return;

    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(`LocalStorage remove error (key: ${key})`, error);
    }
  }

  /**
   * Clear all localStorage
   */
  static clear(): void {
    if (!this.isBrowser()) return;

    try {
      window.localStorage.clear();
    } catch (error) {
      console.error('LocalStorage clear error', error);
    }
  }
}
