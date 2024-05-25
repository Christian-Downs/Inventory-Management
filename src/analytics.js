import ReactGA from 'react-ga4';

const trackingId = process.env.REACT_APP_TRACKING_ID; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

export const pageView = (page) => {
    ReactGA.set({ page });
    ReactGA.pageview(page);
}