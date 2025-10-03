import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

// Initialize Google Analytics
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

let isInitialized = false;

export const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA only once
    if (!isInitialized && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      ReactGA.initialize(GA_MEASUREMENT_ID);
      isInitialized = true;
    }
  }, []);

  useEffect(() => {
    // Track page views on route change
    if (isInitialized) {
      ReactGA.send({
        hitType: 'pageview',
        page: location.pathname + location.search,
        title: document.title,
      });
    }
  }, [location]);

  return null;
};
