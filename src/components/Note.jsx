import { useParams } from "react-router-dom";
import { useFetch } from "../fetchData";
export default function Note() {
    const { id } = useParams();
    const {data, isLoading} =  useFetch('http://localhost:8000/notes/' + id);
     return (
        <div className='note-note'>
            {isLoading && <div>Loading...</div>}
            {data&&(
                <article>
                    <h2>{data.title}</h2>
                    <p>{data.date}</p>
                    <div>{data.test}</div>
                </article>
            )}          
        </div>
      );
  }