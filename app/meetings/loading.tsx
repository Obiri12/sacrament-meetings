export default function Loading() {
  return (
    <div className="flex min-h-[300px] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-900" />

        <p className="text-lg font-medium text-gray-700">
          Loading meetings...
        </p>
      </div>
    </div>
  );
}