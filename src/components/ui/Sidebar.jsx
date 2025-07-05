import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Monitor, Search, Bell, FileText, Shield, ChevronRight, ChevronLeft, AlertTriangle } from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [hoverItem, setHoverItem] = useState(null);
  const [scanningEffect, setScanningEffect] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const location = useLocation();
  const navigate = useNavigate();

  // Cyberpunk scanning effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScanningEffect(true);
      setTimeout(() => setScanningEffect(false), 2000);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Notification pulse effect
  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications(prev => prev === 3 ? 4 : 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navigationItems = [
    {
      label: 'Network Dashboard',
      path: '/network-dashboard',
      icon: Monitor,
      description: 'Real-time network monitoring',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      label: 'Vulnerability Scanner',
      path: '/vulnerability-scanner',
      icon: Search,
      description: 'Security assessment tools',
      color: 'from-purple-500 to-pink-400'
    },
    {
      label: 'Security Alerts',
      path: '/security-alerts',
      icon: AlertTriangle,
      description: 'Threat notifications',
      badge: notifications,
      color: 'from-red-500 to-orange-400'
    },
    {
      label: 'Vulnerability Reports',
      path: '/vulnerability-reports',
      icon: FileText,
      description: 'Analysis and documentation',
      color: 'from-green-500 to-emerald-400'
    }
  ];

  const handleNavigation = (path, index) => {
    setActiveItem(index);
    // Using window.location.href as in your original code
    window.location.href = path;
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full bg-gray-900/95 backdrop-blur-xl border-r border-cyan-500/30 z-50 transition-all duration-500 ease-out transform ${
        isCollapsed ? 'w-16' : 'w-72'
      } before:absolute before:inset-0 before:bg-gradient-to-b before:from-cyan-500/5 before:to-purple-500/5 before:pointer-events-none`}>
        
        {/* Animated border lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse delay-500"></div>
        </div>

        {/* Scanning line effect */}
        {scanningEffect && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-vertical shadow-lg shadow-cyan-400/50"></div>
          </div>
        )}

        <div className="flex flex-col h-full relative z-10 pt-16">
          {/* Logo Section */}
          <div className="flex items-center justify-between p-6 border-b border-cyan-500/20 relative">
            {/* Holographic effect background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 animate-gradient-shift"></div>
            
            {!isCollapsed && (
              <div className="flex items-center space-x-3 relative">
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-400/25 animate-pulse-glow">
                    <Shield size={28} className="text-white drop-shadow-lg" />
                  </div>
                  {/* Orbiting particles */}
                  <div className="absolute inset-0 rounded-lg">
                    <div className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-orbit-1"></div>
                    <div className="absolute w-1 h-1 bg-purple-400 rounded-full animate-orbit-2"></div>
                  </div>
                </div>
                <div className="relative">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-text-glow">
                    CyberGuard
                  </h1>
                  <p className="text-xs text-gray-400 font-mono tracking-wider">
                    <span className="text-green-400">●</span> SECURITY PLATFORM
                  </p>
                  {/* Matrix rain effect on text */}
                  <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
                    <div className="text-green-400 text-xs animate-matrix-rain">01101001</div>
                  </div>
                </div>
              </div>
            )}
            
            {isCollapsed && (
              <div className="relative mx-auto">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-400/25 animate-pulse-glow">
                  <Shield size={24} className="text-white" />
                </div>
                <div className="absolute inset-0 rounded-lg">
                  <div className="absolute w-0.5 h-0.5 bg-cyan-400 rounded-full animate-orbit-1"></div>
                  <div className="absolute w-0.5 h-0.5 bg-purple-400 rounded-full animate-orbit-2"></div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 relative">
            {/* Data stream background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-data-stream"></div>
            </div>
            
            <div className="space-y-3 relative">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = isActivePath(item.path);
                const isHovered = hoverItem === index;
                
                return (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => setHoverItem(index)}
                    onMouseLeave={() => setHoverItem(null)}
                  >
                    {/* Holographic selection indicator */}
                    {(isActive || isHovered) && (
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/10 via-purple-500/5 to-cyan-500/10 border border-cyan-500/30 animate-hologram"></div>
                    )}
                    
                    {/* Glitch effect on hover */}
                    {isHovered && (
                      <div className="absolute inset-0 rounded-lg animate-glitch-1 bg-cyan-400/5"></div>
                    )}
                    
                    <button
                      onClick={() => handleNavigation(item.path, index)}
                      className={`relative w-full flex items-center space-x-4 px-4 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                        isActive 
                          ? 'text-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/20' 
                          : 'text-gray-400 hover:text-cyan-300'
                      } ${isCollapsed ? 'justify-center' : ''}`}
                    >
                      {/* Icon with gradient background */}
                      <div className={`relative p-2 rounded-lg bg-gradient-to-br ${item.color} bg-opacity-20 ${
                        isActive ? 'animate-pulse-glow' : 'group-hover:animate-pulse-glow'
                      }`}>
                        <IconComponent 
                          size={20} 
                          className={`transition-all duration-300 ${
                            isActive ? 'text-cyan-400 drop-shadow-glow' : 'text-gray-400 group-hover:text-cyan-300'
                          }`} 
                        />
                        
                        {/* Badge for notifications */}
                        {item.badge && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-orange-400 rounded-full flex items-center justify-center text-xs font-bold text-white animate-bounce shadow-lg shadow-red-500/50">
                            {item.badge}
                          </div>
                        )}
                      </div>
                      
                      {!isCollapsed && (
                        <div className="flex-1 text-left">
                          <div className={`font-medium transition-all duration-300 ${
                            isActive ? 'text-cyan-400' : 'text-gray-300 group-hover:text-cyan-300'
                          }`}>
                            {item.label}
                          </div>
                          <div className="text-xs text-gray-500 font-mono">
                            {item.description}
                          </div>
                        </div>
                      )}
                      
                      {/* Arrow indicator */}
                      {!isCollapsed && isActive && (
                        <div className="text-cyan-400 animate-pulse">
                          <ChevronRight size={16} />
                        </div>
                      )}
                      
                      {/* Particle trail effect on hover */}
                      {isHovered && (
                        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
                          <div className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-particle-1"></div>
                          <div className="absolute w-1 h-1 bg-purple-400 rounded-full animate-particle-2"></div>
                          <div className="absolute w-1 h-1 bg-pink-400 rounded-full animate-particle-3"></div>
                        </div>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </nav>

          {/* Collapse Toggle */}
          <div className="p-4 border-t border-cyan-500/20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
            <button
              onClick={toggleSidebar}
              className="relative w-full flex items-center justify-center p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20 transform hover:scale-105"
              title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {isCollapsed ? (
                <ChevronRight size={20} className="text-gray-400 group-hover:text-cyan-400 transition-all duration-300 transform group-hover:translate-x-1" />
              ) : (
                <ChevronLeft size={20} className="text-gray-400 group-hover:text-cyan-400 transition-all duration-300 transform group-hover:-translate-x-1" />
              )}
              
              {!isCollapsed && (
                <span className="ml-3 text-sm text-gray-400 group-hover:text-cyan-400 transition-colors duration-300 font-mono">
                  COLLAPSE
                </span>
              )}
            </button>
          </div>

          {/* Status Indicator */}
          <div className="p-4 border-t border-cyan-500/20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5"></div>
            <div className={`relative flex items-center space-x-3 p-4 rounded-lg bg-green-500/10 border border-green-500/30 backdrop-blur-sm ${
              isCollapsed ? 'justify-center' : ''
            }`}>
              {/* Animated status indicator */}
              <div className="relative">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-30"></div>
              </div>
              
              {!isCollapsed && (
                <div>
                  <div className="text-sm font-medium text-green-400 font-mono">SYSTEM STATUS</div>
                  <div className="text-xs text-gray-400 font-mono">All systems operational</div>
                  {/* Data readout effect */}
                  <div className="text-xs text-green-500/70 font-mono animate-pulse">
                    CPU: 23% | RAM: 67% | NET: ↑↓
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      <div className="lg:hidden">
        {!isCollapsed && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fade-in"
            onClick={toggleSidebar}
          />
        )}
      </div>

      <style jsx>{`
        @keyframes scan-vertical {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        
        @keyframes orbit-1 {
          0% { transform: rotate(0deg) translateX(25px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(25px) rotate(-360deg); }
        }
        
        @keyframes orbit-2 {
          0% { transform: rotate(180deg) translateX(25px) rotate(-180deg); }
          100% { transform: rotate(540deg) translateX(25px) rotate(-540deg); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes matrix-rain {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        
        @keyframes hologram {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.02); }
        }
        
        @keyframes glitch-1 {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-1px); }
          80% { transform: translateX(1px); }
        }
        
        @keyframes particle-1 {
          0% { left: 0%; top: 50%; opacity: 1; }
          100% { left: 100%; top: 20%; opacity: 0; }
        }
        
        @keyframes particle-2 {
          0% { left: 0%; top: 50%; opacity: 1; }
          100% { left: 100%; top: 80%; opacity: 0; }
        }
        
        @keyframes particle-3 {
          0% { left: 20%; top: 50%; opacity: 1; }
          100% { left: 80%; top: 30%; opacity: 0; }
        }
        
        @keyframes data-stream {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(34, 211, 238, 0.3); }
          50% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.6), 0 0 30px rgba(34, 211, 238, 0.3); }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(34, 211, 238, 0.5); }
          50% { text-shadow: 0 0 20px rgba(34, 211, 238, 0.8), 0 0 30px rgba(168, 85, 247, 0.4); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-scan-vertical { animation: scan-vertical 2s ease-in-out; }
        .animate-orbit-1 { animation: orbit-1 8s linear infinite; }
        .animate-orbit-2 { animation: orbit-2 12s linear infinite; }
        .animate-gradient-shift { animation: gradient-shift 3s ease-in-out infinite; }
        .animate-matrix-rain { animation: matrix-rain 4s linear infinite; }
        .animate-hologram { animation: hologram 2s ease-in-out infinite; }
        .animate-glitch-1 { animation: glitch-1 0.3s ease-in-out; }
        .animate-particle-1 { animation: particle-1 1s ease-out; }
        .animate-particle-2 { animation: particle-2 1.2s ease-out 0.1s; }
        .animate-particle-3 { animation: particle-3 0.8s ease-out 0.2s; }
        .animate-data-stream { animation: data-stream 15s linear infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-text-glow { animation: text-glow 3s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .drop-shadow-glow { filter: drop-shadow(0 0 8px rgba(34, 211, 238, 0.6)); }
      `}</style>
    </>
  );
};

export default Sidebar;