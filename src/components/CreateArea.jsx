import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [title, setTitle] = useState(""); //keeps track of the title
  const [content, setContent] = useState(""); //keeps track of the content

  function handleTitle(event) {
    //updates the title
    const newTitle = event.target.value;
    setTitle(newTitle);
  }

  function handleContent(event) {
    //updates the content
    const newContent = event.target.value;
    setContent(newContent);
  }

  function handleSubmit(event) {
    //when the submit button is clicked
    props.addNote({ title: title, content: content }); //it passes the new note object back to my app component to be added
    setTitle(""); //resets the title
    setContent(""); //resets the content
    event.preventDefault(); //this prevents the page from resetting when add button is clicked
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        {isExpanded && (
          <input
            name="title"
            onChange={handleTitle}
            placeholder="Title"
            value={title}
          />
        )}
        <textarea
          name="content"
          onChange={handleContent}
          placeholder="Take a note..."
          onClick={expand}
          rows={isExpanded ? 3 : 1}
          value={content}
        />
        <Zoom in={isExpanded}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
