import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState('');

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Assuming you have a way to get the auth token
        const { data } = await axios.get('/api/users/me' /*, config */);
        setName(data.name);
        setDescription(data.description);
        setAvatarPreview(data.avatar);
      } catch (error) {
        console.error('Failed to fetch user', error);
      }
    };
    fetchUser();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    if (avatar) {
      formData.append('avatar', avatar); // This key 'avatar' MUST match upload.single('avatar')
    }

    try {
      // IMPORTANT: Do NOT set Content-Type header manually for FormData
      const { data } = await axios.post('/api/users/me/update', formData);
      console.log('Profile updated successfully:', data);
      // Update state with new data
      setAvatarPreview(data.avatar);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      {avatarPreview && <img src={avatarPreview} alt="Avatar" width="150" />}
      <input type="file" name="avatar" onChange={handleFileChange} accept="image/*" />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ProfileScreen;