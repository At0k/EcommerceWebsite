import { Box, Typography, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Header from "../../../components/Header";
import React, { useState, useEffect } from "react";
import AuthService from '../../../Auth/AuthService';

interface User {
    id: string; // or number
    username: string;
    fullname: string;
    email: string; 
    phoneNo: string;
    role: string;
  }
const TeamAdmin = () => {
 
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8082/api/Users'); // Fetch all users
        console.log("Response status:", response.status);
        
        if (response.status === 401) {
          navigate('/sign-in');  // Redirect if not authenticated
        } else if (response.ok) {
          const data = await response.json(); // If response is OK, parse as JSON
          console.log("Fetched users data:", data);
          setUsers(data); // Store the fetched users data
        } else {
          const errorText = await response.text();
          throw new Error(errorText); // Log the response text for non-200 statuses
        }
      } catch (error) {
        console.error("Error fetching users data:", error);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Team" subtitle="Anjing the Team" />
      </Box>

      <Box mt={4}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Fullname</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone No</TableCell>
                <TableCell>Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}> {/* Correct key for rows */}
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.fullname}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phoneNo}</TableCell>
                  <TableCell>{user.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Link to="/AddTeam" style={{ textDecoration: 'none' }}>
        <Grid container justifyContent="flex-end">
          <Box sx={{ m: 2 }}>
            <Button
              startIcon={<PersonAddAltOutlinedIcon />}
              justifyContent="center"
              variant="contained"
              size="large"
              color="success"
            >
              Add Team Member
            </Button>
          </Box>
        </Grid>
      </Link>
    </Box>
  );
};

export default TeamAdmin;

