import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Student() {
    const [students, setStudent] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        fetchData()

    }, [])

    let fetchData = async () => {
        try {
            setLoading(true)
            const students = await axios.get("https://634d24d5f5d2cc648e9da680.mockapi.io/admin/student")
            console.log(students)
            setStudent(students.data)
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
                <h1 class="h3 mb-0 text-gray-800"><b>Mentor: Sai Mohan</b></h1>
                <Link to={"/student/create_student"}

                    class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i class="fas fa-download fa-sm text-white-50"></i> Create Student
                </Link>
            </div>
            {
                isLoading ? <span>Loading....</span> : <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Students Data</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" rollnumber="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Roll Number</th>
                                        <th>Student Name</th>
                                        <th>Department</th>
                                        <th>DOB</th>
                                        <th>Gender</th>
                                        <th>Phone</th>
                                        <th>Country</th>
                                        <th>State</th>
                                        {/* <th>City</th> */}
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tfoot>

                                    <tr>
                                        <th>Roll Number</th>
                                        <th>Student Name</th>
                                        <th>Department</th>
                                        <th>DOB</th>
                                        <th>Gender</th>
                                        <th>Phone</th>
                                        <th>Country</th>
                                        <th>State</th>
                                        {/* <th>City</th> */}
                                        <th>Action</th>
                                    </tr>
                                </tfoot>
                                <tbody>

                                    {students.map((student) => {
                                        return <tr>
                                            <td>{student.rollnumber}</td>
                                            <td>{student.name}</td>
                                            <td>{student.department}</td>
                                            <td>{student.dob}</td>
                                            <td>{student.gender}</td>
                                            <td>{student.phone}</td>
                                            <td>{student.country}</td>
                                            <td>{student.state}</td>
                                            {/* <td>{student.city}</td> */}
                                            <td>
                                                <Link to={`/student/Student/${student.rollnumber}`} className='btn btn-warning mr-1'>
                                                    View
                                                </Link>
                                                <Link to={`/student/edit/${student.rollnumber}`} className='btn btn-primary mr-1'>
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

export default Student