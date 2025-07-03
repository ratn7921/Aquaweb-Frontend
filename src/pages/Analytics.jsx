// src/pages/Analytics.jsx
import React, { useEffect, useState } from 'react';
import { getHeatmap, getTrends } from '../api/analyticsApi';

export default function Analytics() {
  const [heatmap, setHeatmap] = useState([]);
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getHeatmap().then((r) => setHeatmap(r.data));
    getTrends().then((r) => setTrends(r.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Analytics Dashboard</h2>
      <div>
        <h3 className="font-semibold">Trends:</h3>
        <pre>{JSON.stringify(trends, null, 2)}</pre>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Heatmap Data:</h3>
        <pre>{JSON.stringify(heatmap, null, 2)}</pre>
      </div>
    </div>
  );
}
