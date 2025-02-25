export const AUTH_TYPES = {
    USER: 'user',
    ADMIN: 'admin'
  };
  
  export const login = (type, credentials) => {
    if (type === AUTH_TYPES.ADMIN) {
      // Admin login logic
      if (credentials.username === 'admin' && credentials.password === 'admin123') {
        localStorage.setItem('authType', AUTH_TYPES.ADMIN);
        return true;
      }
      return false;
    } else {
      // Regular user login logic
      localStorage.setItem('authType', AUTH_TYPES.USER);
      return true;
    }
  };
  
  export const logout = () => {
    localStorage.removeItem('authType');
    window.location.href = '/login';
  };
  
  export const isAdmin = () => {
    return localStorage.getItem('authType') === AUTH_TYPES.ADMIN;
  };
  
  export const isUser = () => {
    return localStorage.getItem('authType') === AUTH_TYPES.USER;
  };