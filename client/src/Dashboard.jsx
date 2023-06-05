import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.min.css';
// import { Link } from 'react-router-dom';
function Dashboard() {
  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span class="fs-5 fw-bolder d-none d-sm-inline">
                Admin Dashboard
              </span>
            </a>
            <ul
              class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li>
                <a href="#" class="nav-link align-middle px-0">
                  <i class="fs-4 bi-speedometer2"></i>{" "}
                  <span class="ms-1 d-none d-sm-inline">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#submenu1"
                  data-bs-toggle="collapse"
                  class="nav-link px-0 align-middle"
                >
                  <i class="fs-4 bi-people"></i>{" "}
                  <span class="ms-1 d-none d-sm-inline">Manage Employees</span>{" "}
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-0 align-middle">
                  <i class="fs-4 bi-person"></i>{" "}
                  <span class="ms-1 d-none d-sm-inline">Profile</span>
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-0 align-middle">
                  <i class="fs-4 bi-power"></i>{" "}
                  <span class="ms-1 d-none d-sm-inline">Logout</span>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col p-0 m-0">
          <div className='p-2 d-flex justify-content-center shadow'>
            <h4>Employee Management</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;