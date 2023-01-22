import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Nav from "./Nav";
import FichaForm from "./FichaForm";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          <Nav />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
