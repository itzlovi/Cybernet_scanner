import React, { useState, useRef } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';
import Header from 'components/ui/Header';
import Sidebar from 'components/ui/Sidebar';
import loviImage from '../../images/lovi.jpg';

const UserProfileSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: 'Lovepreet',
    email: 'l***************2@gmail.com',
    role: 'Senior Security Analyst',
    department: 'Cybersecurity Operations',
    avatar: loviImage,
    phone: '+91 ********73',
    location: 'Fazilka, Punjab, India'
  });

  const [securitySettings, setSecuritySettings] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorEnabled: true,
    sessionTimeout: 30
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailAlerts: true,
    smsAlerts: false,
    inAppNotifications: true,
    criticalOnly: false,
    quietHoursEnabled: true,
    quietStart: '22:00',
    quietEnd: '08:00',
    vulnerabilityAlerts: true,
    scanCompletions: true,
    systemUpdates: false
  });

  const [preferences, setPreferences] = useState({
    dashboardLayout: 'grid',
    defaultScanType: 'comprehensive',
    reportFormat: 'pdf',
    themeIntensity: 'high',
    autoRefresh: true,
    refreshInterval: 30
  });

  const [apiSettings, setApiSettings] = useState({
    apiKey: 'cg_sk_1234567890abcdef',
    webhookUrl: 'https://api.example.com/webhooks/cyberguard',
    rateLimitEnabled: true,
    maxRequestsPerHour: 1000
  });

  const fileInputRef = useRef(null);

  const tabs = [
    { id: 'profile', label: 'Profile', icon: 'User' },
    { id: 'security', label: 'Security', icon: 'Shield' },
    { id: 'notifications', label: 'Notifications', icon: 'Bell' },
    { id: 'preferences', label: 'Preferences', icon: 'Settings' },
    { id: 'api', label: 'API Access', icon: 'Code' }
  ];

  const activeSessions = [
    {
      id: 1,
      device: 'Chrome on Windows 11',
      location: 'San Francisco, CA',
      lastActive: '2 minutes ago',
      current: true,
      ip: '192.168.1.100'
    },
    {
      id: 2,
      device: 'Firefox on macOS',
      location: 'San Francisco, CA',
      lastActive: '1 hour ago',
      current: false,
      ip: '192.168.1.101'
    },
    {
      id: 3,
      device: 'Mobile Safari on iPhone',
      location: 'San Francisco, CA',
      lastActive: '3 hours ago',
      current: false,
      ip: '192.168.1.102'
    }
  ];

  const apiUsageStats = [
    { endpoint: '/api/v1/scan', requests: 1247, lastUsed: '5 minutes ago' },
    { endpoint: '/api/v1/vulnerabilities', requests: 892, lastUsed: '12 minutes ago' },
    { endpoint: '/api/v1/reports', requests: 456, lastUsed: '1 hour ago' },
    { endpoint: '/api/v1/alerts', requests: 234, lastUsed: '2 hours ago' }
  ];

  const handleProfileUpdate = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleSecurityUpdate = (field, value) => {
    setSecuritySettings(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationUpdate = (field, value) => {
    setNotificationSettings(prev => ({ ...prev, [field]: value }));
  };

  const handlePreferenceUpdate = (field, value) => {
    setPreferences(prev => ({ ...prev, [field]: value }));
  };

  const handleApiUpdate = (field, value) => {
    setApiSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        handleProfileUpdate('avatar', e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = () => {
    // Mock save action with animation
    const button = document.getElementById('save-profile-btn');
    button.classList.add('animate-pulse-glow');
    setTimeout(() => {
      button.classList.remove('animate-pulse-glow');
    }, 1000);
  };

  const handleGenerateApiKey = () => {
    const newKey = 'cg_sk_' + Math.random().toString(36).substring(2, 18);
    handleApiUpdate('apiKey', newKey);
  };

  const handleTerminateSession = (sessionId) => {
    // Mock session termination
    console.log('Terminating session:', sessionId);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-8">
            {/* Profile Header */}
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 cyber-border-accent glow-accent">
                  <Image
                    src={profileData.avatar}
                    alt="Profile Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary-400 transition-cyber glow-primary"
                >
                  <Icon name="Camera" size={16} className="text-background" />
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary">{profileData.name}</h2>
                <p className="text-text-secondary font-caption">{profileData.role}</p>
                <p className="text-sm text-text-secondary">{profileData.department}</p>
              </div>
            </div>

            {/* Profile Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-caption text-text-secondary mb-2">Full Name</label>
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => handleProfileUpdate('name', e.target.value)}
                    className="w-full px-4 py-3 bg-surface-800 border cyber-border rounded-lg text-text-primary focus:border-primary focus:glow-primary transition-cyber"
                  />
                </div>
                <div>
                  <label className="block text-sm font-caption text-text-secondary mb-2">Email Address</label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleProfileUpdate('email', e.target.value)}
                    className="w-full px-4 py-3 bg-surface-800 border cyber-border rounded-lg text-text-primary focus:border-primary focus:glow-primary transition-cyber"
                  />
                </div>
                <div>
                  <label className="block text-sm font-caption text-text-secondary mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => handleProfileUpdate('phone', e.target.value)}
                    className="w-full px-4 py-3 bg-surface-800 border cyber-border rounded-lg text-text-primary focus:border-primary focus:glow-primary transition-cyber"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-caption text-text-secondary mb-2">Role</label>
                  <select
                    value={profileData.role}
                    onChange={(e) => handleProfileUpdate('role', e.target.value)}
                    className="w-full px-4 py-3 bg-surface-800 border cyber-border rounded-lg text-text-primary focus:border-primary focus:glow-primary transition-cyber"
                  >
                    <option value="Senior Security Analyst">Senior Security Analyst</option>
                    <option value="Security Administrator">Security Administrator</option>
                    <option value="Network Administrator">Network Administrator</option>
                    <option value="Penetration Tester">Penetration Tester</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-caption text-text-secondary mb-2">Department</label>
                  <input
                    type="text"
                    value={profileData.department}
                    onChange={(e) => handleProfileUpdate('department', e.target.value)}
                    className="w-full px-4 py-3 bg-surface-800 border cyber-border rounded-lg text-text-primary focus:border-primary focus:glow-primary transition-cyber"
                  />
                </div>
                <div>
                  <label className="block text-sm font-caption text-text-secondary mb-2">Location</label>
                  <input
                    type="text"
                    value={profileData.location}
                    onChange={(e) => handleProfileUpdate('location', e.target.value)}
                    className="w-full px-4 py-3 bg-surface-800 border cyber-border rounded-lg text-text-primary focus:border-primary focus:glow-primary transition-cyber"
                  />
                </div>
              </div>
            </div>

            <button
              id="save-profile-btn"
              onClick={handleSaveProfile}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary-400 hover:to-secondary-400 text-background font-medium px-8 py-3 rounded-lg transition-cyber hover:glow-primary"
            >
              Save Profile Changes
            </button>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-8">
            {/* Password Change */}
            <div className="bg-surface-800 rounded-lg p-6 cyber-border">
              <h3 className="text-lg font-heading font-bold text-primary mb-4">Change Password</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-caption text-text-secondary mb-2">Current Password</label>
                  <input
                    type="password"
                    value={securitySettings.currentPassword}
                    onChange={(e) => handleSecurityUpdate('currentPassword', e.target.value)}
                    className="w-full px-4 py-3 bg-surface border cyber-border rounded-lg text-text-primary focus:border-primary focus:glow-primary transition-cyber"
                  />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-caption text-text-secondary mb-2">New Password</label>
                    <input
                      type="password"
                      value={securitySettings.newPassword}
                      onChange={(e) => handleSecurityUpdate('newPassword', e.target.value)}
                      className="w-full px-4 py-3 bg-surface border cyber-border rounded-lg text-text-primary focus:border-primary focus:glow-primary transition-cyber"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-caption text-text-secondary mb-2">Confirm Password</label>
                    <input
                      type="password"
                      value={securitySettings.confirmPassword}
                      onChange={(e) => handleSecurityUpdate('confirmPassword', e.target.value)}
                      className="w-full px-4 py-3 bg-surface border cyber-border rounded-lg text-text-primary focus:border-primary focus:glow-primary transition-cyber"
                    />
                  </div>
                </div>
                <button className="bg-gradient-to-r from-primary to-secondary hover:from-primary-400 hover:to-secondary-400 text-background font-medium px-6 py-2 rounded-lg transition-cyber hover:glow-primary">
                  Update Password
                </button>
              </div>
            </div>

            {/* Two-Factor Authentication */}
            <div className="bg-surface-800 rounded-lg p-6 cyber-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-heading font-bold text-primary">Two-Factor Authentication</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-text-secondary">Status:</span>
                  <span className={`text-sm font-medium ${securitySettings.twoFactorEnabled ? 'text-success' : 'text-warning'}`}>
                    {securitySettings.twoFactorEnabled ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
              </div>
              {securitySettings.twoFactorEnabled && (
                <div className="flex items-center space-x-6">
                  <div className="w-32 h-32 bg-white rounded-lg p-2">
                    <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center text-xs text-gray-600">
                      QR Code
                    </div>
                  </div>
                  <div>
                    <p className="text-text-secondary mb-2">Scan this QR code with your authenticator app</p>
                    <p className="text-xs font-mono text-text-secondary bg-surface rounded px-2 py-1">
                      JBSWY3DPEHPK3PXP
                    </p>
                    <button className="mt-3 bg-error hover:bg-error-400 text-white font-medium px-4 py-2 rounded-lg transition-cyber">
                      Disable 2FA
                    </button>
                  </div>
                </div>
              )}
              {!securitySettings.twoFactorEnabled && (
                <button className="bg-gradient-to-r from-primary to-secondary hover:from-primary-400 hover:to-secondary-400 text-background font-medium px-6 py-2 rounded-lg transition-cyber hover:glow-primary">
                  Enable Two-Factor Authentication
                </button>
              )}
            </div>

            {/* Active Sessions */}
            <div className="bg-surface-800 rounded-lg p-6 cyber-border">
              <h3 className="text-lg font-heading font-bold text-primary mb-4">Active Sessions</h3>
              <div className="space-y-3">
                {activeSessions.map((session) => (
                  <div key={session.id} className="flex items-center justify-between p-4 bg-surface rounded-lg border cyber-border">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${session.current ? 'bg-success animate-pulse-glow' : 'bg-text-secondary'}`} />
                      <div>
                        <p className="text-text-primary font-medium">{session.device}</p>
                        <p className="text-sm text-text-secondary">{session.location} • {session.ip}</p>
                        <p className="text-xs text-text-secondary">{session.lastActive}</p>
                      </div>
                    </div>
                    {!session.current && (
                      <button
                        onClick={() => handleTerminateSession(session.id)}
                        className="text-error hover:text-error-400 transition-colors"
                      >
                        <Icon name="X" size={16} />
                      </button>
                    )}
                    {session.current && (
                      <span className="text-xs font-caption text-success">Current Session</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-8">
            {/* Alert Types */}
            <div className="bg-surface-800 rounded-lg p-6 cyber-border">
              <h3 className="text-lg font-heading font-bold text-primary mb-4">Alert Types</h3>
              <div className="space-y-4">
                {[
                  { key: 'vulnerabilityAlerts', label: 'Vulnerability Alerts', description: 'Critical security vulnerabilities detected' },
                  { key: 'scanCompletions', label: 'Scan Completions', description: 'Network scan completion notifications' },
                  { key: 'systemUpdates', label: 'System Updates', description: 'Platform updates and maintenance notices' }
                ].map((alert) => (
                  <div key={alert.key} className="flex items-center justify-between p-4 bg-surface rounded-lg border cyber-border">
                    <div>
                      <p className="text-text-primary font-medium">{alert.label}</p>
                      <p className="text-sm text-text-secondary">{alert.description}</p>
                    </div>
                    <button
                      onClick={() => handleNotificationUpdate(alert.key, !notificationSettings[alert.key])}
                      className={`relative w-12 h-6 rounded-full transition-cyber ${
                        notificationSettings[alert.key] ? 'bg-primary glow-primary' : 'bg-surface-600'
                      }`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        notificationSettings[alert.key] ? 'translate-x-7' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Methods */}
            <div className="bg-surface-800 rounded-lg p-6 cyber-border">
              <h3 className="text-lg font-heading font-bold text-primary mb-4">Delivery Methods</h3>
              <div className="space-y-4">
                {[
                  { key: 'emailAlerts', label: 'Email Notifications', icon: 'Mail' },
                  { key: 'smsAlerts', label: 'SMS Alerts', icon: 'MessageSquare' },
                  { key: 'inAppNotifications', label: 'In-App Notifications', icon: 'Bell' }
                ].map((method) => (
                  <div key={method.key} className="flex items-center justify-between p-4 bg-surface rounded-lg border cyber-border">
                    <div className="flex items-center space-x-3">
                      <Icon name={method.icon} size={20} className="text-primary" />
                      <span className="text-text-primary font-medium">{method.label}</span>
                    </div>
                    <button
                      onClick={() => handleNotificationUpdate(method.key, !notificationSettings[method.key])}
                      className={`relative w-12 h-6 rounded-full transition-cyber ${
                        notificationSettings[method.key] ? 'bg-primary glow-primary' : 'bg-surface-600'
                      }`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        notificationSettings[method.key] ? 'translate-x-7' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quiet Hours */}
            <div className="bg-surface-800 rounded-lg p-6 cyber-border">
              <h3 className="text-lg font-heading font-bold text-primary mb-4">Quiet Hours</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-text-primary font-medium">Enable Quiet Hours</span>
                  <button
                    onClick={() => handleNotificationUpdate('quietHoursEnabled', !notificationSettings.quietHoursEnabled)}
                    className={`relative w-12 h-6 rounded-full transition-cyber ${
                      notificationSettings.quietHoursEnabled ? 'bg-primary glow-primary' : 'bg-surface-600'
                    }`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      notificationSettings.quietHoursEnabled ? 'translate-x-7' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
                {notificationSettings.quietHoursEnabled && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-caption text-text-secondary mb-2">Start Time</label>
                      <input
                        type="time"
                        value={notificationSettings.quietStart}
                        onChange={(e) => handleNotificationUpdate('quietStart', e.target.value)}
                        className="w-full px-4 py-3 bg-surface border cyber-border rounded-lg text-text-primary focus:border-primary focus:glow-primary transition-cyber"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-caption text-text-secondary mb-2">End Time</label>
                      <input
                        type="time"
                        value={notificationSettings.quietEnd}
                        onChange={(e) => handleNotificationUpdate('quietEnd', e.target.value)}
                        className="w-full px-4 py-3 bg-surface border cyber-border rounded-lg text-text-primary focus:border-primary focus:glow-primary transition-cyber"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 'preferences':
        return (
          <div className="space-y-8">
            {/* Dashboard Layout */}
            <div className="bg-surface-800 rounded-lg p-6 cyber-border">
              <h3 className="text-lg font-heading font-bold text-primary mb-4">Dashboard Layout</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 'grid', label: 'Grid View', icon: 'Grid3X3' },
                  { value: 'list', label: 'List View', icon: 'List' },
                  { value: 'compact', label: 'Compact View', icon: 'Minimize2' }
                ].map((layout) => (
                  <button
                    key={layout.value}
                    onClick={() => handlePreferenceUpdate('dashboardLayout', layout.value)}
                    className={`p-4 rounded-lg border transition-cyber ${
                      preferences.dashboardLayout === layout.value
                        ? 'border-primary bg-primary/20 glow-primary' :'border-surface-600 bg-surface hover:border-primary/50'
                    }`}
                  >
                    <Icon name={layout.icon} size={24} className={`mx-auto mb-2 ${
                      preferences.dashboardLayout === layout.value ? 'text-primary' : 'text-text-secondary'
                    }`} />
                    <p className={`text-sm font-medium ${
                      preferences.dashboardLayout === layout.value ? 'text-primary' : 'text-text-secondary'
                    }`}>
                      {layout.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Scan Preferences */}
            <div className="bg-surface-800 rounded-lg p-6 cyber-border">
              <h3 className="text-lg font-heading font-bold text-primary mb-4">Default Scan Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-caption text-text-secondary mb-2">Default Scan Type</label>
                  <select
                    value={preferences.defaultScanType}
                    onChange={(e) => handlePreferenceUpdate('defaultScanType', e.target.value)}
                    className="w-full px-4 py-3 bg-surface border cyber-border rounded-lg text-text-primary focus:border-primary focus:glow-primary transition-cyber"
                  >
                    <option value="quick">Quick Scan</option>
                    <option value="comprehensive">Comprehensive Scan</option>
                    <option value="custom">Custom Scan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-caption text-text-secondary mb-2">Report Format</label>
                  <select
                    value={preferences.reportFormat}
                    onChange={(e) => handlePreferenceUpdate('reportFormat', e.target.value)}
                    className="w-full px-4 py-3 bg-surface border cyber-border rounded-lg text-text-primary focus:border-primary focus:glow-primary transition-cyber"
                  >
                    <option value="pdf">PDF Report</option>
                    <option value="html">HTML Report</option>
                    <option value="json">JSON Export</option>
                    <option value="csv">CSV Export</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Theme Settings */}
            <div className="bg-surface-800 rounded-lg p-6 cyber-border">
              <h3 className="text-lg font-heading font-bold text-primary mb-4">Cyberpunk Theme</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-caption text-text-secondary mb-2">Theme Intensity</label>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-text-secondary">Low</span>
                    <input
                      type="range"
                      min="1"
                      max="3"
                      value={preferences.themeIntensity === 'low' ? 1 : preferences.themeIntensity === 'medium' ? 2 : 3}
                      onChange={(e) => {
                        const intensity = e.target.value === '1' ? 'low' : e.target.value === '2' ? 'medium' : 'high';
                        handlePreferenceUpdate('themeIntensity', intensity);
                      }}
                      className="flex-1 h-2 bg-surface-600 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <span className="text-sm text-text-secondary">High</span>
                  </div>
                  <p className="text-xs text-text-secondary mt-2">
                    Current: {preferences.themeIntensity.charAt(0).toUpperCase() + preferences.themeIntensity.slice(1)} intensity
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-primary font-medium">Auto-refresh Dashboard</span>
                  <button
                    onClick={() => handlePreferenceUpdate('autoRefresh', !preferences.autoRefresh)}
                    className={`relative w-12 h-6 rounded-full transition-cyber ${
                      preferences.autoRefresh ? 'bg-primary glow-primary' : 'bg-surface-600'
                    }`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      preferences.autoRefresh ? 'translate-x-7' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
                {preferences.autoRefresh && (
                  <div>
                    <label className="block text-sm font-caption text-text-secondary mb-2">Refresh Interval (seconds)</label>
                    <input
                      type="number"
                      min="10"
                      max="300"
                      value={preferences.refreshInterval}
                      onChange={(e) => handlePreferenceUpdate('refreshInterval', parseInt(e.target.value))}
                      className="w-full px-4 py-3 bg-surface border cyber-border rounded-lg text-text-primary focus:border-primary focus:glow-primary transition-cyber"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 'api':
        return (
          <div className="space-y-8">
            {/* API Key Management */}
            <div className="bg-surface-800 rounded-lg p-6 cyber-border">
              <h3 className="text-lg font-heading font-bold text-primary mb-4">API Key Management</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-caption text-text-secondary mb-2">API Key</label>
                  <div className="flex items-center space-x-3">
                    <input
                      type="text"
                      value={apiSettings.apiKey}
                      readOnly
                      className="flex-1 px-4 py-3 bg-surface border cyber-border rounded-lg text-text-primary font-mono"
                    />
                    <button
                      onClick={handleGenerateApiKey}
                      className="bg-gradient-to-r from-primary to-secondary hover:from-primary-400 hover:to-secondary-400 text-background font-medium px-4 py-3 rounded-lg transition-cyber hover:glow-primary"
                    >
                      Regenerate
                    </button>
                  </div>
                  <p className="text-xs text-text-secondary mt-2">
                    Keep your API key secure. It provides full access to your account.
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-caption text-text-secondary mb-2">Webhook URL</label>
                  <input
                    type="url"
                    value={apiSettings.webhookUrl}
                    onChange={(e) => handleApiUpdate('webhookUrl', e.target.value)}
                    className="w-full px-4 py-3 bg-surface border cyber-border rounded-lg text-text-primary focus:border-primary focus:glow-primary transition-cyber"
                    placeholder="https://your-domain.com/webhook"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-text-primary font-medium">Rate Limiting</span>
                    <p className="text-sm text-text-secondary">Limit API requests per hour</p>
                  </div>
                  <button
                    onClick={() => handleApiUpdate('rateLimitEnabled', !apiSettings.rateLimitEnabled)}
                    className={`relative w-12 h-6 rounded-full transition-cyber ${
                      apiSettings.rateLimitEnabled ? 'bg-primary glow-primary' : 'bg-surface-600'
                    }`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      apiSettings.rateLimitEnabled ? 'translate-x-7' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
                {apiSettings.rateLimitEnabled && (
                  <div>
                    <label className="block text-sm font-caption text-text-secondary mb-2">Max Requests per Hour</label>
                    <input
                      type="number"
                      min="100"
                      max="10000"
                      value={apiSettings.maxRequestsPerHour}
                      onChange={(e) => handleApiUpdate('maxRequestsPerHour', parseInt(e.target.value))}
                      className="w-full px-4 py-3 bg-surface border cyber-border rounded-lg text-text-primary focus:border-primary focus:glow-primary transition-cyber"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* API Usage Statistics */}
            <div className="bg-surface-800 rounded-lg p-6 cyber-border">
              <h3 className="text-lg font-heading font-bold text-primary mb-4">Usage Statistics</h3>
              <div className="space-y-3">
                {apiUsageStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-surface rounded-lg border cyber-border">
                    <div>
                      <p className="text-text-primary font-mono text-sm">{stat.endpoint}</p>
                      <p className="text-xs text-text-secondary">Last used: {stat.lastUsed}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary font-bold">{stat.requests.toLocaleString()}</p>
                      <p className="text-xs text-text-secondary">requests</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Examples */}
            <div className="bg-surface-800 rounded-lg p-6 cyber-border">
              <h3 className="text-lg font-heading font-bold text-primary mb-4">Integration Examples</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-caption text-text-secondary mb-2">cURL Example</h4>
                  <div className="bg-background rounded-lg p-4 border cyber-border">
                    <code className="text-sm font-mono text-success">
                      {`curl -X GET "https://api.cyberguard.com/v1/scan"\ -H"Authorization: Bearer ${apiSettings.apiKey}"\ -H"Content-Type: application/json"`}
                    </code>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-caption text-text-secondary mb-2">JavaScript Example</h4>
                  <div className="bg-background rounded-lg p-4 border cyber-border">
                    <code className="text-sm font-mono text-success">
                      {`const response = await fetch('https://api.cyberguard.com/v1/scan', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ${apiSettings.apiKey}',
    'Content-Type': 'application/json'
  }
});`}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      
      <main className="ml-72 pt-16">
        <div className="p-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-heading font-bold text-primary mb-2">User Profile & Settings</h1>
            <p className="text-text-secondary">Manage your account preferences and security settings</p>
          </div>

          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="border-b border-surface-600">
              <nav className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-cyber ${
                      activeTab === tab.id
                        ? 'border-primary text-primary glow-primary' :'border-transparent text-text-secondary hover:text-primary hover:border-primary/50'
                    }`}
                  >
                    <Icon name={tab.icon} size={16} />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl">
            {renderTabContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfileSettings;