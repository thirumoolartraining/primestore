import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when path changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTopOnNavigate;
