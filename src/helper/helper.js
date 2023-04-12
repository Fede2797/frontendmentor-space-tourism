import { destinations } from "../data/data.json";
import { crew } from "../data/data.json";

export const getDestinationData = ( destinationName ) => {
    return destinations.find( 
      destination => (destination.name).toLowerCase() === (destinationName).toLowerCase()
    );
}

export const getMemberData = ( memberNumber ) => {
  return crew[memberNumber];
}