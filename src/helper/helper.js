import { destinations, crew, technology } from "../data/data.json";

export const getDestinationData = ( destinationName ) => {
    return destinations.find( 
      destination => (destination.name).toLowerCase() === (destinationName).toLowerCase()
    );
}

export const getMemberData = ( memberNumber ) => {
  return crew[memberNumber];
}

export const getTechnologyData = ( techNumber ) => {
  return technology[techNumber];
}