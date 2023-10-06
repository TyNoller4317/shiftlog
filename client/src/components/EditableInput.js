import React, { useState } from "react";
import "../styles/editableText.css";

function EditableInput({ initialText }) {
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
          <input
            type="text"
            className="title"
            value={text}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ) : (
          <h4>{text}</h4>
        )}
      </div>
    </>
  );
}

export default EditableInput;
