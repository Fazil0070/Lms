import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

const TestCaseDisplay = ({ testCases }) => {
  return (
    <List>
      {testCases.map((testCase, index) => (
        <div key={index}>
          <ListItem>
            <ListItemText
              primary={`Input: ${testCase.input}`}
              secondary={`Expected Output: ${testCase.output}`}
            />
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
};

export default TestCaseDisplay;