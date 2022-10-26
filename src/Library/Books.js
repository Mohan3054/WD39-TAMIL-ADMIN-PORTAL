import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Books() {
    const [books, setBooks] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        fetchData()

    }, [])

    let fetchData = async () => {
        try {
            setLoading(true)
            const books = await axios.get("https://634d24d5f5d2cc648e9da680.mockapi.io/admin/books")
            console.log(books)
            setBooks(books.data)
            setLoading(false)
        } catch (error) {
            alert("Error")
        }
    }


    let deleteStudent = () => {
        const result = window.confirm("Are you sure do you want delete?")
        if (result) {
            alert("Delete")
        }
    }

    return (
        <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800"><b>Books</b></h1>
                <Link to={"/Library/create_books"}

                    class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i class="fas fa-download fa-sm text-white-50"></i> Create Books
                </Link>
            </div>
            {
                isLoading ? <span>Loading....</span> : <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Books Data</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" isbn="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>ISBN</th>
                                        <th>Title</th>
                                        <th>Author</th>
                                        <th>Edition</th>
                                        <th>Publication</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tfoot>

                                    <tr>
                                        <th>ISBN</th>
                                        <th>Title</th>
                                        <th>Author</th>
                                        <th>Edition</th>
                                        <th>Publication</th>
                                        <th>Action</th>
                                    </tr>
                                </tfoot>
                                <tbody>

                                    {books.map((books) => {
                                        return <tr>
                                            <td>{books.isbn}</td>
                                            <td>{books.title}</td>
                                            <td>{books.author}</td>
                                            <td>{books.edition}</td>
                                            <td>{books.publication}</td>

                                            <td>
                                                <Link to={`/Library/Books/${books.isbn},${books.title}`} className='btn btn-warning mr-1'>
                                                    View
                                                </Link>
                                                <Link to={`/Library/edit/${books.isbn}`} className='btn btn-primary mr-1'>
                                                    Edit
                                                </Link>
                                                <button onClick={() => deleteStudent()} className='btn btn-danger  '>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    })}



                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}

export default Books