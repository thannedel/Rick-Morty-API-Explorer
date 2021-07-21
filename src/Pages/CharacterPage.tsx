import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Loader from '../common/Loader';
import {
  GET_CHARACTER_BY_ID,
  GetCharacterByIdQuery,
  GetCharacterByIdQueryVariables,
} from '../graphql';

export const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery<
    GetCharacterByIdQuery,
    GetCharacterByIdQueryVariables
  >(GET_CHARACTER_BY_ID, {
    variables: { id },
  });

  if (loading) return <Loader />;
  if (error) return <p>Error!!</p>;

  return (
    <div className='container'>
      <div className='character'>
        <div className='character-image'>
          <img
            src={data?.character?.image ?? undefined}
            alt="character"
          />
        </div>
        <div className='text-block'>
          <h3>
            <b>{data?.character?.name}</b>
          </h3>
          <p>
            <span>Gender: </span>
            {data?.character?.gender}
          </p>
          <p>
            <span>Created:</span> {data?.character?.created}
          </p>
          <p>
            <span>Location: </span>
            <Link to={`/location/${data?.character?.location?.id}`}>
              {data?.character?.location?.name}
            </Link>
          </p>
          <p>
            <span>Origin: </span>
            <Link to={`/location/${data?.character?.origin?.id}`}>
              {data?.character?.origin?.name}
            </Link>
          </p>
          <p>
            <span>Species: </span> {data?.character?.species}
          </p>
          {data?.character?.type && (
            <p>
              <span>Type: </span> {data?.character?.type}
            </p>
          )}
        </div>
      </div>
      <div className='episodes'>
        <h1>Episodes:</h1>
        {data?.character?.episode.map((ep) => {
          return (
            <p key={ep?.id}>
              <Link
                to={`/episode/${ep?.id}`}
                style={{ textDecoration: 'none' }}
              >
                {ep?.name}
              </Link>
            </p>
          );
        })}
      </div>
    </div>
  );
};
