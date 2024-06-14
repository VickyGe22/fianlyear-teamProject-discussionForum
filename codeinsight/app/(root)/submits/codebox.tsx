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

