import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { TableRow, TableCell } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import TableComponent from '../Table/TableContainer';
import Loader from '../common/Loader';
import {
  GET_LOCATIONS,
  GetLocationsQuery,
  GetLocationsQueryVariables,
} from '../graphql';

export const LocationTable = () => {
  const [page, setPage] = useState(1);

  const { loading, error, data } = useQuery<
    GetLocationsQuery,
    GetLocationsQueryVariables
  >(GET_LOCATIONS, {
    variables: { page },
  });

  if (loading) return <Loader />;
  if (error) return <p>Error!!</p>;

  return (
    <>
      <TableComponent
        headers={['Name', 'Type', 'Dimension', 'Created', 'Actions']}
      >
        {data?.locations?.results?.map((location) => (
          <TableRow key={location?.id}>
            <TableCell component='th' scope='row' width='22%'>
              {location?.name}
            </TableCell>
            <TableCell align='left'>{location?.type}</TableCell>
            <TableCell align='left'>{location?.dimension}</TableCell>
            <TableCell align='left'>{location?.created}</TableCell>
            <TableCell align='left'>
              <Link to={`/location/${location?.id}`} className='detail-button'>
                View Location
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableComponent>
      {data?.locations?.info?.pages ? (
        <div className='pagination'>
          <Pagination
            count={data?.locations?.info?.pages}
            page={page}
            onChange={(_, page) => setPage(page)}
          />
        </div>
      ) : null}
    </>
  );
};
