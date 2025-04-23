import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 sm:p-20">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-sans text-sm lg:flex">
        <h1 className="text-4xl font-bold mb-8">ScreenWise AI</h1>
        <p className="text-lg mb-4">
          Welcome to ScreenWise AI - Your AI-powered interview platform
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features:</h2>
          <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-mono">
            <li>AI-powered interview analysis</li>
            <li>Real-time feedback and scoring</li>
            <li>Comprehensive candidate management</li>
          </ol>
        </div>
      </div>
    </main>
  );
} 