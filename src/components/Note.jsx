import { useParams } from "react-router-dom";

export default function Note() {
    const { id } = useParams();
    return (
        <div>
          <h2>That's Problem Nr {id}</h2>
        </div>
      );
  }