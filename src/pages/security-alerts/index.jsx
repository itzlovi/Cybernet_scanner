import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { 
  AlertTriangle, Shield, Bell, Activity, Clock, CheckCircle, XCircle, 
  Eye, Filter, Download, Settings, ChevronRight, Server, Network, 
  Lock, Zap, FileText, ExternalLink, Play, Pause, RotateCcw, Users, 
  Database, Globe, Wifi, HardDrive, AlertCircle, Info, Ban, Target, 
  TrendingUp, Calendar, MapPin, Layers 
} from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-surface border-b border-surface-600 z-50">
      <div className="flex items-center justify-between h-full px-6">
        <h1 className="text-xl font-bold text-primary">CyberNet Scanner</h1>
      </div>
    </header>
  );
};

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 w-72 h-full bg-surface border-r border-surface-600 pt-16">
      <nav className="p-4">
        <div className="space-y-2">
          <a href="/" className="flex items-center space-x-2 px-4 py-2 text-text-secondary hover:text-primary rounded-lg">
            <span>Dashboard</span>
          </a>
          <a href="/security-alerts" className="flex items-center space-x-2 px-4 py-2 text-primary bg-primary/10 rounded-lg">
            <span>Security Alerts</span>
          </a>
        </div>
      </nav>
    </aside>
  );
};

const SecurityAlerts = () => {
  // Add all required state declarations
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [filter, setFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [timeFilter, setTimeFilter] = useState('24h');
  const [realTimeEnabled, setRealTimeEnabled] = useState(true);
  const [alertsCount, setAlertsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Mock security alerts data
  const securityAlerts = [
    {
      id: 'ALT-2024-001',
      title: 'Multiple Failed Login Attempts Detected',
      severity: 'critical',
      priority: 'high',
      type: 'authentication',
      description: 'Unusual number of failed login attempts from multiple IP addresses targeting admin accounts',
      source: 'Authentication System',
      target: 'Web Server (192.168.1.100)',
      status: 'active',
      timestamp: new Date(Date.now() - 300000),
      firstSeen: new Date(Date.now() - 900000),
      lastSeen: new Date(Date.now() - 300000),
      count: 127,
      sourceIPs: ['203.0.113.45', '198.51.100.23', '192.0.2.67'],
      affectedUsers: ['admin', 'root', 'administrator'],
      category: 'brute-force',
      confidence: 95,
      impact: 'high',
      remediation: 'Implement IP blocking and enable multi-factor authentication',
      tags: ['brute-force', 'authentication', 'admin'],
      assignedTo: 'Security Team',
      escalated: true
    },
    {
      id: 'ALT-2024-002',
      title: 'Suspicious Network Traffic Pattern',
      severity: 'high',
      priority: 'high',
      type: 'network',
      description: 'Abnormal outbound network traffic detected - potential data exfiltration',
      source: 'Network Monitor',
      target: 'Database Server (192.168.1.101)',
      status: 'investigating',
      timestamp: new Date(Date.now() - 600000),
      firstSeen: new Date(Date.now() - 1200000),
      lastSeen: new Date(Date.now() - 600000),
      count: 1,
      sourceIPs: ['192.168.1.101'],
      dataTransferred: '2.3 GB',
      destination: '185.199.108.153',
      category: 'data-exfiltration',
      confidence: 87,
      impact: 'high',
      remediation: 'Block suspicious destination and investigate data access logs',
      tags: ['network', 'data-exfiltration', 'outbound'],
      assignedTo: 'Network Team',
      escalated: false
    },
    {
      id: 'ALT-2024-003',
      title: 'Malware Signature Detected',
      severity: 'critical',
      priority: 'critical',
      type: 'malware',
      description: 'Known malware signature found in email attachment',
      source: 'Email Security Gateway',
      target: 'Email Server (192.168.1.103)',
      status: 'contained',
      timestamp: new Date(Date.now() - 1800000),
      firstSeen: new Date(Date.now() - 1800000),
      lastSeen: new Date(Date.now() - 1800000),
      count: 1,
      malwareFamily: 'Emotet',
      affectedFiles: ['invoice_april.pdf.exe'],
      quarantined: true,
      category: 'malware',
      confidence: 99,
      impact: 'critical',
      remediation: 'File quarantined, scan all endpoints for indicators of compromise',
      tags: ['malware', 'email', 'emotet'],
      assignedTo: 'Incident Response',
      escalated: true
    },
    {
      id: 'ALT-2024-004',
      title: 'Unauthorized Access Attempt',
      severity: 'medium',
      priority: 'medium',
      type: 'access-control',
      description: 'User attempting to access restricted files without proper authorization',
      source: 'File Access Monitor',
      target: 'File Server (192.168.1.102)',
      status: 'active',
      timestamp: new Date(Date.now() - 3600000),
      firstSeen: new Date(Date.now() - 7200000),
      lastSeen: new Date(Date.now() - 3600000),
      count: 15,
      user: 'john.doe@company.com',
      restrictedFiles: ['/hr/salaries.xlsx', '/finance/q4_budget.pdf'],
      category: 'privilege-escalation',
      confidence: 78,
      impact: 'medium',
      remediation: 'Review user permissions and access controls',
      tags: ['access-control', 'privilege-escalation', 'files'],
      assignedTo: 'IT Security',
      escalated: false
    },
    {
      id: 'ALT-2024-005',
      title: 'DDoS Attack Detected',
      severity: 'high',
      priority: 'high',
      type: 'network',
      description: 'Distributed Denial of Service attack targeting web services',
      source: 'DDoS Protection',
      target: 'Web Server (192.168.1.100)',
      status: 'mitigated',
      timestamp: new Date(Date.now() - 7200000),
      firstSeen: new Date(Date.now() - 10800000),
      lastSeen: new Date(Date.now() - 7200000),
      count: 1,
      attackType: 'HTTP Flood',
      peakTraffic: '15.2 Gbps',
      sourceCountries: ['CN', 'RU', 'BR'],
      category: 'ddos',
      confidence: 94,
      impact: 'high',
      remediation: 'DDoS mitigation active, monitor for attack evolution',
      tags: ['ddos', 'network', 'web-server'],
      assignedTo: 'Network Team',
      escalated: false
    },
    {
      id: 'ALT-2024-006',
      title: 'Insider Threat - Unusual File Access',
      severity: 'medium',
      priority: 'medium',
      type: 'insider-threat',
      description: 'Employee accessing sensitive files outside normal work hours',
      source: 'User Behavior Analytics',
      target: 'Document Management System',
      status: 'reviewing',
      timestamp: new Date(Date.now() - 14400000),
      firstSeen: new Date(Date.now() - 86400000),
      lastSeen: new Date(Date.now() - 14400000),
      count: 8,
      user: 'sarah.smith@company.com',
      department: 'Marketing',
      accessedFiles: 23,
      category: 'insider-threat',
      confidence: 65,
      impact: 'medium',
      remediation: 'Schedule meeting with employee and supervisor',
      tags: ['insider-threat', 'behavioral', 'files'],
      assignedTo: 'HR Security',
      escalated: false
    },
    {
      id: 'ALT-2024-007',
      title: 'SSL Certificate Expiring Soon',
      severity: 'low',
      priority: 'low',
      type: 'certificate',
      description: 'SSL certificate for main website expires in 7 days',
      source: 'Certificate Monitor',
      target: 'Web Server (192.168.1.100)',
      status: 'acknowledged',
      timestamp: new Date(Date.now() - 86400000),
      firstSeen: new Date(Date.now() - 86400000),
      lastSeen: new Date(Date.now() - 86400000),
      count: 1,
      domain: 'www.company.com',
      expiryDate: new Date(Date.now() + 604800000),
      category: 'certificate',
      confidence: 100,
      impact: 'low',
      remediation: 'Renew SSL certificate before expiration',
      tags: ['certificate', 'ssl', 'website'],
      assignedTo: 'Web Team',
      escalated: false
    },
    {
      id: 'ALT-2024-008',
      title: 'Phishing Email Campaign Detected',
      severity: 'high',
      priority: 'high',
      type: 'phishing',
      description: 'Coordinated phishing campaign targeting employees with fake login pages',
      source: 'Email Security',
      target: 'Email System',
      status: 'active',
      timestamp: new Date(Date.now() - 1800000),
      firstSeen: new Date(Date.now() - 3600000),
      lastSeen: new Date(Date.now() - 1800000),
      count: 47,
      emailsBlocked: 42,
      emailsDelivered: 5,
      targetedUsers: ['alice@company.com', 'bob@company.com', 'charlie@company.com'],
      category: 'phishing',
      confidence: 91,
      impact: 'high',
      remediation: 'Send security awareness alert and block sender domains',
      tags: ['phishing', 'email', 'social-engineering'],
      assignedTo: 'Security Team',
      escalated: true
    }
  ];

  const alertCategories = [
    { key: 'authentication', label: 'Authentication', icon: Lock, color: 'error' },
    { key: 'network', label: 'Network', icon: Network, color: 'warning' },
    { key: 'malware', label: 'Malware', icon: AlertTriangle, color: 'error' },
    { key: 'access-control', label: 'Access Control', icon: Shield, color: 'secondary' },
    { key: 'insider-threat', label: 'Insider Threat', icon: Users, color: 'warning' },
    { key: 'phishing', label: 'Phishing', icon: Globe, color: 'error' },
    { key: 'certificate', label: 'Certificate', icon: FileText, color: 'text-secondary' },
    { key: 'ddos', label: 'DDoS', icon: Zap, color: 'error' }
  ];

  // Real-time alert simulation
  useEffect(() => {
    if (realTimeEnabled) {
      const interval = setInterval(() => {
        setAlertsCount(prev => prev + Math.floor(Math.random() * 3));
      }, 5000);
      // Cleanup
      return () => {
        clearInterval(interval);
      };
    }
  }, [realTimeEnabled]);

  useEffect(() => {
    console.log('SecurityAlerts component mounted');
    setIsLoading(false); // Set loading to false after component mounts
  }, []);

  const getSeverityColor = (severity) => {
    const colorMap = {
      critical: 'text-error border-error/50 bg-error/10',
      high: 'text-warning border-warning/50 bg-warning/10',
      medium: 'text-secondary border-secondary/50 bg-secondary/10',
      low: 'text-text-secondary border-surface-600 bg-surface-800'
    };
    return colorMap[severity] || colorMap.low;
  };

  const getPriorityColor = (priority) => {
    const colorMap = {
      critical: 'text-error',
      high: 'text-warning',
      medium: 'text-secondary',
      low: 'text-text-secondary'
    };
    return colorMap[priority] || colorMap.low;
  };

  const getStatusColor = (status) => {
    const colorMap = {
      active: 'bg-error/20 text-error',
      investigating: 'bg-warning/20 text-warning',
      contained: 'bg-secondary/20 text-secondary',
      mitigated: 'bg-success/20 text-success',
      acknowledged: 'bg-primary/20 text-primary',
      reviewing: 'bg-info/20 text-info',
      resolved: 'bg-success/20 text-success'
    };
    return colorMap[status] || 'bg-surface-600 text-text-secondary';
  };

  const filteredAlerts = useMemo(() => 
    securityAlerts.filter(alert => {
      const severityMatch = filter === 'all' || alert.severity === filter;
      const statusMatch = statusFilter === 'all' || alert.status === statusFilter;
      const timeMatch = timeFilter === 'all' || 
        (timeFilter === '24h' && (Date.now() - alert.timestamp) <= 86400000) ||
        (timeFilter === '7d' && (Date.now() - alert.timestamp) <= 604800000) ||
        (timeFilter === '30d' && (Date.now() - alert.timestamp) <= 2592000000);
      
      return severityMatch && statusMatch && timeMatch;
    }), 
    [securityAlerts, filter, statusFilter, timeFilter]
  );

  const alertStats = {
    total: securityAlerts.length,
    active: securityAlerts.filter(a => a.status === 'active').length,
    critical: securityAlerts.filter(a => a.severity === 'critical').length,
    high: securityAlerts.filter(a => a.severity === 'high').length,
    medium: securityAlerts.filter(a => a.severity === 'medium').length,
    low: securityAlerts.filter(a => a.severity === 'low').length,
    escalated: securityAlerts.filter(a => a.escalated).length
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return `${minutes}m ago`;
  };

  const getCategoryIcon = (category) => {
    const categoryData = alertCategories.find(cat => cat.key === category);
    if (categoryData) {
      const IconComponent = categoryData.icon;
      return <IconComponent size={16} className={`text-${categoryData.color}`} />;
    }
    return <AlertCircle size={16} className="text-text-secondary" />;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
                Security Alerts
              </h1>
              <p className="text-text-secondary font-body">
                Real-time security incident monitoring and incident response management
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${realTimeEnabled ? 'bg-success animate-pulse-glow' : 'bg-surface-600'}`} />
                <span className="text-sm font-caption text-text-secondary">
                  {realTimeEnabled ? 'Real-time Active' : 'Real-time Disabled'}
                </span>
              </div>
              
              <button
                onClick={() => setRealTimeEnabled(!realTimeEnabled)}
                className={`flex items-center space-x-2 border rounded-lg px-4 py-2 text-sm font-medium transition-cyber ${
                  realTimeEnabled 
                    ? 'bg-success/20 hover:bg-success/30 text-success border-success/50 hover:glow-success'
                    : 'bg-surface-700 hover:bg-surface-600 text-text-secondary border-surface-600 hover:border-primary/50'
                }`}
              >
                {realTimeEnabled ? <Pause size={16} /> : <Play size={16} />}
                <span>{realTimeEnabled ? 'Disable' : 'Enable'} Real-time</span>
              </button>
              
              <button className="flex items-center space-x-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 rounded-lg px-4 py-2 text-sm font-medium transition-cyber hover:glow-primary">
                <Download size={16} />
                <span>Export Report</span>
              </button>
            </div>
          </div>

          {/* Alert Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-6 mb-8">
            {[
              { label: 'Total Alerts', value: alertStats.total, color: 'primary', icon: Bell },
              { label: 'Active', value: alertStats.active, color: 'error', icon: Activity },
              { label: 'Critical', value: alertStats.critical, color: 'error', icon: AlertTriangle },
              { label: 'High', value: alertStats.high, color: 'warning', icon: AlertTriangle },
              { label: 'Medium', value: alertStats.medium, color: 'secondary', icon: AlertTriangle },
              { label: 'Low', value: alertStats.low, color: 'text-secondary', icon: AlertTriangle },
              { label: 'Escalated', value: alertStats.escalated, color: 'warning', icon: TrendingUp }
            ].map((stat, index) => (
              <div key={index} className="bg-surface border cyber-border rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-text-secondary font-caption text-sm mb-1">{stat.label}</p>
                    <p className={`text-2xl font-heading font-bold text-${stat.color}`}>{stat.value}</p>
                  </div>
                  <stat.icon className={`text-${stat.color}`} size={24} />
                </div>
              </div>
            ))}
          </div>

          {/* Alert Categories Overview */}
          <div className="bg-surface border cyber-border rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-heading font-bold text-primary">Alert Categories</h2>
                <p className="text-sm text-text-secondary">Distribution of security alerts by category</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4">
              {alertCategories.map(category => {
                const count = securityAlerts.filter(alert => alert.category === category.key).length;
                const IconComponent = category.icon;
                return (
                  <div
                    key={category.key}
                    className="bg-surface-800 border border-surface-600 hover:border-primary/30 rounded-lg p-4 transition-cyber hover:glow-primary cursor-pointer group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg bg-${category.color}/10 border border-${category.color}/30 flex items-center justify-center`}>
                        <IconComponent className={`text-${category.color}`} size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors">
                          {category.label}
                        </h4>
                        <p className="text-lg font-heading font-bold text-primary">
                          {count}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            
            {/* Filters and Controls */}
            <div className="xl:col-span-3">
              <div className="bg-surface border cyber-border rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-heading font-bold text-primary">Filters</h2>
                    <p className="text-sm text-text-secondary">Refine alert view</p>
                  </div>
                  <Filter className="text-primary" size={20} />
                </div>

                <div className="space-y-6">
                  {/* Severity Filter */}
                  <div>
                    <h4 className="text-sm font-heading font-bold text-primary mb-3">Severity</h4>
                    <div className="space-y-2">
                      {[
                        { key: 'all', label: 'All Severities', count: alertStats.total },
                        { key: 'critical', label: 'Critical', count: alertStats.critical },
                        { key: 'high', label: 'High', count: alertStats.high },
                        { key: 'medium', label: 'Medium', count: alertStats.medium },
                        { key: 'low', label: 'Low', count: alertStats.low }
                      ].map(({ key, label, count }) => (
                        <button
                          key={key}
                          onClick={() => setFilter(key)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-cyber ${
                            filter === key
                              ? 'bg-primary/20 text-primary border border-primary/50'
                              : 'text-text-secondary hover:text-primary hover:bg-surface-700'
                          }`}
                        >
                          <span>{label}</span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            filter === key ? 'bg-primary/20' : 'bg-surface-600'
                          }`}>
                            {count}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Status Filter */}
                  <div>
                    <h4 className="text-sm font-heading font-bold text-primary mb-3">Status</h4>
                    <div className="space-y-2">
                      {[
                        { key: 'all', label: 'All Status' },
                        { key: 'active', label: 'Active' },
                        { key: 'investigating', label: 'Investigating' },
                        { key: 'contained', label: 'Contained' },
                        { key: 'mitigated', label: 'Mitigated' },
                        { key: 'resolved', label: 'Resolved' }
                      ].map(({ key, label }) => (
                        <button
                          key={key}
                          onClick={() => setStatusFilter(key)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-cyber ${
                            statusFilter === key
                              ? 'bg-primary/20 text-primary border border-primary/50'
                              : 'text-text-secondary hover:text-primary hover:bg-surface-700'
                          }`}
                        >
                          <span>{label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Filter */}
                  <div>
                    <h4 className="text-sm font-heading font-bold text-primary mb-3">Time Range</h4>
                    <div className="space-y-2">
                      {[
                        { key: 'all', label: 'All Time' },
                        { key: '24h', label: 'Last 24 Hours' },
                        { key: '7d', label: 'Last 7 Days' },
                        { key: '30d', label: 'Last 30 Days' }
                      ].map(({ key, label }) => (
                        <button
                          key={key}
                          onClick={() => setTimeFilter(key)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-cyber ${
                            timeFilter === key
                              ? 'bg-primary/20 text-primary border border-primary/50'
                              : 'text-text-secondary hover:text-primary hover:bg-surface-700'
                          }`}
                        >
                          <span>{label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-surface border cyber-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-heading font-bold text-primary">Quick Actions</h2>
                    <p className="text-sm text-text-secondary">Common operations</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { icon: Shield, label: 'Block All Threats', color: 'error' },
                    { icon: Eye, label: 'Mark All as Read', color: 'primary' },
                    { icon: CheckCircle, label: 'Acknowledge All', color: 'success' },
                    { icon: Settings, label: 'Alert Settings', color: 'secondary' },
                    { icon: Bell, label: 'Notification Rules', color: 'warning' }
                  ].map((action, index) => (
                    <button
                      key={index}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-cyber hover:glow-${action.color} bg-${action.color}/10 hover:bg-${action.color}/20 text-${action.color} border border-${action.color}/30`}
                    >
                      <action.icon size={16} />
                      <span>{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Alerts List */}
            <div className="xl:col-span-9">
              <div className="bg-surface border cyber-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-heading font-bold text-primary">Security Alerts</h2>
                    <p className="text-sm text-text-secondary">
                      Showing {filteredAlerts.length} of {securityAlerts.length} alerts
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="text-text-secondary" size={16} />
                      <span className="text-sm text-text-secondary">
                        Last updated: {formatTimeAgo(new Date(Date.now() - 60000))}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {filteredAlerts.map((alert, index) => (
                    <div
                      key={`${alert.id}-${index}`}
                      className={`bg-surface-800 border rounded-lg p-4 cursor-pointer transition-cyber hover:glow-primary ${
                        selectedAlert?.id === alert.id ? 'border-primary/50 glow-primary' : 'border-surface-600 hover:border-primary/30'
                      }`}
                      onClick={() => setSelectedAlert(selectedAlert?.id === alert.id ? null : alert)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 ${getSeverityColor(alert.severity)}`}>
                          {getCategoryIcon(alert.category)}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <h4 className="text-sm font-medium text-text-primary truncate">
                                {alert.title}
                              </h4>
                              {alert.escalated && (
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-warning/20 text-warning">
                                  <TrendingUp size={12} className="mr-1" />
                                  Escalated
                                </span>
                              )}
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className={`text-xs font-bold capitalize ${getPriorityColor(alert.priority)}`}>
                                {alert.priority}
                              </span>
                              <span className="text-xs text-text-secondary">
                                {formatTimeAgo(alert.timestamp)}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-xs text-text-secondary mb-3 line-clamp-2">
                            {alert.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3 text-xs">
                              <span className="text-text-secondary">
                                <Server size={12} className="inline mr-1" />
                                {alert.target}
                              </span>
                              <span className="text-text-secondary">
                                {alert.source}
                              </span>
                              {alert.count > 1 && (
                                <span className="text-text-secondary">
                                  Count: {alert.count}
                                </span>
                              )}
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(alert.status)}`}>
                                {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                              </span>
                              <ChevronRight 
                                size={16} 
                                className={`text-text-secondary transition-all duration-200 ${
                                  selectedAlert?.id === alert.id ? 'rotate-90' : ''
                                }`} 
                              />
                            </div>
                          </div>
                          
                          {selectedAlert?.id === alert.id && (
                            <div className="mt-4 pt-4 border-t border-surface-600 space-y-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                  <div>
                                    <h5 className="text-xs font-medium text-primary mb-1">Alert Details</h5>
                                    <div className="space-y-2 text-xs">
                                      <div className="flex justify-between">
                                        <span className="text-text-secondary">Alert ID:</span>
                                        <span className="text-text-primary font-mono">{alert.id}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-text-secondary">First Seen:</span>
                                        <span className="text-text-primary">{formatTimeAgo(alert.firstSeen)}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-text-secondary">Last Seen:</span>
                                        <span className="text-text-primary">{formatTimeAgo(alert.lastSeen)}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-text-secondary">Confidence:</span>
                                        <span className="text-text-primary">{alert.confidence}%</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-text-secondary">Assigned To:</span>
                                        <span className="text-text-primary">{alert.assignedTo}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="space-y-3">
                                  <div>
                                    <h5 className="text-xs font-medium text-primary mb-1">Impact & Response</h5>
                                    <div className="space-y-2 text-xs">
                                      <div className="flex justify-between">
                                        <span className="text-text-secondary">Impact Level:</span>
                                        <span className={`text-${getPriorityColor(alert.impact).replace('text-', '')} capitalize font-medium`}>
                                          {alert.impact}
                                        </span>
                                      </div>
                                      <div>
                                        <span className="text-text-secondary block mb-1">Remediation:</span>
                                        <span className="text-text-primary text-xs">{alert.remediation}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Alert-specific details */}
                              {alert.sourceIPs && (
                                <div>
                                  <h5 className="text-xs font-medium text-primary mb-2">Source IPs</h5>
                                  <div className="flex flex-wrap gap-1">
                                    {alert.sourceIPs.map((ip, idx) => (
                                      <span key={idx} className="px-2 py-1 bg-error/10 text-error text-xs rounded font-mono">
                                        {ip}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                              
                              {alert.affectedUsers && (
                                <div>
                                  <h5 className="text-xs font-medium text-primary mb-2">Affected Users</h5>
                                  <div className="flex flex-wrap gap-1">
                                    {alert.affectedUsers.map((user, idx) => (
                                      <span key={idx} className="px-2 py-1 bg-warning/10 text-warning text-xs rounded">
                                        {user}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                              
                              {alert.tags && (
                                <div>
                                  <h5 className="text-xs font-medium text-primary mb-2">Tags</h5>
                                  <div className="flex flex-wrap gap-1">
                                    {alert.tags.map((tag, idx) => (
                                      <span key={idx} className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded">
                                        #{tag}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                              
                              {/* Action buttons */}
                              <div className="flex items-center space-x-3 pt-3 border-t border-surface-600">
                                <button className="flex items-center space-x-2 bg-success/20 hover:bg-success/30 text-success border border-success/50 rounded px-3 py-1 text-xs font-medium transition-all hover:glow-success">
                                  <CheckCircle size={12} />
                                  <span>Acknowledge</span>
                                </button>
                                <button className="flex items-center space-x-2 bg-warning/20 hover:bg-warning/30 text-warning border border-warning/50 rounded px-3 py-1 text-xs font-medium transition-all hover:glow-warning">
                                  <TrendingUp size={12} />
                                  <span>Escalate</span>
                                </button>
                                <button className="flex items-center space-x-2 bg-error/20 hover:bg-error/30 text-error border border-error/50 rounded px-3 py-1 text-xs font-medium transition-all hover:glow-error">
                                  <Ban size={12} />
                                  <span>Block Source</span>
                                </button>
                                <button className="flex items-center space-x-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 rounded px-3 py-1 text-xs font-medium transition-all hover:glow-primary">
                                  <ExternalLink size={12} />
                                  <span>Investigate</span>
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {filteredAlerts.length === 0 && (
                    <div className="text-center py-12">
                      <Shield className="mx-auto text-text-secondary mb-4" size={48} />
                      <h3 className="text-lg font-medium text-text-secondary mb-2">No alerts found</h3>
                      <p className="text-text-secondary">No security alerts match your current filters.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SecurityAlerts;