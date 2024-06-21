import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Container, TextField, Button, Typography, Grid } from '@mui/material';
import axios from 'axios';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';

const TestCaseContainer = styled(motion.div)`
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

const AddTestCaseButton = styled(Button)`
  margin-top: 20px;
`;

const SubmitButton = styled(Button)`
  margin-top: 30px;
  margin-bottom: 40px; /* Additional space below the button */
`;

const DeleteTestCaseButton = styled(Button)`
  margin-left: 10px;
`;

const CreateChallengePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [testCases, setTestCases] = useState([{ input: '', output: '' }]);

  const handleAddTestCase = () => {
    setTestCases([...testCases, { input: '', output: '' }]);
  };

  const handleRemoveTestCase = (index) => {
    const newTestCases = [...testCases];
    newTestCases.splice(index, 1);
    setTestCases(newTestCases);
  };

  const handleTestCaseInputChange = (index, field, value) => {
    const newTestCases = [...testCases];
    newTestCases[index][field] = value;
    setTestCases(newTestCases);
  };

  const handleSubmit = async () => {
    const challenge = {
      title,
      description,
      testCases,
      createdBy: 'user_id', // Replace with actual user ID from auth context
    };

    try {
      await axios.post('/api/challenges/create', challenge);
      // Optionally handle success, e.g., show a success message or redirect to another page
      console.log('Challenge created successfully:', challenge);
    } catch (error) {
      console.error('Failed to create challenge:', error);
      // Optionally handle error, e.g., show an error message to the user
    }
  };

  return (
    <div>
      <Navbar />
      <Container style={{ marginTop: '30px', marginBottom: '80px' }}>
        <Typography variant="h4" gutterBottom>
          Create New Challenge
        </Typography>
        <TextField
          label="Title"
          fullWidth
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Description"
          fullWidth
          variant="outlined"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
        />
        {testCases.map((testCase, index) => (
          <TestCaseContainer key={index} layout whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Typography variant="subtitle1" gutterBottom>
              Test Case {index + 1}
              {testCases.length > 1 && (
                <DeleteTestCaseButton
                  variant="outlined"
                  size="small"
                  onClick={() => handleRemoveTestCase(index)}
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </DeleteTestCaseButton>
              )}
            </Typography>
            <TextField
              label="Input"
              fullWidth
              variant="outlined"
              value={testCase.input}
              onChange={(e) => handleTestCaseInputChange(index, 'input', e.target.value)}
              margin="normal"
            />
            <TextField
              label="Output"
              fullWidth
              variant="outlined"
              value={testCase.output}
              onChange={(e) => handleTestCaseInputChange(index, 'output', e.target.value)}
              margin="normal"
            />
          </TestCaseContainer>
        ))}
        <Grid container justifyContent="flex-end">
          <AddTestCaseButton
            variant="contained"
            color="primary"
            onClick={handleAddTestCase}
            startIcon={<AddIcon />}
            size="large"
          >
            Add Test Case
          </AddTestCaseButton>
        </Grid>
        <SubmitButton variant="contained" color="primary" onClick={handleSubmit} fullWidth size="large">
          Create Challenge
        </SubmitButton>
      </Container>
    </div>
  );
};

export default CreateChallengePage;