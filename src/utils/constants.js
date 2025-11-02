export const API_BASE_URL = 'http://localhost:8000/api/v1';
export const API_BASE_DOCS_URL = 'http://localhost:8000/api/v1/docs';

// Helper function to ensure URLs have trailing slashes
export const apiUrl = (endpoint) => {
  // Remove leading slash if present
  endpoint = endpoint.replace(/^\//, '');
  // Ensure trailing slash
  if (!endpoint.endsWith('/')) {
    endpoint += '/';
  }
  return `${API_BASE_URL}/${endpoint}`;
};