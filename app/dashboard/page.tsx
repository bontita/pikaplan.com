'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import { ChefHat, Calendar, CreditCard, TrendingUp, Plus, Settings } from 'lucide-react';

interface DashboardData {
  user: {
    id: string;
    email: string;
    name: string;
    plan: string;
    planName: string;
  };
  subscription: {
    id: string;
    planType: string;
    status: string;
    currentPeriodStart: string | null;
    currentPeriodEnd: string | null;
    cancelAtPeriodEnd: boolean;
  } | null;
  usage: {
    mealPlansGenerated: number;
    mealPlansLimit: number;
    canGenerateMealPlan: boolean;
  };
}

export default function DashboardPage() {
  const router = useRouter();
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await fetch('/api/dashboard');
        if (response.status === 401) {
          router.push('/auth/signin');
          return;
        }

        if (!response.ok) {
          throw new Error('Failed to fetch dashboard data');
        }

        const data = await response.json();
        setDashboardData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [router]);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <Navbar />
        <Container className="py-16">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        </Container>
        <Footer />
      </main>
    );
  }

  if (error || !dashboardData) {
    return (
      <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <Navbar />
        <Container className="py-16">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Error Loading Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{error || 'Something went wrong'}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Try Again
            </button>
          </div>
        </Container>
        <Footer />
      </main>
    );
  }

  const { user, subscription, usage } = dashboardData;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <Navbar />
      <section className="py-16">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
              <p className="text-gray-600 dark:text-gray-400">Here's your meal planning dashboard</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Current Plan</p>
                    <p className="text-2xl font-bold">{user.planName}</p>
                  </div>
                  <CreditCard className="w-8 h-8 text-green-600" />
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Meal Plans Generated</p>
                    <p className="text-2xl font-bold">{usage.mealPlansGenerated} / {usage.mealPlansLimit}</p>
                  </div>
                  <ChefHat className="w-8 h-8 text-orange-600" />
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Status</p>
                    <p className="text-2xl font-bold text-green-600">
                      {subscription?.status === 'ACTIVE' ? 'Active' : 'Inactive'}
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm mb-8">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => router.push('/generator')}
                  disabled={!usage.canGenerateMealPlan}
                  className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Plus className="w-6 h-6 text-green-600" />
                  <div className="text-left">
                    <p className="font-semibold text-green-700 dark:text-green-300">Generate New Plan</p>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      {usage.canGenerateMealPlan ? 'Create a personalized meal plan' : 'Plan limit reached'}
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => router.push('/pricing')}
                  className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <Settings className="w-6 h-6 text-blue-600" />
                  <div className="text-left">
                    <p className="font-semibold text-blue-700 dark:text-blue-300">Upgrade Plan</p>
                    <p className="text-sm text-blue-600 dark:text-blue-400">Get more meal plans and features</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Subscription Details */}
            {subscription && (
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-bold mb-4">Subscription Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Plan Type</p>
                    <p className="text-lg font-semibold">{subscription.planType}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Status</p>
                    <p className="text-lg font-semibold text-green-600">{subscription.status}</p>
                  </div>
                  {subscription.currentPeriodStart && (
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Period Start</p>
                      <p className="text-lg font-semibold">
                        {new Date(subscription.currentPeriodStart).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                  {subscription.currentPeriodEnd && (
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Period End</p>
                      <p className="text-lg font-semibold">
                        {new Date(subscription.currentPeriodEnd).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                </div>
                {subscription.cancelAtPeriodEnd && (
                  <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      Your subscription will cancel at the end of the current period.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
