import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import GetLocalState from '@/lib/queries/getLocalState.graphql';
import IsSavedBridge from '@/lib/mutations/isSavedBridge.graphql';

const ScoreBoard: React.FC = () => {
    const { data } = useQuery(GetLocalState);
    const [saveScore, { loading, error: mutationError }] = useMutation(IsSavedBridge);

    const handleSaveScore = () => {
        if(!data) return;
        saveScore({
            variables: {
                id: parseInt(data.game.id),
                user1Score: data.user1.score,
                user2Score: data.user2.score,
                matches: data.matches,
            }
        });
    };

    return (
        <>
            { data ? (
                <div className="bg-white bg-opacity-50 rounded-md p-2 m-2">
                    <div className="">
                        <p className="text-xs">User red</p>
                        {data.user1.name}: {data.user1.score}
                    </div>
                    <div className="mt-4">
                        <p className="text-xs">User blue</p>
                        {data.user2.name}: {data.user2.score}
                    </div>
                    <button onClick={handleSaveScore} className="bg-blue-500 text-white p-2 rounded mt-4">
                        Save Game
                    </button>
                    {loading && <div className="text-gray-400 mt-4">Saving...</div>}
                    {mutationError && <div className="text-red-300 mt-4">Error saving</div>}
                    {!data.isSaved && <div className="text-red-200 mt-4">Unsaved game</div>}
                </div>

            ) : (<></>)}
        </>
    );
};

export default ScoreBoard;
