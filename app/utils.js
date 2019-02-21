export const sortingFn = (a, b) => {
  if (a.score > b.score) {
    return -1;
  }

  if (a.score < b.score) {
    return 1;
  }

  const aLastName = a.lastName.toLowerCase();
  const bLastName = b.lastName.toLowerCase();

  if (aLastName > bLastName) {
    return 1;
  }

  if (aLastName < bLastName) {
    return -1;
  }

  return 0;
};

export const createEmptyPlayer = () => ({
  firstName: {
    value: '',
    isValid: false,
    isPristine: true,
  },
  lastName: {
    value: '',
    isValid: false,
    isPristine: true,
  },
  score: {
    value: 0,
    isValid: true,
    isPristine: true,
  }
});

export const createInitialPlayersState = () => ([
  { firstName: 'Alice', lastName: 'Geary', score: 96 },
  { firstName: 'John', lastName: 'Junge', score: 96 },
  { firstName: 'Rob', lastName: 'Vera', score: 88 }
]);

export const populatePlayer = (player, data) => (
  Object.keys(player)
    .reduce((all, key) => ({
      ...all,
      [key]: {
        ...player[key],
        value: data[key],
        isPristine: false,
        isValid: true
      }
    }), {})
);
