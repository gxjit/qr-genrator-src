# QR Code Generator

A lightweight React-based QR code generator that converts user-entered text into a downloadable/displayable QR code in real time.

## Features

* Generate QR codes instantly from any text or URL
* Responsive card-centered UI
* Smooth animated transitions between input and QR preview
* SVG-based QR rendering for sharp scaling
* Mobile-friendly viewport height fix

## Tech Stack

* React
* ReactDOM
* qrcode-generator
* Bootstrap (UI styling)
* SVG rendering

## Project Structure

```txt
src/
├── components/
│   ├── CardCenter.js
│   ├── Main.js
│   ├── Modal.js
│   ├── GithubRibbon.js
│   └── useVhFix.js
├── modules/
│   └── getSvg.js
├── App.js
└── index.js
```

## How It Works

1. User enters text into the textarea
2. `qrcode-generator` creates QR code data
3. SVG path is extracted dynamically
4. QR code is displayed in a preview modal
5. User can return and generate another code

## Installation

```bash
git clone https://github.com/gxjit/qr-genrator-src
cd qr-genrator-src
npm install
npm start
```

## Build

```bash
npm run build
```

## Future Improvements

* QR code download support
* Custom colors
* Adjustable QR size
* Error correction settings
* URL validation

## License

MIT
