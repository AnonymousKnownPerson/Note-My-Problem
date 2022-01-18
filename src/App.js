import { Outlet, Link } from "react-router-dom";
import { MainStyle }from "./styles"

export default function App() {
  return (
    <MainStyle>
    <div>
      <h1>
      <Link to="/">Note My Problem</Link>
        </h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet/>
    </div>
    </MainStyle>
  );
}