'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Failed to sign up.');
        return;
      }

      await signIn('credentials', { email, password, callbackUrl: '/' });
      router.push('/dashboard');
    } catch (err: any) {
      setError(err?.message || 'Unexpected error.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <Navbar />
      <section className="py-16">
        <Container>
          <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h1 className="text-2xl font-bold mb-6">Sign Up for PIKA PLAN</h1>

            {error && <p className="mb-4 text-sm text-red-600 dark:text-red-400">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium">Full name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-lg border px-3 py-2 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                  placeholder="John Doe"
                  required
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium">Email</span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="mt-1 block w-full rounded-lg border px-3 py-2 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium">Password</span>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  minLength={8}
                  className="mt-1 block w-full rounded-lg border px-3 py-2 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                  placeholder="8+ characters"
                  required
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-60"
              >
                {isSubmitting ? 'Creating account...' : 'Create Account'}
              </button>
            </form>
            <p className="mt-4 text-sm">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => signIn()}
                className="font-semibold text-green-600 dark:text-green-300 hover:text-green-700"
              >
                Login
              </button>
            </p>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
