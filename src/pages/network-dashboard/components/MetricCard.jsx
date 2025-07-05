import React from 'react';
import Icon from 'components/AppIcon';

const MetricCard = ({ title, value, icon, color, trend, trendValue, description }) => {
  const getColorClasses = (colorType) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary/10',
        border: 'border-primary/30',
        text: 'text-primary',
        glow: 'glow-primary'
      },
      secondary: {
        bg: 'bg-secondary/10',
        border: 'border-secondary/30',
        text: 'text-secondary',
        glow: 'glow-secondary'
      },
      success: {
        bg: 'bg-success/10',
        border: 'border-success/30',
        text: 'text-success',
        glow: 'glow-success'
      },
      error: {
        bg: 'bg-error/10',
        border: 'border-error/30',
        text: 'text-error',
        glow: 'glow-error'
      },
      warning: {
        bg: 'bg-warning/10',
        border: 'border-warning/30',
        text: 'text-warning',
        glow: 'glow-warning'
      }
    };
    return colorMap[colorType] || colorMap.primary;
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return 'TrendingUp';
      case 'down':
        return 'TrendingDown';
      default:
        return 'Minus';
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return color === 'error' ? 'text-error' : 'text-success';
      case 'down':
        return color === 'success' ? 'text-error' : 'text-success';
      default:
        return 'text-text-secondary';
    }
  };

  const colors = getColorClasses(color);

  return (
    <div className={`bg-surface border ${colors.border} rounded-lg p-6 hover:${colors.glow} transition-glow group`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center ${colors.glow}`}>
          <Icon name={icon} size={24} className={colors.text} />
        </div>
        
        <div className={`flex items-center space-x-1 ${getTrendColor()}`}>
          <Icon name={getTrendIcon()} size={16} />
          <span className="text-sm font-mono">{trendValue}</span>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-caption text-text-secondary uppercase tracking-wider">
          {title}
        </h3>
        
        <div className={`text-3xl font-heading font-bold ${colors.text} group-hover:text-shadow-glow transition-all`}>
          {typeof value === 'number' && value !== parseInt(value) ? value.toFixed(1) : value}
        </div>
        
        <p className="text-xs text-text-secondary">
          {description}
        </p>
      </div>

      {/* Animated Progress Bar for Scan Progress */}
      {title === "Scan Progress" && (
        <div className="mt-4">
          <div className="w-full h-1 bg-surface-700 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r from-${color} to-${color}-400 transition-all duration-1000 ease-out`}
              style={{ width: `${parseInt(value)}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MetricCard;