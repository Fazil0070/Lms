// src/pages/ChallengeDetailPage.js
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Container, Typography, Box, Button, TextField, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from '@emotion/styled';

const DetailContainer = styled(Container)`
  margin-top: 20px;
`;

const ChallengeDetailPage = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);
  const [loading, setLoading] = useState(true);
  const [solution, setSolution] = useState('');

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const response = await axios.get(`/api/challenges/${id}`);
        setChallenge(response.data);
      } catch (error) {
        console.error('Failed to fetch challenge', error);
      } finally {
        setLoading(false);
      }
    };
    fetchChallenge();
  }, [id]);

  const handleSubmitSolution = async () => {
    // Handle solution submission logic
    // This could involve sending the solution to an API endpoint for validation
  };

  if (loading) {
    return (
      <div>
        <Navbar />
        <DetailContainer>
          <CircularProgress />
        </DetailContainer>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <DetailContainer>
        {challenge ? (
          <Box>
            <Typography variant="h4" gutterBottom>
              {challenge.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {challenge.description}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Created by: {challenge.createdBy.username}
            </Typography>
            <Box mt={4}>
              <Typography variant="h6">Submit Your Solution</Typography>
              <TextField
                label="Solution"
                fullWidth
                multiline
                rows={10}
                variant="outlined"
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
                style={{ marginTop: '10px' }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmitSolution}
                style={{ marginTop: '10px' }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        ) : (
          <Typography variant="h6" color="error">
            Challenge not found
          </Typography>
        )}
      </DetailContainer>
    </div>
  );
};

export default ChallengeDetailPage;
