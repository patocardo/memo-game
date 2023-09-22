// TODO: fix it when cache can be shared

import { LocalState } from "@/types/models";
import GetLocalState from '@/lib/queries/getLocalState.graphql';

type Args = {
    gameName: string;
    user1Name: string;
    user2Name: string;
}

export default function createGameData(parent: any, { gameName, user1Name, user2Name }: Args, context: any) {
    const { cache } = context; // Destructure cache from context
    const localState = cache.readQuery({ query: GetLocalState }) as LocalState;
    if(!localState) return null;
    const data = structuredClone(localState);
    data.game.name = gameName;
    data.user1.name = user1Name;
    data.user2.name = user2Name;
    cache.writeQuery({ query: GetLocalState, data});
    return null;
}