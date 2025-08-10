/* eslint-disable react/prop-types */
import styles from "./CountryItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

export default function CountryItem({ country }) {
  const { countryName, emoji, date } = country;

  return (
    <li className={styles.countryItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{countryName}</h3>
      <time className={styles.date}>{formatDate(date)}</time>
    </li>
  );
}
