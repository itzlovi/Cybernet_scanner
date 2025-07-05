import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [alertCount, setAlertCount] = useState(3);
  const [scanProgress, setScanProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const userMenuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            setIsScanning(false);
            return 0;
          }
          return prev + 1;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isScanning]);

  const handleStartScan = () => {
    setIsScanning(true);
    setScanProgress(0);
  };

  const handleAlertClick = () => {
    window.location.href = '/security-alerts-notifications';
  };

  const handleUserMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleProfileClick = () => {
    window.location.href = '/user-profile-settings';
    setIsUserMenuOpen(false);
  };

  const handleLogout = () => {
    window.location.href = '/login-authentication';
    setIsUserMenuOpen(false);
  };

  const getPageTitle = () => {
    const pathTitleMap = {
      '/network-dashboard': 'Network Dashboard',
      '/vulnerability-scanner': 'Vulnerability Scanner',
      '/vulnerability-reports': 'Vulnerability Reports',
      '/security-alerts-notifications': 'Security Alerts',
      '/user-profile-settings': 'User Profile & Settings',
      '/login-authentication': 'Authentication'
    };
    return pathTitleMap[location.pathname] || 'CyberGuard';
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-surface border-b cyber-border z-200 backdrop-blur-cyber">
      <div className="flex items-center justify-between h-full px-6">
        {/* Page Title */}
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-heading font-bold text-primary glow-primary">
            {getPageTitle()}
          </h1>
        </div>

        {/* Center Section - Scan Status */}
        <div className="flex items-center space-x-6">
          {isScanning && (
            <div className="flex items-center space-x-3 bg-surface-800 rounded-lg px-4 py-2 cyber-border">
              <Icon name="Activity" size={16} className="text-primary animate-pulse" />
              <div className="flex flex-col">
                <span className="text-xs font-caption text-text-secondary">Scanning Network</span>
                <div className="w-32 h-1 bg-surface-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-100 ease-out"
                    style={{ width: `${scanProgress}%` }}
                  />
                </div>
              </div>
              <span className="text-xs font-mono text-primary">{scanProgress}%</span>
            </div>
          )}

          {!isScanning && (
            <button
              onClick={handleStartScan}
              className="flex items-center space-x-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 rounded-lg px-4 py-2 transition-cyber hover:glow-primary group"
            >
              <Icon name="Play" size={16} className="text-primary group-hover:text-primary-300" />
              <span className="text-sm font-caption text-primary group-hover:text-primary-300">Start Scan</span>
            </button>
          )}
        </div>

        {/* Right Section - Alerts & User Menu */}
        <div className="flex items-center space-x-4">
          {/* Global Alert Indicator */}
          <button
            onClick={handleAlertClick}
            className="relative p-2 rounded-lg bg-surface-800 hover:bg-surface-700 border border-surface-600 hover:border-accent/50 transition-cyber hover:glow-accent group"
          >
            <Icon name="Bell" size={20} className="text-text-secondary group-hover:text-accent" />
            {alertCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-error text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse-glow">
                {alertCount}
              </span>
            )}
          </button>

          {/* User Menu */}
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={handleUserMenuToggle}
              className="flex items-center space-x-2 p-2 rounded-lg bg-surface-800 hover:bg-surface-700 border border-surface-600 hover:border-primary/50 transition-cyber hover:glow-primary group"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Icon name="User" size={16} className="text-background" />
              </div>
              <Icon 
                name={isUserMenuOpen ? "ChevronUp" : "ChevronDown"} 
                size={16} 
                className="text-text-secondary group-hover:text-primary transition-colors" 
              />
            </button>

            {/* User Dropdown Menu */}
            {isUserMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-surface border cyber-border rounded-lg shadow-cyber-lg animate-slide-in">
                <div className="p-3 border-b border-surface-600">
                  <p className="text-sm font-medium text-text-primary">Security Admin</p>
                  <p className="text-xs text-text-secondary font-mono">admin@cyberguard.com</p>
                </div>
                <div className="py-2">
                  <button
                    onClick={handleProfileClick}
                    className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-text-secondary hover:text-primary hover:bg-surface-800 transition-cyber"
                  >
                    <Icon name="Settings" size={16} />
                    <span>Profile & Settings</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-text-secondary hover:text-error hover:bg-error/10 transition-cyber"
                  >
                    <Icon name="LogOut" size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;