# 🚀 Modern JWT Authentication App

A full-stack authentication application built with React, Node.js, Express, and MongoDB featuring a modern, beautiful UI and comprehensive admin dashboard.

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Node.js](https://img.shields.io/badge/node.js-v16+-green.svg)
![React](https://img.shields.io/badge/react-v19+-blue.svg)
![MongoDB](https://img.shields.io/badge/mongodb-latest-green.svg)

## ✨ Features

### 🔐 Authentication
- **Secure JWT-based authentication**
- **Password hashing** with bcryptjs
- **Form validation** with real-time error messages
- **Protected routes** with automatic redirects
- **Session management** with token storage

### 🎨 Modern UI/UX
- **Beautiful glassmorphism design** with gradient backgrounds
- **Responsive layout** that works on all devices
- **Dark mode support** via CSS media queries
- **Smooth animations** and micro-interactions
- **Professional typography** and spacing
- **Loading states** with elegant spinners

### 📊 Admin Dashboard
- **Multi-tab interface** (Overview, Users, Analytics, Security)
- **Statistics cards** with real-time metrics
- **User profile management** with dropdown menu
- **Recent activity feed**
- **Quick action buttons**
- **Member information** with join date

### 🔧 Enhanced Features
- **Password visibility toggle**
- **Toast notifications** for user feedback
- **Form validation** with Yup schema
- **API service layer** for centralized requests
- **Error handling** throughout the application
- **Input sanitization** and validation

## 🛠 Tech Stack

### Frontend
- **React 19** - UI framework
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling and validation
- **Yup** - Schema validation
- **Lucide React** - Modern icon library
- **React Hot Toast** - Beautiful notifications
- **CSS3** - Modern styling with flexbox/grid

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **dotenv** - Environment variables

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/ThearaKhut09/JWT.git
cd JWT
```

### 2. Install server dependencies
```bash
npm install
```

### 3. Install client dependencies
```bash
cd client
npm install
```

### 4. Environment setup
Create a `.env` file in the root directory:
```env
MONGODB_URI=mongodb://localhost:27017/jwt-auth
JWT_SECRET=your_super_secret_jwt_key_here
PORT=5000
```

### 5. Start the application

#### Development mode (recommended)
```bash
# Terminal 1 - Start the server
npm start

# Terminal 2 - Start the client
cd client
npx react-scripts start
```

#### Production mode
```bash
# Build the client
cd client
npm run build

# Start the server (serves built client)
cd ..
npm start
```

## 🚀 Usage

### 1. Register a new account
- Navigate to `http://localhost:3000/register`
- Fill in your name, email, and password
- Password must be at least 6 characters
- Confirm your password

### 2. Login
- Navigate to `http://localhost:3000/`
- Enter your email and password
- Click "Sign In"

### 3. Access Dashboard
- After successful login, you'll be redirected to the dashboard
- Explore different tabs: Overview, Users, Analytics, Security
- View your profile in the user dropdown menu
- Access quick actions and recent activity

## 📁 Project Structure

```
JWT/
├── client/                     # React frontend
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.js       # Modern login page
│   │   │   ├── Register.js    # Modern registration page
│   │   │   ├── Dashboard.js   # Admin dashboard
│   │   │   ├── Auth.css       # Authentication styles
│   │   │   └── Dashboard.css  # Dashboard styles
│   │   ├── utils/
│   │   │   └── api.js         # API service layer
│   │   ├── App.js             # Main app component
│   │   ├── App.css            # Global styles
│   │   └── index.js           # Entry point
│   └── package.json
├── middleware/
│   └── authMiddleware.js       # JWT verification
├── models/
│   └── User.js                # User schema
├── routes/
│   └── auth.js                # Authentication routes
├── server.js                  # Express server
├── package.json
└── .env                       # Environment variables
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/dashboard` - Protected dashboard data
- `GET /api/auth/profile` - User profile data

### Request/Response Examples

#### Register
```javascript
// POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

// Response
{
  "message": "User registered successfully",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### Login
```javascript
// POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}

// Response
{
  "token": "jwt_token_here",
  "message": "Login successful",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

## 🎨 UI Components

### Authentication Pages
- **Modern card design** with glassmorphism effects
- **Gradient backgrounds** with subtle animations
- **Form validation** with real-time feedback
- **Password strength indicators**
- **Loading states** and success/error messages

### Dashboard Features
- **Statistics cards** with color-coded metrics
- **User profile dropdown** with account information
- **Navigation tabs** for different sections
- **Activity feed** with recent events
- **Quick action buttons** for common tasks
- **Responsive grid layout**

## 🔒 Security Features

- **JWT token authentication**
- **Password hashing** with salt rounds
- **Input validation** and sanitization
- **Protected routes** with middleware
- **CORS configuration**
- **Environment variable protection**

## 📱 Responsive Design

- **Mobile-first approach**
- **Tablet optimization**
- **Desktop enhancements**
- **Touch-friendly interfaces**
- **Flexible grid systems**

## 🚀 Performance Optimizations

- **Code splitting** with React Router
- **Lazy loading** of components
- **Optimized bundle size**
- **Efficient re-renders**
- **Cached API calls**

## 🔧 Customization

### Styling
- Modify `client/src/pages/Auth.css` for authentication pages
- Update `client/src/pages/Dashboard.css` for dashboard styling
- Adjust `client/src/App.css` for global styles

### API Integration
- Extend `client/src/utils/api.js` for additional endpoints
- Add new routes in `routes/auth.js`
- Create new middleware in `middleware/`

### Database Schema
- Modify `models/User.js` for additional user fields
- Create new models as needed

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check connection string in `.env`
   - Verify network connectivity

2. **JWT Token Issues**
   - Check JWT_SECRET in environment variables
   - Verify token expiration settings
   - Clear browser localStorage if needed

3. **CORS Errors**
   - Ensure server is running on port 5000
   - Check client is running on port 3000
   - Verify CORS configuration

4. **Build Errors**
   - Clear node_modules and reinstall
   - Check Node.js version compatibility
   - Verify all dependencies are installed

## 📄 License

This project is licensed under the ISC License - see the package.json file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

## 🙏 Acknowledgments

- React team for the amazing framework
- Express.js community for the robust backend solution
- MongoDB for the flexible database
- Lucide React for beautiful icons
- All the open-source contributors

---

**Built with ❤️ by [ThearaKhut09](https://github.com/ThearaKhut09)**
