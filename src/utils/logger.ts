/**
 * Utilidad simple de logging para Natural Greatness
 */

const IS_DEV = false; // Logs desactivados // import.meta.env.DEV;

export const logger = {
  info: (message: string, data?: any) => {
    if (IS_DEV) {
      console.log(`%c[INFO] ${message}`, 'color: #007bff; font-weight: bold;', data || '');
    }
  },
  
  success: (message: string, data?: any) => {
    if (IS_DEV) {
      console.log(`%c[SUCCESS] ${message}`, 'color: #28a745; font-weight: bold;', data || '');
    }
  },
  
  warn: (message: string, data?: any) => {
    if (IS_DEV) {
      console.warn(`%c[WARN] ${message}`, 'color: #ffc107; font-weight: bold;', data || '');
    }
  },
  
  error: (message: string, error?: any) => {
    if (IS_DEV) {
      console.error(`%c[ERROR] ${message}`, 'color: #dc3545; font-weight: bold;', error || '');
    }
  },

  debug: (message: string, data?: any) => {
    if (IS_DEV) {
      console.debug(`%c[DEBUG] ${message}`, 'color: #6c757d; font-style: italic;', data || '');
    }
  }
};
