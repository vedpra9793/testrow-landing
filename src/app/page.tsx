'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="HireOns Logo"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                <span className="text-2xl font-bold text-blue-600">HireOns</span>
              </Link>
            </div>
            <div className="hidden sm:flex sm:space-x-8">
              <Link href="#features" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Features
              </Link>
              <Link href="#pricing" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Pricing
              </Link>
              <Link href="#about" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                About
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#contact" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Contact Us
              </a>
              <button
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Transform Your Hiring Process with AI-Powered Interviews
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Streamline your recruitment process, eliminate bias, and make data-driven hiring decisions with our advanced AI interview platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md text-center font-medium hover:bg-blue-700"
                >
                  Contact Sales
                </a>
                <button 
                  onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-8 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm3.707 10.707l-4 4a1 1 0 01-1.414-1.414L11.586 10 8.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414z" />
                  </svg>
                  Watch Demo
                </button>
              </div>
              <div className="mt-8">
                <p className="text-sm text-gray-500 flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center">
                      <span className="text-blue-600 text-xs">U1</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center">
                      <span className="text-blue-600 text-xs">U2</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center">
                      <span className="text-blue-600 text-xs">U3</span>
                    </div>
                  </div>
                  1000+ companies trust HireOns
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/dashboard-preview.jpg"
                alt="AI Interview Dashboard"
                width={1200}
                height={800}
                className="rounded-lg shadow-2xl"
                priority
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
              {/* Add decorative elements */}
              <div className="absolute -z-10 top-8 right-8 w-full h-full bg-blue-100/20 rounded-lg" />
              <div className="absolute -z-20 top-16 right-16 w-full h-full bg-blue-100/10 rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose HireOns?</h2>
            <p className="text-lg text-gray-600">
              Revolutionize your hiring process with our cutting-edge features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Powered Analysis',
                description: 'Advanced algorithms analyze candidate responses, body language, and communication skills in real-time.',
                icon: '🤖'
              },
              {
                title: 'Data-Driven Insights',
                description: 'Get comprehensive analytics and insights to make informed hiring decisions.',
                icon: '📊'
              },
              {
                title: 'Time-Saving Automation',
                description: 'Automate scheduling, assessments, and follow-ups to streamline your recruitment process.',
                icon: '⏱️'
              },
              {
                title: 'Collaborative Hiring',
                description: 'Enable team collaboration with shared notes, ratings, and feedback.',
                icon: '👥'
              },
              {
                title: 'Bias Prevention',
                description: 'Ensure fair evaluations with our bias detection and prevention system.',
                icon: '🛡️'
              },
              {
                title: 'Global Reach',
                description: 'Conduct interviews across time zones with our flexible platform.',
                icon: '🌍'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 