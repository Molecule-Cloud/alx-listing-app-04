# ALX Listing App

## Project Overview

The **ALX Listing App** is a modern Airbnb clone focused on property listings. This project scaffolds a robust, scalable, and production-ready codebase using **Next.js**, **TypeScript**, **TailwindCSS**, and **ESLint**. The goal is to establish a clean folder structure, reusable components, and best practices for building a dynamic, responsive, and user-friendly property listing page.

---

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Project Structure](#project-structure)
- [Technical Requirements](#technical-requirements)
- [Setup Instructions](#setup-instructions)
- [Folder Structure](#folder-structure)
- [Assets](#assets)
- [Run the Project](#run-the-project)

---

## Learning Objectives

- Scaffold a Next.js project tailored for production readiness.
- Implement TypeScript for type safety and reusable interfaces.
- Configure TailwindCSS for responsive, accessible, and visually appealing UI components.
- Structure a Next.js project following industry-standard best practices.
- Create foundational reusable components and organize assets effectively.

---

## Project Structure

- **components/**: Contains reusable UI components (e.g., Card, Button).
- **interfaces/**: TypeScript interfaces for props and data models.
- **constants/**: Centralized constants (API URLs, config, UI text).
- **public/assets/**: Images and SVGs used throughout the app.

---

## Technical Requirements

- **Next.js** version 13+
- **Node.js** version 16+
- **TypeScript**
- **TailwindCSS**
- **ESLint**

---

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd alx-listing-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

---

## Folder Structure

```
alx-listing-app/
├── components/
│   └── common/
│       ├── Card.tsx
│       └── Button.tsx
├── interfaces/
│   └── index.ts
├── constants/
│   └── index.ts
├── public/
│   └── assets/
├── styles/
│   └── globals.css
├── pages/
│   └── ...
├── README.md
├── tailwind.config.js
└── ...
```

- **components/common/**: Reusable UI components.
- **interfaces/**: TypeScript interfaces (e.g., `CardProps`, `ButtonProps`).
- **constants/**: Project-wide constants.
- **public/assets/**: Images and SVGs for the app.

---

## Assets

All images and SVGs are stored in the `public/assets/` directory for easy access and maintenance.

---

## Run the Project

After completing the setup instructions, the app should be available at [http://localhost:3000](http://localhost:3000).

---

## Notes

- TailwindCSS is configured in `tailwind.config.js` with the following content:
  ```js
  module.exports = {
    content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  ```
- In `styles/globals.css`, only import Tailwind’s base, components, and utilities:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

---

## License

This project is for educational purposes as part of the ALX program.