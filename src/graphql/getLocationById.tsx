import { gql } from "@apollo/client";

export const GET_LOCATION_BY_ID = gql`
  query GetLocationById($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        image
      }
      created
    }
  }
`;
