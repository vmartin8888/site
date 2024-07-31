// Add any custom javascript here.
// Include Klaro script
// Assuming klaro.js is in the same directory as custom.js
import Klaro from './klaro';

// Your Klaro configuration
var klaroConfig = {
  // Configuration options
  elementID: 'klaro',
  storageMethod: 'localStorage',
  cookieName: 'klaro',
  privacyPolicy: '/privacy',
  // Add other configuration options as needed
};

// Initialize Klaro with your configuration
Klaro.setup(klaroConfig);
