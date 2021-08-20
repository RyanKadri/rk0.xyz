import Editor from '@monaco-editor/react';
import React from "react";

declare global {
    interface Window {
        MonacoEnvironment: any
    }
}

interface Props {
    initialCode: string;
    className?: string;
    onCodeChanged?: (code: string) => void;
    saveKey?: string;
    height?: number | string;
    language: "javascript" | "html" | "css" | "json";
    path: string;
}

export default function CodeEditor(props: Props) {
    const saveKey = props.saveKey;
    // const storedCode = saveKey ? localStorage.getItem(saveKey) : null;
    // const code = storedCode ? JSON.parse(storedCode) : props.initialCode;
    const code = props.initialCode;

    const onUpdate = (code?: string) => {
        if(code !== undefined && (saveKey || props.onCodeChanged)) {
            if(saveKey) {
                localStorage.setItem(saveKey, JSON.stringify(code));
            }
            props.onCodeChanged?.(code);
        }
    }

    return (
            <Editor theme="vs-dark"
                    path={ props.path } 
                    key={ props.path }
                    defaultValue={ code }
                    defaultLanguage={ props.language }
                    onChange={ onUpdate }
                    options={{
                        scrollBeyondLastLine: false,
                        codeLens: false,
                        minimap: {
                            enabled: false
                        },
                        automaticLayout: true
                    }} />
    )
}