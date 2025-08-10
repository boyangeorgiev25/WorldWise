/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useCities } from "../context/CitiesContext";
import styles from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

export default function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  const { deleteCity } = useCities();

  async function handleClick(e) {
    e.preventDefault();
    
    const confirmed = window.confirm(
      `Are you sure you want to delete ${cityName}?`
    );
    
    if (confirmed) {
      await deleteCity(id);
    }
  }

  return (
    <li>
      <Link
        className={styles.cityItem}
        to={`${id}?lat=${position.lat}
      &lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
}
