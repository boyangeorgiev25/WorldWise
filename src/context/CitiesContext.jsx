import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import PropTypes from "prop-types";
import { useAuth } from "./AuthContext";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});
  const { user } = useAuth();

  // Get user-specific cities from localStorage
  function getUserCities(userId) {
    if (!userId) return [];
    const userCities = localStorage.getItem(`worldwise-cities-${userId}`);
    return userCities ? JSON.parse(userCities) : [];
  }

  // Save user-specific cities to localStorage
  function saveUserCities(userId, cities) {
    if (!userId) return;
    localStorage.setItem(`worldwise-cities-${userId}`, JSON.stringify(cities));
  }

  useEffect(() => {
    if (user?.id || user?.email) {
      const userId = user.id || user.email;
      const userCities = getUserCities(userId);
      setCities(userCities);
    } else {
      setCities([]);
    }
  }, [user]);

  const getCity = useCallback(
    function getCity(id) {
      if (String(id) === String(currentCity.id)) return;

      const city = cities.find(city => String(city.id) === String(id));
      if (city) {
        setCurrentCity(city);
      }
    },
    [currentCity.id, cities]
  );

  function createCity(newCity) {
    if (!user?.id && !user?.email) {
      alert("You must be logged in to add cities.");
      return;
    }

    try {
      setIsLoading(true);
      const cityWithId = {
        ...newCity,
        id: Date.now().toString(),
        userId: user.id || user.email,
      };

      const updatedCities = [...cities, cityWithId];
      setCities(updatedCities);
      
      const userId = user.id || user.email;
      saveUserCities(userId, updatedCities);
    } catch {
      alert("There was an error creating city.");
    } finally {
      setIsLoading(false);
    }
  }

  function deleteCity(id) {
    if (!user?.id && !user?.email) {
      alert("You must be logged in to delete cities.");
      return;
    }

    try {
      setIsLoading(true);
      const updatedCities = cities.filter((city) => String(city.id) !== String(id));
      setCities(updatedCities);
      
      const userId = user.id || user.email;
      saveUserCities(userId, updatedCities);
    } catch {
      alert("There was an error deleting city.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity, createCity, deleteCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

CitiesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside CitiesProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { CitiesProvider, useCities };