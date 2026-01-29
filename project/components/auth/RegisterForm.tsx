'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';


export function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // const { data, error } = await auth.signUp(email, password, {  full_name: name });

      //Mocked auth.signUp for testing purposes
      const { data, error } = await (async (email: string, password: string, name: string) => {
        if (email && password.length >= 6 && name) {
            return { data: { user: { id: '123', email, name } }, error: null };
        }
        return { data: null, error: { message: 'Registration failed' } };
      })(email, password, name);
      
      if (error) {
        setError(error.message);
        return;
      }

      setSuccess(true);
      // Redirect to login with success message or to dashboard if email confirmation is disabled
    } catch (err) {
      setError('En feil oppstod under registrering');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-600">Registrering vellykket!</h2>
          <p className="mt-2 text-gray-600">
            Sjekk e-posten din for å bekrefte kontoen, eller{' '}
            <button
              onClick={() => router.push('/login')}
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              logg inn her
            </button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md w-full space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Opprett en konto
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
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Fullt navn
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ola Nordmann"
            />
          </div>

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
              minLength={6}
            />
            <p className="mt-1 text-xs text-gray-500">Minimum 6 tegn</p>
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Registrerer...' : 'Opprett konto'}
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Har du allerede en konto?{' '}
            <button
              type="button"
              onClick={() => router.push('/login')}
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              Logg inn her
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}