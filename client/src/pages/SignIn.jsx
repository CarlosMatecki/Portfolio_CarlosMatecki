import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '../components/layout';
import { useAuth } from '../context/AuthContext';

const initialState = { email: '', password: '' };

export default function SignIn() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signIn(form);
      navigate('/dashboard');
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
          <h1>Sign In</h1>
          <p>Access your administrative dashboard to manage portfolio content.</p>

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            placeholder="••••••••"
          />

          {error && <p className="form-error">{error}</p>}

          <button type="submit" disabled={loading} className="btn btn-primary">
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

          <p className="auth-helper">
            Need an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </main>
    </>
  );
}

