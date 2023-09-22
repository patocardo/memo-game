import { FormEvent, useEffect, useState } from 'react';
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
  const [errors, setErrors] = useState({ gameName: '', user1Name: '', user2Name: '' });
  const [createGame] = useMutation(CreateGame);
  const router = useRouter();

  useEffect(() => {
    const newErrors = {
      gameName: gameName.length < 3 ? 'Game name must be at least 3 characters.' : '',
      user1Name: user1Name.length < 3 ? 'User 1 name must be at least 3 characters.' : '',
      user2Name: user2Name.length < 3 ? 'User 2 name must be at least 3 characters.' : '',
    };
    if (user1Name === user2Name) {
      newErrors.user2Name = 'User 1 and User 2 names must be different.';
    }
    setErrors(newErrors);
  }, [gameName, user1Name, user2Name]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (Object.values(errors).some(error => error)) return;
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

  const isFormValid = !Object.values(errors).some(error => error);

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
        <button 
            type="submit" 
            className={`p-2 rounded ${isFormValid ? 'bg-blue-500 text-white' : 'bg-gray-400 text-white cursor-not-allowed'}`} 
            disabled={!isFormValid}
        >
          Start Game
        </button>

        {/* Display error messages */}
        {Object.entries(errors).map(([field, error]) => 
          error ? <div key={field} className="text-red-500">{error}</div> : null
        )}
    </form>
  );
}
