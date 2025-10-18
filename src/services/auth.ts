import { api } from './api';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'doctor' | 'patient';
  age?: string;
  gender?: string;
  insurance?: string;
  specialty?: string;
  clinic?: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: 'doctor' | 'patient';
  age?: string;
  gender?: string;
  insurance?: string;
  specialty?: string;
  clinic?: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export const authService = {
  async register(data: RegisterData): Promise<LoginResponse> {
    return api.post('/register', data, { requiresAuth: false });
  },

  async login(email: string, password: string): Promise<LoginResponse> {
    return api.post('/login', { email, password }, { requiresAuth: false });
  },

  async logout(): Promise<void> {
    return api.post('/logout');
  },

  async getCurrentUser(): Promise<User> {
    return api.get('/me');
  },
};
