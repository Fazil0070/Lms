// src/pages/UserSignupPage.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Card, CardContent, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledCard = styled(Card)`
  max-width: 400px;
  width: 100%;
  padding: 20px;
`;

const StyledAvatar = styled(Avatar)`
  background-color: #f50057;
  margin: 10px auto;
`;

const UserSignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    college: '',
    department: '',
    year: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      await axios.post('/api/signup', formData);
      navigate('/login');
    } catch (err) {
      setError('Failed to create account');
    }
  };

  return (
    <StyledContainer>
      <StyledCard>
        <CardContent>
          <StyledAvatar>
            <LockOutlinedIcon />
          </StyledAvatar>
          <Typography variant="h5" align="center" gutterBottom>
            Sign Up
          </Typography>
          {Object.keys(formData).map((key) => (
            <TextField
              key={key}
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              variant="outlined"
              fullWidth
              name={key}
              value={formData[key]}
              onChange={handleChange}
              style={{ marginBottom: '10px' }}
              type={key === 'password' ? 'password' : 'text'}
            />
          ))}
          {error && (
            <Typography color="error" gutterBottom>
              {error}
            </Typography>
          )}
          <Button variant="contained" color="primary" fullWidth onClick={handleSignup}>
            Sign Up
          </Button>
        </CardContent>
      </StyledCard>
    </StyledContainer>
  );
};

export default UserSignupPage;
