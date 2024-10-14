// import React, { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import MenuItem from '@mui/material/MenuItem'; 
// import AuthService from '../../Auth/AuthService'; 
// import { useNavigate, Link as RouterLink } from 'react-router-dom';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const defaultTheme = createTheme();

// export default function SignUpSide() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phoneNo, setPhoneNo] = useState("");
//   const [role, setRole] = useState(""); // Role of the user
//   const [fullname, setFullname] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     try {
//       const success = await AuthService.register(username, email, password, phoneNo, role, fullname);
      
//       if (success) {
//         alert("Registration successful! You can now sign in.");
//         navigate("/sign-in"); // Redirect to the sign-in page
//       } else {
//         alert("Registration failed. Please try again.");
//       }
//     } catch (error) {
//       console.log("username:"+ username);
//       console.log("email:"+ email);
//       console.log("password:"+ password);
//       console.log("phoneNo:"+ phoneNo);
//       console.log("role:"+ role);
//       console.log("fullname:"+ fullname);

//       console.error("Registration error:", error);
//       alert("An error occurred during registration.");
//     }
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Grid container component="main" sx={{ height: '100vh' }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
//             backgroundRepeat: 'no-repeat',
//             backgroundColor: (t) =>
//               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign Up
//             </Typography>
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//               <TextField
//                 value={fullname}
//                 onChange={(e) => setFullname(e.target.value)}
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="name"
//                 label="Full Name"
//                 name="name"
//               />
//               <TextField
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="username"
//                 label="Username"
//                 name="username"
//               />
//               <TextField
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//               />
//               <TextField
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//               />
//               <TextField
//                 value={phoneNo}
//                 onChange={(e) => setPhoneNo(e.target.value)}
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="phoneNo"
//                 label="Phone Number"
//                 name="phoneNo"
//               />
//               <TextField
//                 select
//                 value={role}
//                 onChange={(e) => setRole(e.target.value)}
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="role"
//                 label="Role"
//                 name="role"
//               >
//                 <MenuItem value="Staff">Staff</MenuItem>
//                 <MenuItem value="Customer">Customer</MenuItem>
//               </TextField>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign Up
//               </Button>
//               <Grid container>
//                 <Grid item>
//                   <Link component={RouterLink} to="/sign-in" variant="body2">
//                     {"Already have an account? Sign In"}
//                   </Link>
//                 </Grid>
//               </Grid>
//               <Copyright sx={{ mt: 5 }} />
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }

import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem'; 
import AuthService from '../../Auth/AuthService'; 
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import logo from '../../images/logo.png'; // Adjust the path based on your structure

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Food Store
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif", // Updated font
    fontSize: 14, // Smaller default font size
  },
});

export default function SignUpSide() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [role, setRole] = useState(""); // Role of the user
  const [fullname, setFullname] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const success = await AuthService.register(username, email, password, phoneNo, role, fullname);
      
      if (success) {
        alert("Registration successful! You can now sign in.");
        navigate("/sign-in"); // Redirect to the sign-in page
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("An error occurred during registration.");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffe0b2' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square sx={{ borderRadius: '10px', backgroundColor: '#ffffff' }}>
          <Box
            sx={{
              my: 2,
              mx: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '16px',
              borderRadius: '10px',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'transparent' }}> {/* Darker orange for the avatar */}
              <img src={logo} alt="Logo" style={{ width: '60px', height: '60px' }} /> {/* Use logo image */}
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: '#d84315', fontWeight: 'bold', fontSize: '20px' }}>
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
              <TextField
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                sx={{
                  bgcolor: '#ffffff',
                  borderRadius: '5px',
                  height: '40px',
                  '& .MuiInputBase-input': {
                    height: '40px', // Set height for input box
                    padding: '10px', // Centering placeholder vertically
                  },
                  '& .MuiInputLabel-root': {
                    fontSize: '0.8rem', // Smaller font size for label
                  },
                  '& .MuiInputBase-input::placeholder': {
                    textAlign: 'center', // Center placeholder text
                  },
                }} 
              />
              <TextField
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                sx={{
                  bgcolor: '#ffffff',
                  borderRadius: '5px',
                  height: '40px',
                  '& .MuiInputBase-input': {
                    height: '40px',
                    padding: '10px',
                  },
                  '& .MuiInputLabel-root': {
                    fontSize: '0.8rem', // Smaller font size for label
                  },
                  '& .MuiInputBase-input::placeholder': {
                    textAlign: 'center', // Center placeholder text
                  },
                }} 
              />
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                sx={{
                  bgcolor: '#ffffff',
                  borderRadius: '5px',
                  height: '40px',
                  '& .MuiInputBase-input': {
                    height: '40px',
                    padding: '10px',
                  },
                  '& .MuiInputLabel-root': {
                    fontSize: '0.8rem', // Smaller font size for label
                  },
                  '& .MuiInputBase-input::placeholder': {
                    textAlign: 'center', // Center placeholder text
                  },
                }} 
              />
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                sx={{
                  bgcolor: '#ffffff',
                  borderRadius: '5px',
                  height: '40px',
                  '& .MuiInputBase-input': {
                    height: '40px',
                    padding: '10px',
                  },
                  '& .MuiInputLabel-root': {
                    fontSize: '0.8rem', // Smaller font size for label
                  },
                  '& .MuiInputBase-input::placeholder': {
                    textAlign: 'center', // Center placeholder text
                  },
                }} 
              />
              <TextField
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="phoneNo"
                label="Phone Number"
                name="phoneNo"
                sx={{
                  bgcolor: '#ffffff',
                  borderRadius: '5px',
                  height: '40px',
                  '& .MuiInputBase-input': {
                    height: '40px',
                    padding: '10px',
                  },
                  '& .MuiInputLabel-root': {
                    fontSize: '0.8rem', // Smaller font size for label
                  },
                  '& .MuiInputBase-input::placeholder': {
                    textAlign: 'center', // Center placeholder text
                  },
                }} 
              />
              <TextField
                select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="role"
                label="Role"
                name="role"
                sx={{
                  bgcolor: '#ffffff',
                  borderRadius: '5px',
                  height: '40px',
                  '& .MuiInputBase-input': {
                    height: '40px',
                    padding: '10px',
                  },
                  '& .MuiInputLabel-root': {
                    fontSize: '0.8rem', // Smaller font size for label
                  },
                  '& .MuiInputBase-input::placeholder': {
                    textAlign: 'center', // Center placeholder text
                  },
                }} 
              >
                <MenuItem value="Staff">Staff</MenuItem>
                <MenuItem value="Customer">Customer</MenuItem>
              </TextField>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 1, bgcolor: '#ff9800', '&:hover': { bgcolor: '#f57c00' } }} // Orange food theme color
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item>
                  <Link component={RouterLink} to="/sign-in" variant="body2">
                    {"Already have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 2 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}