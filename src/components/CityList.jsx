/* eslint react/prop-types: 0 */

import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((item) => (
        <CityItem key={crypto.randomUUID()} city={item} />
      ))}
    </ul>
  );
}

export default CityList;
