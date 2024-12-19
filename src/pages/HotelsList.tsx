import styled from "styled-components";
import { HotelCard } from "../components/HotelCard";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding: 20px;
`;

export const HotelsList: React.FC = () => {
  return (
    <Container>
      <HotelCard id={1} />
      <HotelCard id={2} />
      <HotelCard id={3} />
      <HotelCard id={4} />
    </Container>
  );
};
