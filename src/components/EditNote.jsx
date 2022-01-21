import { Element2, NewNoteStyle } from "../styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../fetchData";
import { useParams } from "react-router-dom";
export default function EditNote() {
  const { id } = useParams();
  const { data, isLoading } = useFetch("http://localhost:8000/notes/" + id.value).then(console.log(data));
  const [title, setTitle] = useState(data.title);
  const [date, setDate] = useState(data.date);
  const [typeOfNoteId, setTypeOfNoteId] = useState(data.typeOfNoteId);
  const [test, setTest] = useState(data.test);
  const navigate = useNavigate();

  const whenSubmit = (e) => {
    e.preventDefault();
    const note = { id, title, date, typeOfNoteId, test };
    fetch("http://localhost:8000/notes/", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    }).then(navigate("/"));
  };
  return (
    <Element2>
      <NewNoteStyle>
        <div className="create">
          <h2>Let's edit that Problem!!!</h2>
          <form onSubmit={whenSubmit}>
            <label>Title Of Your Problem</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Date</label>
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label>Type Of Note You Wanna Make</label>
            <select
              value={typeOfNoteId}
              onChange={(e) => setTypeOfNoteId(e.target.value)}
            >
              <option value="1">Diary</option>
              <option value="2">Just Note</option>
              <option value="3">To-Do List</option>
            </select>
            <label>Your Whole Problem</label>
            <textarea
              type="text"
              required
              value={test}
              onChange={(e) => setTest(e.target.value)}
            ></textarea>
            <button>Edit your problem!</button>
          </form>
        </div>
      </NewNoteStyle>
    </Element2>
  );
}
