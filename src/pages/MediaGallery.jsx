// // src/pages/MediaGallery.jsx
// import React, { useEffect, useState } from 'react';
// import { getAllMedia } from '../api/mediaApi';

// export default function MediaGallery() {
//   const [mediaList, setMediaList] = useState([]);

//   useEffect(() => {
//     getAllMedia().then((res) => setMediaList(res.data));
//   }, []);

//   return (
//     <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
//       {mediaList.map((media) => (
//         <div key={media._id} className="bg-white shadow rounded">
//           {media.type.includes('image') ? (
//             <img src={media.url} alt="Uploaded Media" className="w-full h-40 object-cover" />
//           ) : (
//             <video controls src={media.url} className="w-full h-40 object-cover" />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }



import React, { useEffect, useState } from 'react';
import { getAllMedia } from '../api/mediaApi';

const MediaGallery = () => {
  const [mediaItems, setMediaItems] = useState([]); // ✅ initialize as an empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const data = await getAllMedia();
        setMediaItems(data); // make sure data is an array
      } catch (error) {
        console.error('Error fetching media:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading media...</div>;

  if (!Array.isArray(mediaItems)) {
    return <div className="text-center text-red-500 mt-10">Failed to load media</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Media Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mediaItems.map((media) => (
          <div key={media._id} className="rounded overflow-hidden shadow-lg bg-white">
            <img src={media.imageUrl} alt={media.title || 'Media'} className="w-full h-48 object-cover" />
            <div className="px-4 py-2">
              <p className="text-sm text-gray-700">{media.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaGallery;
