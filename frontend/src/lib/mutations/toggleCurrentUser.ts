import { LocalState } from "@/types/models";
import GetLocalState from '@/lib/queries/getLocalState.graphql';

export default function toggleCurrentUser(parent: any, args: any, context: any) {
    const { cache } = context; // Destructure cache from context
    const localState = cache.readQuery({ query: GetLocalState }) as LocalState;
    if(!localState) return null;
    const data = structuredClone(localState);
    data.currentUser = data.currentUser === 'user1' ? 'user2' : 'user1';
    cache.writeQuery({ query: GetLocalState, data});
    return null;
}