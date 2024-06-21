import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import styled from '@emotion/styled';

const FooterBox = styled(Box)`
  margin-top: 32px;
  padding: 16px 0;
  background-color: #f5f5f5;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterBox>
      <Container maxWidth="sm">
        <Typography variant="body1">© 2024 Coding Challenge Platform. All rights reserved.</Typography>
      </Container>
    </FooterBox>
  );
};

export default Footer;
