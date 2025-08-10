import Logo from "./Logo";
import AppNav from "./AppNav";
import User from "./User";
import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet></Outlet>

      <User />
      
      <footer className={styles.footer}></footer>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc
      </p>
    </div>
  );
}
