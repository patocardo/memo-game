// src/lib/types.ts
export type User = {
    id: number | null;
    name: string;
    score: number;
};

export type Game = {
    id: number | null;
    name: string;
};

export type Matched = {
    index: number;
    userPosition: number;
}

export type LocalState = {
    user1: User;
    user2: User;
    game: Game;
    currentUser: 'user1' | 'user2';
    isSaved: boolean;
    images: string[];
    matches: Matched[];
    [key: string]: User | Game | string | boolean | string[] | Matched[]; // required for typestring engine
};
  