export const env = {
  API_URL: process.env.PUBLIC_API_URL,
  isProd: process.env.NODE_ENV === 'production',
  isDev: process.env.NODE_ENV === 'development',
};
