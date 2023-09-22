import { FormEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import CreateGame from '@/lib/mutations/createGame.graphql';

const shuffledImagePairs = (() => {
  const images = [
    'banana.png', 'blender.png', 'broccoli.png', 'car.png', 'chicken.png', 'dolphin.png',
    'elephant.png', 'football.png', 'gloves.png', 'hamburger.png', 'monitor.png', 'pencil.png',
    'penguin.png', 'shoe.png', 'smartphone.png', 'snake.png', 'violin.png', 'wheelbarrow.png',
  ].map(img => `/images/game1/${img}`);
  const selectedImages = images.sort(() => 0.5 - Math.random()).slice(0, 10);
  return [...selectedImages, ...selectedImages].sort(() => 0.5 - Math.random());
})();

export default function FormStart() {
  const [gameName, setGameName] = useState('');
  const [user1Name, setUser1Name] = useState('');
  const [user2Name, setUser2Name] = useState('');
  const [createGame] = useMutation(CreateGame);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    debugger
    e.preventDefault();
    const newGame = await createGame({
      variables: {
        name: gameName,
        user1Name,
        user2Name,
        images: shuffledImagePairs.join(','),
        matches: '[]',
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
