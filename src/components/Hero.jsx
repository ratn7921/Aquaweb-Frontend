// import React from "react";
// import referGif from "../assets/ReferimageDesighn.gif";
// import referImg from "../assets/Referimage1.jpg";
// // You can add more images as needed, e.g. import whaleImg from "../assets/whale.png";

// const Hero = () => {
//   return (
//     <section className="mt-28 relative flex flex-col md:flex-row items-center justify-center min-h-[70vh] px-2 sm:px-4 md:px-16 py-8 sm:py-12 bg-gradient-to-br from-cyan-50 via-blue-100 to-cyan-200 overflow-hidden">
//       {/* Left: Animated GIF and Whale Image */}
//       <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0">
//         <img
//           src={referGif}
//           alt="Whale Animation"
//           className="rounded-2xl shadow-2xl w-48 h-48 sm:w-72 sm:h-72 object-cover border-4 bg-white/40 backdrop-blur-lg mb-6"
//         />
//         <div className="flex gap-4 mt-2">
//           {/* Add more <img> tags here for additional visuals */}
//         </div>
//       </div>
//       {/* Right: Text and Reference Image */}
//       <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
//         <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-700 via-blue-700 to-cyan-400 bg-clip-text text-transparent mb-4 drop-shadow-lg">
//  Map Your Marine Encounters & Help Protect Ocean Giants          </h1>
//         <p className="text-base sm:text-lg md:text-xl text-cyan-900/90 mb-6 max-w-xl">
//            AquaWeb empowers ocean explorers of all kinds—whale watchers, dolphin enthusiasts, and beyond—to map their journeys, log sightings, and report incidents. Whether you spot a breaching humpback or a playful pod of dolphins, your data drives conservation.

//         </p>
//         <img
//           src={referImg}
//           alt="Whale Watching"
//           className="rounded-xl shadow-lg w-full max-w-xs h-32 sm:h-40 object-cover border-2 border-cyan-200 mb-4"
//         />
//         <div className="flex gap-4 mt-2">
//           {/* Add more <img> tags here for additional visuals */}
//         </div>
//         <a
//           href="/register"
//           className="inline-block mt-4 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:from-blue-700 hover:to-cyan-600 transition"
//         >
//          Start Your Ocean Journey
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;




// import React from "react";
// import referGif from "../assets/ReferimageDesighn.gif";
// import referImg from "../assets/Referimage1.jpg";
// import dolphinIcon from "../assets/dolphin-icon.png";
// import turtleIcon from "../assets/turtle-icon.png";
// import whaleIcon from "../assets/whale-icon.png";

// const Hero = () => {
//   return (
//     <section className="relative z-10 mt-28 flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-16 bg-gradient-to-br from-[#e0f7fa] via-[#bbdefb] to-[#e1f5fe] overflow-hidden rounded-3xl shadow-2xl max-w-[1400px] mx-auto">
//       {/* Floating Icons */}
//       <img
//         src={dolphinIcon}
//         alt="Dolphin"
//         className="absolute top-8 left-8 w-12 sm:w-16 animate-[float_6s_ease-in-out_infinite] opacity-70"
//       />
//       <img
//         src={turtleIcon}
//         alt="Turtle"
//         className="absolute bottom-8 left-12 w-10 sm:w-14 animate-[float_7s_ease-in-out_infinite] opacity-60"
//       />
//       <img
//         src={whaleIcon}
//         alt="Whale"
//         className="absolute bottom-12 right-8 w-14 sm:w-18 animate-[float_5s_ease-in-out_infinite] opacity-70"
//       />

//       {/* Left Content */}
//       <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#0277bd] via-[#01579b] to-[#00bcd4] leading-tight drop-shadow-xl">
// Map Your Marine Encounters ⛴️ <br /> Help Protect Ocean Giants 🐳🐬🦈       </h1>
//         <p className="text-lg sm:text-xl text-[#004d40] font-medium leading-relaxed max-w-xl">
//           AquaWeb empowers ocean explorers—whale watchers, dolphin fans, sea turtle protectors, and more—to document encounters, report issues, and fuel marine conservation. Your observations can spark real change.
//         </p>
//         <a
//           href="/register"
//           className="mt-2 inline-block text-lg font-semibold px-8 py-4 bg-gradient-to-r from-[#0288d1] to-[#00acc1] text-white rounded-full shadow-xl hover:from-[#00acc1] hover:to-[#0288d1] transition-all duration-300"
//         >
//           Start Your Ocean Journey
//         </a>
//       </div>

//       {/* Right Visual */}
//       <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative">
//         <div className="relative bg-white/50 backdrop-blur-xl border-4 border-white rounded-3xl p-4 shadow-2xl">
//           <img
//             src={referGif}
//             alt="Marine Animation"
//             className="w-60 sm:w-80 h-auto rounded-2xl object-cover"
//           />
//         </div>
//         <img
//           src={referImg}
//           alt="Marine Conservation"
//           className="mt-6 rounded-2xl border-2 border-[#b2ebf2] shadow-lg w-full max-w-xs sm:max-w-sm h-40 sm:h-48 object-cover"
//         />
//         <div className="flex gap-3 mt-4">
//           <img src={whaleIcon} alt="Whale" className="w-10 h-10" />
//           <img src={dolphinIcon} alt="Dolphin" className="w-10 h-10" />
//           <img src={turtleIcon} alt="Turtle" className="w-10 h-10" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;








import React from "react";
import referGif from "../assets/ReferimageDesighn.gif";
import referImg from "../assets/Referimage1.jpg";
import dolphinIcon from "../assets/dolphin-icon.png";
import turtleIcon from "../assets/turtle-icon.png";
import whaleIcon from "../assets/whale-icon.png";

const Hero = () => {
  return (
    <section className="relative z-10 mt-20 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 py-12 sm:py-16 bg-gradient-to-br from-[#e0f7fa] via-[#bbdefb] to-[#e1f5fe] overflow-hidden rounded-3xl shadow-xl max-w-[100vw] mx-auto">
      {/* Floating Icons */}
      <img
        src={dolphinIcon}
        alt="Dolphin"
        className="absolute top-4 left-4 w-10 sm:w-12 animate-realistic-1 opacity-70"
      />
      <img
        src={turtleIcon}
        alt="Turtle"
        className="absolute bottom-6 left-6 w-8 sm:w-10 animate-realistic-2 opacity-60"
      />
      <img
        src={whaleIcon}
        alt="Whale"
        className="absolute bottom-8 right-6 w-12 sm:w-14 animate-realistic-1 opacity-70"
      />

      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-5 sm:space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#0277bd] via-[#01579b] to-[#00bcd4] leading-tight drop-shadow-xl">
          Discover. Log. Protect.
        </h1>
        <p className="text-base sm:text-lg text-[#004d40] font-medium leading-relaxed max-w-md sm:max-w-lg">
          AquaWeb empowers ocean explorers—whale watchers, dolphin fans, sea turtle protectors, and more—to document encounters, report issues, and fuel marine conservation. Your observations can spark real change.
        </p>
        <a
          href="/register"
          className="inline-block text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#0288d1] to-[#00acc1] text-white rounded-full shadow-md hover:from-[#00acc1] hover:to-[#0288d1] transition-all duration-300"
        >
          Start Your Ocean Journey
        </a>
      </div>

      {/* Right Visual */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center mt-10 md:mt-0">
        <div className="relative bg-white/60 backdrop-blur-xl border-4 border-white rounded-2xl p-3 sm:p-4 shadow-lg w-64 sm:w-72">
          <img
            src={referGif}
            alt="Marine Animation"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
        <img
          src={referImg}
          alt="Marine Conservation"
          className="mt-5 rounded-xl border-2 border-[#b2ebf2] shadow-md w-full max-w-xs h-32 sm:h-40 object-cover"
        />
        <div className="flex gap-3 mt-4">
          <img src={whaleIcon} alt="Whale" className="w-8 h-8 sm:w-10 sm:h-10" />
          <img src={dolphinIcon} alt="Dolphin" className="w-8 h-8 sm:w-10 sm:h-10" />
          <img src={turtleIcon} alt="Turtle" className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
