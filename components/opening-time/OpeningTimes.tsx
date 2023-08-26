import { fetchArticles } from "@/contentful/getArticles";
import { draftMode } from "next/headers";
import OpeningTimesTable from "./OpeningTimesTable";

export interface ScheduleByDay {
  [key: string]: string[];
}

export default async function OpeningTimes() {
  const openingHours: any = await fetchArticles({ preview: draftMode().isEnabled }, "openingTimes");

  const scheduleByDay: ScheduleByDay = openingHours.reduce((acc: ScheduleByDay, schedule: any) => {
    schedule.day.forEach((day: string, index: number) => {
      acc[day] = acc[day] || [];
      acc[day].push(`${schedule.start[index]} & ${schedule.finish[index]}`);
    });
    return acc;
  }, {});

  return <OpeningTimesTable scheduleByDay={scheduleByDay} />;
}
