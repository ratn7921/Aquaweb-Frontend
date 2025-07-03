// // src/pages/BookingTours.jsx
// import React, { useEffect, useState } from 'react';
// import axios from '../api'; // Make sure this uses your custom instance

// export default function BookingTours() {
//   const [tours, setTours] = useState([]);

//   useEffect(() => {
//     axios.get('/tours/seattle') // Update `seattle` to dynamic value if needed
//       .then((res) => setTours(res.data))
//       .catch((err) => console.error('Error fetching tours:', err));
//   }, []);

//   return (
//     <div>
//       <h2>Available Tours</h2>
//       <ul>
//         {tours.map((tour, index) => (
//           <li key={index}>{tour.title || 'Unnamed Tour'}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }




import React, { useEffect, useState } from 'react';
import axios from '../api/axios'; // your custom axios instance

export default function BookingTours() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/tours/seattle')
      .then((res) => setTours(res.data))
      .catch((err) => console.error('Error fetching tours:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-4">Loading tours...</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Available Tours</h2>
      <ul className="list-disc pl-6">
        {tours.length === 0 ? (
          <li>No tours available right now.</li>
        ) : (
          tours.map((tour, i) => (
            <li key={i}>{tour.title || 'Unnamed Tour'}</li>
          ))
        )}
      </ul>
    </div>
  );
}
