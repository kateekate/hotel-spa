import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import StarIcon from "../components/StarIcon";
import { fetchHotels } from "../services/hotelService";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  border: 4px solid #c5c0b6;
  border-top: 4px solid #edca85;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: 20px auto;
`;

const ErrorMessage = styled.p`
  font-size: 18px;
  color: #8f0c0c;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #171717;
`;

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid #c5c0b6;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  margin: 20px 0;
  color: #fff;
`;

const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c5c0b6;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const Location = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #edca85;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  & span {
    font-size: 16px;
    font-weight: 500;
    color: #edca85;
  }
`;

const Info = styled.p`
  display: flex;
  gap: 4px;
  margin: 10px 0;
  color: #969696;
`;

const RoomList = styled.ul`
  margin: 10px 0;
  padding-left: 20px;
  color: #969696;
`;

interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  imageUrl: string;
  datesOfTravel: string[];
  boardBasis: string;
  rooms: { roomType: string; amount: number }[];
}

export const HotelDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadHotel = async () => {
      try {
        setLoading(true);
        const data = await fetchHotels();
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const foundHotel = data.find((h: Hotel) => h.id === Number(id));
        if (!foundHotel) {
          throw new Error("Hotel not found");
        }
        setHotel(foundHotel);
      } catch (error) {
        console.error("Error loading hotel:", error);
        setError("Failed to load hotel. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadHotel();
  }, [id]);

  if (loading) {
    return (
      <MainContainer>
        <LoadingSpinner />
      </MainContainer>
    );
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (!hotel) {
    return <ErrorMessage>No hotel data found.</ErrorMessage>;
  }

  return (
    <MainContainer>
      <Container>
        <Image src={hotel.imageUrl} alt={hotel.name} />
        <Title>{hotel.name}</Title>
        <InfoHeader>
          <Location>Location: {hotel.location}</Location>
          <Rating>
            <StarIcon />
            <span>{hotel.rating}</span>
          </Rating>
        </InfoHeader>
        <Info>
          Dates of Travel: {hotel.datesOfTravel[0]} to {hotel.datesOfTravel[1]}
        </Info>
        <Info>Board Basis: {hotel.boardBasis}</Info>
        <Info>Rooms:</Info>
        <RoomList>
          {hotel.rooms.map((room, index) => (
            <li key={index}>
              {room.roomType} ({room.amount})
            </li>
          ))}
        </RoomList>
      </Container>
    </MainContainer>
  );
};
