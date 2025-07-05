import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const QuickActions = () => {
  const [isScanning, setIsScanning] = useState(false);

  const quickActions = [
    {
      id: 'full-scan',
      title: 'Full Network Scan',
      description: 'Comprehensive vulnerability assessment of all network devices',
      icon: 'Search',
      color: 'primary',
      estimatedTime: '45-60 minutes',
      action: () => handleQuickScan('full')
    },
    {
      id: 'critical-scan',
      title: 'Critical Assets Only',
      description: 'Scan servers and critical infrastructure components',
      icon: 'Server',
      color: 'error',
      estimatedTime: '15-20 minutes',
      action: () => handleQuickScan('critical')
    },
    {
      id: 'port-scan',
      title: 'Port Discovery',
      description: 'Identify open ports and running services',
      icon: 'Network',
      color: 'secondary',
      estimatedTime: '10-15 minutes',
      action: () => handleQuickScan('port')
    },
    {
      id: 'compliance-check',
      title: 'Compliance Check',
      description: 'Verify adherence to security standards and policies',
      icon: 'Shield',
      color: 'success',
      estimatedTime: '20-30 minutes',
      action: () => handleQuickScan('compliance')
    }
  ];

  const systemHealth = {
    cpu: 23,
    memory: 67,
    disk: 45,
    network: 89
  };

  const recentReports = [
    {
      id: 'report-001',
      title: 'Weekly Security Assessment',
      date: new Date(Date.now() - 86400000), // 1 day ago
      type: 'vulnerability',
      status: 'completed'
    },
    {
      id: 'report-002',
      title: 'Compliance Audit Report',
      date: new Date(Date.now() - 259200000), // 3 days ago
      type: 'compliance',
      status: 'completed'
    },
    {
      id: 'report-003',
      title: 'Network Topology Map',
      date: new Date(Date.now() - 604800000), // 7 days ago
      type: 'network',
      status: 'completed'
    }
  ];

  const handleQuickScan = (scanType) => {
    setIsScanning(true);
    // Simulate scan initiation
    setTimeout(() => {
      setIsScanning(false);
      // In a real app, this would navigate to the scanner page or show a success message
      console.log(`Initiated ${scanType} scan`);
    }, 2000);
  };

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary/10 hover:bg-primary/20',
        border: 'border-primary/30 hover:border-primary/50',
        text: 'text-primary',
        glow: 'hover:glow-primary'
      },
      secondary: {
        bg: 'bg-secondary/10 hover:bg-secondary/20',
        border: 'border-secondary/30 hover:border-secondary/50',
        text: 'text-secondary',
        glow: 'hover:glow-secondary'
      },
      success: {
        bg: 'bg-success/10 hover:bg-success/20',
        border: 'border-success/30 hover:border-success/50',
        text: 'text-success',
        glow: 'hover:glow-success'
      },
      error: {
        bg: 'bg-error/10 hover:bg-error/20',
        border: 'border-error/30 hover:border-error/50',
        text: 'text-error',
        glow: 'hover:glow-error'
      }
    };
    return colorMap[color] || colorMap.primary;
  };

  const getHealthColor = (percentage) => {
    if (percentage >= 80) return 'text-error';
    if (percentage >= 60) return 'text-warning';
    if (percentage >= 40) return 'text-secondary';
    return 'text-success';
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {/* Quick Scan Actions */}
      <div className="bg-surface border cyber-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-heading font-bold text-primary">Quick Actions</h2>
            <p className="text-sm text-text-secondary">Start security scans and assessments</p>
          </div>
          
          {isScanning && (
            <div className="flex items-center space-x-2 text-primary">
              <Icon name="Activity" size={16} className="animate-pulse" />
              <span className="text-sm font-caption">Initializing...</span>
            </div>
          )}
        </div>

        <div className="space-y-3">
          {quickActions.map(action => {
            const colors = getColorClasses(action.color);
            return (
              <button
                key={action.id}
                onClick={action.action}
                disabled={isScanning}
                className={`w-full text-left p-4 rounded-lg border transition-cyber ${colors.bg} ${colors.border} ${colors.glow} ${
                  isScanning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg border flex items-center justify-center ${colors.border} ${colors.bg}`}>
                    <Icon name={action.icon} size={18} className={colors.text} />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className={`text-sm font-medium ${colors.text} mb-1`}>
                      {action.title}
                    </h4>
                    <p className="text-xs text-text-secondary mb-2">
                      {action.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={12} className="text-text-secondary" />
                      <span className="text-xs text-text-secondary">{action.estimatedTime}</span>
                    </div>
                  </div>
                  
                  <Icon name="ChevronRight" size={16} className={`${colors.text} transition-transform group-hover:translate-x-1`} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* System Health */}
      <div className="bg-surface border cyber-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-heading font-bold text-primary">System Health</h3>
            <p className="text-sm text-text-secondary">Scanner resource utilization</p>
          </div>
          
          <div className="w-3 h-3 bg-success rounded-full animate-pulse-glow" />
        </div>

        <div className="space-y-4">
          {Object.entries(systemHealth).map(([resource, percentage]) => (
            <div key={resource} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-text-primary capitalize">{resource}</span>
                <span className={`text-sm font-mono ${getHealthColor(percentage)}`}>
                  {percentage}%
                </span>
              </div>
              
              <div className="w-full h-2 bg-surface-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-1000 ease-out ${
                    percentage >= 80 ? 'bg-gradient-to-r from-error to-error-400' :
                    percentage >= 60 ? 'bg-gradient-to-r from-warning to-warning-400' :
                    percentage >= 40 ? 'bg-gradient-to-r from-secondary to-secondary-400': 'bg-gradient-to-r from-success to-success-400'
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-surface border cyber-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-heading font-bold text-primary">Recent Reports</h3>
            <p className="text-sm text-text-secondary">Latest security assessments</p>
          </div>
          
          <button className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors">
            <Icon name="ExternalLink" size={14} />
            <span className="text-sm font-caption">View All</span>
          </button>
        </div>

        <div className="space-y-3">
          {recentReports.map(report => (
            <div
              key={report.id}
              className="flex items-center justify-between p-3 bg-surface-800 border border-surface-600 hover:border-primary/30 rounded-lg transition-cyber hover:glow-primary cursor-pointer group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <Icon name="FileText" size={14} className="text-primary" />
                </div>
                
                <div>
                  <h5 className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors">
                    {report.title}
                  </h5>
                  <p className="text-xs text-text-secondary">
                    {formatDate(report.date)}
                  </p>
                </div>
              </div>
              
              <Icon name="Download" size={16} className="text-text-secondary group-hover:text-primary transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;