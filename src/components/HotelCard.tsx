import { Link } from "react-router-dom";
import styled from "styled-components";
import StarIcon from "./StarIcon";

const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
  width: 100%;
  max-width: 800px;
  border-bottom: 1px solid #c5c0b6;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 16px;
`;

const Info = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
`;

const Location = styled.p`
  font-size: 14px;
  color: #1f1b19;
  margin-bottom: 8px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #1f1b19;

  & > svg {
    margin-right: 4px;
  }
`;

const Button = styled(Link)`
  color: #333;
  padding: 8px 16px;
  border: 1px solid #333;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

export const HotelCard: React.FC<{
  id: number;
  name: string;
  location: string;
  rating: number;
  imageUrl: string;
}> = ({ id, name, location, rating, imageUrl }) => {
  return (
    <Card>
      <Image src={imageUrl} alt={name} />
      <Info>
        <Title>{name}</Title>
        <Location>Location: {location}</Location>
        <Rating>
          <StarIcon />
          {rating}
        </Rating>
      </Info>
      <Button to={`/hotels/${id}`}>More Details</Button>
    </Card>
  );
};
