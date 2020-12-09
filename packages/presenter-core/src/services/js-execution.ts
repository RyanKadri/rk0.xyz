export type LoggedConsoleMessage = {
    type: string;
    time: Date;
    message: string;
}

export type EvalResult = EvalSuccess | EvalError;

export interface LoggedExecutionResult {
    result: EvalResult;
    consoleMessages: LoggedConsoleMessage[];
}

interface EvalSuccess {
    status: "success";
    result: any;
}

interface EvalError {
    status: "parse-error" | "call-error";
    error: string;
}

function makeInterceptingConsole() {
    const loggedCalls: LoggedConsoleMessage[] = []
    const consoleProxy = new Proxy(console, {
        get(target, method) { return (message) => {
            if(typeof method === "string" && typeof target[method] === "function") {
                loggedCalls.push({ message, type: method, time: new Date() })
            }
        } }
    })
    return {
        console: consoleProxy,
        getLoggedCalls() { return loggedCalls }
    }
}

function withInterceptingConsole<T>(func: () => T): { result: T, consoleMessages: LoggedConsoleMessage[] } {
    const oldConsole = window.console;
    const { console, getLoggedCalls } = makeInterceptingConsole();
    window.console = console;
    try { 
        return { result: func(), consoleMessages: getLoggedCalls() };
    } 
    catch(e) {
        console.error(e) 
        throw new Error("Your intercepting function should not throw!") 
    }
    finally { window.console = oldConsole }
}

export function executeFunction(code: string, targetFunction: string, paramString = ""): LoggedExecutionResult {
    return withInterceptingConsole(() => (
        (0, eval)(`(function() {
            try {
                ${code};
            } catch(e) {
                return { status: "parse-error", error: e.message }
            }
            try {
                return { status: "success", result: ${targetFunction}(${paramString}) };
            } catch(e) {
                return { status: "call-error", error: e.message }
            }
        })()`)
    ))
}

export function handledEval(code: string) {
    try {
        return [true, eval(code)];
    } catch {
        return [false, null];
    }
}