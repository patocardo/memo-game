"use client"

import { ApolloProvider } from '@apollo/client';
import apolloClient from '@/lib/apolloClient';
import FormStart from '@/components/FormStart/FormStart';

export default function Home() {

  return (
    <ApolloProvider client={apolloClient}>
      <main className="container mx-auto p-10">
        <h2 className="text-3xl mb-6">Welcome to the Memo test game</h2>
        <FormStart />
      </main>
    </ApolloProvider>
  )
}

