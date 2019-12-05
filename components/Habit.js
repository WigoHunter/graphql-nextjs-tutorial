// @flow
import React from "react";
import HabitButton from "./HabitButton";

const colors = ["#718096", "#F56565", "#F6E05E", "#68D391", "#63B3ED"];

type Props = {
  habit: { [name: string]: any },
  index: number
};

const Habit = (props: Props) => {
  const { habit, index } = props;
  const dates = getLast5Days();

  return (
    <article>
      <h3 style={{ borderColor: colors[index] }}>{habit.name}</h3>
      <div className="buttons">
        {dates.map(date => (
          <HabitButton
            key={date.getTime()}
            date={date}
            habitId={habit._id}
            events={habit.events}
          />
        ))}
      </div>
      <style jsx>
        {`
          article {
            padding: 20px;
            border-radius: 15px;
            box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);
          }
          h3 {
            border-bottom: 4px solid ${colors[index]};
            margin-top: 0;
          }
          .buttons {
            display: flex;
          }
        `}
      </style>
    </article>
  );
};

const getLast5Days = () => {
  const dates = [0, 1, 2, 3, 4].map(day => {
    const tempDate = new Date();
    tempDate.setDate(tempDate.getDate() - day);
    return tempDate;
  });

  return dates;
};

export default Habit;
