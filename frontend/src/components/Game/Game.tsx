import React, { useEffect, useState } from 'react';
import Card from '@/components/Card/Card';
import ScoreBoard from '@/components/Scoreboard/Scoreboard';
import { useQuery, useMutation } from '@apollo/client';
import GetLocalState from '@/lib/queries/getLocalState.graphql';
import IncrementScore from '@/lib/mutations/incrementScore.graphql';
import ToggleCurrentUser from '@/lib/mutations/toggleCurrentUser.graphql';
import StoreMatches from '@/lib/mutations/storeMatches.graphql';
import { Matched } from '@/types/models';

const Game: React.FC = () => {
    const { data } = useQuery(GetLocalState);
    const [incrementScore] = useMutation(IncrementScore);
    const [toggleCurrentUser] = useMutation(ToggleCurrentUser);
    const [storeMatches] = useMutation(StoreMatches)

    const [flippedIndices, setFlippedIndices] = useState<number[]>([]);

    const getMatched = (index: number) => {
        const fromMatched = data.matches.find((match: Matched) => match.index === index);
        if(!fromMatched) return -1;
        return fromMatched.userPosition;
    }

    const handleCardClick = (index: number) => {
        if (flippedIndices.includes(index) || flippedIndices.length === 2) return;
    
        const newFlippedIndices = [...flippedIndices, index];
        
        setFlippedIndices(newFlippedIndices);
        if(newFlippedIndices.length === 1) return;
    
        const [index1, index2] = newFlippedIndices;
    
        // Check if the cards match
        if (data.images[index1] === data.images[index2]) {
            incrementScore();
            const userPosition = parseInt(data.currentUser.charAt(4)) - 1;

            // block the cards
            storeMatches({
                variables: {
                    matches: [
                        ...data.matches, 
                        { index: index1, userPosition }, 
                        { index: index2, userPosition },
                    ],
                }
            });
        } else {
            toggleCurrentUser();
        }

        // After a delay, Reset the flipped indices after a short delay to allow for a reveal
        setTimeout(() => {
            setFlippedIndices([]);
        }, 1500);

    };

    return (
        <div className="p-4 grid grid-cols-12 gap-3 ">
            <div className="col-span-2">
                <ScoreBoard />
            </div>
            <div className="mt-4 col-span-10 grid grid-cols-5 gap-3">
                {data.images.map((image: string, index: number) => (
                    <Card
                        key={index}
                        image={image}
                        isFlipped={flippedIndices.includes(index)}
                        onClick={() => handleCardClick(index)}
                        matchedBy={getMatched(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Game;
