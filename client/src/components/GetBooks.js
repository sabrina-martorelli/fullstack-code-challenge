
import {useEffect, useState} from 'react'
import axios from 'axios'


const endpoint = 'http://localhost:8000/api'

const GetBooks = (props) => {

    const [books, setBooks] = useState([])
   
    useEffect ( ()=> {
        getAll();  

    }, [])

 
    const getAll = async () => {

        // if(props.searchTerm !=='') {
        //     const response = await axios.get(`${endpoint}/books/search?searchTerm=${props.searchTerm}`)
        // }
        // else{
         const response = await axios.get(`${endpoint}/books`);
          // const response = await axios.get("http://localhost:8000/api/books");
        // }

        console.log('response.data') 
        console.log(response.data)
        setBooks(response.data)
    }

return books;

};

export default GetBooks;