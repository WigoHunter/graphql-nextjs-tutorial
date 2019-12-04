import Habits from "./habits";

export const habitsMutations = {
  Mutation: {
    async addHabit(_, { habit }) {
      try {
        const createdHabit = await Habits.create({
          ...habit
        });

        return createdHabit;
      } catch (e) {
        console.log(e);
      }
    }
  }
};
