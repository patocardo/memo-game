import { useState } from 'react';

export const useSession = () => {
  const [score, setScore] = useState(0);
  const [retries, setRetries] = useState(0);
  const [matches, setMatches] = useState([]);

  // Add more state and functions as needed

  return {
    score,
    retries,
    matches,
    setScore,
    setRetries,
    setMatches,
  };
};
