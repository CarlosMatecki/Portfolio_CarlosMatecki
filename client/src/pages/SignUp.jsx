import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/layout';
import { useAuth } from '../context/AuthContext';

const initialState = { name: '', email: '', password: '' };

export default function SignUp() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signUp(form);
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Layout />
      <main className="auth-page">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <p>Sign up to save your reading list and manage your profile.</p>

          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Ada Lovelace"
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="ada@example.com"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            minLength={6}
            placeholder="••••••••"
          />

          {error && <p className="form-error">{error}</p>}

          <button type="submit" disabled={loading} className="btn btn-primary">
            {loading ? 'Signing up...' : 'Create account'}
          </button>

          <p className="auth-helper">
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
        </form>
      </main>
    </>
  );
}

