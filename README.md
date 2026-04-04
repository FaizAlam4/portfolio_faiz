# Portfolio - Faiz Alam

A modern, responsive portfolio website built with React, featuring smooth animations, dark mode support, and a clean design.

## 🚀 Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Dark Mode**: Elegant dark theme with custom color schemes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Modern UI**: Clean and professional design with gradient accents
- **Sections**: Hero, Experience, Education & Certifications, Projects, Contact

## 🛠️ Tech Stack

- **React** - JavaScript library for building user interfaces
- **Framer Motion** - Animation library for React
- **CSS3** - Custom styling with CSS variables for theming
- **GitHub Pages** - Deployment platform

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/FaizAlam4/portfolio_faiz.git
cd portfolio_faiz
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment to GitHub Pages

This portfolio is configured for easy deployment to GitHub Pages.

### Prerequisites
- GitHub account
- Repository pushed to GitHub

### Deploy Steps

1. **Build the project:**
```bash
npm run build
```

2. **Deploy to GitHub Pages:**
```bash
npm run deploy
```

This command will:
- Create a production build
- Push the build to the `gh-pages` branch
- Make your site live at: `https://FaizAlam4.github.io/portfolio_faiz`

### Manual Deployment (Alternative)

If you prefer manual deployment:

1. Build the project:
```bash
npm run build
```

2. The `build` folder contains the production-ready files
3. Deploy the `build` folder to your hosting service

### GitHub Pages Configuration

The following is already configured in `package.json`:

```json
{
  "homepage": "http://FaizAlam4.github.io/portfolio_faiz",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

After deployment, enable GitHub Pages in repository settings:
1. Go to repository **Settings** → **Pages**
2. Source should be set to `gh-pages` branch
3. Your site will be live at the homepage URL

## 📝 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder

### `npm run deploy`
Deploys the app to GitHub Pages (runs build + gh-pages deploy)

### `npm test`
Launches the test runner in interactive watch mode

## 🎨 Customization

### Theme Colors
Edit CSS variables in `src/App.css` to customize colors:
- `--primary-color`: Main accent color
- `--secondary-color`: Secondary accent color
- `--bg-primary`: Background color
- `--text-primary`: Text color

### Content
- **Personal Info**: Update in `src/PortBody.js`
- **Projects**: Edit `src/Projects.js`
- **Experience**: Modify `src/Experience.js`
- **Education**: Update `src/EduCert.js`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Faiz Alam**
- GitHub: [@FaizAlam4](https://github.com/FaizAlam4)
- LinkedIn: [Faiz Alam](https://www.linkedin.com/in/faiz-alam-9179b6135/)

---

Built with ❤️ using React and Framer Motion
