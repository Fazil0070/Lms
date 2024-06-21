import React from 'react';
import Navbar from '../components/Navbar';
import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInUp = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const typing = keyframes`
  0% { width: 0; }
  50% { width: 100%; }
  100% { width: 0; }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: orange; }
`;

const HeroSection = styled(Box)`
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  color: white;
  padding: 120px 20px;
  text-align: center;
  position: relative;
  animation: ${fadeIn} 2s ease-in-out;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
`;

const HeroContent = styled(Box)`
  position: relative;
  z-index: 1;
  animation: ${slideInUp} 1.5s ease-out;
`;

const AnimatedCode = styled(Box)`
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.2em;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 5px;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.15em solid orange;
  margin: 20px 0;
  animation: ${typing} 4s steps(40, end) infinite, ${blinkCaret} 0.2s step-end infinite;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  background-color: #fff;
  color: #4facfe;
  font-weight: bold;
  transition: all 0.3s ease;
  animation: ${slideInUp} 1s ease-out;

  &:hover {
    background-color: #4facfe;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
`;

const FeatureCard = styled(Paper)`
  padding: 40px;
  text-align: center;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  animation: ${slideInUp} 1s ease-out;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #4facfe, #00f2fe);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);

    &:before {
      opacity: 0.2;
    }
  }
`;

const SectionContainer = styled(Container)`
  padding: 80px 0;
`;

const StyledGridItem = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const StyledSectionTitle = styled(Typography)`
  margin-bottom: 40px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #4facfe;
  animation: ${fadeIn} 2s ease-in-out;
`;

const LearnWithUs = () => (
  <SectionContainer sx={{ backgroundColor: '#f8f8f8', py: 6 }}>
    <Container maxWidth="md">
      <StyledSectionTitle variant="h4" align="center" gutterBottom>
        Learn with Us
      </StyledSectionTitle>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <StyledGridItem item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Expand Your Knowledge
          </Typography>
          <Typography variant="body1" gutterBottom>
            Dive deep into programming concepts with our comprehensive tutorials and articles.
          </Typography>
        </StyledGridItem>
        <StyledGridItem item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Hands-On Projects
          </Typography>
          <Typography variant="body1" gutterBottom>
            Gain practical experience by working on real-world projects tailored for all skill levels.
          </Typography>
        </StyledGridItem>
      </Grid>
    </Container>
  </SectionContainer>
);

const OurCommunity = () => (
  <SectionContainer sx={{ backgroundColor: '#fff', py: 6 }}>
    <Container maxWidth="md">
      <StyledSectionTitle variant="h4" align="center" gutterBottom>
        Our Community
      </StyledSectionTitle>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <StyledGridItem item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Join the Discussion
          </Typography>
          <Typography variant="body1" gutterBottom>
            Connect with like-minded individuals, share insights, and collaborate on innovative projects.
          </Typography>
        </StyledGridItem>
        <StyledGridItem item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Tech Events
          </Typography>
          <Typography variant="body1" gutterBottom>
            Attend workshops, webinars, and hackathons to stay updated with the latest trends in technology.
          </Typography>
        </StyledGridItem>
      </Grid>
    </Container>
  </SectionContainer>
);

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/signup');
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="md">
          <HeroContent>
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to Coding Challenge Platform
            </Typography>
            <Typography variant="h5" gutterBottom>
              Test your coding skills with various challenges.
            </Typography>
            <StyledButton variant="contained" size="large" onClick={handleGetStartedClick}>
              Get Started
            </StyledButton>
            <AnimatedCode>
              {`const solveChallenge = () => {
  console.log("Welcome to the challenge!");
};`}
            </AnimatedCode>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Features Section */}
      <SectionContainer sx={{ py: 6 }}>
        <StyledSectionTitle variant="h4" component="h2" align="center" gutterBottom>
          Key Features
        </StyledSectionTitle>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard elevation={3}>
              <Typography variant="h5" gutterBottom>
                Practice Challenges
              </Typography>
              <Typography>Practice coding challenges on various topics.</Typography>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard elevation={3}>
              <Typography variant="h5" gutterBottom>
                Compete Globally
              </Typography>
              <Typography>Compete with programmers from around the world.</Typography>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard elevation={3}>
              <Typography variant="h5" gutterBottom>
                Learn New Skills
              </Typography>
              <Typography>Learn new skills and improve your coding abilities.</Typography>
            </FeatureCard>
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Testimonials Section */}
      <SectionContainer sx={{ py: 6 }}>
        <StyledSectionTitle variant="h4" component="h2" align="center" gutterBottom>
          What People Say
        </StyledSectionTitle>
        <Testimonials />
      </SectionContainer>

      {/* Learn with Us Section */}
      <LearnWithUs />

      {/* Our Community Section */}
      <OurCommunity />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
