import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Container, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TableSortLabel, TablePagination, Paper } from '@mui/material';
import axios from 'axios';
import styled from '@emotion/styled';

const LeaderboardContainer = styled(Container)`
  margin-top: 20px;
`;

const LeaderboardPage = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderBy, setOrderBy] = useState('totalPoints');
  const [order, setOrder] = useState('desc');

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get('/api/leaderboard');
        setLeaderboard(response.data);
      } catch (error) {
        console.error('Failed to fetch leaderboard:', error);
      }
    };
    fetchLeaderboard();
  }, []);

  const handleSortRequest = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedLeaderboard = [...leaderboard].sort((a, b) => {
    if (order === 'asc') {
      return a[orderBy] - b[orderBy];
    }
    return b[orderBy] - a[orderBy];
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, leaderboard.length - page * rowsPerPage);

  return (
    <div>
      <Navbar />
      <LeaderboardContainer>
        <Typography variant="h4" gutterBottom>
          Leaderboard
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'username'}
                    direction={orderBy === 'username' ? order : 'asc'}
                    onClick={() => handleSortRequest('username')}
                  >
                    Username
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'college'}
                    direction={orderBy === 'college' ? order : 'asc'}
                    onClick={() => handleSortRequest('college')}
                  >
                    College
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'department'}
                    direction={orderBy === 'department' ? order : 'asc'}
                    onClick={() => handleSortRequest('department')}
                  >
                    Department
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'year'}
                    direction={orderBy === 'year' ? order : 'asc'}
                    onClick={() => handleSortRequest('year')}
                  >
                    Year
                  </TableSortLabel>
                </TableCell>
                <TableCell align="right">
                  <TableSortLabel
                    active={orderBy === 'mcqPoints'}
                    direction={orderBy === 'mcqPoints' ? order : 'asc'}
                    onClick={() => handleSortRequest('mcqPoints')}
                  >
                    MCQ Points
                  </TableSortLabel>
                </TableCell>
                <TableCell align="right">
                  <TableSortLabel
                    active={orderBy === 'codingPoints'}
                    direction={orderBy === 'codingPoints' ? order : 'asc'}
                    onClick={() => handleSortRequest('codingPoints')}
                  >
                    Coding Challenge Points
                  </TableSortLabel>
                </TableCell>
                <TableCell align="right">
                  <TableSortLabel
                    active={orderBy === 'totalPoints'}
                    direction={orderBy === 'totalPoints' ? order : 'asc'}
                    onClick={() => handleSortRequest('totalPoints')}
                  >
                    Total Points
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedLeaderboard.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.college}</TableCell>
                  <TableCell>{user.department}</TableCell>
                  <TableCell>{user.year}</TableCell>
                  <TableCell align="right">{user.mcqPoints}</TableCell>
                  <TableCell align="right">{user.codingPoints}</TableCell>
                  <TableCell align="right">{user.totalPoints}</TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={7} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={leaderboard.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </LeaderboardContainer>
    </div>
  );
};

export default LeaderboardPage;
