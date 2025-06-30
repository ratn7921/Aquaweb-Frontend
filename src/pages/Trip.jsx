// --- src/pages/Trip.jsx ---
import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

function CenterMap({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position) map.setView(position, 16);
  }, [position, map]);
  return null;
}

export default function Trip() {
  const [path, setPath] = useState([]);
  const [watchId, setWatchId] = useState(null);
  const [tripId, setTripId] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [livePos, setLivePos] = useState(null);
  const [showCoords, setShowCoords] = useState(false);
  const mapRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    return () => navigator.geolocation.clearWatch(watchId);
  }, [watchId]);

  const startTrip = async () => {
    setLoading(true);
    setError('');
    setMessage('');
    try {
      // Get user's current location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            const { latitude, longitude } = pos.coords;
            setLivePos([latitude, longitude]);
            setPath([[latitude, longitude]]);
            setShowCoords(false);
            // Create trip in backend
            const res = await axios.post('/trips/start');
            setTripId(res.data._id);
            setMessage('Trip started!');
          },
          (err) => setError('Unable to get location.'),
          { enableHighAccuracy: true }
        );
      } else {
        setError('Geolocation not supported');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to start trip.');
    } finally {
      setLoading(false);
    }
  };

  const startTracking = () => {
    if (!navigator.geolocation) return alert('Geolocation not supported');
    setShowCoords(true);
    const id = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setLivePos([latitude, longitude]);
        setPath((prev) => [...prev, [latitude, longitude]]);
      },
      (err) => setError('Unable to get live location.'),
      { enableHighAccuracy: true }
    );
    setWatchId(id);
  };

  const stopTracking = async () => {
    navigator.geolocation.clearWatch(watchId);
    setShowCoords(false);
    await endTrip(); // Make sure endTrip handles backend update and state reset
    navigate('/trip-history');
  };

  const endTrip = async () => {
    setLoading(true);
    setError('');
    setMessage('');
    try {
      if (tripId && path.length > 0) {
        await axios.put(`/trips/${tripId}/path`, {
          path: path.map(([lat, lng]) => ({ lat, lng, timestamp: new Date() }))
        });
      }
      await axios.put(`/trips/end/${tripId}`);
      setTripId(null);
      setMessage('Trip ended!');
      setTimeout(() => navigate('/trip-history'), 1000); // Redirect after ending
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to end trip.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="aqua-section text-white text-center relative">
      {showCoords && livePos && (
        <div className="absolute top-2 left-2 bg-black/70 px-3 py-1 rounded text-green-400 text-xs z-10">
          Lat: {livePos[0].toFixed(6)}, Lng: {livePos[1].toFixed(6)}
        </div>
      )}
      <h2 className="aqua-title">Trip Management</h2>
      {message && <p className="mb-4 text-green-400">{message}</p>}
      {error && <p className="mb-4 text-red-400">{error}</p>}
      {!tripId ? (
        <button onClick={startTrip} className="btn-main mb-4" disabled={loading}>
          {loading ? 'Starting...' : 'Start Trip'}
        </button>
      ) : (
        <button onClick={endTrip} className="btn-main bg-red-600 hover:bg-red-700 mb-4" disabled={loading}>
          {loading ? 'Ending...' : 'End Trip'}
        </button>
      )}
      <div className="rounded overflow-hidden shadow-lg mb-4">
        <MapContainer
          center={livePos || [32.64, -16.9]}
          zoom={16}
          scrollWheelZoom={true}
          style={{ height: '60vh', width: '100%' }}
          ref={mapRef}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {livePos && <CenterMap position={livePos} />}
          {path.map((pos, idx) => <Marker key={idx} position={pos} />)}
          {path.length > 1 && <Polyline positions={path} color="cyan" />}
        </MapContainer>
      </div>
      <div className="flex justify-center space-x-4">
        <button onClick={startTracking} className="btn-main">Start Tracking</button>
        <button onClick={stopTracking} className="btn-main bg-red-600 hover:bg-red-700">Stop Tracking</button>
      </div>
    </div>
  );
}





// // --- src/pages/Trip.jsx ---
// import { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from '../api/axios';

// export default function Trip() {
//   const [path, setPath] = useState([]);
//   const [watchId, setWatchId] = useState(null);
//   const [tripId, setTripId] = useState(null);
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     return () => navigator.geolocation.clearWatch(watchId);
//   }, [watchId]);

//   const startTracking = () => {
//     if (!navigator.geolocation) return alert('Geolocation not supported');
//     const id = navigator.geolocation.watchPosition(
//       (pos) => {
//         const { latitude, longitude } = pos.coords;
//         setPath((prev) => [...prev, [latitude, longitude]]);
//       },
//       (err) => console.error(err),
//       { enableHighAccuracy: true }
//     );
//     setWatchId(id);
//   };

//   const stopTracking = () => navigator.geolocation.clearWatch(watchId);

//   const startTrip = async () => {
//     setLoading(true);
//     setError('');
//     setMessage('');
//     try {
//       const res = await axios.post('/trips/start');
//       setTripId(res.data._id);
//       setMessage('Trip started!');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to start trip.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const endTrip = async () => {
//     setLoading(true);
//     setError('');
//     setMessage('');
//     try {
//       // Save path to backend before ending the trip
//       if (tripId && path.length > 0) {
//         await axios.put(`/trips/${tripId}/path`, {
//           path: path.map(([lat, lng]) => ({ lat, lng, timestamp: new Date() }))
//         });
//       }
//       await axios.put(`/trips/end/${tripId}`);
//       setTripId(null);
//       setMessage('Trip ended!');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to end trip.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 text-center bg-white/10 backdrop-blur-lg p-8 rounded-xl text-white">
//       <h2 className="text-2xl font-bold mb-4">Trip Management</h2>
//       {message && <p className="mb-4 text-green-400">{message}</p>}
//       {error && <p className="mb-4 text-red-400">{error}</p>}
//       {!tripId ? (
//         <button onClick={startTrip} className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700" disabled={loading}>
//           {loading ? 'Starting...' : 'Start Trip'}
//         </button>
//       ) : (
//         <button onClick={endTrip} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700" disabled={loading}>
//           {loading ? 'Ending...' : 'End Trip'}
//         </button>
//       )}
//       <div className="rounded overflow-hidden shadow-lg mb-4">
//         <MapContainer center={[32.64, -16.9]} zoom={12} scrollWheelZoom={true} style={{ height: '60vh', width: '100%' }}>
//           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//           {path.map((pos, idx) => <Marker key={idx} position={pos} />)}
//           {path.length > 1 && <Polyline positions={path} color="cyan" />}
//         </MapContainer>
//       </div>
//       <div className="flex space-x-4">
//         <button onClick={startTracking} className="bg-teal-600 px-4 py-2 rounded">Start Tracking</button>
//         <button onClick={stopTracking} className="bg-red-600 px-4 py-2 rounded">Stop Tracking</button>
//       </div>
//     </div>
//   );
// }