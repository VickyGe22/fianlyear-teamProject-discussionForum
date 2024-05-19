//最初版
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



//黑色版
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from "@uiw/codemirror-theme-dracula";


export default function Editor({ code, setCode }: { code: string, setCode: (code: string) => void }) {


    return (
            <div className="editor_container">
                    <CodeMirror
                        value={code}
                        height="200px"
                        theme={dracula}
                        onChange={(value) => {
                            setCode(value); // Update code state with the new value
                            // onChange(value); // Call the onChange function with the new value
                        }}
                    />
            </div>
    );
}

