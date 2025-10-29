# SN-TechTools
Browser Extension to enhance IT technician experience and productivity in ServiceNow

## Description
SN-TechTools is a Chrome/Edge Manifest V3 browser extension designed to improve the workflow and productivity of IT technicians working with ServiceNow.

## Project Structure
```
SN-TechTools/
├── manifest.json    # Extension manifest (MV3)
├── content.js       # Content script that runs on web pages
├── popup.html       # Popup UI structure
├── popup.js         # Popup logic and message handling
├── popup.css        # Popup styling
└── README.md        # This file
```

## Features
- **Manifest V3 Compatibility**: Built with the latest Chrome extension architecture
- **Content Script Integration**: Runs on all web pages and communicates with the popup
- **Modern UI**: Clean, responsive popup interface with gradient header
- **Message Passing**: Established communication channel between popup and content script

## Installation

### Development Mode (Chrome/Edge)
1. Clone this repository:
   ```bash
   git clone https://github.com/SIDNut/SN-TechTools.git
   cd SN-TechTools
   ```

2. Open Chrome or Edge and navigate to:
   - Chrome: `chrome://extensions/`
   - Edge: `edge://extensions/`

3. Enable "Developer mode" (toggle in the top right)

4. Click "Load unpacked" and select the `SN-TechTools` directory

5. The extension should now appear in your browser toolbar

## Usage
1. Click the SN-TechTools icon in your browser toolbar to open the popup
2. Click "Test Connection" to verify the popup can communicate with the content script
3. Check the browser console (F12) to see content script logs

## Development
This extension is scaffolded with basic wiring between components:
- The popup sends messages to the content script via `chrome.tabs.sendMessage`
- The content script listens for messages via `chrome.runtime.onMessage`
- Business logic can be added to both scripts as needed

### Adding Business Logic
- **popup.js**: Add UI interactions and user-facing functionality
- **content.js**: Add page manipulation and ServiceNow-specific features
- **manifest.json**: Update permissions as needed for new features

## Technical Details
- **Manifest Version**: 3
- **Permissions**: activeTab, scripting
- **Content Script Injection**: Automatic on all URLs
- **Popup Dimensions**: 350px width, responsive height

## License
This project is licensed under the MIT License.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
