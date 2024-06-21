import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ChallengeCard from '../components/ChallengeCard';
import { Container, CircularProgress, Typography, Box, TextField, InputAdornment } from '@mui/material';
import axios from 'axios';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = styled(Box)`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const ChallengesContainer = styled(Container)`
  margin-top: 20px; /* Adjusted top margin */
  padding-bottom: 40px; /* Added bottom padding for space */
`;

const LoaderContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const NoChallengesContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const defaultChallenges = [
  {
    _id: '1',
    title: 'Two Sum',
    description: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
    createdBy: { username: 'admin' }
  },
  {
    _id: '2',
    title: 'Reverse Integer',
    description: 'Given a 32-bit signed integer, reverse digits of an integer.',
    createdBy: { username: 'admin' }
  },
  {
    _id: '3',
    title: 'Palindrome Number',
    description: 'Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.',
    createdBy: { username: 'admin' }
  }
];

const ChallengesPage = () => {
  const [challenges, setChallenges] = useState(defaultChallenges);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await axios.get('/api/challenges');
        if (response.data.length > 0) {
          setChallenges(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch challenges', error);
      } finally {
        setLoading(false);
      }
    };
    fetchChallenges();
  }, []);

  const filteredChallenges = challenges.filter(challenge =>
    challenge.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <SearchBox>
        <TextField
          variant="outlined"
          placeholder="Search challenges..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </SearchBox>
      <ChallengesContainer>
        {loading ? (
          <LoaderContainer>
            <CircularProgress />
          </LoaderContainer>
        ) : filteredChallenges.length > 0 ? (
          filteredChallenges.map((challenge) => (
            <ChallengeCard
              key={challenge._id}
              id={challenge._id}
              title={challenge.title}
              description={challenge.description}
              createdBy={challenge.createdBy.username}
            />
          ))
        ) : (
          <NoChallengesContainer>
            <Typography variant="h6">No challenges found</Typography>
          </NoChallengesContainer>
        )}
      </ChallengesContainer>
    </div>
  );
};

export default ChallengesPage;
