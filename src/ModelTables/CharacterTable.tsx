import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Pagination from '@material-ui/lab/Pagination';
import { TableRow, TableCell } from '@material-ui/core';
import TableComponent from '../Table/TableContainer';
import Loader from '../common/Loader';
import {
  GET_CHARACTERS,
  GetCharactersQuery,
  GetCharactersQueryVariables,
} from '../graphql';

export const CharacterTable = () => {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery<
    GetCharactersQuery,
    GetCharactersQueryVariables
  >(GET_CHARACTERS, {
    variables: { page },
  });

  if (loading) return <Loader />;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <TableComponent
        headers={['Name', 'Species', 'Origin', 'Location', 'Actions']}
      >
        {data?.characters?.results?.map((character: any) => (
          <TableRow key={character?.id}>
            <TableCell component='th' scope='row' width='15%'>
              {character?.name}
            </TableCell>
            <TableCell align='left' width='15%'>
              {character?.species}
            </TableCell>
            <TableCell align='left' width='20%'>
              {character?.origin?.name}
            </TableCell>
            <TableCell align='left' width='20%'>
              {character?.location?.name}
            </TableCell>
            <TableCell align='left' width='10%'>
              <Link
                to={`/character/${character?.id}`}
                className='detail-button'
              >
                Details
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableComponent>
      {data?.characters?.info?.pages ? (
        <div className='pagination'>
          <Pagination
            count={data?.characters?.info?.pages}
            page={page}
            onChange={(_, page) => setPage(page)}
          />
        </div>
      ) : null}
    </>
  );
};
