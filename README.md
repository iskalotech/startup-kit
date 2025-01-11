# Modern Next.js Starter Kit

A streamlined, production-ready Next.js starter template with essential tooling and best practices configured for rapid development.

## Tech Stack

- 🚀 [Next.js 15](https://nextjs.org/) with App Router
- 💅 [Tailwind CSS](https://tailwindcss.com/) for styling
- 📝 [TypeScript](https://www.typescriptlang.org/) for type safety
- 🧹 [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for code quality
- 🛠️ VS Code configurations included
- 📱 Responsive design ready

## Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone this repository:

```bash
git clone https://github.com/iskalotech/startup-kit
cd startup-kit
```

2. Install dependencies:

```bash
npm install

or

yarn
```

3. Start the development server:

```bash
npm run dev

or

yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```bash
├── src/
│ ├── app/ # App router pages and layouts
│ ├── components/ # React components
│ └── styles/ # Global styles
├── public/ # Static assets
├── .vscode/ # VS Code settings
├── eslint.config.mjs # ESLint configuration
├── next.config.ts # Next.js configuration
├── postcss.config.mjs # PostCSS configuration
└── tsconfig.json # TypeScript configuration
```

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn format` - Format code with Prettier

## VS Code Integration

This starter comes with pre-configured VS Code settings for optimal development experience:

- Format on save
- ESLint integration
- Tailwind CSS IntelliSense
- Recommended extensions

## Best Practices

- ✅ App Router architecture
- ✅ TypeScript strict mode enabled
- ✅ ESLint and Prettier configured for code consistency
- ✅ Modern CSS with Tailwind
- ✅ Optimized production builds

## Development Workflow

1. Create new components in `src/components`
2. Add new pages in `src/app`
3. Style with Tailwind CSS utility classes
4. Run `yarn lint` and `yarn format` before committing

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).

## Support

For support, issues, or feature requests, please file an issue through the GitHub issues system.
