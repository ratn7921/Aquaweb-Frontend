


// import { useEffect, useState } from 'react';
// import axios from '../api/axios';

// export default function Profile() {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [editMode, setEditMode] = useState(false);
//   const [form, setForm] = useState({ name: '', description: '' });
//   const [avatarPreview, setAvatarPreview] = useState('');
//   const [avatarFile, setAvatarFile] = useState(null);

//   const toAbsoluteUrl = (path) => {
//     if (!path) return '/default-avatar.png';
//     const backendURL = 'http://localhost:5000';
//     return path.startsWith('http')
//       ? path
//       : `${backendURL}${path.startsWith('/') ? '' : '/'}${path}`;
//   };

//   const fetchProfile = async () => {
//     setLoading(true);
//     setError('');
//     const token = localStorage.getItem('token');

//     if (!token) {
//       setError('Not logged in.');
//       setLoading(false);
//       return;
//     }

//     try {
//       const res = await axios.get(`/users/me?t=${Date.now()}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const user = res.data;
//       setProfile(user);
//       setForm({ name: user.name || '', description: user.description || '' });
//       setAvatarPreview(toAbsoluteUrl(user.avatar) + `?t=${Date.now()}`);
//     } catch (err) {
//       console.error('❌ Failed to load profile:', err);
//       setError('Failed to load profile.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProfile();
//     const onFocus = () => fetchProfile();
//     window.addEventListener('focus', onFocus);
//     return () => window.removeEventListener('focus', onFocus);
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setAvatarFile(file);
//       setAvatarPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     const token = localStorage.getItem('token');
//     const formData = new FormData();
//     formData.append('name', form.name);
//     formData.append('description', form.description);
//     if (avatarFile) formData.append('avatar', avatarFile);

//     try {
//       const res = await axios.post('/users/me/update', formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const updatedUser = res.data;
//       setProfile(updatedUser);
//       setForm({
//         name: updatedUser.name,
//         description: updatedUser.description || '',
//       });
//       setAvatarPreview(toAbsoluteUrl(updatedUser.avatar) + `?t=${Date.now()}`);
//       setAvatarFile(null);
//       setEditMode(false);
//     } catch (err) {
//       console.error('❌ Update error:', err);
//       setError('Failed to update profile.');
//     }
//   };

//   if (loading) return <div className="text-center text-black mt-10">Loading profile...</div>;
//   if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;

//   return (
//     <div className="max-w-md mx-auto mt-10 bg-white/10 backdrop-blur-md p-6 rounded-xl text-black">
//       <h2 className="text-2xl font-bold mb-4">My Profile</h2>

//       <img
//         key={avatarPreview}
//         src={avatarPreview}
//         alt="User avatar"
//         onError={(e) => { e.target.src = '/default-avatar.png'; }}
//         className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-cyan-500"
//       />

//       <button
//         className="mb-4 px-3 py-1 bg-cyan-600 text-white rounded hover:bg-cyan-800"
//         onClick={fetchProfile}
//       >
//         Refresh
//       </button>

//       {!editMode ? (
//         <>
//           <div className="mb-2"><strong>Name:</strong> {profile.name}</div>
//           <div className="mb-2"><strong>Email:</strong> {profile.email}</div>
//           <div className="mb-2"><strong>Role:</strong> {profile.role}</div>
//           <div className="mb-2">
//             <strong>Description:</strong> {profile.description || <em className="text-gray-400">No description</em>}
//           </div>
//           <div className="mb-2">
//             <strong>Joined:</strong> {profile.createdAt ? new Date(profile.createdAt).toLocaleDateString() : ''}
//           </div>
//           <button
//             className="mt-4 px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-800"
//             onClick={() => setEditMode(true)}
//           >
//             Edit Profile
//           </button>
//         </>
//       ) : (
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="profile-name" className="block font-semibold mb-1">Name</label>
//             <input
//               id="profile-name"
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               className="w-full p-2 rounded border"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="profile-description" className="block font-semibold mb-1">Description</label>
//             <textarea
//               id="profile-description"
//               name="description"
//               value={form.description}
//               onChange={handleChange}
//               className="w-full p-2 rounded border"
//               rows={3}
//             />
//           </div>
//           <div>
//             <label htmlFor="profile-avatar" className="block font-semibold mb-1">Avatar Image</label>
//             <input
//               id="profile-avatar"
//               type="file"
//               accept="image/*"
//               onChange={handleAvatarChange}
//             />
//             <img
//               key={avatarPreview}
//               src={avatarPreview}
//               alt="Preview"
//               onError={(e) => { e.target.src = '/default-avatar.png'; }}
//               className="w-20 h-20 rounded-full mt-2 object-cover border-2 border-cyan-400"
//             />
//           </div>
//           <div className="flex gap-2">
//             <button type="submit" className="px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-800">Save</button>
//             <button
//               type="button"
//               className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
//               onClick={() => {
//                 setEditMode(false);
//                 setAvatarFile(null);
//                 setAvatarPreview(toAbsoluteUrl(profile.avatar) + `?t=${Date.now()}`);
//                 setForm({
//                   name: profile.name,
//                   description: profile.description || '',
//                 });
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// }












// // the unworking codition code📁 src/pages/Profile.jsx
// import { useEffect, useState } from 'react';
// import axios from '../api/axios';

// export default function Profile() {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [editMode, setEditMode] = useState(false);
//   const [form, setForm] = useState({ name: '', description: '' });
//   const [avatarPreview, setAvatarPreview] = useState('');
//   const [avatarFile, setAvatarFile] = useState(null);

//   const toAbsoluteUrl = (path) => {
//     if (!path) return '/default-avatar.png';
//     const backendURL = 'http://localhost:5000';
//     return path.startsWith('http')
//       ? path
//       : `${backendURL}${path.startsWith('/') ? '' : '/'}${path}`;
//   };

//   const fetchProfile = async () => {
//     setLoading(true);
//     setError('');
//     const token = localStorage.getItem('token');

//     if (!token) {
//       setError('Not logged in.');
//       setLoading(false);
//       return;
//     }

//     try {
//       const res = await axios.get(`/users/me?t=${Date.now()}`);
//       const user = res.data;
//       setProfile(user);
//       setForm({ name: user.name || '', description: user.description || '' });
//       setAvatarPreview(toAbsoluteUrl(user.avatar) + `?t=${Date.now()}`);
//     } catch (err) {
//       console.error('❌ Failed to load profile:', err);
//       setError('Failed to load profile.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProfile();
//     const onFocus = () => fetchProfile();
//     window.addEventListener('focus', onFocus);
//     return () => window.removeEventListener('focus', onFocus);
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       setAvatarFile(file);
//       setAvatarPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     const token = localStorage.getItem('token');
//     const formData = new FormData();
//     formData.append('name', form.name);
//     formData.append('description', form.description);
//     if (avatarFile) formData.append('avatar', avatarFile);

//     try {
//       const res = await axios.post('/users/me/update', formData);
//       const updatedUser = res.data;
//       setProfile(updatedUser);
//       setForm({ name: updatedUser.name, description: updatedUser.description || '' });
//       setAvatarPreview(toAbsoluteUrl(updatedUser.avatar) + `?t=${Date.now()}`);
//       setAvatarFile(null);
//       setEditMode(false);
//     } catch {
//       setError('Failed to update profile.');
//     }
//   };

//   if (loading) return <div className="text-center text-black mt-10">Loading profile...</div>;
//   if (error) return <div className="text-center text-red-400 mt-10">{error}</div>;

//   return (
//     <div className="max-w-md mx-auto mt-10 bg-black/10 backdrop-blur-lg p-8 rounded-xl text-black">
//       <h2 className="text-2xl font-bold mb-4">My Profile</h2>

//       <img
//         key={avatarPreview}
//         src={avatarPreview}
//         alt="User avatar"
//         onError={(e) => { e.target.src = '/default-avatar.png'; }}
//         className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-cyan-400"
//       />

//       <button
//         className="mb-4 px-3 py-1 bg-cyan-600 text-white rounded hover:bg-cyan-800"
//         onClick={fetchProfile}
//       >
//         Refresh
//       </button>

//       {!editMode ? (
//         <>
//           <div className="mb-2"><strong>Name:</strong> {profile.name}</div>
//           <div className="mb-2"><strong>Email:</strong> {profile.email}</div>
//           <div className="mb-2"><strong>Role:</strong> {profile.role}</div>
//           <div className="mb-2">
//             <strong>Description:</strong> {profile.description || <em className="text-gray-400">No description</em>}
//           </div>
//           <div className="mb-2">
//             <strong>Joined:</strong> {profile.createdAt ? new Date(profile.createdAt).toLocaleDateString() : ''}
//           </div>
//           <button
//             className="mt-4 px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-800"
//             onClick={() => setEditMode(true)}
//           >
//             Edit Profile
//           </button>
//         </>
//       ) : (
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="profile-name" className="block font-semibold mb-1">Name</label>
//             <input
//               id="profile-name"
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               className="w-full p-2 rounded border"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="profile-description" className="block font-semibold mb-1">Description</label>
//             <textarea
//               id="profile-description"
//               name="description"
//               value={form.description}
//               onChange={handleChange}
//               className="w-full p-2 rounded border"
//               rows={3}
//             />
//           </div>
//           <div>
//             <label htmlFor="profile-avatar" className="block font-semibold mb-1">Avatar Image</label>
//             <input
//               id="profile-avatar"
//               type="file"
//               accept="image/*"
//               onChange={handleAvatarChange}
//             />
//             <img
//               key={avatarPreview}
//               src={avatarPreview}
//               alt="Preview"
//               onError={(e) => { e.target.src = '/default-avatar.png'; }}
//               className="w-20 h-20 rounded-full mt-2 object-cover border-2 border-cyan-400"
//             />
//           </div>
//           <div className="flex gap-2">
//             <button type="submit" className="px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-800">Save</button>
//             <button
//               type="button"
//               className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
//               onClick={() => {
//                 setEditMode(false);
//                 setAvatarFile(null);
//                 setAvatarPreview(toAbsoluteUrl(profile.avatar) + `?t=${Date.now()}`);
//                 setForm({ name: profile.name, description: profile.description || '' });
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// }




import { useEffect, useState, useRef } from 'react';
import axios from '../api/axios';

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ name: '', description: '' });
  const [avatarPreview, setAvatarPreview] = useState('');
  const [avatarFile, setAvatarFile] = useState(null);
  const fileInputRef = useRef(null);

  const toAbsoluteUrl = (path) => {
    if (!path) return '/default-avatar.png';
    const backendURL = 'http://localhost:5000';
    return path.startsWith('http')
      ? path
      : `${backendURL}${path.startsWith('/') ? '' : '/'}${path}`;
  };

  const fetchProfile = async () => {
    setLoading(true);
    setError('');
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Not logged in.');
      setLoading(false);
      return;
    }

    try {
      const res = await axios.get(`/users/me?t=${Date.now()}`);
      const user = res.data;
      setProfile(user);
      setForm({ name: user.name || '', description: user.description || '' });
      setAvatarPreview(toAbsoluteUrl(user.avatar) + `?t=${Date.now()}`);
    } catch (err) {
      console.error('❌ Failed to load profile:', err);
      setError('Failed to load profile.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
    const onFocus = () => fetchProfile();
    window.addEventListener('focus', onFocus);
    return () => window.removeEventListener('focus', onFocus);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    console.log('📂 Raw File:', file); // <- always log

    if (file) {
      if (!file.type.startsWith('image/')) {
        console.warn('⚠️ Not an image:', file.type);
        setError('Please select a valid image file.');
        return;
      }

      setAvatarFile(file);
      const previewURL = URL.createObjectURL(file);
      setAvatarPreview(previewURL);
      console.log('📸 File selected:', file);
    } else {
      console.warn('⚠️ No file selected');
      setAvatarFile(null);
      setAvatarPreview(toAbsoluteUrl(profile?.avatar));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('description', form.description);
    if (avatarFile) formData.append('avatar', avatarFile);

    console.log('⬆️ Uploading:', form.name, form.description, avatarFile?.name || '❌ No file selected');

    for (let [key, value] of formData.entries()) {
      if (value instanceof File) {
        console.log(`📁 ${key}:`, value.name);
      } else {
        console.log(`🧾 ${key}:`, value);
      }
    }

    try {
      const res = await axios.post('/test/upload-test', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log('✅ Success:', res.data);
    } catch (err) {
      console.error('❌ Upload error:', err.response?.data || err.message);
    }
  };

  const handleCancel = () => {
    setEditMode(false);
    setAvatarFile(null);
    setAvatarPreview(toAbsoluteUrl(profile.avatar) + `?t=${Date.now()}`);
    setForm({ name: profile.name, description: profile.description || '' });
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  if (loading) return <div className="text-center text-black mt-10">Loading profile...</div>;
  if (error) return <div className="text-center text-red-400 mt-10">{error}</div>;

  return (
    <div className="max-w-md mx-auto mt-10 bg-black/10 backdrop-blur-lg p-8 rounded-xl text-black">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>

      <img
        src={avatarPreview}
        alt="User avatar"
        onError={(e) => { e.target.src = '/default-avatar.png'; }}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-cyan-400"
      />

      <button
        className="mb-4 px-3 py-1 bg-cyan-600 text-white rounded hover:bg-cyan-800"
        onClick={fetchProfile}
      >
        Refresh
      </button>

      {!editMode ? (
        <>
          <div className="mb-2"><strong>Name:</strong> {profile.name}</div>
          <div className="mb-2"><strong>Email:</strong> {profile.email}</div>
          <div className="mb-2"><strong>Role:</strong> {profile.role}</div>
          <div className="mb-2">
            <strong>Description:</strong> {profile.description || <em className="text-gray-400">No description</em>}
          </div>
          <div className="mb-2">
            <strong>Joined:</strong> {profile.createdAt ? new Date(profile.createdAt).toLocaleDateString() : ''}
          </div>
          <button
            className="mt-4 px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-800"
            onClick={() => setEditMode(true)}
          >
            Edit Profile
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="profile-name" className="block font-semibold mb-1">Name</label>
            <input
              id="profile-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 rounded border"
              required
            />
          </div>
          <div>
            <label htmlFor="profile-description" className="block font-semibold mb-1">Description</label>
            <textarea
              id="profile-description"
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full p-2 rounded border"
              rows={3}
            />
          </div>
          <div>
            <label htmlFor="profile-avatar" className="block font-semibold mb-1">Avatar Image</label>
            <input
              id="profile-avatar"
              name="avatar"
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="block w-full"
            />
            {avatarPreview && (
              <img
                src={avatarPreview}
                alt="Preview"
                onError={(e) => { e.target.src = '/default-avatar.png'; }}
                className="w-20 h-20 rounded-full mt-2 object-cover border-2 border-cyan-400"
              />
            )}
          </div>
          <div className="flex gap-2">
            <button type="submit" className="px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-800">Save</button>

            <button
              type="button"
              className="px-4 py-2 bg-yellow-500 text-black rounded"
              onClick={() => console.log('🧪 avatarFile:', avatarFile)}
            >
              Check File State
            </button>

            <button
              type="button"
              className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
