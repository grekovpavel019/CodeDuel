import React, { type FC } from "react";

import styles from "./CodeBlock.module.scss";



type CodeBlockProps = {
    children: string;
}

const CodeBlock: FC<CodeBlockProps> = (props: CodeBlockProps): React.JSX.Element => {
    
    const {
        children,
    } = props;
    
    return (
        <code
            className={styles.codeBlock}
        >
            {children.replace(/\\n/g, "12")}
        </code>
    );
};

export default CodeBlock;