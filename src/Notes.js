import { Element1 } from "./styles";
import { Link } from "react-router-dom";
export const Notes = ({ notes, title }) => {   
    
  return (
    <div className="notes">
      <h2>{title}</h2>
      {notes.map((note) => (
        <Element1 key={note.id}>
          <div className="note-preview" >
            <Link to={`/CheckNote/${note.id}`}>
              <h2>{note.title}</h2>
              <p>Data: {note.date}</p>
            </Link>
          </div>
        </Element1>
      ))}
    </div>
  );
};
