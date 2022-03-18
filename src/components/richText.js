import React, { useEffect, useState, createContext } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RichText = ({ getHtml }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        toolbarClassName="toolbar-class"
        onEditorStateChange={(e) => {
          setEditorState(e);
          if (getHtml)
            getHtml(draftToHtml(convertToRaw(editorState.getCurrentContent())));
        }}
      />
      {/* <textarea
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      /> */}
    </>
  );
};

export default RichText;
