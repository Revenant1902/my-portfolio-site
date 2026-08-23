# Portfolio Site - Abir Islam Nill

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **React Router** - Navigation

## Project Structure

```
src/
├── components/     # Reusable UI components
├── data/           # Content data files (easy to update)
│   ├── content.ts      # Personal info, hero, about content
│   ├── experience.ts   # Work experience entries
│   ├── metrics.ts      # Key metrics to display
│   ├── projects.ts     # Project entries
│   └── skills.ts       # Skills by category
├── pages/          # Page components
├── types/          # TypeScript type definitions
├── App.tsx         # Main app component
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## How to Update Content

### Add a New Project
Edit `src/data/projects.ts`:
```typescript
{
  id: 'new-project',
  title: 'Project Name',
  tagline: 'Short description',
  description: 'Full description...',
  liveUrl: 'https://...', // optional
  repoUrl: 'https://github.com/...',
  techStack: ['React', 'TypeScript'],
  features: ['Feature 1', 'Feature 2'],
  highlight: true // optional, for featured projects
}
```

### Update Work Experience
Edit `src/data/experience.ts`:
```typescript
{
  id: 'company-name',
  company: 'Company Name',
  role: 'Your Role',
  type: 'technical' | 'sales',
  location: 'Remote / City',
  period: 'Month Year – Month Year',
  description: ['Bullet point 1', 'Bullet point 2'],
  skills: ['Skill 1', 'Skill 2'],
  metrics: ['Key achievement']
}
```

### Update Skills
Edit `src/data/skills.ts` - modify the `skillCategories` array.

### Update Metrics
Edit `src/data/metrics.ts` - add or modify metric objects.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured for Vercel deployment. Push to your main branch and Vercel will automatically deploy.

## License

MIT
