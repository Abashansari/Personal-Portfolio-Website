import React from 'react'
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a className="navbar-brand" href="#"> <LaptopChromebookIcon fontSize='large' className='me-2' /> Abash Ansari</a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#project" >Project</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact" >Contact</a></li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
