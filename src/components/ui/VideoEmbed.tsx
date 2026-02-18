import { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoEmbedProps {
  videoId: string;
  thumbnailUrl?: string; // High-res image URL
  title?: string;
  caption?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1';
}

export const VideoEmbed = ({
  videoId,
  thumbnailUrl,
  title = "Embedded Video",
  caption,
  aspectRatio = '16/9'
}: VideoEmbedProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const paddingBottomMap = {
    '16/9': '56.25%',
    '4/3': '75%',
    '1/1': '100%',
  };

  return (
    <div className="w-full flex-col">
      <div
        className="relative w-full overflow-hidden bg-bg-secondary border border-border-default rounded-xl shadow-xl flex items-center justify-center group cursor-pointer"
        style={{ paddingBottom: paddingBottomMap[aspectRatio] }}
        onClick={() => setIsPlaying(true)}
      >
        {!isPlaying ? (
          <>
            {/* Fallback pattern if no thumbnail */}
            <div className="absolute inset-0 bg-[#0d1117] bg-[radial-gradient(ellipse_20%_20%_at_50%_50%,rgba(63,34,148,0.25)_0%,transparent_100%)]"></div>

            {thumbnailUrl && (
              <img
                src={thumbnailUrl}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300 mix-blend-luminosity"
              />
            )}

            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-16 h-16 rounded-full bg-bg-primary/70 backdrop-blur-md flex items-center justify-center border border-border-default shadow-lg group-hover:border-accent-blue/50 group-hover:bg-accent-blue/20 transition-all duration-300">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
              </div>
            </motion.div>
          </>
        ) : (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      {caption && (
        <p className="mt-2 text-sm text-text-muted">
          {caption}
        </p>
      )}
    </div>
  );
};
