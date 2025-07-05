import React from 'react';
import Icon from 'components/AppIcon';

const BrandingSection = () => {
  const features = [
    {
      icon: "Shield",
      title: "Advanced Security",
      description: "Enterprise-grade protection with real-time threat detection"
    },
    {
      icon: "Zap",
      title: "Lightning Fast",
      description: "Instant vulnerability scanning and network analysis"
    },
    {
      icon: "Eye",
      title: "Deep Visibility",
      description: "Complete network topology mapping and monitoring"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Main Branding */}
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary">
            <Icon name="Shield" size={32} className="text-background" />
          </div>
          <div>
            <h1 className="text-4xl font-heading font-bold text-primary glow-primary">
              CyberNet Scanner
            </h1>
            <p className="text-lg font-caption text-text-secondary">
              Next-Generation Network Security Platform
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-heading font-bold text-text-primary">
            Secure Your Digital Infrastructure
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Advanced cyberpunk-themed vulnerability assessment platform designed for 
            network security professionals. Discover, analyze, and protect your network 
            infrastructure with cutting-edge scanning technology.
          </p>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 bg-surface-800/50 rounded-lg border border-surface-600 hover:border-primary/30 transition-cyber group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/30 group-hover:border-primary/50 transition-cyber">
              <Icon name={feature.icon} size={20} className="text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-text-primary group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-surface-800/30 rounded-lg border border-surface-600">
          <div className="text-2xl font-heading font-bold text-primary">99.9%</div>
          <div className="text-xs font-caption text-text-secondary">Uptime</div>
        </div>
        <div className="text-center p-4 bg-surface-800/30 rounded-lg border border-surface-600">
          <div className="text-2xl font-heading font-bold text-accent">24/7</div>
          <div className="text-xs font-caption text-text-secondary">Monitoring</div>
        </div>
        <div className="text-center p-4 bg-surface-800/30 rounded-lg border border-surface-600">
          <div className="text-2xl font-heading font-bold text-secondary">1M+</div>
          <div className="text-xs font-caption text-text-secondary">Scans</div>
        </div>
      </div>

      {/* Security Badge */}
      <div className="flex items-center justify-center space-x-3 p-4 bg-success/10 border border-success/30 rounded-lg">
        <Icon name="CheckCircle" size={20} className="text-success" />
        <span className="text-sm font-medium text-success">SOC 2 Type II Certified</span>
      </div>
    </div>
  );
};

export default BrandingSection;