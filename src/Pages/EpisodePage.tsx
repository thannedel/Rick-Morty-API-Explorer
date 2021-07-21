import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {
  Button,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Card,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Loader from '../common/Loader';
import {
  GET_EPISODE_BY_ID,
  GetEpisodeByIdQuery,
  GetEpisodeByIdQueryVariables,
} from '../graphql';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
export const EpisodePage = () => {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery<
    GetEpisodeByIdQuery,
    GetEpisodeByIdQueryVariables
  >(GET_EPISODE_BY_ID, {
    variables: { id },
  });

  if (loading) return <Loader />;
  if (error) return <p>Error!!</p>;

  return (
    <>
      <div className='general-info'>
        <h1>{data?.episode?.name}</h1>
        <p>Air Date: {data?.episode?.air_date}</p>
        <p>Episode : {data?.episode?.episode}</p>
        <p>Created: {data?.episode?.created}</p>
      </div>
      <div className='cards'>
        {data?.episode?.characters.map((character) => {
          return (
            <div className='card' key={character?.id}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes?.media ?? undefined}
                    image={character?.image ?? undefined}
                    title={character?.name ?? undefined}
                    style={{ width: '300px', height: '300px' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {character?.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    <Link
                      to={`/character/${character?.id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      View Character
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};
