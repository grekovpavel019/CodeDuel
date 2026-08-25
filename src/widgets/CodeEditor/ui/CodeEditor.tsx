import React, { type FC, useRef, useEffect } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap, lineNumbers } from "@codemirror/view";
import { python } from "@codemirror/lang-python";
import { undo, history, insertTab, redo } from "@codemirror/commands";
import { basicSetup } from "@uiw/react-codemirror";

const CodeEditor: FC = (): React.JSX.Element => {

    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const state = EditorState.create({
            doc: "Hello world",
            extensions: [
                lineNumbers(), 
                python(),
                basicSetup()
            ]
        });

        const view = new EditorView({
            state,
            parent: containerRef.current!
        })

        return () => {
            view.destroy();
        }
    }, [])


    return (
        <div 
            ref={containerRef}
        >

        </div>
    );
};

export default CodeEditor;