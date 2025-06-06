# Atomic Design Todo List

A modern Todo List application built with Next.js, TypeScript, and Atomic Design principles.
Obs.: I particulary enjoy using the atomic approach because it favors the separation of concerns in providing a more granular way of doing it on UI development wich can be very challenging. 

## Atomic Design Implementation

Here is a breakdown of the atomic design components used in this app:

### Atoms
- **Box**: A flexible container component for layout management
- **Button**: Reusable button component with variants
- **Input**: Text input component with label and error states
- **Textarea**: Multi-line text input component
- **Checkbox**: Task completion toggle with custom styling

### Molecules
- **TaskItem**: Combines atoms to create a task display unit with:
  - Title and description inputs
  - Completion checkbox
  - Edit and delete buttons
  - Status management

### Organisms
- **TodoList**: Combines molecules to create the main task management interface:
  - Task input form with title and description
  - List of TaskItems
  - Task management logic (add, edit, delete, status change)

### Templates
- **TodoTemplate**: Defines the page layout with:
  - Header with title and description
  - Main content area for TodoList
  - Consistent spacing and styling

### Pages
- **Home**: Implements the TodoTemplate and serves as the main entry point

### Styling
I did choose the sass pre-processor for css because this is the one I'm more familiar with and usually is faster for setting up but I'm very familiar with UI libraries as well. 



## Features

- Add, edit, and delete tasks
- Mark tasks as completed
- Task status management
- Persistent storage using localStorage
- Responsive design
- Smooth animations and transitions
- TypeScript for type safety
- Unit tests with Jest and React Testing Library

## Technical Stack

- Next.js 14 (I did pick the next framework also because its speed to lifting up a typescript front-end project )
- TypeScript
- SCSS Modules
- Atomic Design methodology
- Jest + React Testing Library
- ESLint

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test

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
│   │   ├── Box/
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Textarea/
│   │   └── Checkbox/
│   ├── molecules/
│   │   └── TaskItem/
│   ├── organisms/
│   │   └── TodoList/
│   ├── templates/
│   │   └── TodoTemplate/
│   └── pages/
│       └── Home/
├── styles/
│   ├── _variables.scss
│   └── globals.scss
├── hooks/
│   └── useLocalStorageState.ts
└── types/
    └── task.ts
```

## Design Decisions

1. **Atomic Design**: Implemented for systematic component development and reusability
2. **TypeScript**: Used throughout for type safety and better developer experience
3. **SCSS Modules**: Scoped styling with variables for consistency
4. **Local Storage**: Custom hook for data persistence
5. **Testing**: Jest and React Testing Library for component testing
6. **Animations**: CSS animations for smooth task transitions
7. **Responsive Design**: Mobile-first approach with flexible layouts, although we can see not much of the css breakpoints, this actually goes because of the design style, I decided to have a wide component for containing the form and the content so it can have less effort to modifying across diferent viewports sizes 

## Testing

The application includes unit tests for components using Jest and React Testing Library. Tests focus on:
- Component rendering
- User interactions
- State management
- Form validation

Run tests with:
```bash
npm test
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
