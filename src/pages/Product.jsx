import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWise.</h2>
          <p>
            WorldWise helps you track your travels and share your adventures with the world. 
            Mark all the cities you've visited on our interactive map and keep notes about 
            your favorite memories from each destination.
          </p>
          <p>
            Create a personal travel journal that grows with every journey. Connect with fellow 
            travelers, discover new destinations, and never forget the places that made your heart sing.
          </p>
        </div>
      </section>
    </main>
  );
}
