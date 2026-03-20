import Link from "next/link";

export const metadata = {
  title: "Access Denied | Guided Solution",
  description: "You don't have permission to access this page.",
};

export default function UnauthorizedPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-300 mb-4">403</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Access Denied
        </h2>
        <p className="text-gray-500 mb-6">
          You don&apos;t have permission to access this page.
        </p>
        <Link
          href="/"
          className="bg-teal-700 text-white px-6 py-2 rounded-lg hover:bg-teal-800 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}










