// Popup script for SN-TechTools
// This script handles the popup UI and sends messages to the content script

document.addEventListener('DOMContentLoaded', function() {
  console.log('SN-TechTools popup loaded');
  
  const statusElement = document.getElementById('status');
  const responseElement = document.getElementById('response');
  const testConnectionButton = document.getElementById('testConnection');
  
  // Test connection button handler
  testConnectionButton.addEventListener('click', async function() {
    statusElement.textContent = 'Sending message...';
    responseElement.textContent = '';
    
    try {
      // Get the active tab
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      // Send a message to the content script
      chrome.tabs.sendMessage(tab.id, { action: 'ping' }, function(response) {
        if (chrome.runtime.lastError) {
          statusElement.textContent = 'Error';
          responseElement.textContent = `Error: ${chrome.runtime.lastError.message}`;
          responseElement.className = 'response-section error';
        } else if (response) {
          statusElement.textContent = 'Connected';
          responseElement.textContent = `Response: ${response.message}`;
          responseElement.className = 'response-section success';
        }
      });
    } catch (error) {
      statusElement.textContent = 'Error';
      responseElement.textContent = `Error: ${error.message}`;
      responseElement.className = 'response-section error';
    }
  });
});
