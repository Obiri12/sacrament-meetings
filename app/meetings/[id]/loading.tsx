
export default function Loading() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="animate-pulse space-y-6">
        <div className="h-8 w-64 rounded-lg bg-gray-200" />

        <div className="rounded-xl border bg-white p-6 shadow-sm space-y-4">
          <div className="h-5 w-40 rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-3/4 rounded bg-gray-200" />
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm space-y-4">
          <div className="h-5 w-48 rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-2/3 rounded bg-gray-200" />
        </div>
      </div>

      <p className="mt-6 text-center text-blue-900">
        Loading meeting details...
      </p>
    </main>
  );
}
