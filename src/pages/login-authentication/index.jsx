import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from 'components/AppIcon';
import LoginForm from './components/LoginForm';
import BackgroundAnimation from './components/BackgroundAnimation';
import BrandingSection from './components/BrandingSection';

const LoginAuthentication = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showMFA, setShowMFA] = useState(false);
  const [authError, setAuthError] = useState('');
  const [authSuccess, setAuthSuccess] = useState(false);

  // Mock credentials for demonstration
  const mockCredentials = {
    email: "admin@cyberguard.com",
    password: "CyberNet2024!",
    mfaCode: "123456"
  };

  const handleLogin = async (credentials) => {
    setIsLoading(true);
    setAuthError('');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Validate credentials
    if (credentials.email !== mockCredentials.email || credentials.password !== mockCredentials.password) {
      setAuthError('Invalid credentials. Use admin@cyberguard.com / CyberNet2024!');
      setIsLoading(false);
      return;
    }

    // Show MFA if not already shown
    if (!showMFA) {
      setShowMFA(true);
      setIsLoading(false);
      return;
    }

    // Validate MFA code
    if (credentials.mfaCode !== mockCredentials.mfaCode) {
      setAuthError('Invalid MFA code. Use: 123456');
      setIsLoading(false);
      return;
    }

    // Success flow
    setAuthSuccess(true);
    setIsLoading(false);

    // Navigate after success animation
    setTimeout(() => {
      navigate('/network-dashboard');
    }, 2000);
  };

  const handleForgotPassword = () => {
    alert('Password reset functionality would be implemented here. For demo, use: admin@cyberguard.com / CyberNet2024!');
  };

  const handleBackToLogin = () => {
    setShowMFA(false);
    setAuthError('');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <BackgroundAnimation />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex items-center justify-center lg:justify-between">
        {/* Branding Section - Hidden on mobile */}
        <div className="hidden lg:block lg:w-1/2">
          <BrandingSection />
        </div>

        {/* Login Form Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full max-w-md">
            {/* Mobile Branding */}
            <div className="lg:hidden mb-8 text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary">
                  <Icon name="Shield" size={28} className="text-background" />
                </div>
                <div>
                  <h1 className="text-2xl font-heading font-bold text-primary">CyberNet Scanner</h1>
                  <p className="text-sm font-caption text-text-secondary">Network Security Platform</p>
                </div>
              </div>
            </div>

            {/* Login Card */}
            <div className="bg-surface border cyber-border rounded-lg p-8 glow-primary backdrop-blur-cyber">
              {/* Success State */}
              {authSuccess && (
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-success to-primary flex items-center justify-center glow-success animate-pulse-glow">
                      <Icon name="CheckCircle" size={32} className="text-background" />
                    </div>
                  </div>
                  <h2 className="text-xl font-heading font-bold text-success mb-2">Access Granted</h2>
                  <p className="text-text-secondary font-caption">Connecting to secure network...</p>
                  <div className="mt-4 w-full h-1 bg-surface-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-success to-primary animate-scan-progress" />
                  </div>
                </div>
              )}

              {/* Login Form */}
              {!authSuccess && (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-heading font-bold text-text-primary mb-2">
                      {showMFA ? 'Multi-Factor Authentication' : 'Network Access'}
                    </h2>
                    <p className="text-text-secondary font-caption">
                      {showMFA ? 'Enter your authentication code to proceed' : 'Secure login to vulnerability assessment platform'}
                    </p>
                  </div>

                  {/* Error Message */}
                  {authError && (
                    <div className="mb-6 p-4 bg-error/10 border border-error/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Icon name="AlertCircle" size={20} className="text-error" />
                        <p className="text-sm text-error font-medium">{authError}</p>
                      </div>
                    </div>
                  )}

                  <LoginForm
                    onSubmit={handleLogin}
                    onForgotPassword={handleForgotPassword}
                    onBackToLogin={handleBackToLogin}
                    isLoading={isLoading}
                    showMFA={showMFA}
                  />
                </>
              )}
            </div>

            {/* Demo Credentials Info */}
            <div className="mt-6 p-4 bg-surface-800 rounded-lg border border-surface-600">
              <h3 className="text-sm font-medium text-text-primary mb-2 flex items-center space-x-2">
                <Icon name="Info" size={16} className="text-primary" />
                <span>Demo Credentials</span>
              </h3>
              <div className="space-y-1 text-xs font-mono text-text-secondary">
                <p>Email: admin@cyberguard.com</p>
                <p>Password: CyberNet2024!</p>
                <p>MFA Code: 123456</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary animate-data-stream" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-primary animate-data-stream" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};

export default LoginAuthentication;