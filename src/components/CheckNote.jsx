import { useState } from "react";
import { useFetch } from "../fetchData";
import { Notes } from "../Notes";
import { sortThis } from "../sortThis";
export default function CheckNote() {
  const [sort, setSort] = useState("_sort=id");
  const [sortOrder, setSortOrder] = useState("_order=asc");
  const [filterDate, setFilterDate] = useState("");
  const [filterTitle, setFilterTitle] = useState("");

  const { data, isLoading } = useFetch(
    "http://localhost:8000/notes?date_like=" +
      filterDate +
      "&title_like=" +
      filterTitle +
      "&" +
      sort +
      "&" +
      sortOrder
  );
  const SortThis = (e) => {
    e.preventDefault();
    setSortOrder(sortThis(sortOrder));
  };

  return (
    <div>
      <button onClick={SortThis}>
        {sortOrder === "_order=asc" ? (
          <div>Sort By Order Desc</div>
        ) : (
          <div>Sort By Order Asc</div>
        )}
      </button>
      <label>Sort By:</label>
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="_sort=id">Id</option>
        <option value="_sort=title">Title</option>
        <option value="_sort=date">Date</option>
      </select>
      <label>Filter Problems - Title:</label>
      <input
        type="text"
        required
        value={filterTitle}
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <label>Filter Problems - Date:</label>
      <input
        type="date"
        required
        value={filterDate}
        onChange={(e) => setFilterDate(e.target.value)}
      />
      {isLoading && <div>Loading...</div>}
      {data && <Notes notes={data} title="Your Problems !!!" />}
    </div>
  );
}
