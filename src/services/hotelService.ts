import axios from "axios";

export const fetchHotels = async () => {
  try {
    const { data } = await axios.get("/hotels.json");
    return data;
  } catch (error) {
    console.error("Error fetching hotels:", error);
    throw error;
  }
};
