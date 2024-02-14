import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SimpleContainer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: '#cfe8fc',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 3,
          }}
        >
          <div>
            <center>
              <h1>Contact US</h1>
            </center>
          </div>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <TextField
              label="Name"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              label="Message"
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              rows={4}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
}
