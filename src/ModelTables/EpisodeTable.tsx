import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { TableRow, TableCell } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import TableComponent from '../Table/TableContainer';
import Loader from '../common/Loader';
import {
  GET_EPISODES,
  GetEpisodesQuery,
  GetEpisodesQueryVariables,
} from '../graphql';

export const EpisodeTable = () => {
  const [page, setPage] = useState(1);

  const { loading, error, data } = useQuery<
    GetEpisodesQuery,
    GetEpisodesQueryVariables
  >(GET_EPISODES, {
    variables: { page },
  });

  if (loading) return <Loader />;
  if (error) return <p>Error!!</p>;

  return (
    <>
      <TableComponent
        headers={['Name', 'Air Date', 'Episode', 'Created', 'Actions']}
      >
        {data?.episodes?.results?.map((episode) => (
          <TableRow key={episode?.id}>
            <TableCell component='th' scope='row' width='15%'>
              {episode?.name}
            </TableCell>
            <TableCell align='left' width='15%'>
              {episode?.episode}
            </TableCell>
            <TableCell align='left' width='20%'>
              {episode?.air_date}
            </TableCell>
            <TableCell align='left' width='20%'>
              {episode?.created}
            </TableCell>
            <TableCell align='left' width='15%'>
              <Link to={`/episode/${episode?.id}`} className='detail-button'>
                View Episode
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableComponent>
      {data?.episodes?.info?.pages ? (
        <div className='pagination'>
          <Pagination
            count={data?.episodes?.info?.pages}
            page={page}
            onChange={(_, page) => setPage(page)}
          />
        </div>
      ) : null}
    </>
  );
};
