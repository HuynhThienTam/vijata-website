// components/LazyImage.jsx
'use client';
// import useIntersectionObserver from './useIntersectionObserver';

// const LazyImage = ({ src, alt, className = '' }) => {
//   const [ref, isIntersecting] = useIntersectionObserver({
//     threshold: 0.1,
//     rootMargin: '-100px',
//   });

//   return (
//     <div ref={ref} className={className}>
//       {isIntersecting ? (
//         <img
//           src={src}
//           alt={alt}
//           className="w-full h-full object-cover transition-opacity duration-500 opacity-100"
//         />
//       ) : (
//         <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
//           <span className="text-gray-400">Loading...</span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LazyImage;

// components/LazyImage.jsx

import useIntersectionObserver from '../hooks/useIntersectionObserver';

const LazyImage = ({ src, alt, className = '', width, height }) => {
  const [ref, isFullyVisible] = useIntersectionObserver({
    threshold: 1.0, // BẮT BUỘC 100% trong viewport
    rootMargin: '0px' // Không margin
  });

  return (
    <div 
      ref={ref} 
      className={`relative ${className}`}
      style={{ width, height }}
    >
      {isFullyVisible ? (
        // KHI 100% HIỆN RA: Hiện ảnh thật
        <img
          src={src}
          alt={alt}
          className="w-[120px] h-[120px] object-cover transition-opacity duration-300 opacity-100"
          loading="lazy"
        />
      ) : (
        // KHI CHƯA 100% HIỆN RA: Hiện placeholder
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
            <span className="text-gray-500 text-sm">Đợi hiện ra hết...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;