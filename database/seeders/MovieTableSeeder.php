<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [[
            'name'=> 'elio',
            'slug'=> 'elio-pixart',
            'category'=> 'cartoon',
            'video_url'=> 'https://www.youtube.com/watch?v=2w_K3CB8PuE',
            'thumbnail'=> 'https://m.media-amazon.com/images/M/MV5BYTg0ZGQ0ZmEtNmE2Zi00M2VkLWI0YjAtOGJlZTA3MzIwNjIzXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_.jpg',
            'rating'=> 4.5,
            'is_featured'=> 1,
            
        ],
        [
            'name'=> 'moana 2',
            'slug'=> 'moana-disney',
            'category'=> 'cartoon',
            'video_url'=> 'https://www.youtube.com/watch?v=qkgkUCqEum4',
            'thumbnail'=> 'https://lumiere-a.akamaihd.net/v1/images/p_moana2_3113-v3_075bd347.jpeg',
            'rating'=> 4.6,
            'is_featured'=> 0,
            
        ],
        [
            'name'=> 'inside out 2',
            'slug'=> 'inside-out-2',
            'category'=> 'cartoon',
            'video_url'=> 'https://www.youtube.com/watch?v=L4DrolmDxmw',
            'thumbnail'=> 'https://upload.wikimedia.org/wikipedia/id/f/f7/Inside_Out_2_poster.jpg',
            'rating'=> 4.8,
            'is_featured'=> 0,
            
        ]
    
    ];

        Movie::insert($movies);
    }
}
