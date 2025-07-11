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

## 🌱 Database Seeder

The application includes a powerful database seeder for populating MongoDB with test users and managing user data during development.

### 📋 Available Seeder Commands

```bash
# Add sample users to database
npm run seed

# Clear database and add fresh sample users
npm run seed:fresh

# List all users in database
npm run users:list

# Clear all users from database
npm run users:clear

# For development with nodemon
npm run dev
```

### 🎯 Direct Seeder Commands

```bash
# Basic seeding (keeps existing users)
node seeder.js seed

# Seed with clearing existing users first
node seeder.js seed --clear

# Display all users in a beautiful table
node seeder.js list

# Remove all users from database
node seeder.js clear

# Reset database (clear + seed)
node seeder.js reset

# Show help and available commands
node seeder.js
```

### 👥 Default Test Users

The seeder creates these sample users automatically:

| Name | Email | Password | Role |
|------|-------|----------|------|
| Admin User | admin@example.com | admin123 | admin |
| John Doe | john@example.com | password123 | user |
| Jane Smith | jane@example.com | password123 | user |
| Mike Johnson | mike@example.com | password123 | user |
| Sarah Wilson | sarah@example.com | password123 | moderator |

### 🚀 Quick Start with Seeder

```bash
# 1. Ensure MongoDB is running
# 2. Populate database with test users
npm run seed:fresh

# 3. View created users
npm run users:list

# 4. Start the application
npm start

# 5. Login with test credentials
# Admin: admin@example.com / admin123
# User: john@example.com / password123
```

### 🔧 Seeder Features

- **🔐 Automatic password hashing** with bcryptjs
- **👑 Role-based users** (admin, user, moderator)
- **📊 Beautiful table output** for user listing
- **🗑️ Safe database clearing** with confirmation
- **⚡ Fast database population** for development
- **🛡️ Error handling** for duplicate users
- **📅 Timestamp tracking** (createdAt, updatedAt)

### ⚠️ Seeder Usage Notes

1. **MongoDB Required**: Ensure MongoDB is running before using seeder
2. **Environment Setup**: Configure `.env` file with database URI
3. **Development Tool**: Perfect for testing and development
4. **Production Safety**: Use with caution in production environments
5. **Data Persistence**: Use `--clear` flag to replace existing users

### 📈 Advanced Seeder Usage

#### Custom User Creation
Modify the `sampleUsers` array in `seeder.js`:

```javascript
const sampleUsers = [
  {
    name: 'Custom Admin',
    email: 'admin@yourcompany.com',
    password: 'securepassword',
    role: 'admin'
  },
  // Add more users...
];
```

#### Integration with Development Workflow
```bash
# Development reset
npm run users:clear && npm run seed && npm run dev

# Quick user check
npm run users:list

# Fresh start
npm run seed:fresh && npm start
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
│   └── User.js                # Enhanced user schema with roles
├── routes/
│   └── auth.js                # Authentication routes
├── seeder.js                  # Database seeder for test users
├── server.js                  # Express server
├── package.json               # Server dependencies & scripts
└── .env                       # Environment variables
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

## 📚 Quick Reference

### Essential Commands
```bash
# Server commands
npm start                    # Start production server
npm run dev                  # Start development server with nodemon

# Database seeder commands
npm run seed                 # Add sample users
npm run seed:fresh          # Reset database with fresh users
npm run users:list          # Display all users
npm run users:clear         # Remove all users

# Client commands (in client/ directory)
npx react-scripts start    # Start React development server
npm run build              # Build for production
```

### Default Test Accounts
```bash
# Admin access
Email: admin@example.com
Password: admin123

# Regular user access
Email: john@example.com
Password: password123
```

### Development Workflow
```bash
# Quick start for development
npm run seed:fresh && npm run dev

# Check current users
npm run users:list

# Reset everything
npm run users:clear && npm run seed && npm start
```

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
