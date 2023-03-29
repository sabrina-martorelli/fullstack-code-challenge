<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;
use App\Models\Book;

class PublishedDateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $books = Book::all();
        foreach ($books as $book) {
            // Generate a random date between 1 and 365 days ago to seed the published_date
            $publish_date = Carbon::now()->subDays(rand(1, 365))->toDateString(); 
            $book->update(['published_date' => $publish_date]);
        }

    }
}
