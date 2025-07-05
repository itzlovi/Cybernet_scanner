import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const RecentAlerts = () => {
  const [filter, setFilter] = useState('all'); // all, critical, high, medium, low

  const alerts = [
    {
      id: 'alert-001',
      title: 'Critical SQL Injection Vulnerability',
      description: 'Detected on Web Server (192.168.1.100) - CVE-2024-0001',
      severity: 'critical',
      timestamp: new Date(Date.now() - 300000), // 5 minutes ago
      source: 'Web Server',
      category: 'vulnerability',
      status: 'active'
    },
    {
      id: 'alert-002',
      title: 'Suspicious Network Traffic',
      description: 'Unusual outbound connections detected from Admin Workstation',
      severity: 'high',
      timestamp: new Date(Date.now() - 900000), // 15 minutes ago
      source: 'Admin Workstation',
      category: 'network',
      status: 'investigating'
    },
    {
      id: 'alert-003',
      title: 'Failed Authentication Attempts',
      description: 'Multiple failed login attempts on Database Server',
      severity: 'medium',
      timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
      source: 'Database Server',
      category: 'authentication',
      status: 'resolved'
    },
    {
      id: 'alert-004',
      title: 'Outdated Security Patches',
      description: 'File Server requires critical security updates',
      severity: 'medium',
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      source: 'File Server',
      category: 'maintenance',
      status: 'active'
    },
    {
      id: 'alert-005',
      title: 'Port Scan Detected',
      description: 'External port scanning activity targeting perimeter firewall',
      severity: 'high',
      timestamp: new Date(Date.now() - 7200000), // 2 hours ago
      source: 'Perimeter Firewall',
      category: 'intrusion',
      status: 'blocked'
    },
    {
      id: 'alert-006',
      title: 'Certificate Expiration Warning',
      description: 'SSL certificate on Web Server expires in 7 days',
      severity: 'low',
      timestamp: new Date(Date.now() - 10800000), // 3 hours ago
      source: 'Web Server',
      category: 'certificate',
      status: 'pending'
    }
  ];

  const getSeverityColor = (severity) => {
    const colorMap = {
      critical: 'text-error border-error/50 bg-error/10',
      high: 'text-warning border-warning/50 bg-warning/10',
      medium: 'text-secondary border-secondary/50 bg-secondary/10',
      low: 'text-text-secondary border-surface-600 bg-surface-800'
    };
    return colorMap[severity] || colorMap.low;
  };

  const getSeverityIcon = (severity) => {
    const iconMap = {
      critical: 'AlertTriangle',
      high: 'AlertCircle',
      medium: 'Info',
      low: 'Bell'
    };
    return iconMap[severity] || 'Bell';
  };

  const getCategoryIcon = (category) => {
    const iconMap = {
      vulnerability: 'Bug',
      network: 'Network',
      authentication: 'Lock',
      maintenance: 'Tool',
      intrusion: 'Shield',
      certificate: 'Key'
    };
    return iconMap[category] || 'AlertCircle';
  };

  const getStatusColor = (status) => {
    const colorMap = {
      active: 'text-error',
      investigating: 'text-warning',
      resolved: 'text-success',
      blocked: 'text-primary',
      pending: 'text-text-secondary'
    };
    return colorMap[status] || 'text-text-secondary';
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    
    if (minutes < 60) {
      return `${minutes}m ago`;
    } else {
      return `${hours}h ago`;
    }
  };

  const filteredAlerts = filter === 'all' 
    ? alerts 
    : alerts.filter(alert => alert.severity === filter);

  const severityFilters = [
    { key: 'all', label: 'All', count: alerts.length },
    { key: 'critical', label: 'Critical', count: alerts.filter(a => a.severity === 'critical').length },
    { key: 'high', label: 'High', count: alerts.filter(a => a.severity === 'high').length },
    { key: 'medium', label: 'Medium', count: alerts.filter(a => a.severity === 'medium').length },
    { key: 'low', label: 'Low', count: alerts.filter(a => a.severity === 'low').length }
  ];

  return (
    <div className="bg-surface border cyber-border rounded-lg p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-heading font-bold text-primary">Security Alerts</h2>
          <p className="text-sm text-text-secondary">Recent threat notifications</p>
        </div>
        
        <button className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors">
          <Icon name="ExternalLink" size={16} />
          <span className="text-sm font-caption">View All</span>
        </button>
      </div>

      {/* Severity Filter */}
      <div className="flex flex-wrap gap-2 mb-4">
        {severityFilters.map(({ key, label, count }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium transition-cyber ${
              filter === key
                ? 'bg-primary text-background' :'bg-surface-800 text-text-secondary hover:text-primary hover:bg-surface-700'
            }`}
          >
            <span>{label}</span>
            <span className={`px-1.5 py-0.5 rounded-full text-xs ${
              filter === key ? 'bg-background/20' : 'bg-surface-600'
            }`}>
              {count}
            </span>
          </button>
        ))}
      </div>

      {/* Alerts List */}
      <div className="flex-1 space-y-3 overflow-y-auto max-h-96">
        {filteredAlerts.map(alert => (
          <div
            key={alert.id}
            className="bg-surface-800 border border-surface-600 hover:border-primary/30 rounded-lg p-4 transition-cyber hover:glow-primary cursor-pointer group"
          >
            <div className="flex items-start space-x-3">
              <div className={`w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 ${getSeverityColor(alert.severity)}`}>
                <Icon name={getSeverityIcon(alert.severity)} size={16} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors truncate">
                    {alert.title}
                  </h4>
                  <span className="text-xs text-text-secondary font-mono flex-shrink-0 ml-2">
                    {formatTimeAgo(alert.timestamp)}
                  </span>
                </div>
                
                <p className="text-xs text-text-secondary mb-3 line-clamp-2">
                  {alert.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Icon name={getCategoryIcon(alert.category)} size={12} className="text-text-secondary" />
                      <span className="text-xs text-text-secondary capitalize">{alert.category}</span>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <Icon name="Server" size={12} className="text-text-secondary" />
                      <span className="text-xs text-text-secondary">{alert.source}</span>
                    </div>
                  </div>
                  
                  <span className={`text-xs font-medium capitalize ${getStatusColor(alert.status)}`}>
                    {alert.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-4 pt-4 border-t border-surface-600">
        <div className="flex space-x-2">
          <button className="flex-1 flex items-center justify-center space-x-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 rounded-lg py-2 text-sm font-medium transition-cyber hover:glow-primary">
            <Icon name="Play" size={16} />
            <span>Run Scan</span>
          </button>
          
          <button className="flex-1 flex items-center justify-center space-x-2 bg-surface-700 hover:bg-surface-600 text-text-secondary hover:text-primary border border-surface-600 hover:border-primary/50 rounded-lg py-2 text-sm font-medium transition-cyber">
            <Icon name="Settings" size={16} />
            <span>Configure</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentAlerts;