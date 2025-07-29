# Test task (User management app)

# This project built using the [Starter Template](https://github.com/vlad-demchuk/react-starter-template).

A scalable, high-performance React starter template powered by **Vite**, **TypeScript**, and a clean **feature-based architecture**. Designed for rapid development with maintainability and best practices in mind.

## 🔧 Features

- ⚡ **Vite** – Fast build and hot module replacement
- 📦 **TypeScript** – Static typing and type safety
- 🧱 **Feature-based architecture** – Scalable folder structure
- 🧪 **Vitest** – Lightweight and fast testing framework
- 🎨 **Tailwind CSS** – Utility-first styling (optional if included)
- ✅ Clean defaults, ready for production

## 🗂️ Folder Structure

Well described structure you can find here: [`structure-guide.md`](./structure-guide.md)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/vlad-demchuk/test-task_reactjs.git
cd test-task_reactjs
```

### 2. Prerequisites

- **Node.js v22+** - This template requires Node.js version 22 or higher
- **pnpm** - This template uses pnpm as the package manager

```bash
# Check your Node.js version
node -v

# Install or update Node.js if needed
# Visit https://nodejs.org/ or use a version manager like nvm

# Install pnpm if you don't have it already
npm install -g pnpm
```

### 3. Install Dependencies

This template requires [pnpm](https://pnpm.io/) as the package manager. The project is configured to only allow pnpm.

```bash
pnpm install
```

### 4. Start Development Server

```bash
pnpm dev
```

Your app will be available at `http://localhost:5173` by default.

### 5. Build for Production

```bash
pnpm build
```

## 🔧 Available Scripts

- `pnpm dev` - Start the development server with Vite
- `pnpm build` - Run TypeScript build and create production build with Vite
- `pnpm preview` - Preview the production build locally
- `pnpm prettier:check` - Check code formatting with Prettier
- `pnpm prettier:fix` - Fix code formatting with Prettier
- `pnpm lint:check` - Check for linting errors with ESLint (with zero warnings allowed)
- `pnpm lint:fix` - Fix linting errors automatically with ESLint
- `pnpm check-style` - Run both linting and formatting checks
- `pnpm fix-style` - Fix both linting and formatting issues
