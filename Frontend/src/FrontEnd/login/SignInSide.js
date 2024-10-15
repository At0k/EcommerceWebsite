// import React, { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import { useNavigate, Link as RouterLink } from 'react-router-dom'; // Import RouterLink
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import AuthService from '../../Auth/AuthService';


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

// export default function SignInSide() {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoggedInAdmin, setIsLoggedInAdmin] = useState(false); 
//   const [isResetPassword, setIsResetPassword] = useState(false); // Track reset password state
//   const [newPassword, setNewPassword] = useState(""); // For resetting password

//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault(); // Prevent the default form submission behavior
  
//     try {
//       const success = await AuthService.login(email, password);
    
//       if (success) {
//         // After login, retrieve the role from localStorage
//         const userType = localStorage.getItem('role');
        
//         // Check the userType and redirect accordingly
//         if (userType === "Customer") {
//           navigate("/");  // Correct this path if necessary
//         } else if (userType === "Staff") {
//           navigate("/dashboard-staff");  // Correct this path if necessary
//         } else {
//           // Handle unexpected role
//           alert("Unknown user role.");
//         }
//       } else {
//         // Handle login failure and display an error message to the user
//         alert("Login failed. Please check your credentials.");
//       }
//     } catch (error) {
//       // Handle network or other errors
//       console.error("Login error:", error);
//       alert("An error occurred while logging in.");
//     }

//     if (!isResetPassword) {
//       try {
//         const success = await AuthService.login(email, password);
//         if (success) { /* ... role-based navigation */ }
//       } catch (error) { /* Handle error */ }    
//       } else {
//       // Handle normal login form submission
//       try {
//         const success = await AuthService.login(email, password);
//         if (success) {
//           const userType = localStorage.getItem('role');
//           if (userType === "Customer") {
//             navigate("/");
//           } else if (userType === "Staff") {
//             navigate("/dashboard-staff");
//           } else {
//             alert("Unknown user role.");
//           }
//         } else {
//           alert("Login failed. Please check your credentials.");
//         }
//       } catch (error) {
//         console.error("Login error:", error);
//         alert("An error occurred while logging in.");
//       }
//   };

//   }
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
//               {isResetPassword ? 'Reset Password' : 'Sign in'}
//             </Typography>
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//               <TextField
//                 onChange={(e) => setEmail(e.target.value)}
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//               />
//               {isResetPassword ? (
//                 <TextField
//                   onChange={(e) => setNewPassword(e.target.value)}
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="newPassword"
//                   label="New Password"
//                   type="password"
//                   id="newPassword"
//                   autoComplete="new-password"
//                 />
//               ) : (
//                 <TextField
//                   onChange={(e) => setPassword(e.target.value)}
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="current-password"
//                 />
//               )}
//               {!isResetPassword && (
//                 <FormControlLabel
//                   control={<Checkbox value="remember" color="primary" />}
//                   label="Remember me"
//                 />
//               )}
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 {isResetPassword ? 'Reset Password' : 'Sign In'}
//               </Button>
//               <Grid container>
//                 <Grid item xs>
//                   <Link href="#" variant="body2" onClick={() => setIsResetPassword(!isResetPassword)}>
//                     {isResetPassword ? 'Back to Sign In' : 'Forgot password?'}
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link component={RouterLink} to="/sign-up" variant="body2">
//                     {"Don't have an account? Sign Up"}
//                   </Link>
//                 </Grid>
//               </Grid>
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
import AuthService from '../../Auth/AuthService'; 
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import logo from '../../images/logo.png'; // Import your logo image

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

export default function SignInSide() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const success = await AuthService.login(email, password);

      if (success) {
        const userType = localStorage.getItem('role');
        if (userType === "Customer") {
          navigate("/");
        } else if (userType === "Staff") {
          navigate("/dashboard-staff");
        } else {
          alert("Unknown user role.");
        }
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred while logging in.");
    }
  }

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
            <Avatar sx={{ m: 1, bgcolor: 'transparent' }}> {/* Set bgcolor to transparent */}
              <img 
                src={logo} 
                alt="Logo" 
                style={{ width: '60px', height: '60px' }} // Adjust the size as needed
              />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: '#d84315', fontWeight: 'bold', fontSize: '20px' }}>
              Sign In
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 1, bgcolor: '#ff9800', '&:hover': { bgcolor: '#f57c00' } }} // Orange food theme color
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link component={RouterLink} to="/sign-up" variant="body2">
                    {"Don't have an account? Sign Up"}
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