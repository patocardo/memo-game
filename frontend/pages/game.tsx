import React from 'react';
import '@/app/globals.css';
import Game from '@/components/Game/Game';
import apolloClient from '@/lib/apolloClient';
import GameBridge from '@/lib/queries/gameBridge.graphql';
import { ApolloProvider, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import GetLocalState from '@/lib/queries/getLocalState.graphql';

const Loading: React.FC = () => (
  <main className="container mx-auto p-16 flex justify-center">
    <div className="mr-4 pt-6">
      Loading 
    </div>
    <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
  </main>
);

const shuffledImagePairs = (() => {
  const images = [
    'banana.png', 'blender.png', 'broccoli.png', 'car.png', 'chicken.png', 'dolphin.png',
    'elephant.png', 'football.png', 'gloves.png', 'hamburger.png', 'monitor.png', 'pencil.png',
    'penguin.png', 'shoe.png', 'smartphone.png', 'snake.png', 'violin.png', 'wheelbarrow.png',
  ].map(img => `/images/game1/${img}`);
  const selectedImages = images.sort(() => 0.5 - Math.random()).slice(0, 10);
  return [...selectedImages, ...selectedImages].sort(() => 0.5 - Math.random());
})();

const GameContent: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error: queryError } = useQuery(GameBridge, { variables: { id }, });
  const { data: dynamicData } = useQuery(GetLocalState);

  console.log({ dynamicData });

  const subtitleColor = dynamicData.currentUser === 'user1' ? 'text-red-600' : 'text-blue-600';

  return (
    <main className="container mx-auto p-10">
      {loading && (<Loading/>)}
      {queryError && (<p>Error: {queryError.message}</p>)}
      {!loading && !queryError && (<>
        <h1 className="text-3xl mb-4 text-center">Memo Test Game</h1>
        <h2 className={`text-2xl mb-4 text-center ${subtitleColor}`}>
          {dynamicData[dynamicData.currentUser].name}'s turn
        </h2>
        <Game shuffledImages={shuffledImagePairs} />
      </>)}
    </main>
  );
};

const GamePage: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <GameContent />
    </ApolloProvider>
  );
};

export default GamePage;
