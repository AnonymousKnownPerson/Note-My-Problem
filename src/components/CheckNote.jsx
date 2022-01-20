import { useState, useEffect } from "react";
import { useFetch } from "../fetchData";
import {Notes} from "../Notes"
export default function CheckNote() {
  const {data, isLoading} = useFetch('http://localhost:8000/notes')
  return (
    <div>
      {isLoading &&<div>Loading...</div>}
      {data && <Notes notes={data} title="Your Problems !!!"/>}      
    </div>
  );
}
