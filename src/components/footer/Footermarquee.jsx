import React from "react";

/**
 * LeftMarquee
 * A simple, accessible, left-scrolling marquee built with React + Tailwind.
 * - Direction: left (text moves left continuously)
 * - Props:
 *    text: string (required)
 *    speed: number in seconds for one full loop (default 20)
 *    className: optional extra Tailwind classes for the wrapper
 *
 * Usage:
 *   <LeftMarquee text="The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support." speed={25} />
 */
export default function LeftMarquee({
  text =
    "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.                                                             ",
  speed = 40,
  className = "",
}) {
  return (
    <div
      className={` relative w-full overflow-hidden text-green-400 bg-[#1B305C]/80 border border-[#1B305C] rounded-2xl p-3 ${className}`}
      role="marquee"
      aria-label="Scrolling announcement"
    >
      {/* Optional soft edge masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r " />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l " />

      <div
        className="marquee-viewport"
        style={{
          // custom property used by CSS below
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          "--marquee-duration": `${speed}s`,
        }}
      >
        {/* We duplicate content so the scroll is seamless */}
        <div className="marquee-track">
          <span className="marquee-text">{text}</span>
          {/* <span aria-hidden className="marquee-sep">•</span> */}
          <span aria-hidden className="marquee-text">{text}</span>
        </div>
      </div>

      {/* Component-scoped styles for the marquee animation */}
      <style>{`
        .marquee-viewport { 
          position: relative;
          width: 100%;
          white-space: nowrap;
        }
        .marquee-track {
          display: inline-block;
          padding-left: 100%; /* start off-screen to the right */
          will-change: transform;
          animation-name: marquee-left;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: var(--marquee-duration, 20s);
        }
        .group:hover .marquee-track { /* pause on hover */
          animation-play-state: paused;
        }
        .marquee-text {
          display: inline-block;
          padding-right: 2rem;
        }
        .marquee-sep {
          display: inline-block;
          padding: 0 1rem;
        }
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
