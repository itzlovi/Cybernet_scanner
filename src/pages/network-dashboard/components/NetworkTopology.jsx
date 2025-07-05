import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';

const NetworkTopology = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [viewMode, setViewMode] = useState('topology'); // topology, grid, list

  const networkNodes = [
    {
      id: 'router-01',
      name: 'Core Router',
      type: 'router',
      status: 'healthy',
      ip: '192.168.1.1',
      position: { x: 50, y: 30 },
      connections: ['switch-01', 'switch-02', 'firewall-01'],
      vulnerabilities: 0,
      lastScan: '2024-01-15T10:30:00Z'
    },
    {
      id: 'firewall-01',
      name: 'Perimeter Firewall',
      type: 'firewall',
      status: 'warning',
      ip: '192.168.1.2',
      position: { x: 20, y: 60 },
      connections: ['router-01'],
      vulnerabilities: 2,
      lastScan: '2024-01-15T10:25:00Z'
    },
    {
      id: 'switch-01',
      name: 'Access Switch A',
      type: 'switch',
      status: 'healthy',
      ip: '192.168.1.10',
      position: { x: 30, y: 80 },
      connections: ['router-01', 'server-01', 'server-02'],
      vulnerabilities: 0,
      lastScan: '2024-01-15T10:20:00Z'
    },
    {
      id: 'switch-02',
      name: 'Access Switch B',
      type: 'switch',
      status: 'critical',
      ip: '192.168.1.11',
      position: { x: 70, y: 80 },
      connections: ['router-01', 'server-03', 'workstation-01'],
      vulnerabilities: 5,
      lastScan: '2024-01-15T10:15:00Z'
    },
    {
      id: 'server-01',
      name: 'Web Server',
      type: 'server',
      status: 'healthy',
      ip: '192.168.1.100',
      position: { x: 15, y: 95 },
      connections: ['switch-01'],
      vulnerabilities: 1,
      lastScan: '2024-01-15T10:10:00Z'
    },
    {
      id: 'server-02',
      name: 'Database Server',
      type: 'server',
      status: 'warning',
      ip: '192.168.1.101',
      position: { x: 45, y: 95 },
      connections: ['switch-01'],
      vulnerabilities: 3,
      lastScan: '2024-01-15T10:05:00Z'
    },
    {
      id: 'server-03',
      name: 'File Server',
      type: 'server',
      status: 'healthy',
      ip: '192.168.1.102',
      position: { x: 75, y: 95 },
      connections: ['switch-02'],
      vulnerabilities: 0,
      lastScan: '2024-01-15T10:00:00Z'
    },
    {
      id: 'workstation-01',
      name: 'Admin Workstation',
      type: 'workstation',
      status: 'critical',
      ip: '192.168.1.200',
      position: { x: 85, y: 70 },
      connections: ['switch-02'],
      vulnerabilities: 7,
      lastScan: '2024-01-15T09:55:00Z'
    }
  ];

  const getNodeIcon = (type) => {
    const iconMap = {
      router: 'Router',
      firewall: 'Shield',
      switch: 'Network',
      server: 'Server',
      workstation: 'Monitor'
    };
    return iconMap[type] || 'Circle';
  };

  const getStatusColor = (status) => {
    const colorMap = {
      healthy: 'text-success border-success/50 bg-success/10 glow-success',
      warning: 'text-warning border-warning/50 bg-warning/10 glow-warning',
      critical: 'text-error border-error/50 bg-error/10 glow-error'
    };
    return colorMap[status] || colorMap.healthy;
  };

  const handleNodeClick = (node) => {
    setSelectedNode(selectedNode?.id === node.id ? null : node);
  };

  const renderTopologyView = () => (
    <div className="relative w-full h-96 bg-surface-900 rounded-lg border cyber-border overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/30"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {networkNodes.map(node => 
          node.connections.map(connectionId => {
            const connectedNode = networkNodes.find(n => n.id === connectionId);
            if (!connectedNode) return null;
            
            return (
              <line
                key={`${node.id}-${connectionId}`}
                x1={`${node.position.x}%`}
                y1={`${node.position.y}%`}
                x2={`${connectedNode.position.x}%`}
                y2={`${connectedNode.position.y}%`}
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary/40 animate-pulse"
                strokeDasharray="5,5"
              />
            );
          })
        )}
      </svg>

      {/* Network Nodes */}
      {networkNodes.map(node => (
        <div
          key={node.id}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
            selectedNode?.id === node.id ? 'scale-125 z-20' : 'hover:scale-110 z-10'
          }`}
          style={{ left: `${node.position.x}%`, top: `${node.position.y}%` }}
          onClick={() => handleNodeClick(node)}
        >
          <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${getStatusColor(node.status)} ${
            selectedNode?.id === node.id ? 'ring-4 ring-primary/50' : ''
          }`}>
            <Icon name={getNodeIcon(node.type)} size={20} />
          </div>
          
          {/* Node Label */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs font-caption text-center">
            <div className="text-text-primary font-medium">{node.name}</div>
            <div className="text-text-secondary">{node.ip}</div>
          </div>

          {/* Vulnerability Badge */}
          {node.vulnerabilities > 0 && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-error text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse-glow">
              {node.vulnerabilities}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderGridView = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {networkNodes.map(node => (
        <div
          key={node.id}
          className={`bg-surface-800 border rounded-lg p-4 cursor-pointer transition-cyber hover:glow-primary ${
            selectedNode?.id === node.id ? 'border-primary/50 glow-primary' : 'border-surface-600'
          }`}
          onClick={() => handleNodeClick(node)}
        >
          <div className="flex items-center space-x-3 mb-3">
            <div className={`w-10 h-10 rounded-lg border flex items-center justify-center ${getStatusColor(node.status)}`}>
              <Icon name={getNodeIcon(node.type)} size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-text-primary truncate">{node.name}</h4>
              <p className="text-xs text-text-secondary font-mono">{node.ip}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-xs">
            <span className={`px-2 py-1 rounded-full ${getStatusColor(node.status)} font-caption`}>
              {node.status}
            </span>
            {node.vulnerabilities > 0 && (
              <span className="text-error font-bold">{node.vulnerabilities} issues</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-surface border cyber-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-heading font-bold text-primary">Network Topology</h2>
          <p className="text-sm text-text-secondary">Interactive network infrastructure map</p>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex bg-surface-800 rounded-lg p-1 border border-surface-600">
            {[
              { mode: 'topology', icon: 'Network', label: 'Topology' },
              { mode: 'grid', icon: 'Grid3X3', label: 'Grid' }
            ].map(({ mode, icon, label }) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-cyber ${
                  viewMode === mode
                    ? 'bg-primary text-background' :'text-text-secondary hover:text-primary hover:bg-surface-700'
                }`}
                title={label}
              >
                <Icon name={icon} size={16} />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {viewMode === 'topology' ? renderTopologyView() : renderGridView()}

      {/* Node Details Panel */}
      {selectedNode && (
        <div className="mt-6 bg-surface-800 border border-primary/30 rounded-lg p-4 glow-primary">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-heading font-bold text-primary">{selectedNode.name}</h3>
            <button
              onClick={() => setSelectedNode(null)}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-text-secondary font-caption">Type</span>
              <p className="text-text-primary font-medium capitalize">{selectedNode.type}</p>
            </div>
            <div>
              <span className="text-text-secondary font-caption">IP Address</span>
              <p className="text-text-primary font-mono">{selectedNode.ip}</p>
            </div>
            <div>
              <span className="text-text-secondary font-caption">Status</span>
              <p className={`font-medium capitalize ${getStatusColor(selectedNode.status).split(' ')[0]}`}>
                {selectedNode.status}
              </p>
            </div>
            <div>
              <span className="text-text-secondary font-caption">Vulnerabilities</span>
              <p className={`font-bold ${selectedNode.vulnerabilities > 0 ? 'text-error' : 'text-success'}`}>
                {selectedNode.vulnerabilities}
              </p>
            </div>
          </div>

          <div className="mt-4 flex space-x-3">
            <button className="flex items-center space-x-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 rounded-lg px-4 py-2 text-sm font-medium transition-cyber hover:glow-primary">
              <Icon name="Search" size={16} />
              <span>Scan Node</span>
            </button>
            <button className="flex items-center space-x-2 bg-surface-700 hover:bg-surface-600 text-text-secondary hover:text-primary border border-surface-600 hover:border-primary/50 rounded-lg px-4 py-2 text-sm font-medium transition-cyber">
              <Icon name="Settings" size={16} />
              <span>Configure</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NetworkTopology;