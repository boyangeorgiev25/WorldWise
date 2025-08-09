/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const CitiesContext = createContext();
const BASE_URL = "http://localhost:3000";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
        setIsLoading(false);
      } catch {
        alert("There was an error loading data ....");
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider value={{ cities, setCities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
}

export { CitiesProvider };
