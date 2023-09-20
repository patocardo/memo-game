import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import GetLocalState from '@/lib/queries/getLocalState.graphql';

const ScoreBoard: React.FC = () => {
    const { data } = useQuery(GetLocalState);
    console.log('board', { data });
    const isUnsaved = false;
    return (
        <div className="">
            { data ? (
                <>
                    <div className="mr-4">
                        <p className="text-xs">User blue</p>
                        {data.user1.name}: {data.user1.score}
                    </div>
                    <div className="mr-4">
                        <p className="text-xs">User red</p>
                        {data.user2.name}: {data.user2.score}
                    </div>
                    <button onClick={() => 'saveGame'} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                        Save Game
                    </button>
                    {isUnsaved && <div className="text-red-500 ml-4">Unsaved game</div>}
                </>

            ) : (<></>)}
        </div>
    );
};

export default ScoreBoard;
