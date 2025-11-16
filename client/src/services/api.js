const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

async function request(endpoint, { method = 'GET', body, token } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers,
    credentials: 'include',
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const errorMessage = data?.message || 'Request failed';
    throw new Error(errorMessage);
  }
  return data;
}

export const authApi = {
  signUp: (payload) => request('/auth/signup', { method: 'POST', body: payload }),
  signIn: (payload) => request('/auth/signin', { method: 'POST', body: payload }),
  signOut: () => request('/auth/signout'),
  me: (token) => request('/auth/me', { token }),
};

export const contactApi = {
  list: () => request('/contacts'),
  createPublic: (payload) => request('/contacts/public', { method: 'POST', body: payload }),
  create: (payload, token) => request('/contacts', { method: 'POST', body: payload, token }),
  update: (id, payload, token) => request(`/contacts/${id}`, { method: 'PUT', body: payload, token }),
  remove: (id, token) => request(`/contacts/${id}`, { method: 'DELETE', token }),
};

export const educationApi = {
  list: () => request('/educations'),
  create: (payload, token) => request('/educations', { method: 'POST', body: payload, token }),
  update: (id, payload, token) => request(`/educations/${id}`, { method: 'PUT', body: payload, token }),
  remove: (id, token) => request(`/educations/${id}`, { method: 'DELETE', token }),
};

export const projectApi = {
  list: () => request('/projects'),
  create: (payload, token) => request('/projects', { method: 'POST', body: payload, token }),
  update: (id, payload, token) => request(`/projects/${id}`, { method: 'PUT', body: payload, token }),
  remove: (id, token) => request(`/projects/${id}`, { method: 'DELETE', token }),
};

