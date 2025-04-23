# ScreenWise AI

ScreenWise AI is an AI-powered interview platform that helps companies streamline their hiring process through automated candidate screening and evaluation.

## Features

- AI-powered interview analysis
- Real-time feedback and scoring
- Comprehensive candidate management
- Interview scheduling and tracking
- Performance analytics and reporting

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Authentication with JWT

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/screenwiseai.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── (auth)/           # Protected routes
│   │   ├── dashboard/
│   │   ├── candidates/
│   │   ├── interviews/
│   │   └── reports/
│   ├── components/       # Shared components
│   ├── context/         # Application context
│   └── layout.tsx       # Root layout
├── components/          # Global components
└── middleware.ts        # Authentication middleware
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 