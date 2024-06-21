// src/pages/AdminCreateTestPage.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Container, TextField, Button, Typography, Box, Grid, Card, CardContent, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from '@emotion/styled';

const AdminContainer = styled(Container)`
  margin-top: 40px;
  margin-bottom: 40px;
`;

const QuestionCard = styled(Card)`
  margin-bottom: 20px;
`;

const AdminCreateTestPage = () => {
  const [testTitle, setTestTitle] = useState('');
  const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''], correctAnswer: '' }]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''], correctAnswer: '' }]);
  };

  const handleQuestionChange = (index, key, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][key] = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].options[oIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleSubmit = async () => {
    const test = {
      title: testTitle,
      questions,
    };
    // Add your Axios logic here to submit the test data to the backend
    console.log(test);
  };

  return (
    <div>
      <Navbar />
      <AdminContainer maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Create New Test
        </Typography>
        <TextField
          label="Test Title"
          fullWidth
          variant="outlined"
          value={testTitle}
          onChange={(e) => setTestTitle(e.target.value)}
          style={{ marginBottom: '20px' }}
        />
        <Grid container spacing={2}>
          {questions.map((q, qIndex) => (
            <Grid item xs={12} key={qIndex}>
              <QuestionCard>
                <CardContent>
                  <TextField
                    label={`Question ${qIndex + 1}`}
                    fullWidth
                    variant="outlined"
                    value={q.question}
                    onChange={(e) => handleQuestionChange(qIndex, 'question', e.target.value)}
                    style={{ marginBottom: '10px' }}
                  />
                  {q.options.map((option, oIndex) => (
                    <TextField
                      key={oIndex}
                      label={`Option ${oIndex + 1}`}
                      fullWidth
                      variant="outlined"
                      value={option}
                      onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                      style={{ marginBottom: '10px' }}
                    />
                  ))}
                  <TextField
                    label="Correct Answer"
                    fullWidth
                    variant="outlined"
                    value={q.correctAnswer}
                    onChange={(e) => handleQuestionChange(qIndex, 'correctAnswer', e.target.value)}
                  />
                  <IconButton aria-label="delete" onClick={() => handleDeleteQuestion(qIndex)}>
                    <DeleteIcon />
                  </IconButton>
                </CardContent>
              </QuestionCard>
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center" marginTop={2} marginBottom={4}>
          {/* Increased marginBottom to create more space */}
          <Button variant="contained" color="primary" onClick={handleAddQuestion}>
            Add Question
          </Button>
        </Box>
        <Box textAlign="center" marginBottom={10}>
          {/* Increased marginBottom even more */}
          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            Create Test
          </Button>
        </Box>
        <Box height={10} /> {/* Additional space */}
      </AdminContainer>
    </div>
  );
};

export default AdminCreateTestPage;
