<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Carbon\Carbon;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::all();

        return response()->json($books);
    }

    public function store(Request $request) {

        $book = new Book();

        $book->title = $request->title;
        $book->author = $request->author;
        $book-> description = $request-> description;
        $book-> published_date = Carbon::parse($request->'published_date'->toDateString();
             
        $book->save();

    }




}
