import React from 'react';

export function ETLAnimation() {
  return (
    <div className="w-full h-24 flex items-center justify-center gap-8 text-white relative">
      {/* Extract Stickman */}
      <div className="flex flex-col items-center">
        <div className="animate-bounce">
          <div className="w-8 h-8 rounded-full border-2 border-white mb-1" /> {/* Head */}
          <div className="w-0.5 h-10 bg-white mx-auto relative"> {/* Body */}
            <div className="absolute top-0 left-0 w-6 h-0.5 bg-white rotate-45 origin-left" /> {/* Left arm */}
            <div className="absolute top-0 right-0 w-6 h-0.5 bg-white -rotate-45 origin-right" /> {/* Right arm */}
            <div className="absolute bottom-0 left-0 w-6 h-0.5 bg-white -rotate-45 origin-left" /> {/* Left leg */}
            <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-white rotate-45 origin-right" /> {/* Right leg */}
          </div>
        </div>
        <span className="mt-2 text-sm">Extract</span>
      </div>

      {/* Arrow 1 */}
      <div className="w-12 h-0.5 bg-white relative">
        <div className="absolute right-0 w-2 h-0.5 bg-white rotate-45 origin-right" />
        <div className="absolute right-0 w-2 h-0.5 bg-white -rotate-45 origin-right" />
      </div>

      {/* Transform Stickman */}
      <div className="flex flex-col items-center">
        <div className="animate-pulse">
          <div className="w-8 h-8 rounded-full border-2 border-white mb-1" />
          <div className="w-0.5 h-10 bg-white mx-auto relative">
            <div className="absolute top-0 left-0 w-6 h-0.5 bg-white rotate-[30deg] origin-left" />
            <div className="absolute top-0 right-0 w-6 h-0.5 bg-white -rotate-[30deg] origin-right" />
            <div className="absolute bottom-0 left-0 w-6 h-0.5 bg-white rotate-[60deg] origin-left" />
            <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-white -rotate-[60deg] origin-right" />
          </div>
        </div>
        <span className="mt-2 text-sm">Transform</span>
      </div>

      {/* Arrow 2 */}
      <div className="w-12 h-0.5 bg-white relative">
        <div className="absolute right-0 w-2 h-0.5 bg-white rotate-45 origin-right" />
        <div className="absolute right-0 w-2 h-0.5 bg-white -rotate-45 origin-right" />
      </div>

      {/* Load Stickman */}
      <div className="flex flex-col items-center">
        <div className="animate-bounce">
          <div className="w-8 h-8 rounded-full border-2 border-white mb-1" />
          <div className="w-0.5 h-10 bg-white mx-auto relative">
            <div className="absolute top-0 left-0 w-6 h-0.5 bg-white -rotate-[15deg] origin-left" />
            <div className="absolute top-0 right-0 w-6 h-0.5 bg-white rotate-[15deg] origin-right" />
            <div className="absolute bottom-0 left-0 w-6 h-0.5 bg-white rotate-[15deg] origin-left" />
            <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-white -rotate-[15deg] origin-right" />
          </div>
        </div>
        <span className="mt-2 text-sm">Load</span>
      </div>
    </div>
  );
}