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

export type LocalState = {
    user1: User;
    user2: User;
    game: Game;
    currentUser: 'user1' | 'user2';
    [key: string]: User | Game | string;
};
  