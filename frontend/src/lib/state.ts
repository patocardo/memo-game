// Initial data
export const initialData = {
  user1: {
    __typename: 'User',
    id: 1,
    name: 'blue',
    score: 0,
  },
  user2: {
    __typename: 'User',
    id: 2,
    name: 'red',
    score: 0,
  },
  game: {
    __typename: 'Game',
    id: 0,
    name: '',
  },
  currentUser: 'user1',
  isSaved: false,
};
