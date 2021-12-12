
import './App.css';
import React, {useState} from 'react';
import {EditorState} from "draft-js";
import {Editor} from "react-draft-wysiwyg";
import 'draft-js/dist/Draft.css';

function App() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );
 
  console.log(editorState)
  return (
    <div className="App">
      <div>
        <h2>React Wysiwyg Rich Editor Using Draft.js</h2>
        <Editor 
          editorState={editorState}
          // onChange={setEditorState}
        />
      </div>
    </div>
  );
}

export default App;
