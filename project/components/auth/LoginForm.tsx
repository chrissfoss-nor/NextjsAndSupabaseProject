'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';


interface LoginFormProps {
  redirectTo?: string;
}

export function LoginForm({ redirectTo = '/dashboard' }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
    
      // const { data, error } = await auth.signIn(email, password);
      //mocked auth.signIn for testing purposes
        const { data, error } = await (async (email: string, password: string) => {
          if (email === 'hello@hello.com' && password === 'password') {
            return { data: { user: { id: '123', email } }, error: null };
          }
          return { data: null, error: { message: 'Invalid credentials' } };
        })(email, password);
      
      if (error) {
        setError(error.message);
        return;
      }

      if (data.user) {
        router.push(redirectTo);
      }
    } catch (err) {
      setError('En feil oppstod under innlogging');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Logg inn på kontoen din
        </h2>
      </div>
      
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-post
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="din@epost.no"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Passord
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Logger inn...' : 'Logg inn'}
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Har du ikke en konto?{' '}
            <button
              type="button"
              onClick={() => router.push('/register')}
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              Registrer deg her
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}