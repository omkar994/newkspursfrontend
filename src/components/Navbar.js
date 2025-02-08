import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
 
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1" to="/">KSpurs</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse me-auto mt-2" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                <Link className="nav-link active fs-2" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fs-2" aria-current="page" to="/additem">Add Item</Link>
                            </li>


                        


                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/createfooitm">Add new item</Link>
                            </li> */}
                        </ul>
                        


                    </div>
                </div>
            </nav>
    </div>
  )
}

