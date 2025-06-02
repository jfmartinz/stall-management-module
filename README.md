# PathSmart - Stall Management Module

Stall management module designed to help administrators manage stalls, listings, quality guide, create stall owner accounts and more. 

![PathSmart Logo](./assets/PathSmart.png)

The application is currently static. No backend and DB yet.

- `/` (index.js) - Login screen
- `/admin_interface` - Main dashboard with map 
- `/account_creation` - User account creation interface
- `/quality_guide` - Quality guidelines and standards
- `/listing` - Product and service listing management
- `/stalls` - Stall management interface
- `/account` - Admin profile management


## Tech Stack

### Core Technologies
- **React Native**: Cross-platform mobile application framework
- **Expo**: Development platform for React Native
- **Expo Router**: File-based routing system for navigation

### Development Tools
- ESLint & Prettier for code quality
- Metro bundler for React Native
- Babel for JavaScript transpilation

## Getting Started

### Prerequisites
- Node.js (v14.0 or higher)
- npm or yarn package manager
- Expo CLI

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/stall-management-module.git
cd stall-management-module
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Run on your preferred platform
```bash
# For web
npm run web
# For iOS
npm run ios
# For Android
npm run android
```

