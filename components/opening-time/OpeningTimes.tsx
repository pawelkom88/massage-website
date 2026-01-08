import { fetchContent, parseContentfulOpeningHours } from "@/contentful/fetchContent";
import { draftMode } from "next/headers";
import OpeningTimesTable from "./OpeningTimesTable";

export interface ScheduleByDay {
  [day: string]: string[];
}

export function generateScheduleByDay(openingHours: ScheduleByDay[]) {
  const scheduleByDay: ScheduleByDay = {};

  openingHours.forEach(schedule => {
    schedule.day.forEach((day: string, index: number) => {
      scheduleByDay[day] = scheduleByDay[day] || [];
      scheduleByDay[day].push(`${schedule.start[index]} & ${schedule.finish[index]}`);
    });
  });

  return scheduleByDay;
}

export default async function OpeningTimes() {
  const draft = await draftMode();
  const openingHours: any = await fetchContent(
    { preview: draft.isEnabled },
    "openingTimes",
    parseContentfulOpeningHours
  );

  const scheduleByDay = generateScheduleByDay(openingHours);

  return <OpeningTimesTable scheduleByDay={scheduleByDay} />;
}
