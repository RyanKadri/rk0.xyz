import * as monaco from "monaco-editor";
import React, { MutableRefObject, useEffect, useRef } from "react";

declare global {
    interface Window {
        MonacoEnvironment: any
    }
}

interface Props {
    initialCode: string;
    className?: string;
    editorRef: MutableRefObject<monaco.editor.IStandaloneCodeEditor | null>;
    saveKey?: string;
    height?: number;
}

self.MonacoEnvironment = {
    getWorkerUrl: function(moduleId, label) {
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

export function CodeEditor(props: Props) {
    const editorContainer = useRef<HTMLDivElement>(null); 
    useEffect(() => {
        if(editorContainer.current) {
            const saveKey = props.saveKey;
            const storedCode = saveKey ? localStorage.getItem(saveKey) : null;

            const editor = monaco.editor.create(editorContainer.current, {
                value: storedCode ? JSON.parse(storedCode) : props.initialCode,
                language: 'javascript',
                scrollBeyondLastLine: false,
                codeLens: false,
                minimap: {
                    enabled: false
                }
            });
            props.editorRef.current = editor;
            if(saveKey) {
                editor.getModel()!.onDidChangeContent(() => {
                    localStorage.setItem(saveKey, JSON.stringify(editor.getValue()));
                })
            }
        }
    }, [ ])

    return (
        <div className={ props.className || "" } 
             style={ { height: props.height || 400 }} 
             ref={ editorContainer } />
    )
}