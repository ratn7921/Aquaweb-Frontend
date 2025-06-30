// src/pages/SightingForm.jsx
import { useState } from 'react';
import axios from '../api/axios';

export default function SightingForm() {
  const [formData, setFormData] = useState({
    species: '',
    count: '',
    behavior: '',
    photoUrl: '',
    location: { lat: '', lng: '' }
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'lat' || name === 'lng') {
      setFormData(prev => ({
        ...prev,
        location: { ...prev.location, [name]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      await axios.post('/sightings', {
        ...formData,
        count: Number(formData.count),
        location: {
          lat: Number(formData.location.lat),
          lng: Number(formData.location.lng)
        }
      });
      setSuccess('Sighting reported successfully!');
      setFormData({ species: '', count: '', behavior: '', photoUrl: '', location: { lat: '', lng: '' } });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to report sighting.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-10 space-y-4 bg-white/10 backdrop-blur-lg p-8 rounded-xl text-white">
      <h2 className="text-2xl font-bold mb-4">Report a Sighting</h2>
      <input name="species" placeholder="Species" value={formData.species} onChange={handleChange} required className="w-full p-3 rounded bg-white/20 placeholder-white" />
      <input name="count" type="number" min="1" placeholder="Count" value={formData.count} onChange={handleChange} required className="w-full p-3 rounded bg-white/20 placeholder-white" />
      <input name="behavior" placeholder="Behavior" value={formData.behavior} onChange={handleChange} required className="w-full p-3 rounded bg-white/20 placeholder-white" />
      <input name="photoUrl" placeholder="Photo URL (optional)" value={formData.photoUrl} onChange={handleChange} className="w-full p-3 rounded bg-black/20 placeholder-white " />
      <div className="flex gap-4">
        <input name="lat" placeholder="Latitude" value={formData.location.lat} onChange={handleChange} required className="w-1/2 p-3 rounded bg-white/20 placeholder-white" />
        <input name="lng" placeholder="Longitude" value={formData.location.lng} onChange={handleChange} required className="w-1/2 p-3 rounded bg-white/20 placeholder-white" />
      </div>
      <button type="submit" className="w-full bg-teal-600 py-2 rounded hover:bg-teal-700" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
      {error && <p className="text-red-400 text-center">{error}</p>}
      {success && <p className="text-green-400 text-center">{success}</p>}
    </form>
  );
}