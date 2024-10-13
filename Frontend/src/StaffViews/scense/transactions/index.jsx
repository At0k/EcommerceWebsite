import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Grid, Typography, Paper, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import GetItemsManager from "../../getItemManager";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const categories = ["Side Dishes", "Sambal", "Dessert"]; // Example categories

const ProductForm = () => {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
        description: ""
    });
    const [errors, setErrors] = useState({});
    const [products, setProducts] = useState([]); // Store the list of products
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            GetItemsManager.getProductById(id).then((result) => {
                setProduct(result.data);
            });
        }
        // Fetch all products on load
        GetItemsManager.getProducts().then((result) => {
            setProducts(result.data); // Assuming result.data contains the list of products
        });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.name = product.name ? "" : "Product name is required.";
        tempErrors.price = product.price && !isNaN(product.price) ? "" : "Valid price is required.";
        tempErrors.category = product.category ? "" : "Category is required.";
        tempErrors.description = product.description ? "" : "Description is required.";
        setErrors(tempErrors);
        return Object.values(tempErrors).every((x) => x === "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            if (id) {
                GetItemsManager.updateProduct(id, product)
                    .then(() => navigate(`/product-details/${id}`))
                    .catch((error) => console.error("Error updating product:", error));
            } else {
                GetItemsManager.addProduct(product)
                    .then((result) => navigate(`/product-details/${result.data.id}`))
                    .catch((error) => console.error("Error adding product:", error));
            }
        }
    };

    // Handle delete product
    const handleDelete = (productId) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            GetItemsManager.deleteProduct(productId).then(() => {
                setProducts(products.filter((product) => product.id !== productId)); // Remove deleted product from the list
            }).catch((error) => console.error("Error deleting product:", error));
        }
    };

    return (
        <>
            <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: "auto", mt: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    {id ? "Edit" : "Add"} Product
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="name"
                                label="Product Name"
                                value={product.name}
                                onChange={handleChange}
                                error={!!errors.name}
                                helperText={errors.name}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="price"
                                label="Price"
                                value={product.price}
                                onChange={handleChange}
                                error={!!errors.price}
                                helperText={errors.price}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                select
                                name="category"
                                label="Category"
                                value={product.category}
                                onChange={handleChange}
                                error={!!errors.category}
                                helperText={errors.category}
                            >
                                {categories.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="description"
                                label="Description"
                                value={product.description}
                                onChange={handleChange}
                                multiline
                                rows={4}
                                error={!!errors.description}
                                helperText={errors.description}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ py: 1.5 }}
                            >
                                {id ? "Update" : "Add"} Product
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>

            {/* Product Table */}
            <Box sx={{ mt: 4, maxWidth: 800, mx: "auto" }}>
                <Typography variant="h5" gutterBottom>
                    Product List
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((prod) => (
                                <TableRow key={prod.id}>
                                    <TableCell>{prod.name}</TableCell>
                                    <TableCell>{prod.price}</TableCell>
                                    <TableCell>{prod.category}</TableCell>
                                    <TableCell>{prod.description}</TableCell>
                                    <TableCell>
                                        <IconButton
                                            color="primary"
                                            onClick={() => navigate(`/edit-product/${prod.id}`)}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton
                                            color="secondary"
                                            onClick={() => handleDelete(prod.id)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
};

export default ProductForm;
