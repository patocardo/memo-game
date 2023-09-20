<?php

namespace App\GraphQL\Mutations;

use App\Models\MemoTest;

class MemoTestMutator
{
    public function create($_, array $args)
    {
        return MemoTest::create([
            'name' => $args['name'],
            // Assuming images is a JSON column or similar.
            'images' => json_encode($args['images']),
        ]);
    }

    public function update($_, array $args)
    {
        $memoTest = MemoTest::find($args['id']);
        if (!$memoTest) {
            return null; // Or throw an exception.
        }

        if (isset($args['name'])) {
            $memoTest->name = $args['name'];
        }

        if (isset($args['images'])) {
            $memoTest->images = json_encode($args['images']);
        }

        $memoTest->save();

        return $memoTest;
    }

    public function delete($_, array $args)
    {
        $memoTest = MemoTest::find($args['id']);
        if (!$memoTest) {
            return [
                'success' => false,
                'message' => 'MemoTest not found',
            ];
        }

        $memoTest->delete();

        return [
            'success' => true,
            'message' => 'MemoTest deleted successfully',
        ];
    }
}
