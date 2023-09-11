import { useState, useEffect } from "react";

export default function DataWeather() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //  reqDet - details for fetch request
    const reqDet = {
      city: "Vladikavkaz",
      country: "ru",
      userKey: "4a7d6f18625de0b242970e6aad2ce891",
    };
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${reqDet.city},${reqDet.country}&appid=${reqDet.userKey}&units=metric`
        );
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const fetchedData = await response.json();
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (data) {
    const cityName = data.name;
    const weather = Math.round(data.main.temp);
    const iconWeather = data.weather[0].icon;
    const weatherSky = data.weather[0].description;
    // console.log(data);
    return (
      <div>
        <p> {`${cityName}: ${weather}\u2103`}</p>

        <p className="weatherSkyIcon"> {weatherSky}
          <img
            src={`http://openweathermap.org/img/w/${iconWeather}.png`}
            alt="wether icon"
          />
        </p>
      </div>
    );
  } else {
    return null;
  }
}
