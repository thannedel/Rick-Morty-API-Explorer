import { gql } from "@apollo/client";

export const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      species
      type
      gender
      origin {
        id
        name
        type
        dimension
        created
      }
      location {
        id
        name
      }
      image
      episode {
        id
        name
      }
      created
    }
  }
`;
