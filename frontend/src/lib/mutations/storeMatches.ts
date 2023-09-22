import { LocalState } from "@/types/models";
import GetLocalState from '@/lib/queries/getLocalState.graphql';
import type { Matched } from "@/types/models";

type ArgsType = {
    matches: Array<Matched>
}

export default function storeMatches(parent: any, args: ArgsType, context: any) {
    const { cache } = context;
    const { matches } = args;
    const localState = cache.readQuery({ query: GetLocalState }) as LocalState;
    if(!localState) return null;
    const data = structuredClone(localState);
    data.matches = matches;
    cache.writeQuery({ query: GetLocalState, data});
    return data;
}