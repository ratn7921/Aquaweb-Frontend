// ----------------------------------------
// FRONTEND: src/components/LikeButton.jsx
import React, { useState, useEffect } from 'react';
import { toggleLike } from '../api/socialApi';
export default function LikeButton({ reportId }) {
  const [liked, setLiked] = useState(false);
  const handle = async () => { await toggleLike(reportId); setLiked(!liked); };
  return <button onClick={handle}>{liked ? '💖' : '🤍'}</button>;
}

// // ----------------------------------------
// // FRONTEND: src/pages/Analytics.jsx
// import React, { useEffect, useState } from 'react';
// import { getHeatmap, getTrends } from '../api/analyticsApi';
// export default function Analytics() {
//   const [heatmap, setHeatmap] = useState([]);
//   const [trends, setTrends] = useState([]);
//   useEffect(() => { getHeatmap().then(r => setHeatmap(r.data)); getTrends().then(r => setTrends(r.data)); }, []);
//   return (<div>Charts and maps here</div>);
// }
