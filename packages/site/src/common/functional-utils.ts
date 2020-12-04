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