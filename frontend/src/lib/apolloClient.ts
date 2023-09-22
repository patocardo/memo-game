import { ApolloClient, InMemoryCache, HttpLink, gql, ApolloCache } from '@apollo/client';
import GetLocalState from '@/lib/queries/getLocalState.graphql';
import { initialData } from './state';
import incrementScore from './mutations/incrementScore';
import toggleCurrentUser from './mutations/toggleCurrentUser';
import getPersistGame from './queries/getPersistGame';
import saveScorePersistGame from './mutations/saveScorePersistGame';

const cache: ApolloCache<unknown> = new InMemoryCache();

cache.writeQuery({
  query: GetLocalState,
  data: initialData,
});

const resolvers = {
  Query: {
    gameBridge: getPersistGame,
  },
  Mutation: {
    incrementScore,
    toggleCurrentUser,
    isSavedBridge: saveScorePersistGame,
  }
};

const client = new ApolloClient({
  link: new HttpLink({
    uri: (process.env.NEXT_PUBLIC_BACKEND || '') + (process.env.NEXT_PUBLIC_GRAPHQL_PATH || '/graphql'),
  }),
  cache,
  resolvers,
});

export default client;
