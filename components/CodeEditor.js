import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const CodeEditor = ({ onSubmit }) => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('python');

  const handleSubmit = () => {
    onSubmit(code, language);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <FormControl fullWidth variant="outlined" style={{ marginBottom: '10px' }}>
        <InputLabel>Language</InputLabel>
        <Select value={language} onChange={(e) => setLanguage(e.target.value)} label="Language">
          <MenuItem value="python">Python</MenuItem>
          <MenuItem value="java">Java</MenuItem>
          <MenuItem value="cpp">C++</MenuItem>
          <MenuItem value="c">C</MenuItem>
          <MenuItem value="csharp">C#</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Code"
        multiline
        rows={10}
        variant="outlined"
        fullWidth
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '10px' }}>
        Submit Code
      </Button>
    </div>
  );
};

export default CodeEditor;