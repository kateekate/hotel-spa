import styled from "styled-components";
import { HotelCard } from "../components/HotelCard";
import { useEffect, useState } from "react";
import { fetchHotels } from "../services/hotelService";

const Loading = styled.p`
  font-size: 18px;
  color: #1f1b19;
`;

const Error = styled(Loading)`
  color: #8f0c0c;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background-color: #e8e6e1;
  color: #1f1b19;
`;

interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  imageUrl: string;
}

export const HotelsList: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadingHotels = async () => {
      try {
        const data = await fetchHotels();
        setHotels(data);
      } catch (error) {
        console.error("Error fetching hotels", error);
        setError("Error fetching hotels");
      } finally {
        setLoading(false);
      }
    };
    loadingHotels();
  }, []);

  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  if (error) {
    return <Error>{error}</Error>;
  }

  return (
    <List>
      {hotels.map((hotel) => (
        <HotelCard
          key={hotel.id}
          id={hotel.id}
          rating={hotel.rating}
          name={hotel.name}
          location={hotel.location}
          imageUrl={hotel.imageUrl}
        />
      ))}
    </List>
  );
};
