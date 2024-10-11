import axios from 'axios';

const API_BASE_URL = 'http://localhost:8082/api';

const AuthService = {
  async login(email, password) {
    try {
      const response = await axios.post(`${API_BASE_URL}/Users/login`, {
        email,
        password,
      }, {
        headers: {
     
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {

        console.log('Login response:', response.data);

        // localStorage.setItem('userName', response.data.username);
        localStorage.setItem('role', response.data);


        return true;
      }
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  },


  async register(username, email, password, phoneNo, role, fullname) {
    //  const username = await localStorage.getItem('username');
  
      try {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('fullname', fullname);
        formData.append('phoneNo', phoneNo);
        formData.append('role', role);
  
        const response = await axios.post(`${API_BASE_URL}/Users/register`, 
          formData,
          {
            headers: {
              'Content-Type': 'application/json',
              "Accept": "*/*"
            },
          }
        );
  
        if (response.status === 200) {
          return response.data;
        }
      } catch (error) {
        if (error.response) {
          console.error('Server responded with an error:', error.response.data);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up the request:', error.message);
        }
        throw error;
      }
    },
};

export default AuthService;

