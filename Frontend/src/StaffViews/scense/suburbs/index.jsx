import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import GetItemsManager from "../../getItemManager";

const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams(); // Fetch product ID from the URL params
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            GetItemsManager.getProductById(id).then((result) => {
                setProduct(result.data); // Assuming result.data contains the product details
            }).catch((error) => console.error("Error fetching product:", error));
        }
    }, [id]);

    // Handling cases where product data is still being fetched
    if (!product) {
        return <Typography variant="h6">Loading product details...</Typography>;
    }

    return (
        <Box>
            <Typography variant="h4" gutterBottom>Product List</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>Name:</Typography>
                    <Typography variant="body1">{product.name}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>Price:</Typography>
                    <Typography variant="body1">{product.price}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>Category:</Typography>
                    <Typography variant="body1">{product.category}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>Description:</Typography>
                    <Typography variant="body1">{product.description}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => navigate(`/edit-product/${id}`)}
                    >
                        Edit Product
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductDetails;
