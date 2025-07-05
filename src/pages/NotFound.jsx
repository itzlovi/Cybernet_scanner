import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from 'components/AppIcon';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/login-authentication');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/30 rounded-full animate-pulse-glow" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-accent/30 rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-secondary/30 rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="text-center z-10 max-w-md mx-auto px-6">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-error to-accent flex items-center justify-center glow-error">
            <Icon name="AlertTriangle" size={48} className="text-background" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-6xl font-heading font-bold text-primary mb-4 glow-primary">
          404
        </h1>

        {/* Error Message */}
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">
          Network Node Not Found
        </h2>

        <p className="text-text-secondary font-body mb-8 leading-relaxed">
          The requested network endpoint could not be located in our security grid. 
          The connection may have been severed or the node may not exist in this reality.
        </p>

        {/* Action Button */}
        <button
          onClick={handleGoHome}
          className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary to-secondary hover:from-primary-400 hover:to-secondary-400 text-background font-medium px-8 py-4 rounded-lg transition-cyber hover:glow-primary group"
        >
          <Icon name="Home" size={20} className="group-hover:scale-110 transition-transform" />
          <span>Return to Base</span>
        </button>

        {/* Additional Info */}
        <div className="mt-8 p-4 bg-surface-800 rounded-lg border cyber-border">
          <p className="text-xs font-mono text-text-secondary">
            Error Code: NET_404_NODE_UNREACHABLE
            <br />
            Timestamp: {new Date().toISOString()}
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary animate-data-stream" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-primary animate-data-stream" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};

export default NotFound;