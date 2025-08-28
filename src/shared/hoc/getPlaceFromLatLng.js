import { getGeocode } from "use-places-autocomplete";

export const getPlaceFromLatLng = async (lat, lng) => {
  try {
    const results = await getGeocode({ location: { lat, lng } });
    if (results.length > 0) {
      const placeId = results[0].place_id;
      const address = results[0].formatted_address;
      // setPlace({ placeId, description: address });
      return { address };
    }
  } catch (error) {
    console.error("Error fetching Place ID:", error);
  }
};
