import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({
  meeting,
}: MeetingCardProps) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold capitalize text-blue-900">
          {meeting.meetingType} Meeting
        </span>

        <span className="text-sm text-gray-500">
          {meeting.date}
        </span>
      </div>

      <h2 className="mb-3 text-xl font-bold text-gray-900">
        Sunday Meeting Program
      </h2>

      <div className="space-y-2 text-sm text-gray-600">
        <p>
          <strong className="text-gray-800">Presiding:</strong>{" "}
          {meeting.presiding}
        </p>

        <p>
          <strong className="text-gray-800">Conducting:</strong>{" "}
          {meeting.conducting}
        </p>

        <p>
          <strong className="text-gray-800">Opening Hymn:</strong>{" "}
          {meeting.openingHymn.title}
        </p>

        <p>
          <strong className="text-gray-800">Speakers:</strong>{" "}
          {meeting.speakers.filter(
            (speaker) => speaker.type === "speaker"
          ).length}
        </p>
      </div>

      <Link
        href={`/meetings/${meeting.id}`}
        className="mt-6 inline-block rounded-lg bg-blue-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        View Meeting Details
      </Link>
    </article>
  );
}