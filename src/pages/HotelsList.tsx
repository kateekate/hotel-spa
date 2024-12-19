import styled from "styled-components";
import { HotelCard } from "../components/HotelCard";

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  height: 100vh;
  padding: 20px;
  background-color: #e8e6e1;
  color: #1f1b19;
`;

export const HotelsList: React.FC = () => {
  return (
    <List>
      <HotelCard id={1} rating={4.3} />
      <HotelCard id={2} rating={5} />
      <HotelCard id={3} rating={2.5} />
      <HotelCard id={4} rating={3} />
    </List>
  );
};
