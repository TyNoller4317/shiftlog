import React, { useState } from "react";
import "../styles/editableText.css";

function EditableText({ initialText }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    // Save the changes or perform any required actions here
  };

  return (
    <>
      <div onDoubleClick={handleDoubleClick}>
        {isEditing ? (
          <textarea
            type="text"
            className="updateTextForm"
            value={text}
            onChange={handleChange}
            onBlur={handleBlur}
            on
          />
        ) : (
          <p>{text}</p>
        )}
      </div>
    </>
  );
}

export default EditableText;
