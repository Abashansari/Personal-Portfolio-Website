import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CoffeeIcon from '@mui/icons-material/Coffee';


export default function WelcomePage() {
    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center text-center" id='home'>
            <div className="text">
                <div className='container d-flex justify-content-between mb-3'>
                    <CodeIcon />
                    <FavoriteIcon />
                    <CoffeeIcon />
                </div>
                <h1 className="display-4">Welcome To My <br />
                    Portfolio Website</h1>
                <button className='mt-4'>Download Resume</button>
            </div>
        </div>
    )
}
