import { FormEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import CreateGame from '@/lib/mutations/createGame.graphql';

export default function FormStart() {
  const [gameName, setGameName] = useState('');
  const [user1Name, setUser1Name] = useState('');
  const [user2Name, setUser2Name] = useState('');
  const [createGame] = useMutation(CreateGame);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newGame = await createGame({
      variables: {
        name: gameName,
        user1Name,
        user2Name,
      },
    });
    if(!newGame?.data?.createGame?.id) {
        throw new Error("Error trying to create a game");
    }
    router.push(`/game?id=${newGame.data.createGame.id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Game Name"
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
            className="p-2 border rounded text-black"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="User 1 Name"
            value={user1Name}
            onChange={(e) => setUser1Name(e.target.value)}
            className="p-2 border rounded text-black"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="User 2 Name"
            value={user2Name}
            onChange={(e) => setUser2Name(e.target.value)}
            className="p-2 border rounded text-black"
          />
        </div>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Start Game
        </button>
    </form>
  );
}
