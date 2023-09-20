import { ApolloClient, InMemoryCache, HttpLink, gql, ApolloCache } from '@apollo/client';
import { concatPagination } from '@apollo/client/utilities';
import GetLocalState from '@/lib/queries/getLocalState.graphql';
import { initialData } from './state';
import incrementScore from './mutations/incrementScore';
import toggleCurrentUser from './mutations/toggleCurrentUser';

const cache: ApolloCache<unknown> = new InMemoryCache();
// const cache: ApolloCache<unknown> = new InMemoryCache({
//   typePolicies: {
//     Query: {
//       fields: {
//         user1: {
//           read() {
//             return cache.readFragment({
//               id: 'User:1',
//               fragment: gql`
//                 fragment User1 on User {
//                   id
//                   name
//                   score
//                 }
//               `,
//             });
//           },
//         },
//         user2: {
//           read() {
//             return cache.readFragment({
//               id: 'User:2',
//               fragment: gql`
//                 fragment User2 on User {
//                   id
//                   name
//                   score
//                 }
//               `,
//             });
//           },
//         },
//         game: {
//           read() {
//             return cache.readFragment({
//               id: 'Game:current',
//               fragment: gql`
//                 fragment CurrentGame on Game {
//                   id
//                   name
//                 }
//               `,
//             });
//           },
//         },
//         currentUser: {
//           read(existing = 'user1') {
//             return existing;
//           }
//         }
//       },
//     },
//   },
// });

cache.writeQuery({
  query: GetLocalState,
  data: initialData,
});

const resolvers = {
  Mutation: {
    incrementScore,
    toggleCurrentUser, 
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
