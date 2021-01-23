import { editor as mEditor } from 'monaco-editor/esm/vs/editor/editor.api';
// import { editor as mEditor } from "monaco-editor";
import React, { MutableRefObject, useEffect, useRef } from "react";

declare global {
    interface Window {
        MonacoEnvironment: any
    }
}

interface Props {
    initialCode: string;
    className?: string;
    editorRef?: MutableRefObject<mEditor.IStandaloneCodeEditor | null>;
    onCodeChanged?: (code: string) => void;
    saveKey?: string;
    height?: number | string;
    language: "javascript" | "html" | "css" | "json"
}

self.MonacoEnvironment = {
    getWorkerUrl: function(_, label) {
        if (label === 'json') {
        return '/json.worker.js';
        }
        if (label === 'css') {
        return '/css.worker.js';
        }
        if (label === 'html') {
        return '/html.worker.js';
        }
        if (label === 'typescript' || label === 'javascript') {
        return '/ts.worker.js';
        }
        return '/editor.worker.js';
    },
};

export default function CodeEditor(props: Props) {
    const editorContainer = useRef<HTMLDivElement>(null);
    const internalEditor = useRef<mEditor.IStandaloneCodeEditor>();
    useEffect(() => {
        if(editorContainer.current) {
            const saveKey = props.saveKey;
            const storedCode = saveKey ? localStorage.getItem(saveKey) : null;

            if(internalEditor.current) {
                internalEditor.current.dispose();
            }

            const editor = mEditor.create(editorContainer.current, {
                value: storedCode ? JSON.parse(storedCode) : props.initialCode,
                language: props.language,
                scrollBeyondLastLine: false,
                codeLens: false,
                minimap: {
                    enabled: false
                },
                automaticLayout: true
            });

            internalEditor.current = editor;
            if(props.editorRef) {
                props.editorRef.current = editor;
            }
            if(saveKey || props.onCodeChanged) {
                editor.getModel()!.onDidChangeContent(() => {
                    const text = editor.getValue();
                    if(saveKey) {
                        localStorage.setItem(saveKey, JSON.stringify(editor.getValue()));
                    }
                    props.onCodeChanged?.(text);
                })
            }
        }
    }, [ props.initialCode, props.language ])

    return (
        <div className={ props.className || "" } 
             style={ { height: props.height || 400 }} 
             ref={ editorContainer } />
    )
}