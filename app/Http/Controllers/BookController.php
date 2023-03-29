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

        //Add new book data
        $book->title = $request->title;
        $book->author = $request->author;
        $book-> description = $request-> description;   
        $book-> published_date = Carbon::parse($request->published_date);
        
        //Save new book 
        $book->save();

    }

    public function search(Request $request)
    {
        //Get searchTerm from input
        //$term = $request->searchTerm;
        
        $term =$request->input('searchTerm');
        error_log($request);
        error_log($term);
        //Retrieve all books from the database that match the given searchTerm
        $books = Book::where('title', 'LIKE', '%'.$term.'%')
                    ->orWhere('author', 'LIKE', '%'.$term.'%')
                     ->get();

        //Return array of books
        return response()->json($books);

    }




}
