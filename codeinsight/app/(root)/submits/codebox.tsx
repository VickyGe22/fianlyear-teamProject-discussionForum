'use client';

import { useEffect, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, lineNumbers } from '@codemirror/view'; // Import lineNumbers
import { javascript } from '@codemirror/lang-javascript';
import '../../css/additional-styles/codebox.css'; 


const CodeBox = () => {
    const editorRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    if (editorRef.current) {
      const startState = EditorState.create({
        // doc: 'Paste your code here',
        extensions: [
          javascript(),
          EditorView.lineWrapping, 
          lineNumbers(), // Use the lineNumbers extension
          EditorView.updateListener.of(update => {
            if (update.docChanged) {
              // Handle document changes
              const docContent = update.state.doc.toString();
              console.log(docContent);
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
  }, []);

  return <div className="cm-editor" ref={editorRef}></div>;


};

export default CodeBox;

