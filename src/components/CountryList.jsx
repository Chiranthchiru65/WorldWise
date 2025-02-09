/* eslint react/prop-types: 0 */

import styles from "./CountryList.module.css";
import Spinner from "./Spinner";

import Message from "./Message";
import CountryItem from "./CountryItem";
function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emojii: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((item) => (
        <CountryItem key={crypto.randomUUID()} country={item} />
      ))}
    </ul>
  );
}

export default CountryList;
