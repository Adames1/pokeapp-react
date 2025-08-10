import { Link } from "react-router-dom";
import { Menu, MoveLeft } from "lucide-react";

function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <MoveLeft />
        </Link>
        <Menu />
      </div>
    </header>
  );
}

export default Header;
