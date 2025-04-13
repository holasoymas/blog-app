export default function Footer() {
  return (
    <footer className="text-center text-sm text-gray-600 dark:text-gray-400 py-6 bg-white dark:bg-gray-900">
      &copy; {new Date().getFullYear()} Blog App — All rights reserved.
    </footer>
  );
}
