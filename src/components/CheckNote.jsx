import { useState, useEffect } from "react";
import {Notes} from "../Notes"
import { Remover } from "../styles";
export default function CheckNote() {
  const [notes, setNotes] = useState(null);
  useEffect(() =>{
      fetch('http://localhost:8000/notes')
      .then(res => {
          return res.json()
      }) 
      .then(data=>{
        console.log(data);
        setNotes(data);
      })
  }, [])
  return (
    <div>
      {notes && <Notes notes={notes} title="Your Problems !!!"/>}      
    </div>
  );
}
