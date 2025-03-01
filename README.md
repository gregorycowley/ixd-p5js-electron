# IXD P5.js Electron App

This project combines P5.js with Electron to create desktop applications.

## Installation and Setup

1. First, ensure you have Node.js installed on your system.

2. Clone this repository and navigate to the project directory:
```bash
git clone [repository-url]
cd ixd-p5js-electron
```

3. Install the project dependencies:
```bash
npm install
```

4. Install Electron Forge CLI as a development dependency:
```bash
npm install --save-dev @electron-forge/cli
```

5. Initialize Electron Forge in the project:
```bash
npx electron-forge import
```

## Available Scripts

The following npm scripts are available:

- `npm start` - Start the application in development mode
- `npm run package` - Package the application
- `npm run make` - Create distributables for the application

## Dependencies

- electron: ^34.3.0
- p5: ^1.11.3
- electron-squirrel-startup: ^1.0.1

## Development Dependencies

- @electron-forge/cli: ^7.7.0
- @electron-forge/maker-deb: ^7.7.0
- @electron-forge/maker-rpm: ^7.7.0
- @electron-forge/maker-squirrel: ^7.7.0
- @electron-forge/maker-zip: ^7.7.0
- @electron-forge/plugin-auto-unpack-natives: ^7.7.0
- @electron-forge/plugin-fuses: ^7.7.0
- @electron/fuses: ^1.8.0

## License

ISC 