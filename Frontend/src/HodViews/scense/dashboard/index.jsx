import { Box } from "@mui/material";
import Header from "../../../components/Header";

const DashboardAdmin = () => {
  return (
    <Box sx={{ margin: 2 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          padding: 2,
          backgroundColor: "background.default",
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Header title="DASHBOARD" subtitle="Welcome to Wesitex Dashboard" />
      </Box>
    </Box>
  );
};

export default DashboardAdmin;

/* import { Box } from "@mui/material";
import Header from "../../../components/Header";

const DashboardAdmin = () =>{
    return <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle = "Welcome to Wesitex Dashboard" />
        </Box>
    </Box>
}

export default DashboardAdmin; */
