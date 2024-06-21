import React from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledCard = styled(Card)`
  margin: 20px 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ChallengeCard = ({ id, title, description, createdBy }) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" marginTop="10px">
          Created by: {createdBy}
        </Typography>
      </CardContent>
      <CardActions>
        <StyledLink to={`/challenges/${id}`}>
          <Button size="small">View Challenge</Button>
        </StyledLink>
      </CardActions>
    </StyledCard>
  );
};

export default ChallengeCard;
