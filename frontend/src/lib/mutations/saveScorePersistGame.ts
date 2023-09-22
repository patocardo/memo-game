import { ApolloCache, ApolloClient } from '@apollo/client';
import GetLocalState from '@/lib/queries/getLocalState.graphql';
import SaveScore from './saveScore.graphql';
import { LocalState } from '@/types/models';

type ArgsParam = {
    id: number;
    user1Score: number;
    user2Score: number;
    matches: string;
}

type ContextParam = {
  client: ApolloClient<any>;
  cache: ApolloCache<any>;
};

export default async function saveScorePersistGame(_: any, args: ArgsParam, context: ContextParam) {
    if(!args) return;
    const {id, user1Score, user2Score, matches} = args;
    const { cache, client } = context;

    // Perform the query to the network
    const { data: { game } } = await client.mutate({
        mutation: SaveScore,
        variables: { id, user1Score, user2Score, matches: JSON.stringify(matches) },
    });

    // Fetch the current state from the cache
    const prevData: LocalState | null = cache.readQuery({
        query: GetLocalState,
    });

    // Propagate the merged data to the local cache
    cache.writeQuery({
        query: GetLocalState,
        data: {
            ...prevData,
            isSaved: true,
        },
    });

    return game;

}
