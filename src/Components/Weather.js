import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";
import Loading from "./Loading";
import {loading} from "../redux/slices/isLoadingSlice";
import { loadingActions } from "../redux/slices/isLoadingSlice";
const {REACT_APP_API_KEY} = process.env;

const Weather = () => {
  const [weather, setWeather] = useState({});
  let currentDisplay = useSelector(selectDisplay);
  let latitude = currentDisplay.capitalInfo.latlng[0];
  let longitude = currentDisplay.capitalInfo.latlng[1];
  let loadingState = useSelector(loading);
  let dispatch = useDispatch();


  useEffect(() => {
    // dispatch(loadingActions.startLoading());
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: `${latitude}, ${longitude}` },
      headers: {
        "X-RapidAPI-Key": `${REACT_APP_API_KEY}`,
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setWeather(response.data);
        // dispatch(loadingActions.stopLoading());
      })
      .catch((error) => {
        console.error(error);
        // dispatch(loadingActions.stopLoading());
      });
  }, [dispatch, latitude, longitude]);

  return (
    <div>
      {loadingState ? (
        <Loading />
      ) : (
        <table className="overview-table">
          <tbody>
            <tr>
              <td>Conditions: </td>
              <td>{weather?.current?.condition?.text}</td>
            </tr>
            <tr>
              <td>Temperature: </td>
              <td>{weather?.current?.temp_f} degrees Fahrenheit</td>
            </tr>
            <tr>
              <td>Feels Like: </td>
              <td>{weather?.current?.feelslike_f} degrees Fahrenheit</td>
            </tr>
            <tr>
              <td>Humidity: </td>
              <td>{weather?.current?.humidity}%</td>
            </tr>
            <tr>
              <td>Wind Speed: </td>
              <td>
                {weather?.current?.wind_mph} mph
                {weather?.current?.wind_dir}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Weather;
