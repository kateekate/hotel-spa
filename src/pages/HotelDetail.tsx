import styled from "styled-components";
import StarIcon from "../components/StarIcon";

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

export const HotelDetail: React.FC = () => {
  return (
    <MainContainer>
      <Container>
        <Image
          src="https://example.com/images/rainforest-retreat.jpg"
          alt="Hotel Image"
        />
        <Title>Hotel Name</Title>
        <InfoHeader>
          <Location>Location: Maldives</Location>
          <Rating>
            <StarIcon />
            <span>4.5</span>
          </Rating>
        </InfoHeader>
        <Info>Dates of Travel: 2024-01-01 to 2024-01-07</Info>
        <Info>Board Basis: All Inclusive</Info>
        <Info>Rooms:</Info>
        <RoomList>
          <li>Deluxe Suite (5)</li>
          <li>Standard Room (3)</li>
        </RoomList>
      </Container>
    </MainContainer>
  );
};
