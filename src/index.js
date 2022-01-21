import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { MainStyle, GlobalStyle } from "./styles";
import NewNote from "./components/NewNote";
import EditNote from "./components/EditNote";
import CheckNote from "./components/CheckNote";
import Note from ".//components/Note";

const rootElement = document.getElementById("root");
render(
  <MainStyle>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="NewNote" element={<NewNote />} />
          <Route path="CheckNote" element={<CheckNote />} />
          <Route path="CheckNote/:id" element={<Note />} />
          <Route path="EditNote/:id" element={<EditNote />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Sadly, there's nothing here.</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </MainStyle>,
  rootElement
);
