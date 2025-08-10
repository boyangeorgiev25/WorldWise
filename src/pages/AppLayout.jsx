import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
  console.log("AppLayout rendering");
  
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}
