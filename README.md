# Atomic Design Todo List

A modern Todo List application built with Next.js, TypeScript, and Atomic Design principles.

## Atomic Design Implementation

The application follows the Atomic Design methodology, breaking down the UI into five distinct levels:

### Atoms
- **Checkbox**: A basic input component for task completion status
- **Button**: Reusable button component for actions
- **Input**: Basic text input component

### Molecules
- **TaskItem**: Combines atoms to create a task display unit with:
  - Title and description
  - Completion checkbox
  - Edit and delete buttons

### Organisms
- **TodoList**: Combines molecules to create the main task management interface:
  - Task input form
  - List of TaskItems
  - Task management logic

### Templates
- The application uses a simple template structure with:
  - Header
  - Main content area
  - Consistent layout across pages

### Pages
- **Home**: The main page that implements the template and includes the TodoList organism

## Features

- Add, edit, and delete tasks
- Mark tasks as completed
- Persistent storage using localStorage
- Responsive design
- Smooth animations and transitions
- TypeScript for type safety

## Technical Stack

- Next.js 14
- TypeScript
- SCSS Modules
- Atomic Design methodology

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
app/
├── components/
│   ├── atoms/
│   │   ├── Button/
│   │   └── Checkbox/
│   ├── molecules/
│   │   └── TaskItem/
│   └── organisms/
│       └── TodoList/
├── pages/
│   └── Home/
├── styles/
│   ├── _variables.scss
│   └── base.scss
└── types/
    └── task.ts
```

## Design Decisions

1. **Atomic Design**: Chosen for its systematic approach to component development and reusability.
2. **TypeScript**: Implemented for type safety and better developer experience.
3. **SCSS Modules**: Used for scoped styling and better organization.
4. **Local Storage**: Implemented for data persistence without backend requirements.
5. **Responsive Design**: Ensures the application works well on all device sizes.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
