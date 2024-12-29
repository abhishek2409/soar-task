# Project: Soar Task - Financial Dashboard

This project is a **Financial Dashboard Application** built with **React**, **TypeScript**, **Vite**, **Redux**, **React-Router**, **Axios**, and other modern libraries and tools. It provides users with a clean interface to view financial data, manage cards, track expenses, and edit profile settings.

## Features

- **Dashboard Overview:**
  - My Cards section to display card details.
  - Recent Transactions list.
  - Weekly Activity and Expense Statistics visualized with charts.
- **Settings Page:**
  - Editable user profile.
  - Preferences and security tabs.
  - Image upload functionality with validation and preview.
- Fully responsive design.
- Accessibility-compliant UI.

---

## Folder Structure

```
src/
├── assets/               # Static assets like images and svg icons
├── components/           # Reusable UI components e.g
│   ├── Button/           # Button component
│   ├── TextInput/        # TextInput component
├── constants/            # Global constants & Mocks
├── features/             # Feature-specific components and logic e.g
│   ├── MyCards/          # Mycards feature
|   ├──── Components/     # Components for MyCards feature
|   ├──── Slice/          # Slice for MyCards feature
|   ├──── Thunks/         # Thunks for MyCards feature
|   └──── Types/          # Types for MyCards feature
├── pages/                # Main pages (Dashboard, Settings, etc.)
|   ├──── Dashboard/      # Dashboard page
|   ├──── Settings/       # Settings page
├── providers/            # Context providers like Sidebar & Toast
├── services/             # API service configurations and mock APIs
│   ├── axios.ts          # Axios instance
│   ├── mock.ts           # Mock API endpoints
├── store/                # Redux store setup
├── utils/                # Utility functions
├── App.tsx               # Root component with routing
├── main.tsx              # Application entry point
└── styles
│   ├── index.css          # Global styles
│   ├── theme.ts           # Theme configuration
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or above)
- **pnpm** (Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd soar-task
   ```

2. Install dependencies using **pnpm**:
   ```bash
   pnpm install
   ```

### Running the Development Server

Start the development server:

```bash
pnpm dev
```

The application will be available at: `http://localhost:5173`

### Building for Production

To create a production build:

```bash
pnpm build
```

The build will be generated in the `dist/` folder.

### Preview the Production Build

To preview the production build locally:

```bash
pnpm preview
```

---

## Accessibility Features

- Semantic HTML and ARIA roles are used to enhance accessibility.
- The app is navigable via keyboard.
- Screen-reader-friendly labels and focus management.

---

## Tools and Libraries Used

- **React**: UI framework.
- **TypeScript**: Type safety.
- **Vite**: Build tool for fast development.
- **Redux**: State management.
- **React Router**: Routing between pages.
- **Axios**: HTTP requests with interceptors.
- **TailwindCSS**: Styling framework.
- **Chart.js with React-chart-js-2**: Dynamic data visualization.
- **React Hook Form**: Form management.
- **Yup**: Validation schema.

---

## Mock API Setup

1. Mock API endpoints are configured in `src/services/mock.ts` using `axios-mock-adapter`.
2. Enable the mock API during development by importing `enableMock()` in `main.tsx`.

---

## Deployment

Deploy the production build using any static hosting service, such as:

- **Vercel**

1. Build the app:

   ```bash
   pnpm build
   ```

2. Deploy the `dist/` folder to your hosting platform.

---

## Author

This project was created by <a href="https://github.com/abhishek2409)">Abhishek Wadhawan</a>. Feel free to reach out for any questions or contributions.

---
