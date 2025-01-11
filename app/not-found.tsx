import Link from 'next/link';
import Logo from '@/components/big/logo';
import { getUser } from '@/lib/db/queries';

export default async function NotFound() {
  const user = await getUser();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md space-y-8 p-4 text-center">
        <Logo />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-slate-100 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-base text-gray-500">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <p className="text-base text-gray-500">
          Here are some helpful links instead:
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/"
            className="max-w-48 flex justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
          >
            Home
          </Link>
          {
            user ? (
              <>
                <Link
                  href="/dashboard"
                  className="max-w-48 flex justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
                >
                  Dashboard
                </Link>
                <Link
                  href="/settings"
                  className="max-w-48 flex justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
                >
                  Settings
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className="max-w-48 flex justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="max-w-48 flex justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
                >
                  Sign Up
                </Link>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
}
