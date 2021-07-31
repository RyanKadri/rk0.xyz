import { useEffect, useState } from "react";

export function identity<T>(input: T): T {
    return input;
}

export function assertExists<T>(obj: T | undefined | null, failMessage: string): T {
    if(obj === undefined || obj === null) {
        throw new Error(failMessage);
    } else {
        return obj;
    }
}

export function wrap(str: string) {
    return str.replace(/\s+/g, " ");
}

export function noop() {
    
}

export function arrayReplace<T>(arr: T[], i: number, replacement: T): T[] {
    const newArray = arr.slice();
    newArray[i] = replacement;
    return newArray
}

export function arrayRemove<T>(arr: T[], i: number): T[] {
    const newArray = arr.slice();
    newArray.splice(i, 1);
    return newArray;
}

export function useClientSideValue<T>(value: () => T, serverSidePlaceholder: T): T {
    const [ val, setVal ] = useState(serverSidePlaceholder);
    useEffect(() => {
        setVal(value());
    }, []);
    return val;
} 