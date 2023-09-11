import { useState, useEffect } from "react";

export default function DataExchange() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://api.exchangeratesapi.io/v1/latest?access_key=2fcdc7f7aeb024b8f2d3d36f03105897&symbols=USD,AUD,CAD,PLN,MXN&format=1`
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
    // console.log(data);
    const currentRate = (
      <p>
        <span>1</span> {data.base} =
        <span>{parseFloat(data.rates.USD).toFixed(2)}</span> USD
      </p>
    );

    return (
      <div className="fetchExchange">
        <h2>{data.date}</h2>
        {currentRate}
      </div>
    );
  } else {
    return null;
  }
}
