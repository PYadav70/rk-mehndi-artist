import React from 'react';

interface OrnamentalDividerProps {
  className?: string;
  light?: boolean;
  scriptText?: string;
}

export const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({
  className = '',
  light = false,
  scriptText,
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-3 sm:my-4 ${className}`}>
      {/* Left fine line with dot */}
      <div className="flex items-center gap-1.5">
        <span className={`h-px w-8 sm:w-16 ${light ? 'bg-amber-200/35' : 'bg-[#C5A059]/40'}`} />
        <span className={`w-1 h-1 rounded-full ${light ? 'bg-[#ECCF8A]' : 'bg-[#C5A059]'}`} />
      </div>

      {scriptText ? (
        <span
          className={`font-serif italic text-lg sm:text-2xl px-2 tracking-wide select-none ${
            light ? 'text-[#ECCF8A]' : 'text-[#8C6A24]'
          }`}
        >
          ... {scriptText} ...
        </span>
      ) : (
        <svg
          className={`w-4 h-4 ${light ? 'text-[#ECCF8A]' : 'text-[#C5A059]'}`}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          {/* Indian Lotus / Floral Petal Motif */}
          <path
            d="M12 2C12 2 14.5 7 14.5 10C14.5 11.5 13.5 13 12 14C10.5 13 9.5 11.5 9.5 10C9.5 7 12 2 12 2Z"
            opacity="0.9"
          />
          <path
            d="M12 14C14 13 18 13.5 19 16C17 18 13.5 17 12 16.5C10.5 17 7 18 5 16C6 13.5 10 13 12 14Z"
            opacity="0.75"
          />
          <circle cx="12" cy="18" r="1.5" />
        </svg>
      )}

      {/* Right fine line with dot */}
      <div className="flex items-center gap-1.5">
        <span className={`w-1 h-1 rounded-full ${light ? 'bg-[#ECCF8A]' : 'bg-[#C5A059]'}`} />
        <span className={`h-px w-8 sm:w-16 ${light ? 'bg-amber-200/35' : 'bg-[#C5A059]/40'}`} />
      </div>
    </div>
  );
};
