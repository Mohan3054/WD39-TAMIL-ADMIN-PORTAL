import React from 'react'
import { Link } from 'react-router-dom'
import SchoolIcon from '@mui/icons-material/School';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
function Sidebar() {
    return (


        <div>
            {/* <!-- Sidebar --> */}
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" >

                {/* <!-- Sidebar - Brand --> */}
                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div class="sidebar-brand-icon rotate-n-15">
                        <i class="fas fa-laugh-wink"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </a>

                {/* <!-- Divider --> */}
                <hr class="sidebar-divider my-0" />

                {/* <!-- Nav Item - Dashboard --> */}
                <li class="nav-item active">
                    <Link to={"/dashboard"} class="nav-link" >
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></Link>
                </li>

                {/* <!-- Divider --> */}
                <hr class="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div class="sidebar-heading">
                    User Interface
                </div>

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                <li class="nav-item">
                    <Link to={"/users"} class="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i class="fas fa-fw fa-cog"></i>
                        <span>Users</span>
                    </Link>


                </li>
                {/* <!-- Divider --> */}
                <hr class="sidebar-divider" />
                {/* <!-- Heading --> */}
                <div class="sidebar-heading">
                    {/* Interface */}<SchoolIcon />Teacher & Student Management
                </div>
                <li class="nav-item">
                    <Link to={"/student/Student"} class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">

                        <AccountCircleIcon />
                        <span>SAI MOHAN</span>
                    </Link>

                </li>
                {/* <!-- Divider --> */}
                <hr class="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div class="sidebar-heading">
                    {/* Interface */}<LibraryBooksIcon />Library Mangement
                </div>

                <li class="nav-item">
                    <Link to={"/Library/book"} class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">

                        <LocalLibraryIcon />
                        <span>Books</span>
                    </Link>

                </li>


            </ul>
            <div />
        </div>
    );
}


export default Sidebar;