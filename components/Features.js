import React from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import styled from '@emotion/styled';

const FeatureItem = styled(Paper)`
  padding: 20px;
  text-align: center;
  color: #000;
`;

const Features = () => {
  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Features
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <FeatureItem elevation={3}>Feature 1</FeatureItem>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FeatureItem elevation={3}>Feature 2</FeatureItem>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FeatureItem elevation={3}>Feature 3</FeatureItem>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
