import React, { type FC } from "react";

type CodeBlockProps = {
    children: string;
}

const CodeBlock: FC<CodeBlockProps> = (props: CodeBlockProps): React.JSX.Element => {
    
    const {
        children,
    } = props;
    
    return (
        <code>
            {children}
        </code>
    );
};

export default CodeBlock;