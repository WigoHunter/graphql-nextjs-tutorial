// @flow
import React, { useState } from "react";

type Props = {
  date: Date
};

const HabitButton = ({ date }: Props) => {
  const [complete, setComplete] = useState(false);

  return (
    <span>
      {date.getMonth() + 1}/{date.getDate()}
      <button onClick={() => setComplete(!complete)}>
        {complete ? "X" : "O"}
      </button>
      <style jsx>{`
        span {
          display: flex;
          flex-direction: column;
        }

        span + span {
          margin-left: 10px;
        }

        button {
          margin-top: 1rem;
          border: none;
        }
      `}</style>
    </span>
  );
};

export default HabitButton;
