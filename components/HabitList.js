// @flow
import Habit from "./Habit";
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_HABITS = gql`
  query getHabits {
    habits {
      _id
      name
    }
  }
`;

const HabitList = () => {
  const { data, loading, error } = useQuery(GET_HABITS);

  if (loading || error) {
    return <section />;
  }

  const { habits } = data;

  return (
    <section>
      <h2>Habits</h2>
      {habits.map((habit, index) => (
        <Habit key={habit._id} habit={habit} index={index} />
      ))}
    </section>
  );
};

export default HabitList;
