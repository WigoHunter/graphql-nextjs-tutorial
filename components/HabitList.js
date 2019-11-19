// @flow
import Habit from "./Habit";
import React from "react";

type Props = {
  habits: Array<string>
};

const HabitList = ({ habits }: Props) => {
  return (
    <section>
      <h2>Habits</h2>
      {habits.map((habit, index) => (
        <Habit key={habit} habit={habit} index={index} />
      ))}
    </section>
  );
};

export default HabitList;
