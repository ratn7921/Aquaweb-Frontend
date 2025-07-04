


// // src/components/Feed/PostCard.jsx
// import React from 'react';
// import LikeButton from '../LikeButton';
// import CommentSection from '../CommentSection';

// export default function PostCard({ post }) {
//   // Destructure, but keep the raw `author` object around
//   const {
//     author = {}, // default to an empty object
//     text,
//     createdAt,
//     likesCount,
//     commentsCount,
//     iLiked
//   } = post;

//   // Safely compute a display name
//   const displayName = author.name || 'Unknown User';

//   // Safely compute avatar URL
//   // If author.avatar is a valid URL, use it; otherwise fall back
//   const avatarUrl =
//     author.avatar && author.avatar.startsWith('http')
//       ? author.avatar
//       : '/default-avatar.png';

//   return (
//     <div className="p-4 bg-white rounded shadow mb-4">
//       <div className="flex items-center mb-2">
//         <img
//           src={avatarUrl}
//           alt={displayName}
//           className="w-8 h-8 rounded-full mr-2 object-cover"
//           onError={e => {
//             // In case the image 404s, go to default
//             e.currentTarget.src = '/default-avatar.png';
//           }}
//         />
//         <div>
//           <p className="font-semibold">{displayName}</p>
//           <p className="text-xs text-gray-500">
//             {new Date(createdAt).toLocaleString()}
//           </p>
//         </div>
//       </div>

//       <p className="mb-2">{text}</p>

//       <div className="flex items-center space-x-4 mb-2">
//         <LikeButton
//           postId={post._id}
//           initialLiked={iLiked}
//           initialCount={likesCount}
//         />
//         <span className="text-sm text-gray-600">
//           {commentsCount} comment{commentsCount === 1 ? '' : 's'}
//         </span>
//       </div>

//       <CommentSection postId={post._id} />
//     </div>
//   );
// }


// src/components/Feed/PostCard.jsx
import React from 'react';
import {
  FaRegComment,
  FaRetweet,
  FaHeart,
  FaShareSquare
} from 'react-icons/fa';
import LikeButton from '../LikeButton';
import CommentSection from '../CommentSection';

export default function PostCard({ post }) {
  const {
    author = {},
    text,
    createdAt,
    likesCount,
    commentsCount,
    iLiked,
    media = []
  } = post;

  const displayName = author.name || 'Unknown User';
  const handle = author.username
    ? `@${author.username}`
    : author.email
    ? `@${author.email.split('@')[0]}`
    : '@anonymous';

  const avatarUrl =
    author.avatar && author.avatar.startsWith('http')
      ? author.avatar
      : '/default-avatar.png';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow mb-4 overflow-hidden">
      {/* Header */}
      <div className="flex items-center px-4 py-3">
        <img
          src={avatarUrl}
          alt={displayName}
          onError={e => (e.currentTarget.src = '/default-avatar.png')}
          className="w-10 h-10 rounded-full mr-3 object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center">
            <span className="font-semibold text-gray-900 dark:text-gray-100 mr-2">
              {displayName}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              {handle}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm mx-1">
              ·
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              {new Date(createdAt).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </span>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="px-4 pb-3">
        <p className="text-gray-800 dark:text-gray-200 leading-tight">
          {text}
        </p>
      </div>

      {/* Media Carousel */}
      {media.length > 0 && (
        <div className="grid grid-cols-1 gap-1">
          {media.map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`media-${i}`}
              onError={e => (e.currentTarget.style.display = 'none')}
              className="w-full h-48 object-cover"
            />
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-between items-center px-4 py-2 text-gray-500 dark:text-gray-400">
        <button className="flex items-center space-x-1 hover:text-blue-500 transition">
          <FaRegComment />
          <span className="text-sm">{commentsCount}</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-green-500 transition">
          <FaRetweet />
        </button>
        <LikeButton
          postId={post._id}
          initialLiked={iLiked}
          initialCount={likesCount}
          iconOnly
        />
        <button className="flex items-center space-x-1 hover:text-blue-600 transition">
          <FaShareSquare />
        </button>
      </div>

      {/* Comments Section */}
      <CommentSection postId={post._id} />
    </div>
  );
}
