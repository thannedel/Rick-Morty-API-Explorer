import { GET_CHARACTERS } from '../graphql';

export const getCharactersMock = [
  {
    request: {
      query: GET_CHARACTERS,
      variables: {
        page: 1,
      },
    },
    result: {
      data: {
        characters: {
          info: {
            pages: 1,
          },
          results: [
            {
              id: '1',
              name: 'Rick Sanchez',
              species: 'Human',
              origin: {
                id: '1',
                name: 'Earth (C-137)',
              },
              location: {
                id: '20',
                name: 'Earth (Replacement Dimension)',
              },
            },
          ],
        },
      },
    },
  },
];
