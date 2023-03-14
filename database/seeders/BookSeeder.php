<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book;

class BookSeeder extends Seeder
{
    public function run()
    {
        $books = [
            [
                'title' => 'To Kill a Mockingbird',
                'author' => 'Harper Lee',
                'description' => 'To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature. The plot and characters are loosely based on the author\'s observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was 10 years old.',
            ],
            [
                'title' => '1984',
                'author' => 'George Orwell',
                'description' => '1984 is a dystopian novel by George Orwell published in 1949. The novel is set in Airstrip One (formerly known as Great Britain), a province of the superstate Oceania in a world of perpetual war, omnipresent government surveillance, and public manipulation.',
            ],
            [
                'title' => 'The Catcher in the Rye',
                'author' => 'J.D. Salinger',
                'description' => 'The Catcher in the Rye is a novel by J.D. Salinger published in 1951. The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the \'phoniness\' of the adult world.',
            ],
            [
                'title' => 'Pride and Prejudice',
                'author' => 'Jane Austen',
                'description' => 'Pride and Prejudice is a romantic novel by Jane Austen published in 1813. The story charts the emotional development of the protagonist Elizabeth Bennet, who learns the error of making hasty judgments and comes to appreciate the difference between the superficial and the essential.',
            ],
            [
                'title' => 'The Great Gatsby',
                'author' => 'F. Scott Fitzgerald',
                'description' => 'The Great Gatsby is a novel by F. Scott Fitzgerald published in 1925. The story is set in the summer of 1922 and follows the life of Jay Gatsby, a millionaire who throws lavish parties in the hope of winning back his former love, Daisy Buchanan.',
            ],
        ];

        foreach ($books as $book) {
            Book::create($book);
        }
    }
}
