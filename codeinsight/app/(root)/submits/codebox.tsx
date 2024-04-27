// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { EditorState } from '@codemirror/state';
// import { EditorView, lineNumbers } from '@codemirror/view'; // Import lineNumbers
// import { javascript } from '@codemirror/lang-javascript';
// import '../../css/additional-styles/codebox.css'; 


// const CodeBox = ({ code, setCode }: { code: string, setCode: React.Dispatch<React.SetStateAction<string>> }) => {

//     const editorRef = useRef(null);//创建一个ref，指向编辑器的 DOM 元素
//     const viewRef = useRef(null); //创建一个ref，指向编辑器的实例

//     useEffect(() => {
//         if (editorRef.current && !viewRef.current) {      //检查是否存在，即确保 DOM 元素已经被渲染
//             const startState = EditorState.create({
//                 doc: code, // 初始化文档内容
//                 extensions: [
//                     javascript(),
//                     EditorView.lineWrapping,
//                     lineNumbers(),
//                     EditorView.updateListener.of(update => {
//                         if (update.docChanged) {
//                             setCode(update.state.doc.toString());
//                         }
//                     })
//                 ],
//             });

//             const view = new EditorView({
//                 state: startState,
//                 parent: editorRef.current,
//             });

//             return () => {
//                 view.destroy();
//             };
//         }
//     }, [setCode]);

//     return (
//         <div className="cm-editor" ref={editorRef}></div>
//     );
// };

// export default CodeBox;

'use client';
import { useEffect, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, lineNumbers } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import '../../css/additional-styles/codebox.css'; 

const CodeBox = ({ code, setCode }: { code: string, setCode: (code: string) => void }) => {
    const editorRef = useRef(null);
    const viewRef = useRef(null);

    // 初始化编辑器
    useEffect(() => {
        if (!editorRef.current) return;

        const startState = EditorState.create({
            doc: code,
            extensions: [
                javascript(),
                EditorView.lineWrapping,
                lineNumbers(),
                EditorView.updateListener.of(update => {
                    if (update.docChanged) {
                        setCode(update.state.doc.toString());
                    }
                })
            ],
        });

        viewRef.current = new EditorView({
            state: startState,
            parent: editorRef.current,
        });

        return () => {
            (viewRef.current as EditorView | null)?.destroy();
        };
    }, []);

    // 监听 code 属性的变化并更新编辑器状态
    useEffect(() => {
        if (!viewRef.current) return;

        const currentState = (viewRef.current as EditorView).state;
        const transaction = currentState.update({
            changes: { from: 0, to: currentState.doc.length, insert: code }
        });
        (viewRef.current as EditorView).dispatch(transaction);
    }, [code]);

    return (
        <div ref={editorRef} className="cm-editor"></div>
    );
};

export default CodeBox;



