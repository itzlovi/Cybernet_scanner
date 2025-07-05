import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const LoginForm = ({ onSubmit, onForgotPassword, onBackToLogin, isLoading, showMFA }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    mfaCode: '',
    rememberMe: false
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {!showMFA ? (
        <>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Icon name="Mail" size={20} className="text-text-secondary" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 bg-surface-800 border border-surface-600 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-cyber"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Icon name="Lock" size={20} className="text-text-secondary" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-10 pr-12 py-3 bg-surface-800 border border-surface-600 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-cyber"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-text-secondary hover:text-primary transition-colors"
              >
                <Icon name={showPassword ? "EyeOff" : "Eye"} size={20} />
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="w-4 h-4 rounded border-surface-600 bg-surface-800 text-primary focus:ring-primary focus:ring-offset-0"
              />
              <span className="text-sm text-text-secondary">Remember me</span>
            </label>

            <button
              type="button"
              onClick={onForgotPassword}
              className="text-sm text-primary hover:text-primary-300 transition-colors"
            >
              Forgot password?
            </button>
          </div>
        </>
      ) : (
        <>
          {/* MFA Code Field */}
          <div>
            <label htmlFor="mfaCode" className="block text-sm font-medium text-text-primary mb-2">
              Authentication Code
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Icon name="Smartphone" size={20} className="text-text-secondary" />
              </div>
              <input
                id="mfaCode"
                name="mfaCode"
                type="text"
                required
                maxLength="6"
                value={formData.mfaCode}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 bg-surface-800 border border-surface-600 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-cyber font-mono text-center text-lg tracking-widest"
                placeholder="000000"
              />
            </div>
            <p className="mt-2 text-xs text-text-secondary">
              Enter the 6-digit code from your authenticator app
            </p>
          </div>

          {/* Back to Login */}
          <button
            type="button"
            onClick={onBackToLogin}
            className="w-full flex items-center justify-center space-x-2 text-sm text-text-secondary hover:text-primary transition-colors"
          >
            <Icon name="ArrowLeft" size={16} />
            <span>Back to login</span>
          </button>
        </>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-primary to-secondary hover:from-primary-400 hover:to-secondary-400 disabled:from-surface-600 disabled:to-surface-600 text-background font-medium py-3 px-6 rounded-lg transition-cyber hover:glow-primary disabled:cursor-not-allowed group"
      >
        {isLoading ? (
          <>
            <Icon name="Loader2" size={20} className="animate-spin" />
            <span>{showMFA ? 'Verifying...' : 'Authenticating...'}</span>
          </>
        ) : (
          <>
            <Icon name={showMFA ? "Shield" : "LogIn"} size={20} className="group-hover:scale-110 transition-transform" />
            <span>{showMFA ? 'Verify & Access' : 'Access Network'}</span>
          </>
        )}
      </button>

      {/* Security Notice */}
      <div className="text-center">
        <p className="text-xs text-text-secondary">
          Protected by enterprise-grade encryption and multi-factor authentication
        </p>
      </div>
    </form>
  );
};

export default LoginForm;