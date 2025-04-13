export default function BlogNotFound() {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
        Blog Not Found
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        The blog you’re looking for doesn’t exist or has been removed.
      </p>
    </div>
  );
}
