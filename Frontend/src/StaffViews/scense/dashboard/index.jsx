
import React, { useEffect, useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";

import Header from "../../../components/Header";
import { useState, useEffect } from "react";


    const [products, setProducts] = useState([]); // State to hold products
    const [loading, setLoading] = useState(true); // State to manage loading status
    const [editProduct, setEditProduct] = useState(null); // State for the product being edited
    const [openEditDialog, setOpenEditDialog] = useState(false); // State for edit dialog visibility
    const [openAddDialog, setOpenAddDialog] = useState(false); // State for add dialog visibility
    const [newProductName, setNewProductName] = useState('');
    const [newProductDescription, setNewProductDescription] = useState('');
    const [newProductPrice, setNewProductPrice] = useState('');
    const [newProductCode, setNewProductCode] = useState(''); // State for new product code

    // Fetch product data from the API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8082/api/product');
                if (!response.ok) {
                    const errorText = await response.text(); // Get error message
                    throw new Error(`Error ${response.status}: ${errorText}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Handle edit button click
    const handleEditClick = (product) => {
        setEditProduct(product);
        setNewProductName(product.productName);
        setNewProductDescription(product.description);
        setNewProductPrice(product.price);
        setOpenEditDialog(true);
    };

    // Handle delete button click
    const handleDeleteClick = async (productId) => {
        try {
            const response = await fetch(`http://localhost:8082/api/product/${productId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error ${response.status}: ${errorText}`);
            }
            setProducts(products.filter(product => product.id !== productId));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    // Handle dialog close
    const handleCloseEditDialog = () => {
        setOpenEditDialog(false);
        setEditProduct(null);
    };

    // Handle save changes
    const handleSaveChanges = async () => {
        if (editProduct) {
            const updatedProduct = {
                ...editProduct,
                productName: newProductName,
                description: newProductDescription,
                price: newProductPrice,
            };

            try {
                const response = await fetch(`http://localhost:8082/api/product/${editProduct.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedProduct),
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Error ${response.status}: ${errorText}`);
                }

                // Update the product list with the modified product
                setProducts(products.map(product =>
                    product.id === editProduct.id ? updatedProduct : product
                ));
            } catch (error) {
                console.error('Error updating product:', error);
            } finally {
                handleCloseEditDialog();
            }
        }
    };

    // Handle add product dialog open
    const handleOpenAddDialog = () => {
        setNewProductName('');
        setNewProductDescription('');
        setNewProductPrice('');
        setNewProductCode('');
        setOpenAddDialog(true);
    };

    // Handle adding a new product
    const handleAddProduct = async () => {
        const newProduct = {
            productName: newProductName,
            description: newProductDescription,
            price: newProductPrice,
            code: newProductCode,
        };

        try {
            const response = await fetch('http://localhost:8082/api/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error ${response.status}: ${errorText}`);
            }

            const savedProduct = await response.json();
            setProducts([...products, savedProduct]);
        } catch (error) {
            console.error('Error adding product:', error);
        } finally {
            setOpenAddDialog(false);
        }
    };

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to Wesitex Dashboard" />
            </Box>
            
            {/* Overview Section */}
            <Box mt="20px">
                <Typography variant="h6">Overview</Typography>
                <Typography variant="body1" mt="10px">
                    Welcome to the staff dashboard! 
                </Typography>
            </Box>

            {/* Product Table */}
            <Box mt="20px">
                <Typography variant="h6" mb="10px">Products List</Typography>
                {loading ? (
                    <Typography variant="body1">Loading products...</Typography>
                ) : (
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Product Code</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCell>{product.code}</TableCell>
                                        <TableCell>{product.productName}</TableCell>
                                        <TableCell>{product.description}</TableCell>
                                        <TableCell>RM {product.price}</TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="primary" onClick={() => handleEditClick(product)}>
                                                Edit
                                            </Button>
                                            <Button variant="contained" color="secondary" onClick={() => handleDeleteClick(product.id)} style={{ marginLeft: '10px' }}>
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Box>

            {/* Add Product Button */}
            <Box mt="20px">
                <Button variant="contained" color="primary" onClick={handleOpenAddDialog}>
                    Add Product
                </Button>
            </Box>

            {/* Edit Product Dialog */}
            <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
                <DialogTitle>Edit Product</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Product Name"
                        type="text"
                        fullWidth
                        value={newProductName}
                        onChange={(e) => setNewProductName(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Description"
                        type="text"
                        fullWidth
                        value={newProductDescription}
                        onChange={(e) => setNewProductDescription(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Price"
                        type="number"
                        fullWidth
                        value={newProductPrice}
                        onChange={(e) => setNewProductPrice(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEditDialog} color="primary">Cancel</Button>
                    <Button onClick={handleSaveChanges} color="primary">Save</Button>
                </DialogActions>
            </Dialog>

            {/* Add Product Dialog */}
            <Dialog open={openAddDialog} onClose={() => setOpenAddDialog(false)}>
                <DialogTitle>Add Product</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Product Code"
                        type="text"
                        fullWidth
                        value={newProductCode}
                        onChange={(e) => setNewProductCode(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Product Name"
                        type="text"
                        fullWidth
                        value={newProductName}
                        onChange={(e) => setNewProductName(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Description"
                        type="text"
                        fullWidth
                        value={newProductDescription}
                        onChange={(e) => setNewProductDescription(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Price"
                        type="number"
                        fullWidth
                        value={newProductPrice}
                        onChange={(e) => setNewProductPrice(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenAddDialog(false)} color="primary">Cancel</Button>
                    <Button onClick={handleAddProduct} color="primary">Add</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default DashboardStaff;
