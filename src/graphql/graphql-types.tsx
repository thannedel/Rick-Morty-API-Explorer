import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Character = {
  __typename?: 'Character';
  /** The id of the character. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the character. */
  name?: Maybe<Scalars['String']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars['String']>;
  /** The species of the character. */
  species?: Maybe<Scalars['String']>;
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars['String']>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars['String']>;
  /** The character's origin location */
  origin?: Maybe<Location>;
  /** The character's last known location */
  location?: Maybe<Location>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars['String']>;
  /** Episodes in which this character appeared. */
  episode: Array<Maybe<Episode>>;
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars['String']>;
};

export type Characters = {
  __typename?: 'Characters';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
  __typename?: 'Episode';
  /** The id of the episode. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the episode. */
  name?: Maybe<Scalars['String']>;
  /** The air date of the episode. */
  air_date?: Maybe<Scalars['String']>;
  /** The code of the episode. */
  episode?: Maybe<Scalars['String']>;
  /** List of characters who have been seen in the episode. */
  characters: Array<Maybe<Character>>;
  /** Time at which the episode was created in the database. */
  created?: Maybe<Scalars['String']>;
};

export type Episodes = {
  __typename?: 'Episodes';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  species?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
};

export type FilterEpisode = {
  name?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['String']>;
};

export type FilterLocation = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  dimension?: Maybe<Scalars['String']>;
};

export type Info = {
  __typename?: 'Info';
  /** The length of the response. */
  count?: Maybe<Scalars['Int']>;
  /** The amount of pages. */
  pages?: Maybe<Scalars['Int']>;
  /** Number of the next page (if it exists) */
  next?: Maybe<Scalars['Int']>;
  /** Number of the previous page (if it exists) */
  prev?: Maybe<Scalars['Int']>;
};

export type Location = {
  __typename?: 'Location';
  /** The id of the location. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the location. */
  name?: Maybe<Scalars['String']>;
  /** The type of the location. */
  type?: Maybe<Scalars['String']>;
  /** The dimension in which the location is located. */
  dimension?: Maybe<Scalars['String']>;
  /** List of characters who have been last seen in the location. */
  residents: Array<Maybe<Character>>;
  /** Time at which the location was created in the database. */
  created?: Maybe<Scalars['String']>;
};

export type Locations = {
  __typename?: 'Locations';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type Query = {
  __typename?: 'Query';
  /** Get a specific character by ID */
  character?: Maybe<Character>;
  /** Get the list of all characters */
  characters?: Maybe<Characters>;
  /** Get a list of characters selected by ids */
  charactersByIds?: Maybe<Array<Maybe<Character>>>;
  /** Get a specific locations by ID */
  location?: Maybe<Location>;
  /** Get the list of all locations */
  locations?: Maybe<Locations>;
  /** Get a list of locations selected by ids */
  locationsByIds?: Maybe<Array<Maybe<Location>>>;
  /** Get a specific episode by ID */
  episode?: Maybe<Episode>;
  /** Get the list of all episodes */
  episodes?: Maybe<Episodes>;
  /** Get a list of episodes selected by ids */
  episodesByIds?: Maybe<Array<Maybe<Episode>>>;
};


export type QueryCharacterArgs = {
  id: Scalars['ID'];
};


export type QueryCharactersArgs = {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterCharacter>;
};


export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryLocationArgs = {
  id: Scalars['ID'];
};


export type QueryLocationsArgs = {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterLocation>;
};


export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryEpisodeArgs = {
  id: Scalars['ID'];
};


export type QueryEpisodesArgs = {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterEpisode>;
};


export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type GetCharacterByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCharacterByIdQuery = (
  { __typename?: 'Query' }
  & { character?: Maybe<(
    { __typename?: 'Character' }
    & Pick<Character, 'id' | 'name' | 'species' | 'type' | 'gender' | 'image' | 'created'>
    & { origin?: Maybe<(
      { __typename?: 'Location' }
      & Pick<Location, 'id' | 'name' | 'type' | 'dimension' | 'created'>
    )>, location?: Maybe<(
      { __typename?: 'Location' }
      & Pick<Location, 'id' | 'name'>
    )>, episode: Array<Maybe<(
      { __typename?: 'Episode' }
      & Pick<Episode, 'id' | 'name'>
    )>> }
  )> }
);

export type GetCharactersQueryVariables = Exact<{
  page: Scalars['Int'];
}>;


export type GetCharactersQuery = (
  { __typename?: 'Query' }
  & { characters?: Maybe<(
    { __typename?: 'Characters' }
    & { info?: Maybe<(
      { __typename?: 'Info' }
      & Pick<Info, 'pages'>
    )>, results?: Maybe<Array<Maybe<(
      { __typename?: 'Character' }
      & Pick<Character, 'id' | 'name' | 'species'>
      & { origin?: Maybe<(
        { __typename?: 'Location' }
        & Pick<Location, 'name'>
      )>, location?: Maybe<(
        { __typename?: 'Location' }
        & Pick<Location, 'name'>
      )> }
    )>>> }
  )> }
);

export type GetEpisodeByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetEpisodeByIdQuery = (
  { __typename?: 'Query' }
  & { episode?: Maybe<(
    { __typename?: 'Episode' }
    & Pick<Episode, 'id' | 'name' | 'air_date' | 'episode' | 'created'>
    & { characters: Array<Maybe<(
      { __typename?: 'Character' }
      & Pick<Character, 'id' | 'name' | 'image'>
    )>> }
  )> }
);

export type GetEpisodesQueryVariables = Exact<{
  page: Scalars['Int'];
}>;


export type GetEpisodesQuery = (
  { __typename?: 'Query' }
  & { episodes?: Maybe<(
    { __typename?: 'Episodes' }
    & { info?: Maybe<(
      { __typename?: 'Info' }
      & Pick<Info, 'pages'>
    )>, results?: Maybe<Array<Maybe<(
      { __typename?: 'Episode' }
      & Pick<Episode, 'id' | 'name' | 'air_date' | 'episode' | 'created'>
    )>>> }
  )> }
);

export type GetLocationByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetLocationByIdQuery = (
  { __typename?: 'Query' }
  & { location?: Maybe<(
    { __typename?: 'Location' }
    & Pick<Location, 'id' | 'name' | 'type' | 'dimension' | 'created'>
    & { residents: Array<Maybe<(
      { __typename?: 'Character' }
      & Pick<Character, 'id' | 'name' | 'image'>
    )>> }
  )> }
);

export type GetLocationsQueryVariables = Exact<{
  page: Scalars['Int'];
}>;


export type GetLocationsQuery = (
  { __typename?: 'Query' }
  & { locations?: Maybe<(
    { __typename?: 'Locations' }
    & { info?: Maybe<(
      { __typename?: 'Info' }
      & Pick<Info, 'pages'>
    )>, results?: Maybe<Array<Maybe<(
      { __typename?: 'Location' }
      & Pick<Location, 'id' | 'name' | 'type' | 'dimension' | 'created'>
    )>>> }
  )> }
);


export const GetCharacterByIdDocument = gql`
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

/**
 * __useGetCharacterByIdQuery__
 *
 * To run a query within a React component, call `useGetCharacterByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharacterByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharacterByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCharacterByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCharacterByIdQuery, GetCharacterByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCharacterByIdQuery, GetCharacterByIdQueryVariables>(GetCharacterByIdDocument, options);
      }
export function useGetCharacterByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharacterByIdQuery, GetCharacterByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCharacterByIdQuery, GetCharacterByIdQueryVariables>(GetCharacterByIdDocument, options);
        }
export type GetCharacterByIdQueryHookResult = ReturnType<typeof useGetCharacterByIdQuery>;
export type GetCharacterByIdLazyQueryHookResult = ReturnType<typeof useGetCharacterByIdLazyQuery>;
export type GetCharacterByIdQueryResult = Apollo.QueryResult<GetCharacterByIdQuery, GetCharacterByIdQueryVariables>;
export const GetCharactersDocument = gql`
    query GetCharacters($page: Int!) {
  characters(page: $page) {
    info {
      pages
    }
    results {
      id
      name
      species
      origin {
        name
      }
      location {
        name
      }
    }
  }
}
    `;

/**
 * __useGetCharactersQuery__
 *
 * To run a query within a React component, call `useGetCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetCharactersQuery(baseOptions: Apollo.QueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCharactersQuery, GetCharactersQueryVariables>(GetCharactersDocument, options);
      }
export function useGetCharactersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCharactersQuery, GetCharactersQueryVariables>(GetCharactersDocument, options);
        }
export type GetCharactersQueryHookResult = ReturnType<typeof useGetCharactersQuery>;
export type GetCharactersLazyQueryHookResult = ReturnType<typeof useGetCharactersLazyQuery>;
export type GetCharactersQueryResult = Apollo.QueryResult<GetCharactersQuery, GetCharactersQueryVariables>;
export const GetEpisodeByIdDocument = gql`
    query GetEpisodeById($id: ID!) {
  episode(id: $id) {
    id
    name
    air_date
    episode
    characters {
      id
      name
      image
    }
    created
  }
}
    `;

/**
 * __useGetEpisodeByIdQuery__
 *
 * To run a query within a React component, call `useGetEpisodeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEpisodeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEpisodeByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEpisodeByIdQuery(baseOptions: Apollo.QueryHookOptions<GetEpisodeByIdQuery, GetEpisodeByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEpisodeByIdQuery, GetEpisodeByIdQueryVariables>(GetEpisodeByIdDocument, options);
      }
export function useGetEpisodeByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEpisodeByIdQuery, GetEpisodeByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEpisodeByIdQuery, GetEpisodeByIdQueryVariables>(GetEpisodeByIdDocument, options);
        }
export type GetEpisodeByIdQueryHookResult = ReturnType<typeof useGetEpisodeByIdQuery>;
export type GetEpisodeByIdLazyQueryHookResult = ReturnType<typeof useGetEpisodeByIdLazyQuery>;
export type GetEpisodeByIdQueryResult = Apollo.QueryResult<GetEpisodeByIdQuery, GetEpisodeByIdQueryVariables>;
export const GetEpisodesDocument = gql`
    query GetEpisodes($page: Int!) {
  episodes(page: $page) {
    info {
      pages
    }
    results {
      id
      name
      air_date
      episode
      created
    }
  }
}
    `;

/**
 * __useGetEpisodesQuery__
 *
 * To run a query within a React component, call `useGetEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEpisodesQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetEpisodesQuery(baseOptions: Apollo.QueryHookOptions<GetEpisodesQuery, GetEpisodesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(GetEpisodesDocument, options);
      }
export function useGetEpisodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEpisodesQuery, GetEpisodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(GetEpisodesDocument, options);
        }
export type GetEpisodesQueryHookResult = ReturnType<typeof useGetEpisodesQuery>;
export type GetEpisodesLazyQueryHookResult = ReturnType<typeof useGetEpisodesLazyQuery>;
export type GetEpisodesQueryResult = Apollo.QueryResult<GetEpisodesQuery, GetEpisodesQueryVariables>;
export const GetLocationByIdDocument = gql`
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

/**
 * __useGetLocationByIdQuery__
 *
 * To run a query within a React component, call `useGetLocationByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLocationByIdQuery(baseOptions: Apollo.QueryHookOptions<GetLocationByIdQuery, GetLocationByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLocationByIdQuery, GetLocationByIdQueryVariables>(GetLocationByIdDocument, options);
      }
export function useGetLocationByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocationByIdQuery, GetLocationByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLocationByIdQuery, GetLocationByIdQueryVariables>(GetLocationByIdDocument, options);
        }
export type GetLocationByIdQueryHookResult = ReturnType<typeof useGetLocationByIdQuery>;
export type GetLocationByIdLazyQueryHookResult = ReturnType<typeof useGetLocationByIdLazyQuery>;
export type GetLocationByIdQueryResult = Apollo.QueryResult<GetLocationByIdQuery, GetLocationByIdQueryVariables>;
export const GetLocationsDocument = gql`
    query GetLocations($page: Int!) {
  locations(page: $page) {
    info {
      pages
    }
    results {
      id
      name
      type
      dimension
      created
    }
  }
}
    `;

/**
 * __useGetLocationsQuery__
 *
 * To run a query within a React component, call `useGetLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationsQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetLocationsQuery(baseOptions: Apollo.QueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, options);
      }
export function useGetLocationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, options);
        }
export type GetLocationsQueryHookResult = ReturnType<typeof useGetLocationsQuery>;
export type GetLocationsLazyQueryHookResult = ReturnType<typeof useGetLocationsLazyQuery>;
export type GetLocationsQueryResult = Apollo.QueryResult<GetLocationsQuery, GetLocationsQueryVariables>;