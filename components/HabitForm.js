// @flow
import React from "react";
import { Form, Field } from "@leveluptuts/fresh";

type Props = {
  setHabits: ((Array<string>) => Array<string>) => void
};

const HabitForm = ({ setHabits }: Props) => {
  return (
    <Form
      onSubmit={data => {
        setHabits(prevState => [...prevState, data.habit]);
      }}
    >
      <Field>Habit</Field>
    </Form>
  );
};

export default HabitForm;
