import { Outlet, Link } from "react-router-dom";
import { TextSmall, TextHead } from "./styles";
export default function App() {
  const StyleLink = {
    color:'white',
  };
  return (
    <div>
      <TextHead>
        <h1>
          <Link style={StyleLink} to="/">Note My Problem</Link>
          </h1>
          </TextHead>
          <TextSmall>
        <nav>
          <Link style={StyleLink} to="/NewNote">NewNote</Link> |{" "}
          <Link style={StyleLink} to="/CheckNote">CheckNote</Link>
        </nav>
        </TextSmall>
        <Outlet />      
    </div>
  );
}
