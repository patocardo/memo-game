<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'user1Name',
        'user2Name',
        'user1Score',
        'user2Score',
    ];

    protected $attributes = [
        'user1Score' => 0,
        'user2Score' => 0,
    ];
}

