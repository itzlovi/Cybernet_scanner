import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell } from 'lucide-react';
import Header from 'components/ui/Header';
import Sidebar from 'components/ui/Sidebar';
import MetricCard from './components/MetricCard';
import NetworkTopology from './components/NetworkTopology';
import RecentAlerts from './components/RecentAlerts';
import ScanActivity from './components/ScanActivity';
import QuickActions from './components/QuickActions';


const NetworkDashboard = () => {
  const navigate = useNavigate();

  const [metrics, setMetrics] = useState({
    activeThreats: 7,
    networkNodes: 142,
    scanProgress: 78,
    securityScore: 85
  });

  const [isRealTimeActive, setIsRealTimeActive] = useState(true);
  const [alerts, setAlerts] = useState([]);
  const [todos, setTodos] = useState([]);

  // Simulate real-time updates
  useEffect(() => {
    if (!isRealTimeActive) return;

    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        activeThreats: Math.max(0, prev.activeThreats + Math.floor(Math.random() * 3) - 1),
        networkNodes: prev.networkNodes + Math.floor(Math.random() * 3) - 1,
        scanProgress: Math.min(100, prev.scanProgress + Math.floor(Math.random() * 5)),
        securityScore: Math.max(0, Math.min(100, prev.securityScore + Math.floor(Math.random() * 3) - 1))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, [isRealTimeActive]);

  // Simulate alerts data
  useEffect(() => {
    setAlerts([
      { id: 1, message: 'Critical security breach detected' },
      { id: 2, message: 'Multiple failed login attempts' },
      { id: 3, message: 'Unusual network activity detected' }
    ]);
  }, []);

  // Mock todos data for demo
  useEffect(() => {
    setTodos([
      { id: 1, title: 'Review security alerts' },
      { id: 2, title: 'Update vulnerability database' },
      { id: 3, title: 'Schedule network scan' }
    ]);
  }, []);

  const metricCards = [
    {
      title: "Active Threats",
      value: metrics.activeThreats,
      icon: "AlertTriangle",
      color: "error",
      trend: "up",
      trendValue: "+2",
      description: "Critical vulnerabilities detected"
    },
    {
      title: "Network Nodes",
      value: metrics.networkNodes,
      icon: "Network",
      color: "primary",
      trend: "stable",
      trendValue: "0",
      description: "Connected devices monitored"
    },
    {
      title: "Scan Progress",
      value: `${metrics.scanProgress}%`,
      icon: "Activity",
      color: "secondary",
      trend: "up",
      trendValue: "+12%",
      description: "Current vulnerability scan"
    },
    {
      title: "Security Score",
      value: metrics.securityScore,
      icon: "Shield",
      color: "success",
      trend: "down",
      trendValue: "-3",
      description: "Overall network security rating"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      
      <main className="ml-72 pt-16 p-6 transition-all duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-heading font-bold text-primary glow-primary mb-2">
                Network Security Dashboard
              </h1>
              <p className="text-text-secondary font-body">
                Real-time network monitoring and threat detection system
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${isRealTimeActive ? 'bg-success animate-pulse-glow' : 'bg-surface-600'}`} />
                <span className="text-sm font-caption text-text-secondary">
                  {isRealTimeActive ? 'Live Monitoring' : 'Monitoring Paused'}
                </span>
              </div>
              
              <button
                onClick={() => setIsRealTimeActive(!isRealTimeActive)}
                className={`px-4 py-2 rounded-lg font-medium transition-cyber ${
                  isRealTimeActive 
                    ? 'bg-success/20 text-success border border-success/50 hover:glow-success' :'bg-surface-800 text-text-secondary border border-surface-600 hover:border-primary/50'
                }`}
              >
                {isRealTimeActive ? 'Pause' : 'Resume'}
              </button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            {metricCards.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-8">
            {/* Network Topology Visualization */}
            <div className="xl:col-span-8">
              <NetworkTopology />
            </div>

            {/* Recent Alerts Panel */}
            <div className="xl:col-span-4">
              <RecentAlerts />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            {/* Scan Activity Timeline */}
            <div className="xl:col-span-8">
              <ScanActivity />
            </div>

            {/* Quick Actions */}
            <div className="xl:col-span-4">
              <QuickActions />
            </div>
          </div>

          {/* Find your security alerts button and modify it */}
          <button 
            onClick={() => navigate('/security-alerts')}
            className="flex items-center space-x-2 px-4 py-2 bg-surface-800 hover:bg-surface-700 rounded-lg transition-colors"
          >
            <Bell className="w-4 h-4" />
            <span>Security Alerts</span>
            {alerts?.length > 0 && (
              <span className="bg-error px-1.5 py-0.5 rounded-full text-xs">
                {alerts.length}
              </span>
            )}
          </button>

          <div>
            <h2>Demo Tasks</h2>
            <ul className="space-y-2">
              {todos.map((todo) => (
                <li key={todo.id} className="flex items-center space-x-2 text-text-secondary">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>{todo.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NetworkDashboard;