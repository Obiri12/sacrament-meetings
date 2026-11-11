import { notFound, redirect } from "next/navigation";
import { connection } from "next/server";
import { getCurrentSundayMeeting } from "@/lib/meetings-db";

export default async function CurrentMeetingPage() {
  await connection();

  const meeting = getCurrentSundayMeeting(new Date());

  if (!meeting) {
    notFound();
  }

  redirect(`/meetings/${meeting.id}`);
}
