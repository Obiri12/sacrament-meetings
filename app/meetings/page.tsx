import { getMeetings } from "@/lib/meetings-db";

type Meeting = ReturnType<typeof getMeetings>[number];

function MeetingCard({ meeting }: { meeting: Meeting }) {
  return (
    <article className="rounded-lg bg-white p-6 shadow-sm">
      <pre className="whitespace-pre-wrap break-words text-sm text-gray-700">
        {JSON.stringify(meeting, null, 2)}
      </pre>
    </article>
  );
}

export default function MeetingsPage() {
  const meetings = getMeetings();

  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          All Sacrament Meetings
        </h1>

        <p className="mt-2 text-gray-600">
          Browse meeting programs and view their details.
        </p>
      </div>

      {meetings.length === 0 ? (
        <p className="rounded-lg bg-white p-6 text-gray-600 shadow-sm">
          No meetings are currently available.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      )}
    </section>
  );
}