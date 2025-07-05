# 🛡️ CyberNet Scanner

<div align="center">

![CyberNet Scanner Banner](https://img.shields.io/badge/CyberNet%20Scanner-Network%20Security%20Platform-blue?style=for-the-badge&logo=shield)

*A cutting-edge cybersecurity platform for network vulnerability assessment and threat detection*

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.6-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

[🚀 Live Demo](https://cybernet-scanner-by-lovi.netlify.app/login-authentication) • [📖 Documentation](#) • [🐛 Report Bug](#) • [💡 Request Feature](#)

</div>

---

## ✨ What Makes This Project Special?

<div align="center">

| 🔐 **Advanced Security** | 📊 **Real-time Monitoring** | 🎨 **Modern UI/UX** |
|:---:|:---:|:---:|
| Multi-factor authentication, secure login system, and role-based access control | Live network status, threat detection, and interactive security metrics | Cyberpunk theme with smooth animations and responsive design |

</div>

---

## 🎯 Key Features

### 🔐 **Authentication & Security**
- **🔒 Multi-Factor Authentication (MFA)** - TOTP-based security with QR code setup
- **🛡️ Secure Login System** - Demo authentication with mock credentials
- **👥 Role-Based Access Control** - Admin and user role management
- **⏰ Session Management** - Client-side session handling

### 📊 **Network Dashboard**
- **⚡ Real-time Monitoring** - Live network status and threat detection
- **📈 Interactive Metrics** - Dynamic security score, active threats, and network nodes
- **🌐 Network Topology Visualization** - Visual representation of network infrastructure
- **⚙️ Quick Actions Panel** - Rapid access to common security tasks

### 🔍 **Vulnerability Scanner**
- **🎯 Multiple Scan Templates** - Full network, web application, critical assets, and custom scans
- **📊 Real-time Scan Progress** - Live progress tracking with detailed status updates
- **🔍 Vulnerability Management** - CVE tracking, severity classification, and remediation guidance
- **📋 Scan History** - Comprehensive audit trail of all security assessments

### 🚨 **Security Alerts**
- **⚡ Real-time Alert System** - Instant notification of security incidents
- **🏷️ Alert Classification** - Critical, high, medium, and low priority alerts
- **🔍 Advanced Filtering** - Filter by severity, status, time range, and alert type
- **📝 Alert Management** - Acknowledge, assign, and track alert resolution

### 📈 **Vulnerability Reports**
- **📊 Comprehensive Reporting** - Detailed vulnerability analysis and statistics
- **📤 Export Capabilities** - Generate PDF and CSV reports
- **📈 Trend Analysis** - Historical vulnerability tracking and trend visualization
- **✅ Remediation Tracking** - Monitor vulnerability resolution progress

### 👤 **User Profile & Settings**
- **👤 Profile Management** - User account settings and preferences
- **🔒 Security Settings** - MFA configuration and password management
- **🔔 Notification Preferences** - Customizable alert and notification settings

---

## 🛠️ Technology Stack

<div align="center">

### 🎨 **Frontend Technologies**
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.6-38B2AC?style=for-the-badge&logo=tailwind-css)
![Redux](https://img.shields.io/badge/Redux-5.0.1-764ABC?style=for-the-badge&logo=redux)

### 🎭 **UI/UX Libraries**
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.16.4-0055FF?style=for-the-badge&logo=framer)
![Lucide React](https://img.shields.io/badge/Lucide%20React-0.290.0-000000?style=for-the-badge&logo=lucide)
![Recharts](https://img.shields.io/badge/Recharts-2.15.2-FF6384?style=for-the-badge&logo=chartjs)

### 📊 **Data Management**
![Mock Data](https://img.shields.io/badge/Mock%20Data-Realistic%20Demo-00C851?style=for-the-badge)
![Local State](https://img.shields.io/badge/Local%20State-Redux%20Management-FF6B35?style=for-the-badge)
![Client Storage](https://img.shields.io/badge/Client%20Storage-localStorage-FFC107?style=for-the-badge)

</div>

---

## 🚀 Quick Start

<div align="center">

### ⚡ **Get Started in 3 Steps**

| Step | Command | Description |
|:---:|:---:|:---|
| 1️⃣ | `git clone https://github.com/itzlovi/Cybernet_scanner.git` | Clone the repository |
| 2️⃣ | `cd Cybernet_scanner && npm install` | Install dependencies |
| 3️⃣ | `npm start` | Start development server |

</div>

### 🎯 **Demo Credentials**
```
Email: admin@cyberguard.com
Password: CyberNet2024!
MFA Code: 123456
```

---

## 📁 Project Structure

```
cybernet_scanner/
├── 📁 public/                 # Static assets
├── 📁 src/
│   ├── 📁 components/         # Reusable UI components
│   │   ├── 📁 ui/            # UI components (Header, Sidebar, etc.)
│   │   ├── 📄 AppIcon.jsx    # Icon component
│   │   ├── 📄 AppImage.jsx   # Image component
│   │   ├── 📄 ErrorBoundary.jsx
│   │   └── 📄 ScrollToTop.jsx
│   ├── 📁 pages/             # Page components
│   │   ├── 📁 login-authentication/    # Authentication pages
│   │   ├── 📁 network-dashboard/       # Main dashboard
│   │   ├── 📁 vulnerability-scanner/   # Scanner interface
│   │   ├── 📁 security-alerts/         # Alert management
│   │   ├── 📁 vulnerability-reports/   # Reporting system
│   │   └── 📁 user-profile-settings/  # User settings
│   ├── 📁 utils/             # Utility functions
│   ├── 📁 styles/            # Global styles
│   ├── 📁 images/            # Image assets
│   ├── 📄 App.jsx           # Main app component
│   ├── 📄 Routes.jsx        # Route configuration
│   └── 📄 index.jsx         # Entry point
├── 📄 package.json          # Dependencies and scripts
├── 📄 tailwind.config.js    # Tailwind configuration
└── 📄 vite.config.mjs       # Vite configuration
```

---

## 🎨 Design Features

<div align="center">

### 🌟 **Modern UI/UX Design**
![Cyberpunk Theme](https://img.shields.io/badge/Cyberpunk%20Theme-Dark%20Mode%20with%20Neon%20Accents-FF0080?style=for-the-badge)
![Responsive Design](https://img.shields.io/badge/Responsive%20Design-Mobile%20First%20Approach-00BCD4?style=for-the-badge)
![Smooth Animations](https://img.shields.io/badge/Smooth%20Animations-Framer%20Motion%20Powered-9C27B0?style=for-the-badge)

### 🎭 **Visual Elements**
- **🌈 Gradient Backgrounds** - Dynamic cyber-themed gradients
- **✨ Glow Effects** - Neon glow animations
- **📊 Data Stream Animations** - Real-time data visualization
- **⏳ Progress Indicators** - Animated progress bars and loaders

</div>

---

## 📊 Feature Breakdown

<div align="center">

| Feature | Description | Status |
|:---|:---|:---:|
| 🔐 **Authentication** | Multi-factor authentication with TOTP | ✅ Complete |
| 📊 **Dashboard** | Real-time network monitoring and metrics | ✅ Complete |
| 🔍 **Vulnerability Scanner** | Multiple scan templates and progress tracking | ✅ Complete |
| 🚨 **Security Alerts** | Real-time alert system with filtering | ✅ Complete |
| 📈 **Reports** | Comprehensive vulnerability reporting | ✅ Complete |
| 👤 **User Profile** | Account settings and preferences | ✅ Complete |

</div>

---

## 🔒 Security Features

<div align="center">

![MFA](https://img.shields.io/badge/Multi--Factor%20Authentication-TOTP%20Based%20Security-FF5722?style=for-the-badge)
![Validation](https://img.shields.io/badge/Client--side%20Validation-Form%20Validation%20%26%20Error%20Handling-4CAF50?style=for-the-badge)
![Demo Auth](https://img.shields.io/badge/Demo%20Authentication-Mock%20Login%20System-2196F3?style=for-the-badge)
![Secure UI](https://img.shields.io/badge/Secure%20UI%20Patterns-Best%20Practices%20for%20Frontend-9C27B0?style=for-the-badge)

</div>

---


### 📦 **Build for Production**
```bash
npm run build
```


## 🤝 Contributing

<div align="center">

We welcome contributions! Please feel free to submit a Pull Request.

[![Contributing](https://img.shields.io/badge/Contributing-Welcome!-4CAF50?style=for-the-badge)](CONTRIBUTING.md)

</div>

### 📋 **How to Contribute**

1. 🍴 **Fork** the repository
2. 🌿 **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. 📤 **Push** to the branch (`git push origin feature/amazing-feature`)
5. 🔄 **Open** a Pull Request

---

## 📝 License

<div align="center">

This project is licensed under the MIT License.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

---

## 🙏 Acknowledgments

<div align="center">

### 🏆 **Special Thanks To**

| Technology | Purpose |
|:---|:---|
| **React Team** | For the amazing framework |
| **Vite Team** | For the fast build tool |
| **Tailwind CSS** | For the utility-first CSS framework |
| **Lucide** | For the beautiful icons |
| **Framer Motion** | For the smooth animations |

</div>

---

## 📞 Support

<div align="center">

### 🆘 **Need Help?**

[![Issues](https://img.shields.io/badge/GitHub%20Issues-Report%20Bug%20%7C%20Request%20Feature-181717?style=for-the-badge&logo=github)](https://github.com/itzlovi/Cybernet_scanner/issues)
[![Email](https://img.shields.io/badge/Email%20Support-Contact%20Developer-0078D4?style=for-the-badge&logo=microsoft-outlook)](mailto:lovepreetindora00.com)

</div>

---

<div align="center">

## ⭐ **Star This Project**

If you find this project helpful, please give it a star! ⭐

**Built with ❤️ by Lovi - Frontend Developer**

*CyberNet Scanner - Protecting networks, one scan at a time.* 🛡️

[![GitHub stars](https://img.shields.io/github/stars/itzlovi/Cybernet_scanner?style=social)](https://github.com/itzlovi/Cybernet_scanner)
[![GitHub forks](https://img.shields.io/github/forks/itzlovi/Cybernet_scanner?style=social)](https://github.com/itzlovi/Cybernet_scanner)
[![GitHub issues](https://img.shields.io/github/issues/itzlovi/Cybernet_scanner)](https://github.com/itzlovi/Cybernet_scanner/issues)

</div>
