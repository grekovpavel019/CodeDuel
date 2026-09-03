import React, { type FC, useRef, useEffect, type Dispatch, type SetStateAction } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";

import { DEFAULT_EDITOR_EXTENSIONS, CASUAL_EDITOR_EXTENSIONS } from "../config/editorExtensions";

import styles from "./CodeEditor.module.scss"

type CodeEditorProps = { 
    code: string;
    setCode: Dispatch<SetStateAction<string>>;

    casualMode: boolean;
}

const CodeEditor: FC<CodeEditorProps> = (props: CodeEditorProps): React.JSX.Element => {

    const {
        casualMode,
        code,
        setCode
    } = props;

    // Ссылка на DOM-контейнер, в который будет монтироваться CodeMirror
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Инициализируем CodeMirror после монтирования DOM-контейнера 
    // (после получения ref ссылки на нужный dom-element)
    useEffect(() => {

    // Создаём состояние редактора - информация о том, что происходит в codeMirror
        const state: EditorState = EditorState.create({
            doc: code, // содержимое редактора
            extensions: [       // расширения редактора
                casualMode ? 
                CASUAL_EDITOR_EXTENSIONS : 
                DEFAULT_EDITOR_EXTENSIONS,

                keymap.of([
                    {
                        key: "Ctrl-s",
                        run() { return true; } // отменим поведение браузера по умолчанию
                    }
                ]),

                EditorView.updateListener.of((update) => {
                    if (!update.docChanged) return;
                        
                    setCode(update.state.doc.toString());
                    
                })
            ]
        });

        // проверяем на то, что dom элемент создался 
        // и нам есть куда монтировать компонент
        if (!containerRef.current) return;

        // Создаём представление редактора и монтируем его в DOM-контейнер
        const view: EditorView = new EditorView({
            state,
            parent: containerRef.current,
            
        });

        // Уничтожаем CodeMirror при размонтировании компонента
        return () => {
            view.destroy();
        }
    }, [casualMode])


    return (
        <div 
            className={`${styles.editor}`}
            ref={containerRef}
        />
    );
};

export default CodeEditor;