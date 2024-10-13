/* import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import GetItemsManager from "../../getItemManager";

const ProductForm = () => {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
        description: ""
    });
    const { id } = useParams(); // If editing, fetch product ID from the URL params
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            GetItemsManager.getProductById(id).then((result) => {
                setProduct(result.data);
            });
        }
    }, [id]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (id) {
            GetItemsManager.updateProduct(id, product)
                .then(() => navigate("/products"))
                .catch((error) => console.error("Error updating product:", error));
        } else {
            GetItemsManager.addProduct(product)
                .then(() => navigate("/products"))
                .catch((error) => console.error("Error adding product:", error));
        }
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom>{id ? "Edit" : "Add"} Product</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="name"
                            label="Product Name"
                            value={product.name}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="price"
                            label="Price"
                            value={product.price}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="category"
                            label="Category"
                            value={product.category}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="description"
                            label="Description"
                            value={product.description}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            {id ? "Update" : "Add"} Product
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default ProductForm; */


import { Box, Typography, useTheme, Button, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { tokens } from "../../../base/theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import Header from "../../../components/Header";
import React, { useState, useEffect } from "react";
import GetItemsManager from "../../getItemManager";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const DriverManager = () => {
  const [teamDetails, setTeamDetails] = useState([]);

  useEffect(() => {
    GetItemsManager.getTeamDataManager()
      .then((result) => {
        const teamData = result.data || [];
        setTeamDetails(teamData);
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
      });
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Name", flex: 1, sortable: true },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "email", headerName: "Email", flex: 1, sortable: true },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            p="5px"
            width="60%"
            m="0 auto"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography
              variant="body1"
              color={colors.grey[100]}
              sx={{ ml: "5px" }}
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "edit",
      headerName: "Edit",
      flex: 0.7,
      renderCell: ({ row }) => {
        return (
          <Link to={`/editTeam/${row.id}`} style={{ textDecoration: "none" }}>
            <Button
              startIcon={<EditOutlinedIcon />}
              color="primary"
              variant="outlined"
              sx={{ textTransform: "none" }}
            >
              Edit
            </Button>
          </Link>
        );
      },
    },
  ];

  return (
    <Box>
      <Header title="Customer" subtitle="Customer Details" />
      <Box
        sx={{
          height: 600,
          width: "100%",
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={teamDetails} columns={columns} pageSize={10} />
      </Box>
      <Link to="/add-driver" style={{ textDecoration: "none" }}>
        <Grid container justifyContent="flex-end">
          <Box sx={{ m: 2 }}>
            <Button
              startIcon={<PersonAddAltOutlinedIcon />}
              justifyContent="center"
              variant="contained"
              size="large"
              color="success"
            >
              Add Driver
            </Button>
          </Box>
        </Grid>
      </Link>
    </Box>
  );
};

export default DriverManager;

