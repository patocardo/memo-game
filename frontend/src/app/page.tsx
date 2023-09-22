"use client"

import { ApolloProvider } from '@apollo/client';
import apolloClient from '@/lib/apolloClient';
import FormStart from '@/components/FormStart/FormStart';

export default function Home() {
  // const { users, currentUser } = useGameStore();  
  const images = [
    'banana.png', 'blender.png', 'broccoli.png', 'car.png', 'chicken.png', 'dolphin.png',
    'elephant.png', 'football.png', 'gloves.png', 'hamburger.png', 'monitor.png', 'pencil.png',
    'penguin.png', 'shoe.png', 'smartphone.png', 'snake.png', 'violin.png', 'wheelbarrow.png',
  ].map(img => `/images/game1/${img}`);

  return (
    <ApolloProvider client={apolloClient}>
      <main className="container mx-auto p-10">
        <h2 className="text-3xl mb-6">Welcome to the Memo test game</h2>
        <FormStart />
      </main>
    </ApolloProvider>
  )
}

