// hooks/useIntersectionObserver.js
"use client";
// import { useEffect, useRef, useState } from 'react';

// const useIntersectionObserver = (options = {}) => {
//   const [isIntersecting, setIsIntersecting] = useState(false);
//   const [hasIntersected, setHasIntersected] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const element = ref.current;
//     if (!element) return;

//     const observer = new IntersectionObserver(([entry]) => {
//       setIsIntersecting(entry.isIntersecting);
      
//       // Giữ trạng thái đã giao nhau ít nhất một lần
//       if (entry.isIntersecting && !hasIntersected) {
//         setHasIntersected(true);
//       }
//     }, options);

//     observer.observe(element);

//     return () => {
//       observer.unobserve(element);
//     };
//   }, [options, hasIntersected]);

//   return [ref, isIntersecting, hasIntersected];
// };

// export default useIntersectionObserver;

//// hooks/useIntersectionObserver.jsx

import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      const isFullyInView = entry.intersectionRatio === 1; // 100% trong màn hình
      setIsIntersecting(isFullyInView);
      
      if (isFullyInView && !hasIntersected) {
        setHasIntersected(true);
      }
    }, {
      threshold: 1.0, // Yêu cầu 100% visible
      ...options
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options, hasIntersected]);

  return [ref, isIntersecting, hasIntersected];
};

export default useIntersectionObserver;