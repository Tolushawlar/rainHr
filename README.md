# PurpleRain HR Dashboard

A modern HR dashboard built with Next.js and Tailwind CSS for managing leads, scripts, and performance metrics.

## Features

- 🎨 Modern dark UI with PurpleRain™ theme
- 📱 Fully responsive design
- 🔄 Interactive lead management tabs
- 📊 Performance metrics visualization
- 📝 Script management system

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/hr-dashboard.git
cd hr-dashboard
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
hr-dashboard/
├── public/            # Static assets
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/    # React components
│   │   ├── dashboard/ # Dashboard-specific components
│   │   └── ui/        # Reusable UI components
│   └── lib/           # Utility functions
├── tailwind.config.js # Tailwind configuration
└── package.json       # Project dependencies
```

## Key Pages

- **Dashboard**: Overview of metrics and leads
- **My Leads**: Personal lead management
- **Intern Leads**: Intern lead tracking
- **Script Manager**: Sales script templates
- **Intern Performance**: Performance metrics
- **Reports**: Data visualization
- **Settings**: User preferences

## Design System

- **Background**: #0f0f0f / #1a1a1a
- **Text**: Light gray / white #f5f5f5
- **Accent**: PurpleRain™ purple #9e5eff / #6C00FF
- **Components**: Rounded corners, soft shadows, subtle animations
- **Font**: Inter