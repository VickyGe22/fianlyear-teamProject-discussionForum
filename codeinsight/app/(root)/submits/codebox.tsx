'use client';

import { useEffect, useRef, useState } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, lineNumbers } from '@codemirror/view'; // Import lineNumbers
import { javascript } from '@codemirror/lang-javascript';
import '../../css/additional-styles/codebox.css'; 


// const CodeBox = () => {
//     const editorRef = useRef<HTMLDivElement | null>(null);
//     const [code, setCode] = useState('');  // 状态用于存储代码

// const handleSubmit = async () => {
//       const response = await fetch('./api/submits', {  
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ codesamples: code })
//       });
  
//       const data = await response.json();
//       console.log(data);
//   };

const CodeBox = ({ code, setCode }: { code: string, setCode: React.Dispatch<React.SetStateAction<string>> }) => {
    const editorRef = useRef(null);

    useEffect(() => {
        if (editorRef.current) {
            const startState = EditorState.create({
                doc: code, // 初始化文档内容
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

            const view = new EditorView({
                state: startState,
                parent: editorRef.current,
            });

            return () => {
                view.destroy();
            };
        }
    }, [setCode]);

    return (
        <div className="cm-editor" ref={editorRef}></div>
    );
};

export default CodeBox;
