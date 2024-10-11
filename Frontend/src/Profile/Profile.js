// Profile.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Profile.css';  // Ensure that the CSS file is properly linked

const Profile = () => {
  const [userDetails, setUserDetails] = useState({
    name: "Faree",
    email: "faree22@gmail.com",
    phone: "0145236789",
    address: "123 Main Street, City, Country"
  });
  
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  const handleEdit = () => setEditMode(true);
  const handleSave = () => setEditMode(false);

  const handleBack = () => navigate("/");

  return (
    <div className="profile-page">
      {/* Back Button */}
      <button className="back-button" onClick={handleBack}>Back to Landing</button>

      {/* User Details Section */}
      <div className="user-details">
        <h2>{userDetails.name}</h2>
        <p><strong>Email:</strong> {userDetails.email}</p>
        <p><strong>Phone:</strong> {userDetails.phone}</p>
        <p><strong>Address:</strong> {userDetails.address}</p>
      </div>

      {/* Edit Profile Section */}
      <div className="edit-profile">
        <h3>Edit Profile</h3>
        {editMode ? (
          <form className="profile-form">
            <div className="form-group">
              <label>Name:</label>
              <input 
                type="text" 
                value={userDetails.name} 
                onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input 
                type="email" 
                value={userDetails.email} 
                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Phone:</label>
              <input 
                type="text" 
                value={userDetails.phone} 
                onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Address:</label>
              <input 
                type="text" 
                value={userDetails.address} 
                onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
              />
            </div>

            <button type="button" className="save-button" onClick={handleSave}>Save</button>
          </form>
        ) : (
          <button className="edit-button" onClick={handleEdit}>Edit Profile</button>
        )}
      </div>
    </div>
  );
};

export default Profile;
