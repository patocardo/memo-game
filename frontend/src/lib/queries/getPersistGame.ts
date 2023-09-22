import { ApolloCache, ApolloClient } from '@apollo/client';
import GetLocalState from '@/lib/queries/getLocalState.graphql';
import GetGame from './getGame.graphql';
import { LocalState } from '@/types/models';

type ArgsParam = {
    id: number;
}

type ContextParam = {
  client: ApolloClient<any>;
  cache: ApolloCache<any>;
};

export default async function getPersistGame(_: any, args: ArgsParam, context: ContextParam) {
  if(!args) return;
  const {id} = args;
  const { cache, client } = context;

  // Perform the query to the network
  const { data: { game } } = await client.query({
    query: GetGame,
    variables: { id },
  });

  const { name: gameName, id: gameId, user1Name, user2Name} = game;

  // Fetch the current state from the cache
  const prevData: LocalState | null = cache.readQuery({
    query: GetLocalState,
  });

  // Merge the current state with the new data
  const updatedData = {
    ...prevData,
    game: { ...prevData?.game, name: gameName, id: parseInt(gameId) },
    user1: { ...prevData?.user1, name: user1Name },
    user2: { ...prevData?.user2, name: user2Name },
  };

  // Propagate the merged data to the local cache
  cache.writeQuery({
    query: GetLocalState,
    data: updatedData,
  });

  return game;
}
