import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Loader from '../common/Loader';
import {
  GET_LOCATION_BY_ID,
  GetLocationByIdQuery,
  GetLocationByIdQueryVariables,
} from '../graphql';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
export const LocationPage = () => {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery<
    GetLocationByIdQuery,
    GetLocationByIdQueryVariables
  >(GET_LOCATION_BY_ID, {
    variables: { id },
  });

  if (loading) return <Loader />;
  if (error) return <p>Error!!</p>;

  return (
    <>
      <div className='general-info'>
        <h1>{data?.location?.name}</h1>
        <p>Type: {data?.location?.type}</p>
        <p>Dimension : {data?.location?.dimension}</p>
        <p>Created: {data?.location?.created}</p>
      </div>
      <div className='cards'>
        {data?.location?.residents.map((resident) => {
          return (
            <div className='card' key={resident?.id}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes?.media ?? undefined}
                    image={resident?.image ?? undefined}
                    title={resident?.name ?? undefined}
                    style={{ width: '300px', height: '300px' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {resident?.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    <Link
                      to={`/character/${resident?.id}`}
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
