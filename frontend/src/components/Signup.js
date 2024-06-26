import * as React from 'react'; 
import Avatar from '@mui/material/Avatar'; 
import Button from '@mui/material/Button'; 
import CssBaseline from '@mui/material/CssBaseline'; 
import TextField from '@mui/material/TextField'; 
import FormControlLabel from '@mui/material/FormControlLabel'; 
import Checkbox from '@mui/material/Checkbox'; 
import Link from '@mui/material/Link'; 
import Grid from '@mui/material/Grid'; 
import Box from '@mui/material/Box'; 
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; 
import Typography from '@mui/material/Typography'; 
import Container from '@mui/material/Container'; 
import { createTheme, ThemeProvider } from '@mui/material/styles'; 
import InputLabel from '@mui/material/InputLabel'; 
import MenuItem from '@mui/material/MenuItem'; 
import FormControl from '@mui/material/FormControl'; 
import Select from '@mui/material/Select'; 
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 

function SignUp() { 
  const navigate = useNavigate();
  const [role, setRole] = React.useState('');
  
  const handleSubmit = async (event) => { 
    event.preventDefault(); 
    const data = new FormData(event.currentTarget); 
    console.log({ 
      name: data.get('Name'), 
      role: data.get('role'), 
      email: data.get('email'), 
      password: data.get('password'), 
    }); 
    
    try { 
      const response = await axios.post('http://localhost:8080/register', { 
        name: data.get('Name'), 
        role: data.get('role'), 
        email: data.get('email'), 
        password: data.get('password'), 
      }); 
      
      console.log(response.data); 
      navigate('/Data','/signin', { state: { email: data.get('email') } }); // Redirect to success page
    } catch (error) { 
      console.error('Error registering user:', error); 
    } 
  }; 

  const handleChange = (event) => { 
    setRole(event.target.value); 
  }; 

  return ( 
    <ThemeProvider theme={createTheme()}> 
      <Container component="main" maxWidth="xs"> 
        <CssBaseline /> 
        <Box 
          sx={{ 
            marginTop: 8, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
          }} 
        > 
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> 
            <LockOutlinedIcon /> 
          </Avatar> 
          <Typography component="h1" variant="h5"> 
            Sign up 
          </Typography> 
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}> 
            <Grid container spacing={2}> 
              <Grid item xs={12} sm={6}> 
                <TextField 
                  autoComplete="given-name" 
                  name="Name" 
                  required 
                  fullWidth 
                  id="Name" 
                  label="Name" 
                  autoFocus 
                /> 
              </Grid> 
              <Grid item xs={12} sm={6}> 
                <FormControl fullWidth> 
                  <InputLabel id="demo-simple-select-label">Role</InputLabel> 
                  <Select 
                    labelId="demo-simple-select-label" 
                    id="demo-simple-select" 
                    name="role" 
                    value={role} 
                    label="Role" 
                    onChange={handleChange} 
                  > 
                    <MenuItem value={1}>Admin</MenuItem> 
                    <MenuItem value={2}>Influencer</MenuItem> 
                    <MenuItem value={3}>Brand Manager</MenuItem> 
                  </Select> 
                </FormControl> 
              </Grid> 
              <Grid item xs={12}> 
                <TextField 
                  required 
                  fullWidth 
                  id="email" 
                  label="Email Address" 
                  name="email" 
                  autoComplete="email" 
                /> 
              </Grid> 
              <Grid item xs={12}> 
                <TextField 
                  required 
                  fullWidth 
                  name="password" 
                  label="Password" 
                  type="password" 
                  id="password" 
                  autoComplete="new-password" 
                /> 
              </Grid> 
              <Grid item xs={12}> 
                <FormControlLabel 
                  control={<Checkbox value="allowExtraEmails" color="primary" />} 
                  label="I want to receive inspiration, marketing promotions and updates via email." 
                /> 
              </Grid> 
            </Grid> 
            <Button 
              type="submit" 
              fullWidth 
              variant="contained" 
              sx={{ mt: 3, mb: 2 }} 
            > 
              Sign Up 
            </Button> 
            <Grid container justifyContent="flex-end"> 
              <Grid item> 
                <Link href="/signin" variant="body2"> 
                  Already have an account? Sign in 
                </Link> 
              </Grid> 
            </Grid> 
          </Box> 
        </Box> 
      </Container> 
    </ThemeProvider> 
  ); 
}

export default SignUp;
