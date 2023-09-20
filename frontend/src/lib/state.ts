// src/lib/state.ts

import { gql } from '@apollo/client';

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
};

export const SAVE_GAME = gql`
  mutation SaveGame($gameId: String!, $user1Id: String!, $user1Score: Int!, $user2Id: String!, $user2Score: Int!) {
    saveGame(gameId: $gameId, user1Id: $user1Id, user1Score: $user1Score, user2Id: $user2Id, user2Score: $user2Score) {
      id
    }
  }
`;
