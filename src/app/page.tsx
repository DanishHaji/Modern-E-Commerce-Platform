import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Modern E-Commerce</h1>
        <p className="text-gray-600 mb-6">Your backend and auth setup is working!</p>

        <div className="flex flex-col gap-4">
          <Link
            href="/auth/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
          <Link
            href="/auth/signin"
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition"
          >
            Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}
