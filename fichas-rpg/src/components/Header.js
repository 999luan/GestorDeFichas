import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Gestor de fichas</span>
      </h1>
      <p className={headerStyles.description}>
        Crie e gerencie suas fichas de rpg
      </p>
    </div>
  );
};

export default Header;
