import { Box, Typography } from "@mui/material";
import Header from "../../../components/Header";
import { useState, useEffect } from "react";

const DashboardStaff = () => {
  const [greeting, setGreeting] = useState("Hello");
  const [dateTime, setDateTime] = useState("");

  // Function to determine time-based greeting
  const updateGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  };

  // Function to update time and date every second
  const updateDateTime = () => {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString(undefined, options);
    const formattedTime = now.toLocaleTimeString();
    setDateTime(`${formattedDate}, ${formattedTime}`);
  };

  useEffect(() => {
    updateGreeting();
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ m: 2 }}>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          p: 2,
          bgcolor: "#1976d2", // Soft Blue background for the header
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Header title="DASHBOARD" subtitle={`${greeting}, Welcome to Aming Signature!`} />
        <Typography variant="body1" sx={{ color: "white" }}>
          {dateTime}
        </Typography>
      </Box>
    </Box>
  );
};

export default DashboardStaff;


