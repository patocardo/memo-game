<?php
namespace App\GraphQL\Mutations;

use App\Models\Game;

class GameMutator
{
    public function createGame($rootValue, array $args)
    {
        $game = Game::create($args);
        return $game;
    }

    public function updateGame($rootValue, array $args)
    {
        $game = Game::find($args['id']);
        if (!$game) {
            throw new \Exception('Game not found');
        }
    
        // Remove the id from the args as it's not a field to be updated
        unset($args['id']);
    
        $game->update($args);
        return $game;
    }
}
