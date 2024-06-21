import React from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import styled from '@emotion/styled';

const TestimonialItem = styled(Paper)`
  && {
    padding: 20px;
    text-align: center;
    color: #000;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content:
        "I've improved my problem-solving skills significantly with the challenges on this platform. It's addictive!",
      author: "John Doe",
      position: "Software Engineer",
    },
    {
      id: 2,
      content:
        "The coding challenges are well-structured and cover a wide range of topics. Great for learning!",
      author: "Jane Smith",
      position: "Full Stack Developer",
    },
    {
      id: 3,
      content:
        "Competing in global leaderboards has been a thrilling experience. I'm hooked!",
      author: "Alex Johnson",
      position: "Frontend Developer",
    },
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Testimonials
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {testimonials.map((testimonial) => (
          <Grid item key={testimonial.id} xs={12} sm={4}>
            <TestimonialItem elevation={3}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                "{testimonial.content}"
              </Typography>
              <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 'bold' }}>
                {testimonial.author}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {testimonial.position}
              </Typography>
            </TestimonialItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
