<?php

namespace App\GraphQL\Queries;

use App\Models\Game;

class GameQuery
{
    public function game($rootValue, array $args)
    {
        return Game::find($args['id']);
    }

    public function games($rootValue, array $args)
    {
        return Game::paginate($args['count'] ?? 10); // Default to 10 items per page if not specified
    }
}

