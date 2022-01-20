import { Element1 } from "./styles";
import { Link } from "react-router-dom";
import NewNote from "./components/NewNote";
import { Remover } from "./styles";
export const Notes = ({ notes, title }) => {   
    
  return (
    <div className="notes">
      <h2>{title}</h2>
      {notes.map((note) => (
        <Element1>
          <div className="note-preview" key={note.id}>
            <Link to={`/CheckNote/${note.id}`}>
              <h2>{note.title}</h2>
              <p>Data: {note.date}</p>
            </Link>
            {/*<button onClick={()=>handleDelete(note.id)}>delete</button>*/}
          </div>
        </Element1>
      ))}
    </div>
  );
};
