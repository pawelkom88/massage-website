import { ScheduleByDay } from "./OpeningTimes";

const OpeningTimesTable = ({ scheduleByDay }: { scheduleByDay: ScheduleByDay }) => {
  return (
    <ul className="mt-4 space-y-1">
      {Object.keys(scheduleByDay).map(day => (
        <li key={day}>
          {day} {scheduleByDay[day].join(" & ")}
        </li>
      ))}
    </ul>
  );
};

export default OpeningTimesTable;
