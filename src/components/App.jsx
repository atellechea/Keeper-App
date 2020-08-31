import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes";

function App(){
    return <div>
        <Header/>
        <Footer/>
        {Notes.map((note) => 
        <Note 
            key = {note.id}
            title={note.title}
            content={note.content}
        />
)}
        {/* <Note title="" content="Contenido"/> */}
    </div>
}

export default App;