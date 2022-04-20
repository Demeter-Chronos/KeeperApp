import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          onChange={props.inputSaved}
          name="title"
          placeholder="Title"
          value={props.title}
        />
        <textarea
          onChange={props.inputSaved}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.content}
        />
        <button
          onClick={(event) => {
            props.addedNote(event);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
