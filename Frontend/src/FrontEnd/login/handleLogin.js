const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:8082/api/Users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
            credentials: 'include'  // Important: This tells the browser to include cookies
        });

        if (response.ok) {
            setMessage('Login successful');
            window.location.href = '/Landing';  // Redirect to landing page
        } else if (response.status === 401) {
            setMessage('Invalid credentials. Please try again.');
        } else {
            setMessage('Something went wrong. Please try again.');
        }
    } catch (error) {
        setMessage('Error: ' + error.toString());
    }

    const resetPassword = async (email, newPassword) => {
        try{
            const response = await fetch('http://localhost:8082/api/Users/reset-password',{
                method: 'POST',
                headers: {
                    'Content-Type':'application/jason',
                },
                body: JSON.stringify({ email, newPassword}),
            });

            if (response.ok){
                const data = await response.json();
                alert(data.message); //Pass Update Success
            } else {
                const errorData = await response.json();
                alert(errorData.message); //Error
            }
        }catch (error){
            console.error('Error:', error);
        }
    }
};

