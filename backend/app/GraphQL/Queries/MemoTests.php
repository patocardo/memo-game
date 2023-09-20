<?php

namespace App\GraphQL\Queries;

use App\Models\MemoTest;

class MemoTests
{
    public function __invoke($_, array $args)
    {
        // If an ID is provided, return a specific memoTest.
        if (isset($args['id'])) {
            return MemoTest::find($args['id']);
        }

        // Otherwise, return all memoTests.
        return MemoTest::all();
    }
}
