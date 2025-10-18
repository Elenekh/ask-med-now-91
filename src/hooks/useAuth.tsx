import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  age: string;
  gender: string;
  insurance: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Omit<User, "id"> & { password: string }) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check localStorage for existing session
    const storedUser = localStorage.getItem("auth_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login - replace with your Python backend API call
    const mockUser: User = {
      id: "user-" + Date.now(),
      name: "User Name",
      email,
      age: "30",
      gender: "other",
      insurance: "blue-cross",
    };
    
    localStorage.setItem("auth_user", JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const register = async (userData: Omit<User, "id"> & { password: string }) => {
    // Mock registration - replace with your Python backend API call
    const { password, ...userDataWithoutPassword } = userData;
    const newUser: User = {
      id: "user-" + Date.now(),
      ...userDataWithoutPassword,
    };
    
    localStorage.setItem("auth_user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem("auth_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
