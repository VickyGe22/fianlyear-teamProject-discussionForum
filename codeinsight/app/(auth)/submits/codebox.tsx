
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

  // return <div className="cm-theme" ref={editorRef}></div>;
  return <div className="cm-editor" ref={editorRef}></div>;


};

export default CodeBox;




// use placeholder, but show below the lines.
// import { useEffect, useRef } from 'react';
// import { EditorState } from '@codemirror/state';
// import { javascript } from '@codemirror/lang-javascript';
// import { EditorView, lineNumbers } from '@codemirror/view';

// const CodeBox = ({ placeholder = "Paste your code here..." }) => {
//   const editorRef = useRef<HTMLDivElement>(null); // Specify the type for editorRef
//   const placeholderRef = useRef<HTMLDivElement | null>(null); // Correctly typed with an initial value

//   useEffect(() => {
//     if (editorRef.current) {
//       const startState = EditorState.create({
//         extensions: [
//           javascript(),
//           lineNumbers(),
//           EditorView.updateListener.of(update => {
//             if (update.docChanged) {
//               const docContent = update.state.doc.toString();
//               console.log(docContent);
//               // Safely access placeholderRef.current
//               if (placeholderRef.current) {
//                 placeholderRef.current.style.display = docContent ? 'none' : 'flex';
//               }
//             }
//           }),
//         ],
//       });

//       const view = new EditorView({
//         state: startState,
//         parent: editorRef.current,
//       });

//       if (startState.doc.toString() && placeholderRef.current) {
//         placeholderRef.current.style.display = 'none';
//       }

//       return () => {
//         view.destroy();
//       };
//     }
//   }, []);

//   return (
//     <div style={{ position: 'relative' }}>
//       <div ref={editorRef}></div>
//       {/* Ensure placeholderRef is passed correctly */}
//       <div ref={placeholderRef} className="cm-placeholder">{placeholder}</div>
//     </div>
//   );
// };

// export default CodeBox;

