import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CarDetails = () => {
  const { id } = useParams();

  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axios.get(`/api/cars/${id}/`);
        setCar(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCar();
  }, [id]);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Car Details Page</h2>
      <h3>{car.name}</h3>
      <p>Price: ${car.price}</p>
      {/* Add other car details as necessary */}
    </div>
  );
};

const Cars = () => {
  return (
    <div>
      <h2>Cars Page</h2>
      {/* Add content for Cars page */}
    </div>
  );
};

export { CarDetails, Cars };
