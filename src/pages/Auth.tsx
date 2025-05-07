
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SignUpForm from '@/components/auth/SignUpForm';
import LoginForm from '@/components/auth/LoginForm';
import { Button } from '@/components/ui/button';

const Auth = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  
  return (
    <div className="min-h-screen bg-music-background text-white">
      <Navbar />
      
      <div className="pt-28 pb-32 px-4">
        <div className="container mx-auto flex flex-col items-center">
          <div className="mb-8">
            <div className="flex gap-4">
              <Button 
                variant={activeTab === 'login' ? 'default' : 'outline'}
                onClick={() => setActiveTab('login')}
                className={activeTab === 'login' ? 'bg-music-purple' : 'border-music-purple text-music-purple'}
              >
                Sign In
              </Button>
              <Button 
                variant={activeTab === 'signup' ? 'default' : 'outline'}
                onClick={() => setActiveTab('signup')}
                className={activeTab === 'signup' ? 'bg-music-purple' : 'border-music-purple text-music-purple'}
              >
                Create Account
              </Button>
            </div>
          </div>
          
          <div className="w-full max-w-md">
            {activeTab === 'login' ? <LoginForm /> : <SignUpForm />}
          </div>
          
          <div className="mt-8 text-center text-gray-400 max-w-md">
            <p className="mb-2">
              {activeTab === 'login' 
                ? "Don't have an account? Click 'Create Account' above." 
                : "Already have an account? Click 'Sign In' above."}
            </p>
            <p className="text-sm">
              By signing up, you agree to MusicScape's Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
      
      <div className="h-24" /> {/* Space for music player */}
      <Footer />
    </div>
  );
};

export default Auth;
