import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <strong>RPG FICHA</strong>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/criaficha">Criar Fichas</Link>
        </li>

        <li>
          <a href="#" role="button" className="botao">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
