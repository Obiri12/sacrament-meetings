
import MeetingCard from "../../components/MeetingCards";
import { getMeetings } from "@/lib/meetings-db";
import type { SacramentMeeting } from "@/lib/types";

export default function MeetingsPage() {
  const meetings: SacramentMeeting[] = getMeetings();

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-3 text-3xl font-bold text-gray-900">
        All Sacrament Meetings
      </h1>

      <p className="mb-8 text-gray-600">
        Browse meeting programs and view their details.
      </p>

      {meetings.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {meetings.map((meeting) => (
            <MeetingCard
              key={meeting.id}
              meeting={meeting}
            />
          ))}
        </div>
      ) : (
        <p className="rounded-lg bg-gray-100 p-6 text-gray-600">
          No meetings are available at the moment.
        </p>
      )}
    </main>
  );
}