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

        localStorage.setItem('userName', response.data.username);
        localStorage.setItem('role', response.data.role);

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
            // Content-Type is set automatically for FormData
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

  async fetchTeamDetail(id) {
    try {
      const response = await axios.get(`${API_BASE_URL}/Users/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
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
  
    },

    // Implement logout function
    logout() {
      // Clear session or user data
      localStorage.removeItem('role');  // Clear user role from localStorage
      localStorage.removeItem('user');  // Clear other stored user info (if needed)
      
      // If you store data in sessionStorage instead of localStorage, you can clear it like this:
      // sessionStorage.removeItem('role');
      // sessionStorage.removeItem('user');

      // Optionally, you can send a request to your backend to invalidate the session or token
      console.log('User logged out');
    },

    async billing(name, address, city, postcode, country) {
      //  const username = await localStorage.getItem('username');
    
        try {
          const formData = new FormData();
          formData.append('name', name);
          formData.append('address', address);
          formData.append('city', city);
          formData.append('postcode', postcode);
          formData.append('country', country);
    
          const response = await axios.post(`${API_BASE_URL}/Billing`, 
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

      async fetchTeamDetail(id) {
        try {
          const response = await axios.get(`${API_BASE_URL}/Users/${id}`, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
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
