import { useState } from 'react';
import { useMutation } from '@apollo/client';
import SAVE_GAME from '@/lib/mutations/saveGame.graphql';

export const useGameStore = () => {
  const [users] = useState([{id: 1, name: 'Red User'}, {id: 2, name: 'Blue User'}]);
  const [scores, setScores] = useState([0, 0]);
  const [isUnsaved, setIsUnsaved] = useState(false);
  const [currentUser, setCurrentUser] = useState(0);

  const [saveGameMutation] = useMutation(SAVE_GAME);

  const saveGame = async () => {
    await saveGameMutation({ variables: { scores } });
    setIsUnsaved(false);
  };

  return {
    users,
    scores,
    saveGame,
    isUnsaved,
    setScores,
    currentUser,
    setCurrentUser
  };
};
