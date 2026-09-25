import React, { useState, useEffect } from 'react';
import { Sparkles, Image as ImageIcon } from 'lucide-react';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  fill = false,
  priority = false,
  width,
  height,
  className = '',
  style,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Extract clean file name from path for helpful client placeholder
  const fileName = src ? src.split('/').pop() || src : 'image.jpg';

  useEffect(() => {
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  // Fallback placeholder container if real image file is not yet dropped in /public/images/
  if (hasError) {
    return (
      <div
        className={`${
          fill ? 'absolute inset-0 w-full h-full' : 'w-full h-full'
        } bg-[#0E1E12] border border-[#C5A059]/30 flex flex-col items-center justify-center p-4 text-center select-none overflow-hidden relative group ${className}`}
        style={{
          width: fill ? '100%' : width,
          height: fill ? '100%' : height,
          ...style,
        }}
      >
        {/* Subtle Ornamental Henna Mandala Background */}
        <div className="absolute inset-0 opacity-15 mehndi-grid-bg pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B160E]/50 to-[#0B160E]/90 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center justify-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-[#162B1D] border border-[#C5A059]/40 flex items-center justify-center text-[#ECCF8A] shadow-inner">
            <ImageIcon className="w-5 h-5 text-[#C5A059]" />
          </div>

          <div className="space-y-0.5">
            <span className="text-[11px] font-mono tracking-wider font-semibold text-[#ECCF8A] block uppercase">
              Add {fileName}
            </span>
            <span className="text-[10px] text-[#A8B5A9] tracking-wider block font-light">
              Place in public{src}
            </span>
          </div>

          <div className="inline-flex items-center gap-1 text-[9px] text-[#C5A059]/80 uppercase tracking-widest bg-[#162B1D]/80 px-2 py-0.5 rounded-full border border-[#C5A059]/20">
            <Sparkles className="w-2.5 h-2.5 text-[#ECCF8A]" />
            <span>Ready for client photo</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setHasError(true)}
      onLoad={() => setIsLoaded(true)}
      className={`${fill ? 'absolute inset-0 w-full h-full' : ''} ${className} ${
        !isLoaded ? 'opacity-90' : 'opacity-100'
      } transition-opacity duration-500`}
      style={{
        ...style,
        ...(fill ? { width: '100%', height: '100%' } : {}),
      }}
      {...rest}
    />
  );
};

export default Image;
