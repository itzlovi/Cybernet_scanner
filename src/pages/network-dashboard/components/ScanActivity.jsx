import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const ScanActivity = () => {
  const [timeRange, setTimeRange] = useState('24h'); // 24h, 7d, 30d

  const scanActivities = [
    {
      id: 'scan-001',
      type: 'vulnerability',
      target: 'Full Network Scan',
      status: 'completed',
      startTime: new Date(Date.now() - 3600000), // 1 hour ago
      endTime: new Date(Date.now() - 1800000), // 30 minutes ago
      duration: '30m 15s',
      findings: {
        critical: 2,
        high: 5,
        medium: 12,
        low: 8
      },
      progress: 100,
      scanId: 'VS-2024-001'
    },
    {
      id: 'scan-002',
      type: 'port',
      target: 'Web Server (192.168.1.100)',
      status: 'running',
      startTime: new Date(Date.now() - 900000), // 15 minutes ago
      endTime: null,
      duration: '15m 23s',
      findings: {
        open: 8,
        filtered: 3,
        closed: 1012
      },
      progress: 78,
      scanId: 'PS-2024-002'
    },
    {
      id: 'scan-003',
      type: 'compliance',
      target: 'Database Server (192.168.1.101)',
      status: 'scheduled',
      startTime: new Date(Date.now() + 1800000), // 30 minutes from now
      endTime: null,
      duration: 'Estimated 45m',
      findings: {},
      progress: 0,
      scanId: 'CS-2024-003'
    },
    {
      id: 'scan-004',
      type: 'vulnerability',
      target: 'Admin Workstation (192.168.1.200)',
      status: 'failed',
      startTime: new Date(Date.now() - 7200000), // 2 hours ago
      endTime: new Date(Date.now() - 6900000), // 1h 55m ago
      duration: '5m 12s',
      findings: {},
      progress: 23,
      scanId: 'VS-2024-004',
      error: 'Connection timeout - target unreachable'
    },
    {
      id: 'scan-005',
      type: 'network',
      target: 'Network Discovery',
      status: 'completed',
      startTime: new Date(Date.now() - 10800000), // 3 hours ago
      endTime: new Date(Date.now() - 9000000), // 2h 30m ago
      duration: '30m 45s',
      findings: {
        devices: 142,
        services: 89,
        vulnerabilities: 27
      },
      progress: 100,
      scanId: 'ND-2024-005'
    }
  ];

  const getScanTypeIcon = (type) => {
    const iconMap = {
      vulnerability: 'Bug',
      port: 'Network',
      compliance: 'Shield',
      network: 'Search'
    };
    return iconMap[type] || 'Activity';
  };

  const getScanTypeColor = (type) => {
    const colorMap = {
      vulnerability: 'text-error border-error/50 bg-error/10',
      port: 'text-primary border-primary/50 bg-primary/10',
      compliance: 'text-secondary border-secondary/50 bg-secondary/10',
      network: 'text-success border-success/50 bg-success/10'
    };
    return colorMap[type] || 'text-text-secondary border-surface-600 bg-surface-800';
  };

  const getStatusColor = (status) => {
    const colorMap = {
      completed: 'text-success',
      running: 'text-primary',
      scheduled: 'text-warning',
      failed: 'text-error',
      paused: 'text-text-secondary'
    };
    return colorMap[status] || 'text-text-secondary';
  };

  const getStatusIcon = (status) => {
    const iconMap = {
      completed: 'CheckCircle',
      running: 'Play',
      scheduled: 'Clock',
      failed: 'XCircle',
      paused: 'Pause'
    };
    return iconMap[status] || 'Circle';
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const formatDuration = (startTime, endTime) => {
    if (!endTime) return 'Running...';
    const diff = endTime - startTime;
    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    return `${minutes}m ${seconds}s`;
  };

  const renderFindings = (findings, type) => {
    if (Object.keys(findings).length === 0) return null;

    if (type === 'vulnerability') {
      return (
        <div className="flex space-x-4 text-xs">
          <span className="text-error">Critical: {findings.critical}</span>
          <span className="text-warning">High: {findings.high}</span>
          <span className="text-secondary">Medium: {findings.medium}</span>
          <span className="text-text-secondary">Low: {findings.low}</span>
        </div>
      );
    }

    if (type === 'port') {
      return (
        <div className="flex space-x-4 text-xs">
          <span className="text-success">Open: {findings.open}</span>
          <span className="text-warning">Filtered: {findings.filtered}</span>
          <span className="text-text-secondary">Closed: {findings.closed}</span>
        </div>
      );
    }

    if (type === 'network') {
      return (
        <div className="flex space-x-4 text-xs">
          <span className="text-primary">Devices: {findings.devices}</span>
          <span className="text-secondary">Services: {findings.services}</span>
          <span className="text-warning">Issues: {findings.vulnerabilities}</span>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="bg-surface border cyber-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-heading font-bold text-primary">Scan Activity</h2>
          <p className="text-sm text-text-secondary">Recent and ongoing security scans</p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex bg-surface-800 rounded-lg p-1 border border-surface-600">
            {[
              { key: '24h', label: '24H' },
              { key: '7d', label: '7D' },
              { key: '30d', label: '30D' }
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTimeRange(key)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-cyber ${
                  timeRange === key
                    ? 'bg-primary text-background' :'text-text-secondary hover:text-primary'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <button className="flex items-center space-x-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 rounded-lg px-4 py-2 text-sm font-medium transition-cyber hover:glow-primary">
            <Icon name="Plus" size={16} />
            <span>New Scan</span>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {scanActivities.map(scan => (
          <div
            key={scan.id}
            className="bg-surface-800 border border-surface-600 hover:border-primary/30 rounded-lg p-4 transition-cyber hover:glow-primary group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center ${getScanTypeColor(scan.type)}`}>
                  <Icon name={getScanTypeIcon(scan.type)} size={18} />
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors">
                    {scan.target}
                  </h4>
                  <p className="text-xs text-text-secondary font-mono">{scan.scanId}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className={`flex items-center space-x-2 ${getStatusColor(scan.status)}`}>
                  <Icon name={getStatusIcon(scan.status)} size={16} />
                  <span className="text-sm font-medium capitalize">{scan.status}</span>
                </div>
                
                <div className="text-right">
                  <div className="text-xs text-text-secondary">
                    {scan.status === 'scheduled' ? 'Starts at' : 'Started at'} {formatTime(scan.startTime)}
                  </div>
                  <div className="text-xs text-text-secondary">
                    Duration: {scan.endTime ? formatDuration(scan.startTime, scan.endTime) : scan.duration}
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            {scan.status === 'running' && (
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-text-secondary">Progress</span>
                  <span className="text-xs font-mono text-primary">{scan.progress}%</span>
                </div>
                <div className="w-full h-2 bg-surface-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out animate-pulse"
                    style={{ width: `${scan.progress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Error Message */}
            {scan.status === 'failed' && scan.error && (
              <div className="mb-3 p-2 bg-error/10 border border-error/30 rounded text-xs text-error">
                <Icon name="AlertTriangle" size={14} className="inline mr-2" />
                {scan.error}
              </div>
            )}

            {/* Findings */}
            {renderFindings(scan.findings, scan.type)}

            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-surface-600">
              <div className="flex space-x-2">
                {scan.status === 'running' && (
                  <>
                    <button className="flex items-center space-x-1 text-xs text-warning hover:text-warning-300 transition-colors">
                      <Icon name="Pause" size={14} />
                      <span>Pause</span>
                    </button>
                    <button className="flex items-center space-x-1 text-xs text-error hover:text-error-300 transition-colors">
                      <Icon name="Square" size={14} />
                      <span>Stop</span>
                    </button>
                  </>
                )}
                
                {scan.status === 'completed' && (
                  <button className="flex items-center space-x-1 text-xs text-primary hover:text-primary-300 transition-colors">
                    <Icon name="FileText" size={14} />
                    <span>View Report</span>
                  </button>
                )}
                
                {scan.status === 'failed' && (
                  <button className="flex items-center space-x-1 text-xs text-secondary hover:text-secondary-300 transition-colors">
                    <Icon name="RotateCcw" size={14} />
                    <span>Retry</span>
                  </button>
                )}
              </div>

              <button className="flex items-center space-x-1 text-xs text-text-secondary hover:text-primary transition-colors">
                <Icon name="MoreHorizontal" size={14} />
                <span>More</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScanActivity;