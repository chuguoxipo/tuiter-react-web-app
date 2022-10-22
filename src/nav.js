import {Link} from "react-router-dom";

function Nav() {
  return (
      <div>
        <Link to="/">Labs</Link> |
        <Link to="/hello">Hello</Link> |
        <Link to="/tuiter">Tuiter</Link> |
        <Link to="/todo">Todos</Link>
      </div>
  )
}

export default Nav;

