import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Container, Typography, Box, CircularProgress, Paper } from '@mui/material';
import axios from 'axios';
import styled from '@emotion/styled';

const ProfileContainer = styled(Container)`
  margin-top: 20px;
`;

const ProfilePaper = styled(Paper)`
  padding: 20px;
  margin-top: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProfileField = styled(Box)`
  margin-bottom: 20px;
`;

const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/profile');
        setProfile(response.data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div>
        <Navbar />
        <ProfileContainer>
          <CircularProgress />
        </ProfileContainer>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <ProfileContainer>
        <Typography variant="h4" gutterBottom>
          Profile
        </Typography>
        <ProfilePaper>
          <ProfileField>
            <Typography variant="h6">
              Username: {profile.username}
            </Typography>
          </ProfileField>
          <ProfileField>
            <Typography variant="h6">
              Email: {profile.email}
            </Typography>
          </ProfileField>
          <ProfileField>
            <Typography variant="h6">
              Points: {profile.points}
            </Typography>
          </ProfileField>
          <ProfileField>
            <Typography variant="h6">
              College: {profile.college || 'N/A'}
            </Typography>
          </ProfileField>
          <ProfileField>
            <Typography variant="h6">
              Department: {profile.department || 'N/A'}
            </Typography>
          </ProfileField>
          <ProfileField>
            <Typography variant="h6">
              Year: {profile.year || 'N/A'}
            </Typography>
          </ProfileField>
          {/* Additional profile details can be added here */}
        </ProfilePaper>
      </ProfileContainer>
    </div>
  );
};

export default ProfilePage;
