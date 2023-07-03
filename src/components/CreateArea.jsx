import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    state: "false",
    content: ""
  });

  const [begin, setBegin] = useState({
    title: "Take a note...",
    content: "",
    field: "0"
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function enterData(){
    return setBegin({
      title: "Title",
      content: "Take a note...",
      state: "true",
      field: "3"
    });
  }

  return (
    <div>
      <form className="create-note">
        <input onClick={enterData}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder={begin.title}
        />
        {begin.state &&(
          <textarea
          
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder={begin.content}
          rows={begin.field}
        />
        )
        }
        <Zoom in={begin.state}>
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>      
        </form>
    </div>
  );
}

export default CreateArea;
