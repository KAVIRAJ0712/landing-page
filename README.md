# Manufacturing Website

A modern, responsive landing page built with Vite, React, and Tailwind CSS.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14.x or higher)
- npm (comes with Node.js)

## Getting Started

1. Clone the repository:
```bash
git clone [your-repository-url]
cd manufacturing-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```
The site will be available at `http://localhost:3001` (or another port if 3001 is in use).

4. Build for production:
```bash
npm run build
```
This will create a `dist` directory with the production-ready files.

## Project Structure

```
manufacturing-website/
├── dist/               # Production build files
├── src/               # Source files
├── index.html         # Entry HTML file
├── package.json       # Project dependencies and scripts
├── postcss.config.js  # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.js     # Vite configuration
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Technologies Used

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
