'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Shield, FileSearch, UserCheck } from 'lucide-react';

const LandingPage: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('individual');

  const services = [
    { icon: <CheckCircle className="h-6 w-6" />, title: 'Comprehensive Checks', description: 'Thorough background verification covering multiple aspects.' },
    { icon: <Shield className="h-6 w-6" />, title: 'Data Security', description: 'Your information is protected with state-of-the-art encryption.' },
    { icon: <FileSearch className="h-6 w-6" />, title: 'Quick Turnaround', description: 'Get results faster with our efficient verification process.' },
    { icon: <UserCheck className="h-6 w-6" />, title: 'Legal Compliance', description: 'All checks are conducted in accordance with Indian laws.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Sechome</h1>
          <div>
            <Button variant="ghost" className="mr-2">Login</Button>
            <Button>Sign Up</Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Real-Time Background Verification</h2>
          <p className="text-xl mb-8">Secure your home and business with comprehensive background checks in India</p>
          <div className="flex justify-center space-x-4">
            <Button
              variant={activeTab === 'individual' ? 'default' : 'outline'}
              onClick={() => setActiveTab('individual')}
            >
              For Individuals
            </Button>
            <Button
              variant={activeTab === 'business' ? 'default' : 'outline'}
              onClick={() => setActiveTab('business')}
            >
              For Businesses
            </Button>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              {activeTab === 'individual' ? 'Protect Your Home' : 'Secure Your Workforce'}
            </h3>
            <p className="mb-4">
              {activeTab === 'individual'
                ? 'Ensure the safety of your family and property with our thorough background checks for domestic help, tenants, and more.'
                : 'Make informed hiring decisions and maintain a safe work environment with our comprehensive employee background verification services.'}
            </p>
            <Button size="lg">Get Started</Button>
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4">
            {/* Placeholder for an image or illustration */}
            <div className="h-64 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Image Placeholder</span>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Our Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {service.icon}
                    <span className="ml-2">{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to get started?</h3>
          <p className="mb-8">Join thousands of satisfied customers who trust Sechome for their background verification needs.</p>
          <Button size="lg">Sign Up Now</Button>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Sechome. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;