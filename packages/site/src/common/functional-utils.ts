import { useEffect, useState } from "react";

export function identity<T>(input: T): T {
  return input;
}

export function assertExists<T>(obj: T | undefined | null, failMessage: string): T {
  if (obj === undefined || obj === null) {
    throw new Error(failMessage);
  } else {
    return obj;
  }
}

export function wrap(str: string) {
  return str.replace(/\s+/g, " ");
}

export function noop() {}

export function arrayReplace<T>(arr: T[], i: number, replacement: T): T[] {
  const newArray = arr.slice();
  newArray[i] = replacement;
  return newArray;
}

export function arrayRemove<T>(arr: T[], i: number): T[] {
  const newArray = arr.slice();
  newArray.splice(i, 1);
  return newArray;
}

export function useClientSideValue<T>(value: () => T, serverSidePlaceholder: T): T {
  const [val, setVal] = useState(serverSidePlaceholder);
  useEffect(() => {
    setVal(value());
  }, []);
  return val;
}

export function deepEquals(a: unknown, b: unknown) {
  if (a === b) {
    return true;
  } else if (Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  } else if (typeof a === "object" && typeof b === "object") {
    if (a === null || b === null) {
      return false;
    } else if (Array.isArray(a) || Array.isArray(b)) {
      if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) {
        return false;
      } else {
        for (let i = 0; i < a.length; i++) {
          if (!deepEquals(a[i], b[i])) {
            return false;
          }
        }
        return true;
      }
    } else {
      if (!deepEquals(Object.keys(a), Object.keys(b))) {
        return false;
      } else {
        for (const key in a) {
          if (!deepEquals(a[key], b[key])) {
            return false;
          }
        }
        return true;
      }
    }
  } else {
    return false;
  }
}
