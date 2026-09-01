import { editorTheme, editorHighlightStyle } from './editorTheme';
import { type Extension, EditorState } from "@codemirror/state";

import {
    keymap,
    lineNumbers,
    highlightActiveLine,
    highlightActiveLineGutter,
    highlightSpecialChars,
    drawSelection,
    dropCursor,
    rectangularSelection,
    crosshairCursor,
} from "@codemirror/view";

import {
    bracketMatching,
    indentOnInput,
    syntaxHighlighting,
} from "@codemirror/language";

import {
    closeBrackets,
    autocompletion,
    closeBracketsKeymap,
    completionKeymap,
} from "@codemirror/autocomplete"

import {
    defaultKeymap,
    history,
    historyKeymap,
    indentWithTab,
} from "@codemirror/commands";

import {
    searchKeymap,
} from "@codemirror/search";

import { python } from "@codemirror/lang-python";

/**
 * Базовая конфигурация редактора.
 *
 * Эти extensions используются независимо от выбранного режима.
 * Сюда помещаем основные возможности CodeMirror:
 * история изменений, подсветка синтаксиса, номера строк,
 * работа со скобками, выделение и горячие клавиши.
 */

const MAINTENANCED_LANGUAGES: Extension[] = [
    python(),
]

export const DEFAULT_EDITOR_EXTENSIONS: Extension[] = [

    editorTheme,

    // Язык программирования редактора.
    ...MAINTENANCED_LANGUAGES,

    // Показываем номера строк слева от редактора.
    lineNumbers(),

    // Подсвечиваем специальные и непечатаемые символы.
    highlightSpecialChars(),

    // Добавляем историю изменений для undo/redo.
    history(),

    // Используем собственное отображение курсора и выделения.
    drawSelection({
        
    }),

    // Показываем курсор при перетаскивании текста в редактор.
    dropCursor(),

    // Разрешаем использовать несколько выделений одновременно.
    EditorState.allowMultipleSelections.of(true),

    // Автоматически корректируем отступы при вводе.
    indentOnInput(),

    // Включаем стандартную подсветку синтаксиса.
    syntaxHighlighting(editorHighlightStyle),

    // Подсвечиваем парные скобки.
    bracketMatching(),

    // Автоматически закрываем скобки и кавычки.
    closeBrackets(),

    // Позволяем выделять прямоугольные области текста.
    rectangularSelection(),

    // Меняем курсор при использовании специального сочетания клавиш.
    crosshairCursor(),

    // Подсвечиваем строку, в которой находится курсор.
    highlightActiveLine(),

    // Подсвечиваем номер текущей строки.
    highlightActiveLineGutter(),

    // Подключаем стандартные сочетания клавиш CodeMirror.
    keymap.of([
        // Обработка закрывающих скобок.
        ...closeBracketsKeymap,

        // Основные сочетания клавиш редактора.
        ...defaultKeymap,

        // Сочетания клавиш для поиска.
        ...searchKeymap,

        // Сочетания клавиш для undo/redo.
        ...historyKeymap,

        indentWithTab
    ]),
];

/**
 * Конфигурация Casual Mode.
 *
 * Содержит все возможности стандартного режима
 * и дополнительно может включать функции,
 * которые помогают пользователю писать код.
 */
export const CASUAL_EDITOR_EXTENSIONS: Extension[] = [
    ...DEFAULT_EDITOR_EXTENSIONS,

     // Включаем систему автодополнения кода.
    autocompletion(),

    // Добавляем горячие клавиши для управления подсказками.
    keymap.of([
        ...completionKeymap,
    ]),
];