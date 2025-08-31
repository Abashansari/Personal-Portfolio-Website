import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CoffeeIcon from '@mui/icons-material/Coffee';

export default function WelcomePage() {
    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center text-center bg-white" id="home">
            <div className="text">
                <div className="d-flex justify-content-center gap-4 mb-3 text-primary">
                    <CodeIcon fontSize="large" />
                    <FavoriteIcon fontSize="large" className="text-danger" />
                    <CoffeeIcon fontSize="large" className="text-warning" />
                </div>

                <h1 className="display-4 fw-bold text-dark">
                    Welcome To My <br />
                    Portfolio Website
                </h1>

                <button className="btn btn-primary mt-4 px-4 py-2 fw-semibold shadow">Download Resume</button>
            </div>
        </div>
    )
}
