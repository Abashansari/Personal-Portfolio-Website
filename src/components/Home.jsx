import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import ProfilePhoto from '/ProfilePhoto.jpg'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SocialmediaIcons from './SocialmediaIcons';

export default function Home() {
    return (
        <div className='container'>
            <div className="row g-0 text-center ">
                <div className="col-sm-6 col-md-6">
                    <div className='text-sm-start text-md-center my-6'>
                        Hello it's Me <br />
                        <h1>Abash Ansari</h1>
                        <h2>Full Stack Developer</h2>
                        <p>“I don't just build websites — I craft seamless digital experiences,<br />
                            from database to browser.”</p>
                        <button className='col-start my-3'><a href="https://wa.me/+918167259866" target='_blank'><WhatsAppIcon/> Let's have a Chat...</a></button>
                        <div>
                            <SocialmediaIcons className='icon-circle'/>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-4">
                    <img src={ProfilePhoto} className='img-fluid rounded-pill h-60 justify-content-center align-items-center mx-6 my-6' alt='profile photo' />
                </div>
            </div>
        </div>
    )
}
