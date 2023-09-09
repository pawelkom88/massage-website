import { ScheduleByDay } from "./OpeningTimes";

const OpeningTimesTable = ({ scheduleByDay }: { scheduleByDay: ScheduleByDay }) => {

  return (
    <div>
      <h3 className="text-heading3">Opening Times:</h3>
      <br />
      <ul className="mt-4 space-y-1">
        {Object.keys(scheduleByDay).map(day => (
          <li key={day}>
            {day} {scheduleByDay[day].join(" & ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpeningTimesTable;
