declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_API_URL: string;
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }
}

// Ensure this file is treated as a module
export {};