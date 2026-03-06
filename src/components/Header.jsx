import { Link } from "react-router-dom";

export default function Header() {
  return (
   <header>
  <h1 className="logo">
    <Link to="/">Spilcafeen</Link>
  </h1>

  <nav>
    <Link className="linktext" to="/">Home</Link>
    <Link className="linktext" to="/create">Games database</Link>
  </nav>
</header>
  );
}