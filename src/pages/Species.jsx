



// //old--- src/pages/Species.jsx ---
// import React, { useEffect, useState } from 'react';
// import axios from '../api/axios';

// export default function Species() {
//   const [species, setSpecies] = useState([]);
//   const [wormsSpecies, setWormsSpecies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [search, setSearch] = useState('Clownfish');

//   useEffect(() => {
//     let localDone = false;
//     let wormsDone = false;
//     // Fetch local DB species
//     axios.get('/species')
//       .then(res => setSpecies(res.data))
//       .catch(() => setError('Failed to load local species.'))
//       .finally(() => { localDone = true; if (wormsDone) setLoading(false); });
//     // Fetch WoRMS API example species (default: Clownfish) from backend proxy
//     axios.get(`/worms/${encodeURIComponent(search)}`)
//       .then(res => setWormsSpecies(res.data))
//       .catch(() => setError('Failed to load WoRMS species.'))
//       .finally(() => { wormsDone = true; if (localDone) setLoading(false); });
//   }, [search]);

//   // Helper: combine all results for easier handling
//   const allResults = [
//     ...species.map(sp => ({ ...sp, _source: 'Local DB' })),
//     ...wormsSpecies.map(ws => ({ ...ws, _source: ws.source || 'API' }))
//   ];
//   const noResults = !loading && allResults.length === 0;
//   const [modal, setModal] = useState(null);

//   if (loading) return <div className="text-center text-white mt-10">Loading species...</div>;
//   if (error) return <div className="text-center text-red-400 mt-10">{error}</div>;

//   return (
//     <div className="p-6 text-white">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-2xl font-bold">Species Catalog</h2>
//         <span className="bg-cyan-700 text-white px-3 py-1 rounded-full text-sm font-semibold">Total: {allResults.length}</span>
//       </div>
//       <form onSubmit={e => { e.preventDefault(); setSearch(e.target.elements.speciesSearch.value); }} className="mb-6 flex gap-2">
//         <input
//           type="text"
//           name="speciesSearch"
//           defaultValue={search}
//           placeholder="Search marine species (e.g. Dolphin, Tuna)"
//           className="p-2 rounded border border-cyan-400 text-black w-64"
//         />
//         <button type="submit" className="px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-800">Search</button>
//       </form>
//       {noResults && (
//         <div className="text-center text-cyan-200 italic mb-8">No results found for "{search}". Try another species name.</div>
//       )}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {allResults.map((item, idx) => (
//           <div
//             key={item._id || item.name + idx}
//             className="bg-white/10 rounded-xl p-4 shadow flex flex-col items-center border border-cyan-900/30 hover:shadow-lg transition cursor-pointer"
//             onClick={() => setModal(item)}
//           >
//             <img
//               src={item.imageUrl || item.image || '/default-avatar.png'}
//               alt={item.name}
//               className="w-32 h-32 object-cover rounded mb-2 border-2 border-cyan-400 bg-white/20"
//               onError={e => { e.target.onerror = null; e.target.src = '/default-avatar.png'; }}
//             />
//             <h3 className="text-lg font-semibold text-cyan-100 mb-1">{item.name}</h3>
//             <div className="text-xs text-cyan-300 italic mb-2">{item.scientificName || item.authority}</div>
//             <div className="text-sm mb-2 text-cyan-50 text-center">{item.description || (item.rank ? `Rank: ${item.rank}` : '')}</div>
//             <div className="text-xs text-cyan-200 mb-2">{item.habitat && `Habitat: ${item.habitat}`}</div>
//             <span className={`mt-2 text-xs px-2 py-0.5 rounded ${item._source === 'Local DB' ? 'bg-cyan-800' : item._source === 'WoRMS' ? 'bg-blue-800' : 'bg-green-800'} text-white`}>{item._source}</span>
//           </div>
//         ))}
//       </div>
//       {/* Modal for details */}
//       {modal && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//           <div className="bg-white text-black rounded-xl p-8 max-w-md w-full relative">
//             <button className="absolute top-2 right-2 text-2xl text-cyan-700" onClick={() => setModal(null)}>&times;</button>
//             <img
//               src={modal.imageUrl || modal.image || '/default-avatar.png'}
//               alt={modal.name}
//               className="w-40 h-40 object-cover rounded mx-auto mb-4 border-2 border-cyan-400"
//               onError={e => { e.target.onerror = null; e.target.src = '/default-avatar.png'; }}
//             />
//             <h2 className="text-2xl font-bold mb-2 text-cyan-800">{modal.name}</h2>
//             <div className="text-sm text-cyan-700 mb-2">{modal.scientificName || modal.authority}</div>
//             <div className="mb-2">{modal.description || (modal.rank ? `Rank: ${modal.rank}` : '')}</div>
//             <div className="mb-2 text-xs text-cyan-700">{modal.habitat && `Habitat: ${modal.habitat}`}</div>
//             {modal.facts && modal.facts.length > 0 && (
//               <ul className="text-xs text-cyan-700 list-disc pl-4 mb-2">
//                 {modal.facts.map((fact, idx) => <li key={idx}>{fact}</li>)}
//               </ul>
//             )}
//             <div className="text-xs text-gray-500 mt-2">Source: {modal._source}</div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }






// new version src/pages/Species.jsx
// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from '../api/axios';

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

// export default function Species() {
//   const [species, setSpecies] = useState([]);
//   const [wormsSpecies, setWormsSpecies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [search, setSearch] = useState('');
//   const query = useQuery();

//   useEffect(() => {
//     const filter = query.get('filter');
//     if (filter) setSearch(filter);
//   }, [query]);

//   useEffect(() => {
//     let localDone = false;
//     let wormsDone = false;
//     setLoading(true);
//     setError('');

//     // Fetch local species (from DB)
//     axios
//       .get(`/species${search ? `?filter=${encodeURIComponent(search)}` : ''}`)
//       .then((res) => setSpecies(res.data))
//       .catch(() => setError('Failed to load local species.'))
//       .finally(() => {
//         localDone = true;
//         if (wormsDone) setLoading(false);
//       });

//     // Fetch WoRMS API data
//     axios
//       .get(`/worms/${encodeURIComponent(search || 'Clownfish')}`)
//       .then((res) => setWormsSpecies(res.data))
//       .catch(() => setError('Failed to load WoRMS species.'))
//       .finally(() => {
//         wormsDone = true;
//         if (localDone) setLoading(false);
//       });
//   }, [search]);

//   const allResults = [
//     ...species.map((sp) => ({ ...sp, _source: 'Local DB' })),
//     ...wormsSpecies.map((ws) => ({ ...ws, _source: ws.source || 'WoRMS' })),
//   ];

//   const [modal, setModal] = useState(null);
//   const noResults = !loading && allResults.length === 0;

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const value = e.target.elements.speciesSearch.value;
//     setSearch(value);
//   };

//   return (
//     <div className="p-6 text-white">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-2xl font-bold">Species Catalog</h2>
//         <span className="bg-cyan-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
//           Total: {allResults.length}
//         </span>
//       </div>
//       <form onSubmit={handleSearch} className="mb-6 flex gap-2">
//         <input
//           type="text"
//           name="speciesSearch"
//           defaultValue={search}
//           placeholder="Search marine species (e.g. Dolphin, Tuna)"
//           className="p-2 rounded border border-cyan-400 text-black w-64"
//         />
//         <button
//           type="submit"
//           className="px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-800"
//         >
//           Search
//         </button>
//       </form>
//       {loading && (
//         <div className="text-center text-white mt-10">Loading species...</div>
//       )}
//       {error && (
//         <div className="text-center text-red-400 mt-10">{error}</div>
//       )}
//       {noResults && (
//         <div className="text-center text-cyan-200 italic mb-8">
//           No results found for "{search}". Try another species name.
//         </div>
//       )}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {allResults.map((item, idx) => (
//           <div
//             key={item._id || item.name + idx}
//             className="bg-white/10 rounded-xl p-4 shadow flex flex-col items-center border border-cyan-900/30 hover:shadow-lg transition cursor-pointer"
//             onClick={() => setModal(item)}
//           >
//             <img
//               src={item.imageUrl || item.image || '/default-avatar.png'}
//               alt={item.name}
//               className="w-32 h-32 object-cover rounded mb-2 border-2 border-cyan-400 bg-white/20"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = '/default-avatar.png';
//               }}
//             />
//             <h3 className="text-lg font-semibold text-cyan-100 mb-1">
//               {item.name}
//             </h3>
//             <div className="text-xs text-cyan-300 italic mb-2">
//               {item.scientificName || item.authority}
//             </div>
//             <div className="text-sm mb-2 text-cyan-50 text-center">
//               {item.description || (item.rank ? `Rank: ${item.rank}` : '')}
//             </div>
//             <div className="text-xs text-cyan-200 mb-2">
//               {item.habitat && `Habitat: ${item.habitat}`}
//             </div>
//             <span
//               className={`mt-2 text-xs px-2 py-0.5 rounded ${
//                 item._source === 'Local DB'
//                   ? 'bg-cyan-800'
//                   : item._source === 'WoRMS'
//                   ? 'bg-blue-800'
//                   : 'bg-green-800'
//               } text-white`}
//             >
//               {item._source}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {modal && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//           <div className="bg-white text-black rounded-xl p-8 max-w-md w-full relative">
//             <button
//               className="absolute top-2 right-2 text-2xl text-cyan-700"
//               onClick={() => setModal(null)}
//             >
//               &times;
//             </button>
//             <img
//               src={modal.imageUrl || modal.image || '/default-avatar.png'}
//               alt={modal.name}
//               className="w-40 h-40 object-cover rounded mx-auto mb-4 border-2 border-cyan-400"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = '/default-avatar.png';
//               }}
//             />
//             <h2 className="text-2xl font-bold mb-2 text-cyan-800">
//               {modal.name}
//             </h2>
//             <div className="text-sm text-cyan-700 mb-2">
//               {modal.scientificName || modal.authority}
//             </div>
//             <div className="mb-2">
//               {modal.description || (modal.rank ? `Rank: ${modal.rank}` : '')}
//             </div>
//             <div className="mb-2 text-xs text-cyan-700">
//               {modal.habitat && `Habitat: ${modal.habitat}`}
//             </div>
//             {modal.facts && modal.facts.length > 0 && (
//               <ul className="text-xs text-cyan-700 list-disc pl-4 mb-2">
//                 {modal.facts.map((fact, idx) => (
//                   <li key={idx}>{fact}</li>
//                 ))}
//               </ul>
//             )}
//             <div className="text-xs text-gray-500 mt-2">
//               Source: {modal._source}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }





//final version src/pages/Species.jsx
// This is the final version of the Species component, which includes search functionality, loading states,
import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { useSearchParams } from 'react-router-dom';

export default function Species() {
  const [species, setSpecies] = useState([]);
  const [wormsSpecies, setWormsSpecies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [modal, setModal] = useState(null);
  const [search, setSearch] = useState('Clownfish');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const filterFromURL = searchParams.get('filter');
    if (filterFromURL) {
      setSearch(filterFromURL);
    }
  }, [searchParams]);

  useEffect(() => {
    let localDone = false;
    let wormsDone = false;
    setLoading(true);

    axios.get('/species')
      .then(res => setSpecies(res.data))
      .catch(() => setError('Failed to load local species.'))
      .finally(() => { localDone = true; if (wormsDone) setLoading(false); });

    axios.get(`/worms/${encodeURIComponent(search)}`)
      .then(res => setWormsSpecies(res.data))
      .catch(() => setError('Failed to load WoRMS species.'))
      .finally(() => { wormsDone = true; if (localDone) setLoading(false); });
  }, [search]);

  const allResults = [
    ...species.map(sp => ({ ...sp, _source: 'Local DB' })),
    ...wormsSpecies.map(ws => ({ ...ws, _source: ws.source || 'API' }))
  ];
  const noResults = !loading && allResults.length === 0;

  if (loading) return <div className="text-center text-white mt-10">Loading species...</div>;
  if (error) return <div className="text-center text-red-400 mt-10">{error}</div>;

  return (
    <div className="p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Species Catalog</h2>
        <span className="bg-cyan-700 text-white px-3 py-1 rounded-full text-sm font-semibold">Total: {allResults.length}</span>
      </div>
      <form onSubmit={e => { e.preventDefault(); setSearch(e.target.elements.speciesSearch.value); }} className="mb-6 flex gap-2">
        <input
          type="text"
          name="speciesSearch"
          defaultValue={search}
          placeholder="Search marine species (e.g. Dolphin, Tuna)"
          className="p-2 rounded border border-cyan-400 text-black w-64"
        />
        <button type="submit" className="px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-800">Search</button>
      </form>
      {noResults && (
        <div className="text-center text-cyan-200 italic mb-8">No results found for "{search}". Try another species name.</div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allResults.map((item, idx) => (
          <div
            key={item._id || item.name + idx}
            className="bg-white/10 rounded-xl p-4 shadow flex flex-col items-center border border-cyan-900/30 hover:shadow-lg transition cursor-pointer"
            onClick={() => setModal(item)}
          >
            <img
              src={item.imageUrl || item.image || '/default-avatar.png'}
              alt={item.name}
              className="w-32 h-32 object-cover rounded mb-2 border-2 border-cyan-400 bg-white/20"
              onError={e => { e.target.onerror = null; e.target.src = '/default-avatar.png'; }}
            />
            <h3 className="text-lg font-semibold text-cyan-100 mb-1">{item.name}</h3>
            <div className="text-xs text-cyan-300 italic mb-2">{item.scientificName || item.authority}</div>
            <div className="text-sm mb-2 text-cyan-50 text-center">{item.description || (item.rank ? `Rank: ${item.rank}` : '')}</div>
            <div className="text-xs text-cyan-200 mb-2">{item.habitat && `Habitat: ${item.habitat}`}</div>
            <span className={`mt-2 text-xs px-2 py-0.5 rounded ${item._source === 'Local DB' ? 'bg-cyan-800' : item._source === 'WoRMS' ? 'bg-blue-800' : 'bg-green-800'} text-white`}>{item._source}</span>
          </div>
        ))}
      </div>

      {modal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-xl p-8 max-w-md w-full relative">
            <button className="absolute top-2 right-2 text-2xl text-cyan-700" onClick={() => setModal(null)}>&times;</button>
            <img
              src={modal.imageUrl || modal.image || '/default-avatar.png'}
              alt={modal.name}
              className="w-40 h-40 object-cover rounded mx-auto mb-4 border-2 border-cyan-400"
              onError={e => { e.target.onerror = null; e.target.src = '/default-avatar.png'; }}
            />
            <h2 className="text-2xl font-bold mb-2 text-cyan-800">{modal.name}</h2>
            <div className="text-sm text-cyan-700 mb-2">{modal.scientificName || modal.authority}</div>
            <div className="mb-2">{modal.description || (modal.rank ? `Rank: ${modal.rank}` : '')}</div>
            <div className="mb-2 text-xs text-cyan-700">{modal.habitat && `Habitat: ${modal.habitat}`}</div>
            {modal.facts && modal.facts.length > 0 && (
              <ul className="text-xs text-cyan-700 list-disc pl-4 mb-2">
                {modal.facts.map((fact, idx) => <li key={idx}>{fact}</li>)}
              </ul>
            )}
            {modal.sightings && modal.sightings.length > 0 && (
              <div className="mt-4">
                <h4 className="text-md font-semibold text-cyan-700 mb-2">Sightings:</h4>
                <ul className="text-xs text-gray-800 max-h-40 overflow-y-auto space-y-1">
                  {modal.sightings.map((s, i) => (
                    <li key={i} className="p-2 bg-cyan-100/30 rounded">
                      <span className="block font-medium">{s.reporter || 'added from satellite'}</span>
                      <span className="block text-xs">📍 {s.location?.lat}, {s.location?.lng}</span>
                      <span className="block text-xs">🕒 {new Date(s.createdAt).toLocaleString()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="text-xs text-gray-500 mt-2">Source: {modal._source}</div>
          </div>
        </div>
      )}
    </div>
  );
}
