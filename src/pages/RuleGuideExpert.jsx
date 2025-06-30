// import React, { useEffect } from "react";

// export default function RuleGuideExpert() {
//   useEffect(() => {
//     // Dynamically load Tenor's embed script once component mounts
//     const script = document.createElement("script");
//     script.src = "https://tenor.com/embed.js";
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-gradient-to-b from-blue-950/60 to-cyan-900/60 py-20 px-4 sm:px-8 flex items-center justify-center overflow-hidden">
//       {/* Tenor Fish Sticker (Background Layer) */}
//       <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
//         <div
//           className="tenor-gif-embed w-full max-w-xl opacity-40"
//           data-postid="17543269"
//           data-share-method="host"
//           data-aspect-ratio="1"
//           data-width="100%"
//         >
//           <a href="https://tenor.com/view/fish-joypixels-underwater-living-sea-creature-light-blue-fish-gif-17543269">
//             Fish Joypixels Sticker
//           </a>{" "}
//           from{" "}
//           <a href="https://tenor.com/search/fish-stickers">Fish Stickers</a>
//         </div>
//       </div>

//       {/* Glass Info Card */}
//       <div className="relative z-10 max-w-3xl w-full rounded-3xl p-8 sm:p-12 backdrop-blur-2xl bg-white/5 border border-white/20 shadow-2xl text-white glass-shimmer">
//         <h1 className="text-4xl font-extrabold text-center mb-8 text-cyan-100 drop-shadow-lg">
//           👨‍🔬 Expert's Guide: Legal Powers & Platform Benefits
//         </h1>

//         <ul className="list-disc pl-6 space-y-4 text-cyan-100 text-sm sm:text-base leading-relaxed">
//           <li>
//             <strong>Monitor and verify reports:</strong> Review and validate incident and sighting reports submitted by travellers.
//           </li>
//           <li>
//             <strong>Use legal authority:</strong> If authorized, coordinate with local authorities to address illegal whale hunting or marine crimes.
//           </li>
//           <li>
//             <strong>Educate and guide:</strong> Provide guidance to tourists and operators on best practices and legal requirements.
//           </li>
//           <li>
//             <strong>Contribute research:</strong> Use AquaWeb data for scientific research and conservation planning.
//           </li>
//           <li>
//             <strong>Lead conservation efforts:</strong> Organize awareness campaigns and collaborate with NGOs using AquaWeb's platform.
//           </li>
//           <li>
//             <strong>Ensure compliance:</strong> Help enforce marine protection laws and promote ethical whale watching.
//           </li>
//         </ul>

//         <p className="mt-8 text-cyan-200 text-sm sm:text-base">
//           As an expert, your actions and knowledge are vital for marine conservation.
//           Use AquaWeb to maximize your positive impact!
//         </p>
//       </div>

//       {/* Styling */}
//       <style>{`
//         .glass-shimmer::before {
//           content: "";
//           position: absolute;
//           top: 0; left: 0; right: 0; bottom: 0;
//           background: linear-gradient(145deg, rgba(255,255,255,0.05) 0%, transparent 70%);
//           border-radius: inherit;
//           z-index: 0;
//         }
//       `}</style>
//     </div>
//   );
// }



import React from "react";
import FishLoader from "../components/FishLoader";

export default function RuleGuideExpert() {
  return (
    <div className="relative min-h-screen ">
      {/* Fish animation background */}
      <FishLoader count={4} />

      {/* Gradient & glass layout */}
      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-cyan-900 to-blue-800 py-20 px-6 rounded-3xl shadow-xl  mb-10">
        <div className="max-w-3xl mx-auto bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-10 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-8 drop-shadow">
            👨‍🔬 Expert's Guide: Legal Powers & Platform Benefits
          </h1>

          <ul className="space-y-5 text-cyan-100 text-sm sm:text-base">
            <li className="flex gap-3 items-start">
              <span className="text-lg">🧐</span>
              <p><strong>Monitor and verify reports:</strong> Review and validate incident and sighting reports submitted by travellers.</p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-lg">⚖️</span>
              <p><strong>Use legal authority:</strong> If authorized, coordinate with local authorities to address illegal whale hunting or marine crimes.</p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-lg">🎓</span>
              <p><strong>Educate and guide:</strong> Provide guidance to tourists and operators on best practices and legal requirements.</p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-lg">📊</span>
              <p><strong>Contribute research:</strong> Use AquaWeb data for scientific research and conservation planning.</p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-lg">🌍</span>
              <p><strong>Lead conservation efforts:</strong> Organize awareness campaigns and collaborate with NGOs using AquaWeb's platform.</p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-lg">🛡️</span>
              <p><strong>Ensure compliance:</strong> Help enforce marine protection laws and promote ethical whale watching.</p>
            </li>
          </ul>

          <p className="text-cyan-200 mt-8 text-center text-sm leading-relaxed">
            🌊 As an expert, your actions and knowledge are vital for marine conservation.<br />
            Use AquaWeb to maximize your positive impact!
          </p>
        </div>
      </div>
    </div>
  );
}
