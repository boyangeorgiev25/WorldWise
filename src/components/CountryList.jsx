/* eslint-disable react/prop-types */
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities || cities.length === 0)
    return (
      <Message
        message="Add your cities by clicking
  on a city on the map"
      ></Message>
    );

  const countries = cities.reduce((array, city) => {
    const exists = array.find((el) => el.countryName === city.country);
    if (!exists) {
      array.push({
        countryName: city.country,
        emoji: city.emoji,
        date: city.date,
      });
    }
    return array;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <li key={country.countryName} className={styles.countryItem}>
          <CountryItem country={country} />
        </li>
      ))}
    </ul>
  );
}

export default CountryList;
