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

## 🚀 Live Demo

[View Live Demo](your-deployment-url-here) *(Coming Soon)*

## 📸 Screenshots

### Homepage
*Clean landing page with call-to-action*

### Authentication
*Secure login and registration forms*

### Main Application
*Interactive map and city management interface*

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

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/worldwise.git
   cd worldwise
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎯 Usage

### Getting Started
1. **Create Account:** Click "Start tracking now" and sign up with your details
2. **Login:** Use your credentials to access your personal travel journal
3. **Add Cities:** Explore the map and add cities you've visited
4. **Manage Collection:** View, edit, and delete cities from your personal list

### User Flow
```
Homepage → Sign Up → Login → App Dashboard → Add/Manage Cities
```

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

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set up automatic deployments from your GitHub repository

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite and configure deployment

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

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

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

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your Name](https://linkedin.com/in/your-profile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for the fast build tool
- The open-source community for inspiration and resources

---

⭐ If you found this project helpful, please give it a star on GitHub!

*Built with ❤️ using React*
