# 🌍 WorldWise - Personal Travel Tracker

A modern React application that helps travelers keep track of cities they've visited around the world. Built with React 18, featuring user authentication, personal data management, and an interactive map interface.

## ✨ Features

### 🔐 **User Authentication**
- Secure user registration and login system
- Personal user accounts with unique avatars
- Protected routes and session management
- Data isolation between users

### 🗺️ **Personal Travel Journal**
- Track cities you've visited with detailed information
- Each user maintains their own private city collection
- Add cities with location data and personal notes
- View and manage your travel history

### 🎨 **Modern UI/UX**
- Clean, responsive design
- Intuitive navigation and user flows
- Real-time form validation
- Error handling with user-friendly messages

### 💾 **Data Persistence**
- Local storage for user data and preferences
- Persistent login sessions
- Individual data collections per user account

## 📸 Screenshots
### Homepage
*Clean landing page with call-to-action*

<img width="1680" height="927" alt="Screenshot 2025-08-10 at 12 36 05 PM" src="https://github.com/user-attachments/assets/e1afd8a6-94b1-4a64-9ea5-b71edee9a68b" />

### Authentication
*Secure login and registration forms*

<img width="1668" height="911" alt="Screenshot 2025-08-10 at 12 36 32 PM" src="https://github.com/user-attachments/assets/5b44de7c-b0c8-41d1-9911-07638e7e3b8f" />

### Main Application
*Interactive map and city management interface*

<img width="1680" height="926" alt="Screenshot 2025-08-10 at 12 37 00 PM" src="https://github.com/user-attachments/assets/1f75b4c3-e5d3-464f-9798-9d9a5376932e" />


## 🛠️ Technologies Used

- **Frontend:** React 18, React Router DOM
- **Styling:** CSS Modules
- **State Management:** React Context API with useReducer
- **Form Handling:** Controlled components with validation
- **Storage:** LocalStorage for data persistence
- **Development:** Vite, ESLint
- **UI Components:** Custom React components

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v16.0 or higher)
- npm or yarn package manager
- Modern web browser with JavaScript enabled


## 🎯 Usage

### Getting Started
1. **Create Account:** Click "Start tracking now" and sign up with your details
2. **Login:** Use your credentials to access your personal travel journal
3. **Add Cities:** Explore the map and add cities you've visited
4. **Manage Collection:** View, edit, and delete cities from your personal list


## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AppNav.jsx      # App navigation
│   ├── Sidebar.jsx     # Sidebar with user info
│   ├── User.jsx        # User profile component
│   └── ...
├── Context/            # React Context providers
│   ├── AuthContext.jsx # Authentication state
│   └── CitiesContext.jsx # Cities data management
├── pages/              # Page components
│   ├── Homepage.jsx    # Landing page
│   ├── Login.jsx       # Login form
│   ├── Signup.jsx      # Registration form
│   ├── AppLayout.jsx   # Main app layout
│   └── ProtectedRoute.jsx # Route protection
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── App.jsx             # Main app component
```

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🌐 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set up automatic deployments from your GitHub repository

### Manual Deployment
```bash
npm run build
# Upload the contents of 'dist' folder to your hosting provider
```

## 🧪 Testing

The application includes comprehensive error handling and form validation. To test:

1. **Authentication Flow:**
   - Try signing up with existing email (should show error)
   - Test login with invalid credentials
   - Verify protected routes redirect properly

2. **Data Management:**
   - Create multiple user accounts
   - Verify data isolation between users
   - Test city add/delete functionality


## 🐛 Known Issues

- Map functionality requires additional API integration
- Currently uses localStorage (consider database for production)
- Password reset functionality not implemented

## 🔮 Future Enhancements

- [ ] Integration with real mapping APIs (Google Maps, Mapbox)
- [ ] Backend database for user data
- [ ] Social features (share travel lists)
- [ ] Import/export travel data
- [ ] Travel statistics and analytics
- [ ] Mobile app version


