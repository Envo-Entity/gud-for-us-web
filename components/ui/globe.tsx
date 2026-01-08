import React from "react";

interface GlobeProps {
  size?: number;
  className?: string;
}

const Globe: React.FC<GlobeProps> = ({ size = 250, className = "" }) => {
  return (
    <>
      <style>
        {`
          @keyframes earthRotate {
            0% { background-position: 0 0; }
            100% { background-position: 400px 0; }
          }
          @keyframes twinkling { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-slow { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-long { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-fast { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
        `}
      </style>
      <div className={`flex items-center justify-center ${className}`}>
        <div
          className="relative rounded-full overflow-hidden"
          style={{
            width: size,
            height: size,
            backgroundImage:
              "url('https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/globe.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "left",
            animation: "earthRotate 30s linear infinite",
            boxShadow: `0 0 ${size * 0.08}px rgba(255,255,255,0.2), 
                       -${size * 0.02}px 0 ${size * 0.032}px #c3f4ff inset, 
                       ${size * 0.06}px ${size * 0.008}px ${
              size * 0.1
            }px #000 inset, 
                       -${size * 0.096}px -${size * 0.008}px ${
              size * 0.136
            }px #c3f4ff99 inset, 
                       ${size}px 0 ${size * 0.176}px #00000066 inset, 
                       ${size * 0.6}px 0 ${size * 0.152}px #000000aa inset`,
          }}
        >
          {/* Stars */}
          <div
            className="absolute left-[-20px] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling 3s infinite" }}
          />
          <div
            className="absolute left-[-40px] top-[30px] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling-slow 2s infinite" }}
          />
          <div
            className="absolute left-[350px] top-[90px] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling-long 4s infinite" }}
          />
          <div
            className="absolute left-[200px] top-[290px] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling 3s infinite" }}
          />
          <div
            className="absolute left-[50px] top-[270px] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling-fast 1.5s infinite" }}
          />
          <div
            className="absolute left-[250px] top-[-50px] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling-long 4s infinite" }}
          />
          <div
            className="absolute left-[290px] top-[60px] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling-slow 2s infinite" }}
          />
        </div>
      </div>
    </>
  );
};

export default Globe;
