import axios from 'axios';
import React, { useEffect, useState, user } from 'react'
import { Link } from 'react-router-dom'

function User() {
  const [users, setUsers] = useState([]);
  const [isLoading,setLoading]=useState(false);
  useEffect(() => {
   fetchData()
  
    // setUsers([
    //   {
    //     id: 1,
    //     username: "person1",
    //     email: "person1@gmail.com",
    //     country: "India",
    //     state: "Tamil Nadu",
    //     city: "Chennai",
    //     phone: "9465737474",
    //     dob: "23-03-2000",
    //     gender: "Male"
    //   },
    //   {
    //     id: 2,
    //     username: "person2",
    //     email: "person2@gmail.com",
    //     country: "India",
    //     state: "Tamil Nadu",
    //     city: "Theni",
    //     phone: "9465745474",
    //     dob: "23-03-2001",
    //     gender: "Female"
    //   },
    //   {
    //     id: 3,
    //     username: "person2",
    //     email: "person2@gmail.com",
    //     country: "India",
    //     state: "Tamil Nadu",
    //     city: "Theni",
    //     phone: "9465745474",
    //     dob: "23-03-2001",
    //     gender: "Female"
    //   }
    // ])
  }, [])
  let fetchData= async()=>{
   try {
    setLoading(true)
   const users= await axios.get("https://634d24d5f5d2cc648e9da680.mockapi.io/admin/admin")
    console.log(users)
    setUsers(users.data)
    setLoading(false)
   } catch (error) {
    alert("error")
   }
  }
  let deleteUser = () => {
    const result = window.confirm("Are you sure do you want to delete?")
    if (result) {
      alert("Deleted")
    }
  }
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Users</h1>
        <Link to={"/user_create"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <i class="fas fa-download fa-sm text-white-50"></i> Create User
        </Link>
      </div>
    {
      isLoading ? <span>Loading.....</span>:  <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>State</th>
                <th>City</th>
                <th>Phone</th>
                {/* <th>DOB</th> */}
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>State</th>
                <th>City</th>
                <th>Phone</th>
                {/* <th>DOB</th> */}
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </tfoot>
            <tbody>
              {users.map((user) => {
                return <tr>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.country}</td>
                  <td>{user.state}</td>
                  <td>{user.city}</td>
                  <td>{user.phone}</td>
                  {/* <td>{user.dob}</td> */}
                  <td>{user.gender}</td>
                  <td>
                    <Link to={`/user/${user.id}`} className='btn btn-warning mr-1'>
                      View
                    </Link>
                    <Link to={`/edit/${user.id}`} className='btn btn-primary mr-1'>
                      Edit
                    </Link>
                    <button onClick={() => deleteUser()} className='btn btn-danger'>Delete</button>
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

export default User