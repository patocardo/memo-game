"use client"

import Game from '@/components/Game/Game';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '@/lib/apolloClient';
import { useGameStore } from '@/hooks/useGameStore';

export default function Home() {
  // const { users, currentUser } = useGameStore();  
  const images = [
    'banana.png', 'blender.png', 'broccoli.png', 'car.png', 'chicken.png', 'dolphin.png',
    'elephant.png', 'football.png', 'gloves.png', 'hamburger.png', 'monitor.png', 'pencil.png',
    'penguin.png', 'shoe.png', 'smartphone.png', 'snake.png', 'violin.png', 'wheelbarrow.png',
  ].map(img => `/images/game1/${img}`);

  return (
    <ApolloProvider client={apolloClient}>
      <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl mb-4 text-center">Memo Test Game</h1>
          {/* <p className="text-center">{users[currentUser].name} plays</p> */}
          <Game images={images} />
        </div>
      </main>
    </ApolloProvider>
  )
}

