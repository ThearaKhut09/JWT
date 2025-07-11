import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  LogOut, 
  Settings, 
  Bell, 
  BarChart3, 
  Users, 
  Shield, 
  Activity,
  Calendar,
  Mail,
  ChevronDown
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { authAPI } from '../utils/api';
import './Dashboard.css';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
      return;
    }

    // Try to get user from localStorage first
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Fetch fresh dashboard data
    authAPI.getDashboard()
      .then(data => {
        if (data.user) {
          setUser(data.user);
          localStorage.setItem('user', JSON.stringify(data.user));
        }
      })
      .catch((error) => {
        console.error('Dashboard error:', error);
        toast.error('Failed to load dashboard');
        // Clear invalid token
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/');
      })
      .finally(() => setIsLoading(false));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
    navigate('/');
  };

  const statsData = [
    { label: 'Total Users', value: '2,547', change: '+12%', icon: Users, color: 'blue' },
    { label: 'Active Sessions', value: '1,234', change: '+5%', icon: Activity, color: 'green' },
    { label: 'Revenue', value: '$12,456', change: '+18%', icon: BarChart3, color: 'purple' },
    { label: 'Security Events', value: '23', change: '-8%', icon: Shield, color: 'orange' },
  ];

  const recentActivities = [
    { id: 1, action: 'New user registered', user: 'john@example.com', time: '2 minutes ago' },
    { id: 2, action: 'Security alert resolved', user: 'admin', time: '15 minutes ago' },
    { id: 3, action: 'System backup completed', user: 'system', time: '1 hour ago' },
    { id: 4, action: 'User permissions updated', user: 'mary@example.com', time: '2 hours ago' },
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner large"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <Toaster position="top-right" />
      
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <h1>Admin Dashboard</h1>
          <p>Welcome back, {user?.name || 'User'}!</p>
        </div>
        
        <div className="header-right">
          <button className="notification-btn">
            <Bell size={20} />
            <span className="notification-badge">3</span>
          </button>
          
          <div className="user-menu-container">
            <button 
              className="user-menu-btn"
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <div className="user-avatar">
                <User size={20} />
              </div>
              <span>{user?.name || 'User'}</span>
              <ChevronDown size={16} />
            </button>
            
            {showUserMenu && (
              <div className="user-menu-dropdown">
                <div className="user-info">
                  <p className="user-name">{user?.name || 'User'}</p>
                  <p className="user-email">{user?.email || 'user@example.com'}</p>
                  {user?.createdAt && (
                    <p className="user-joined">Joined {formatDate(user.createdAt)}</p>
                  )}
                </div>
                <hr />
                <button className="menu-item">
                  <Settings size={16} />
                  Settings
                </button>
                <button className="menu-item">
                  <User size={16} />
                  Profile
                </button>
                <hr />
                <button className="menu-item logout" onClick={handleLogout}>
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="dashboard-nav">
        <button 
          className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          <BarChart3 size={18} />
          Overview
        </button>
        <button 
          className={`nav-tab ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          <Users size={18} />
          Users
        </button>
        <button 
          className={`nav-tab ${activeTab === 'analytics' ? 'active' : ''}`}
          onClick={() => setActiveTab('analytics')}
        >
          <Activity size={18} />
          Analytics
        </button>
        <button 
          className={`nav-tab ${activeTab === 'security' ? 'active' : ''}`}
          onClick={() => setActiveTab('security')}
        >
          <Shield size={18} />
          Security
        </button>
      </nav>

      {/* Main Content */}
      <main className="dashboard-main">
        {activeTab === 'overview' && (
          <div className="dashboard-content">
            {/* Welcome Card */}
            <div className="dashboard-section">
              <div className="welcome-content">
                <h2>Welcome to your Dashboard, {user?.name}!</h2>
                <p>Here's what's happening with your account today.</p>
                {user?.createdAt && (
                  <p className="member-since">Member since {formatDate(user.createdAt)}</p>
                )}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
              {statsData.map((stat, index) => (
                <div key={index} className={`stat-card ${stat.color}`}>
                  <div className="stat-icon">
                    <stat.icon size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                    <span className={`stat-change ${stat.change.startsWith('+') ? 'positive' : 'negative'}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="dashboard-section">
              <div className="section-header">
                <h2>Recent Activity</h2>
                <button className="view-all-btn">View All</button>
              </div>
              <div className="activity-list">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="activity-item">
                    <div className="activity-icon">
                      <Activity size={16} />
                    </div>
                    <div className="activity-content">
                      <p className="activity-action">{activity.action}</p>
                      <span className="activity-user">{activity.user}</span>
                    </div>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="dashboard-section">
              <h2>Quick Actions</h2>
              <div className="quick-actions">
                <button className="action-btn">
                  <Users size={20} />
                  Add User
                </button>
                <button className="action-btn">
                  <Mail size={20} />
                  Send Notification
                </button>
                <button className="action-btn">
                  <Calendar size={20} />
                  Schedule Task
                </button>
                <button className="action-btn">
                  <Settings size={20} />
                  System Settings
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="dashboard-content">
            <div className="section-header">
              <h2>User Management</h2>
              <button className="primary-btn">Add New User</button>
            </div>
            <div className="dashboard-section">
              <p className="placeholder-text">
                User management interface coming soon...
                <br />
                Features will include user listing, editing, and permissions management.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="dashboard-content">
            <div className="section-header">
              <h2>Analytics & Reports</h2>
            </div>
            <div className="dashboard-section">
              <p className="placeholder-text">
                Analytics dashboard coming soon...
                <br />
                Features will include charts, reports, and data visualization.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="dashboard-content">
            <div className="section-header">
              <h2>Security Overview</h2>
            </div>
            <div className="dashboard-section">
              <p className="placeholder-text">
                Security monitoring interface coming soon...
                <br />
                Features will include login attempts, security alerts, and access logs.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
