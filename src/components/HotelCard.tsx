import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled(Link)`
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

const Info = styled.p`
  margin: 5px 0;
  color: #555;
`;

export const HotelCard: React.FC<{ id: number }> = ({ id }) => {
  return (
    <Card>
      <Title to={`/hotels/${id}`}>Hotel Name</Title>
      <Info>Location: Placeholder</Info>
      <Info>Rating: 4.5</Info>
    </Card>
  );
};
