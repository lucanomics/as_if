export function isLocalStorageAvailable(): boolean {
  if (typeof window === 'undefined' || !window.localStorage) {
    return false
  }

  try {
    const key = '__as_if_local_storage_probe__'
    window.localStorage.setItem(key, key)
    window.localStorage.removeItem(key)
    return true
  } catch {
    return false
  }
}

export function readLocalStorage<T>(key: string, fallback: T): T {
  if (!isLocalStorageAvailable()) {
    return fallback
  }

  try {
    const raw = window.localStorage.getItem(key)
    if (!raw) {
      return fallback
    }

    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

export function writeLocalStorage<T>(key: string, value: T): void {
  if (!isLocalStorageAvailable()) {
    return
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Fail silently to keep UI stable when storage is unavailable/full.
  }
}

export function removeLocalStorage(key: string): void {
  if (!isLocalStorageAvailable()) {
    return
  }

  try {
    window.localStorage.removeItem(key)
  } catch {
    // Fail silently.
  }
}
