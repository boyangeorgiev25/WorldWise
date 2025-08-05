/* eslint-disable no-unused-vars */
import { useParams, useSearchParams } from "react-router-dom";
import styles from "./City.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  console.log(id);
  // TEMP DATA
  const currentCity = {
    cityName: "Lisbon",
    emoji: "🇵🇹",
    date: "2027-10-31T15:59:59.138Z",
    notes: "My favorite city so far!",
  };

  const { cityName, emoji, date, notes } = currentCity;

  const [searchParams, setSearch] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <>
      City {id}
      <p>
        Position: {lat},{lng}
      </p>
    </>
  );
}

export default City;
