import React from "react";

export default function LeftMarquee({
  text =
    "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.",
  speed = 40,
  className = "",
}) {
  return (
    <div
      className={`relative w-full overflow-hidden text-green-400 bg-[#1B305C]/80 border border-[#1B305C] rounded-2xl p-3 flex items-center gap-3 ${className}`}
      role="marquee"
      aria-label="Scrolling announcement"
    >
      {/* Fixed label on left */}
      <p className="text-xs md:text-sm text-green-600 font-bold whitespace-nowrap">
        CMT ACKNOWLEDGEMENT:
      </p>

      {/* Marquee section */}
      <div
        className="marquee-viewport flex-1"
        style={{
          "--marquee-duration": `${speed}s`,
        }}
      >
        <div className="marquee-track">
          <span className="marquee-text">{text}</span>
          <span aria-hidden className="marquee-text">{text}</span>
        </div>
      </div>

      {/* Component-scoped styles */}
      <style>{`
        .marquee-viewport { 
          position: relative;
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
        }
        .marquee-track {
          display: inline-block;
          padding-left: 100%;
          will-change: transform;
          animation-name: marquee-left;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: var(--marquee-duration, 20s);
        }
        .group:hover .marquee-track {
          animation-play-state: paused;
        }
        .marquee-text {
          display: inline-block;
          padding-right: 2rem;
        }
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
