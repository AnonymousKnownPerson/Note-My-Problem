import { useParams } from "react-router-dom";
import { useFetch } from "../fetchData";
import { useNavigate, Link } from "react-router-dom";
import { NoteText, NoteText2 } from "../styles";

export default function Note() {
  const { id } = useParams();
  const { data, isLoading } = useFetch("http://localhost:8000/notes/" + id);
  const navigate = useNavigate();
  const editButtonClicked = () => {
    window.localStorage.setItem("title", data.title);
    window.localStorage.setItem("date", data.date);
    window.localStorage.setItem("typeOfNoteId", data.typeOfNoteId);
    window.localStorage.setItem("test", data.test);
  }
  const deleteButtonClicked = () => {
    fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    }).then(navigate("/"));
  };
  return (
      <div className="note-note">
        {isLoading && <div>Loading...</div>}
        {data && (
          <article>
            <h2>Title: {data.title}</h2>
            <NoteText>
                <NoteText2>
            <div>{data.test}</div>
            </NoteText2>
            </NoteText>            
            <p>Date: {data.date}</p>
            <Link to={`/EditNote/${data.id}`}>
              <button onClick={editButtonClicked}>Edit</button>
            </Link>
            <button onClick={deleteButtonClicked}>Remove</button>
          </article>
        )}
      </div>
  );
}

