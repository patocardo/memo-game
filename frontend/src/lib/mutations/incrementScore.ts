import { LocalState, User } from "@/types/models";
import GetLocalState from '@/lib/queries/getLocalState.graphql';

export default function incrementScore(parent: any, args: any, context: any) {
    const { cache } = context; // Destructure cache from context
    const localState = cache.readQuery({ query: GetLocalState }) as LocalState;
    if(!localState) return null;
    const data = structuredClone(localState);
    (data[data.currentUser] as User).score++;
    data.isSaved = false;
    cache.writeQuery({ query: GetLocalState, data});
    return null;
}