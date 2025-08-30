import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a className="navbar-brand" href="#">Portfolio</a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <form className="d-flex ml-6" role="search">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#home">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#project" >Project</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact" >Contact</a></li>

                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    )
}
