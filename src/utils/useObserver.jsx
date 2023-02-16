import { useState, useEffect, useRef } from 'react';

export const useObserver = (ref) => {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef(null);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6,
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => setIsOnScreen(entry.isIntersecting), options);
  }, []);

  useEffect(() => {
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
};
