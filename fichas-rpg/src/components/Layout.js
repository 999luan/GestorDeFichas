import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Nav from "./Nav";
import FichaForm from "./FichaForm";

import { useState } from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
          <FichaForm />
        </main>
      </div>
    </>
  );
};

export default Layout;
