import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Container, Typography, Box, Radio, RadioGroup, FormControlLabel, Button, CircularProgress } from '@mui/material';
import axios from 'axios';
import styled from '@emotion/styled';

const TestContainer = styled(Container)`
  margin-top: 20px;
`;

const QuestionBox = styled(Box)`
  margin-bottom: 20px;
`;

const TestPage = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('/api/questions');
        setQuestions(response.data);
      } catch (err) {
        console.error('Failed to fetch questions:', err);
        setError('Failed to fetch questions');
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  const handleChange = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/submit-test', { answers });
      setScore(response.data.score);
    } catch (err) {
      console.error('Failed to submit test:', err);
      setError('Failed to submit test');
    }
  };

  if (loading) {
    return (
      <div>
        <Navbar />
        <TestContainer>
          <CircularProgress />
        </TestContainer>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Navbar />
        <TestContainer>
          <Typography variant="h6" color="error">
            {error}
          </Typography>
        </TestContainer>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <TestContainer>
        <Typography variant="h4" gutterBottom>
          Test
        </Typography>
        {questions.map((question, index) => (
          <QuestionBox key={question._id}>
            <Typography variant="h6">
              {index + 1}. {question.text}
            </Typography>
            <RadioGroup
              value={answers[question._id] || ''}
              onChange={(e) => handleChange(question._id, e.target.value)}
            >
              {question.options.map((option, i) => (
                <FormControlLabel
                  key={i}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </QuestionBox>
        ))}
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit Test
        </Button>
        {score !== null && (
          <Typography variant="h6" color="primary" style={{ marginTop: '20px' }}>
            Your Score: {score}
          </Typography>
        )}
      </TestContainer>
    </div>
  );
};

export default TestPage;
