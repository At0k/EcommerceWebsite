
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState(null);  // To store current user profile
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);      // Error state
  const [editMode, setEditMode] = useState(false);
  const [userDetails, setUserDetails] = useState({});  // To store editable user details
  const navigate = useNavigate();

  // Fetch user profile on mount
  useEffect(() => {
    fetch('http://localhost:8082/api/Users/profile', {
      method: 'GET',
      credentials: 'include',  // Include session cookies in request
    })
    .then((res) => {
        console.log("Response status:", res.status);
        
        if (res.status === 401) {
          navigate('/sign-in');  // Redirect if not authenticated
          return null;
        } else if (res.ok) {
          return res.json(); // If response is OK, parse as JSON
        } else {
          return res.text().then(text => { throw new Error(text); }); // Log the response text for non-200 statuses
        }
    })
    .then((data) => {
        if (data) {
          console.log("Fetched profile data:", data);
          setProfile(data.user);  // Store the user profile
        }
        setLoading(false);  // Turn off loading after data is fetched
    })
    .catch((error) => {
        console.error("Error fetching profile data:", error);
        setError(error.message || "Unknown error occurred");
        setLoading(false);  // Turn off loading even if there's an error
    });
  }, [navigate]);

  const handleEdit = () => {
    setEditMode(true);
    setUserDetails(profile);  // Prepopulate form with existing profile data
  };

  const handleSave = async () => {
    try {
      const response = await fetch('/api/Users/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
        credentials: 'include',
      });

      if (response.ok) {
        setProfile(userDetails);  // Update profile state after saving
        setEditMode(false);       // Exit edit mode
      } else {
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }

    try {
      // Using 'profile.email' instead of 'profile.id'
      const response = await fetch(`/api/Users/email/${profile.email}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),  // Send updated details
        credentials: 'include',  // Include session info
      });
  
      if (response.ok) {
        const updatedProfile = await response.json();  // Get updated profile from response
        setProfile(updatedProfile);  // Update profile state with response data
        setEditMode(false);  // Exit edit mode
      } else {
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleBack = () => navigate("/Landing");

  // Handle loading state
  if (loading) {
    return <p>Loading profile...</p>;
  }

  // Handle error state
  if (error) {
    return <div>
      <p>Error loading profile: {error}</p>
      <button onClick={() => navigate('/sign-in')}>Go to Sign In</button>
    </div>;
  }

  return profile ? (
    <div className="profile-page">
      <button className="back-button" onClick={handleBack}>Back to Landing</button>

      <div className="user-details">
        <h2>{profile.fullname}</h2>
        <p><strong>Username:</strong> {profile.username}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phoneNo}</p>
        
      </div>

      <div className="edit-profile">
        <h3>Edit Profile</h3>
        {editMode ? (
          <form className="profile-form">
            <div className="form-group">
              <label>Name:</label>
              <input 
                type="text" 
                value={userDetails.fullname || ''} 
                onChange={(e) => setUserDetails({ ...userDetails, fullname: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Username:</label>
              <input 
                type="text" 
                value={userDetails.username || ''} 
                onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input 
                type="email" 
                value={userDetails.email || ''} 
                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Phone:</label>
              <input 
                type="text" 
                value={userDetails.phoneNo || ''} 
                onChange={(e) => setUserDetails({ ...userDetails, phoneNo: e.target.value })}
              />
            </div>

            

            <button type="button" className="save-button" onClick={handleSave}>Save</button>
          </form>
        ) : (
          <button className="edit-button" onClick={handleEdit}>Edit Profile</button>
        )}
      </div>
    </div>
  ) : (
    <p>No profile data found.</p>
  );
};

export default Profile;
