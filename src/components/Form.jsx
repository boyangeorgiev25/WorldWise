import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Form.module.css";
import Button from "./Button";
import BackButton from "./BackButton";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { useCities } from "../context/CitiesContext";
import Message from "./Message";
import Spinner from "./Spinner";
import { convertToEmoji } from "../utils/convertToEmoji";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const [lat, lng] = useUrlPosition();
  const { createCity, isLoading } = useCities();
  const navigate = useNavigate();

  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [geocodingError, setGeocodingError] = useState("");

  useEffect(
    function () {
      if (!lat && !lng) return;

      async function fetchCityData() {
        try {
          setIsLoadingGeocoding(true);
          setGeocodingError("");

          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();

          if (!data.countryCode)
            throw new Error(
              "That doesn't seem to be a city. Click somewhere else 😉"
            );

          setCityName(data.city || data.locality || "");
          setCountry(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
        } catch (err) {
          setGeocodingError(err.message);
        } finally {
          setIsLoadingGeocoding(false);
        }
      }
      fetchCityData();
    },
    [lat, lng]
  );

  async function handleSubmit(e) {
    e.preventDefault();

    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: {
        lat,
        lng,
      },
    };

    await createCity(newCity);
    navigate("/app/cities");
  }

  if (isLoadingGeocoding) return <Spinner />;

  if (!lat && !lng)
    return <Message message="Start by clicking somewhere on the map" />;

  if (geocodingError) return <Message message={geocodingError} />;

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          name="cityName"
          type="text"
          required
          aria-required="true"
          aria-describedby={cityName ? undefined : "cityName-error"}
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
          placeholder="Enter city name"
          autoComplete="address-level2"
        />
        <span className={styles.flag} aria-label={`${country} flag`}>{emoji}</span>
        {!cityName && <span id="cityName-error" className={styles.error} role="alert">City name is required</span>}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          name="date"
          type="date"
          required
          aria-required="true"
          aria-describedby={date ? undefined : "date-error"}
          onChange={(e) => setDate(e.target.value)}
          value={date}
          max={new Date().toISOString().split('T')[0]}
        />
        {!date && <span id="date-error" className={styles.error} role="alert">Date is required</span>}
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          name="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
          placeholder="Share your memories..."
          rows="3"
          maxLength="500"
        />
        <small className={styles.hint}>{notes.length}/500 characters</small>
      </div>

      <div className={styles.buttons}>
        <Button 
          type="primary" 
          onClick={handleSubmit}
          disabled={isLoading || !cityName || !date}
          aria-describedby="submit-help"
        >
          {isLoading ? "Adding..." : "Add"}
        </Button>
        <small id="submit-help" className={styles.hint}>
          {(!cityName || !date) ? "Please fill required fields" : "Ready to add city"}
        </small>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
