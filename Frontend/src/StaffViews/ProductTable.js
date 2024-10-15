import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const ProductTable = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null); // State to hold error messages

    // Fetch products from the database
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8082/api/products'); // Adjust to your API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Fetched products:', data); // Log the fetched data
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError(error.message); // Set error message
            }
        };

        fetchProducts();
    }, []);

    // Handle delete
    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:8082/api/products/${id}`, { method: 'DELETE' });
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    // Define columns for the DataGrid
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'productName', headerName: 'Name', width: 200 },
        { field: 'price', headerName: 'Price', width: 150 },
        { field: 'quantity', headerName: 'Quantity', width: 150 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <>
                    <IconButton onClick={() => handleEdit(params.row.id)}>
                        <Edit />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(params.row.id)}>
                        <Delete />
                    </IconButton>
                </>
            ),
        },
    ];

    // Placeholder for handling edit
    const handleEdit = (id) => {
        console.log(`Edit product ${id}`);
        // Implement the edit functionality, e.g., navigate to an edit page or open a modal
    };

    // Render error message if any
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={products}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                autoHeight
                getRowId={(row) => row.id} // Ensures the correct ID is used for each row
            />
        </div>
    );
};

export default ProductTable;
