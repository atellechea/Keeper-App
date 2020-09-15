import React, { useState } from "react";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        //When we call the function of our useState we can tap into
        //it's previous value by giving it a function as a parameter
        setNote((prevNote) => {
            //We assign values to the different components in ourr note,
            //so we assign the recieved value depending on the name of the parameter
            //in this case it's either a title or content.
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        //The default behaviour of a button on a form is to refresh the page
        //and by adding this preventDefault we avoid that.
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
                <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3" />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;