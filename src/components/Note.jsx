import { useParams } from "react-router-dom";
import { useFetch } from "../fetchData";
import { useNavigate, Link } from "react-router-dom";

export default function Note() {
    const { id } = useParams();
    const {data, isLoading} =  useFetch('http://localhost:8000/notes/' + id);
    const navigate = useNavigate();
    const deleteButtonClicked=()=>{
        fetch('http://localhost:8000/notes/' + id,{
            method:'DELETE'
        }).then(navigate('/'));
    }
     return (
        <div className='note-note'>
            {isLoading && <div>Loading...</div>}
            {data&&(
                <article>
                    <h2>Title: {data.title}</h2>
                    <p>Date: {data.date}</p>
                    <div>{data.test}</div>
                    <Link to={`/EditNote/${data.id}`}>
                    <button>Edit</button>
                    </Link>
                    <button onClick={deleteButtonClicked}>Remove</button>
                </article>                
            )}            
        </div>        
      );
  }