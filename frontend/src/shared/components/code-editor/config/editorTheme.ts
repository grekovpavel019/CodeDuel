import { EditorView } from "codemirror";
import { 
    HighlightStyle
 } from "@codemirror/language";

import { tags } from "@lezer/highlight"

export const editorTheme = EditorView.theme({
    "&": {
        backgroundColor: "var(--editor-bg)",
    },

    "&.cm-focused": {
        outline: "none",
    },

    ".cm-content": {
        fontFamily: "var(--font-code)",
        fontSize: "1rem",
        color: "var(--editor-text)",
    },

    ".cm-scroller": {
        scrollbarColor: "var(--editor-scrollbar-controls) transparent"
    },

    ".cm-gutters": {
        minWidth: "30px",

        justifyContent: "end",

        color: "var(--editor-gutter-text)",
        fontFamily: "var(--font-code)",
        fontSize: "0.8rem",

        backgroundColor: "var(--editor-gutter-bg)",
    },

    ".cm-activeLineGutter": {
        backgroundColor: "transparent",

        fontWeight:" bold",
        fontSize: "1rem"
    },

    ".cm-cursor": {
        borderLeft: "1.2px solid var(--editor-text)",
    },

    ".cm-activeLine": {
        backgroundColor: "var(--editor-active-line)"
    },

    ".cm-layer": {
        opacity: "0.3"
    }
   
});

export const editorHighlightStyle = HighlightStyle.define([
    {
        tag: tags.keyword,
        color: "var(--editor-syntax-keyword)",
    },
    {
        tag: tags.string,
        color: "var(--editor-syntax-string)",
    },
    {
        tag: tags.number,
        color: "var(--editor-syntax-number)",
    },
    {
        tag: tags.comment,
        color: "var(--editor-syntax-comment)",
    },
    {
        tag: tags.function(tags.variableName),
        color: "var(--editor-syntax-function)",
    },
    {
        tag: tags.variableName,
        color: "var(--editor-syntax-variable)",
    },
    {
        tag: tags.typeName,
        color: "var(--editor-syntax-type)",
    },
    {
        tag: tags.operator,
        color: "var(--editor-syntax-operator)",
    },
]);