// src/pages/UserLoginPage.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Card, CardContent, Avatar, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

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

const UserLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', 'user');
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
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
            User Login
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: '10px' }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: '20px' }}
          />
          {error && (
            <Typography color="error" gutterBottom>
              {error}
            </Typography>
          )}
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin} style={{ marginBottom: '10px' }}>
            Login
          </Button>
          <Link href="/signup" variant="body2" display="block" textAlign="center">
            Don't have an account? Sign Up
          </Link>
        </CardContent>
      </StyledCard>
    </StyledContainer>
  );
};

export default UserLoginPage;
