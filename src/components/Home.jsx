import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HomePhoto from '/HomePhoto.png'
import SocialmediaIcons from './SocialmediaIcons';

export default function Home() {
    return (
        <div className="container-fluid bg-white text-dark py-5" id="home">
            <div className="row g-0 text-center">

                <div className="col-sm-6 col-md-6 d-flex flex-column justify-content-center">
                    <div className="text-sm-start text-md-center my-4">
                        <p className="text-primary fw-semibold">Hello it's Me</p>
                        <h1 className="fw-bold display-5">Abash Ansari</h1>
                        <h2 className="fw-semibold text-secondary">Full Stack Developer</h2>
                        <p className="mt-2">
                            “I don't just build websites — I craft seamless digital experiences,<br />
                            from database to browser.”
                        </p>

                        <button className="btn btn-success my-3 px-4 fw-semibold shadow">
                            <a href="https://wa.me/+918167259866" target='_blank' className="text-light text-decoration-none">
                                <WhatsAppIcon className='me-2' /> Let's have a Chat...
                            </a>
                        </button>

                        <div className="mt-3">
                            <SocialmediaIcons />
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4 d-flex justify-content-center align-items-center">
                    <img src={HomePhoto} className="img-fluid rounded-pill shadow-lg border border-2 border-primary my-4" alt="profile photo" />
                </div>
            </div>
        </div>
    )
}
