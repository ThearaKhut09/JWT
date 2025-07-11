// API utilities for handling requests
const API_BASE_URL = 'http://localhost:5000/api';

class ApiService {
  static async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  static async get(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'GET' });
  }

  static async post(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  static async put(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  static async delete(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'DELETE' });
  }
}

// Auth API calls
export const authAPI = {
  login: (credentials) => ApiService.post('/auth/login', credentials),
  register: (userData) => ApiService.post('/auth/register', userData),
  getDashboard: () => ApiService.get('/auth/dashboard'),
  getProfile: () => ApiService.get('/auth/profile'),
};

export default ApiService;
