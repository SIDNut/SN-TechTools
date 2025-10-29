// Content script for SN-TechTools
// This script runs on all web pages and receives messages from the popup

console.log('SN-TechTools content script loaded');

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Content script received message:', request);
  
  // Handle different message types
  if (request.action === 'ping') {
    sendResponse({ status: 'pong', message: 'Content script is active' });
  }
  
  // Return true to indicate we will send a response asynchronously if needed
  return true;
});
