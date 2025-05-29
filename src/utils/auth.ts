
const TOKEN_KEY = "accessToken";
export const setAccessToken = (token: string): void => {
  if (typeof window !== 'undefined') { 
    localStorage.setItem(TOKEN_KEY, token);
  }
};

export const getAccessToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(TOKEN_KEY);
  }
  return null;
};

export const removeAccessToken = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(TOKEN_KEY);
  }
};