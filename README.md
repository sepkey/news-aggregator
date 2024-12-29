# Reactjs News Aggregator

This is a React TypeScript app designed as a news aggregator, providing users with a seamless browsing experience for the latest articles and updates. It leverages modern React technologies, follows best practices for modularity and maintainability, and is built to ensure scalability and high performance

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Features](#features)
- [Technologies](#technologis)

## Prerequisites
- [Node](https://nodejs.org/en): >=20
- [Vite](https://vite.dev): >=6
- [Reactjs](https://react.dev/): >=18

## Installation
Follow the instructions:
-1. Clone the repository:
  ```bash git clone <repository-url>```
-2. Install packeges:
  ```bash npm install```
-3. Run the App server
  ```bash npm run dev```

## Features

- **News List**: Fetch and display news articles from [NewsApi](https://newsapi.org/), [The Guardian](https://open-platform.theguardian.com/) and [Ny Times](https://developer.nytimes.com/) APIs in a clean, card-based layout
- **Search Query**: Search for articles by keywords using a responsive search bar.
- **Filtering**: Filter news by category, sections and date bsed on the api capabilities.
- **Pagination**: Smooth navigation through articles with  server-side pagination.
- **Customizable Feed**: Personalize news feed by selecting preferred topics in the settings page
- **Dark and light Themes**: Toggle the themes for better user experience.
- **Responsive Design**: Fully optimized for desktop and mobile devices.
- **Feature-based Structure**: Organize the codebase into a feature-based folder structure, making it easier to scale.


## Technologies

- **Languages and Libraries**: Reactjs - Typescript
- **Global State Management**: Zustand
- **Remote State Management**: React Query
- **UI and Theming**: Shadcn UI - Tailwind CSS
- **Routing**: React Router
- **Static Code Analysis** : Eslint - Prettier
