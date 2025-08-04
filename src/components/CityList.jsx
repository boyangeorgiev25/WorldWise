/* eslint-disable react/prop-types */
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities || cities.length === 0)
    return (
      <Message
        message="Add your cities by clicking
  on a city on the map"
      ></Message>
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <li key={city.id} className={styles.cityItem}>
          <CityItem city={city} />
        </li>
      ))}
    </ul>
  );
}

export default CityList;
