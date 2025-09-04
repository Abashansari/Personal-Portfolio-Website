import React from 'react'
import AboutPhoto from '/AboutPhoto.jpg'
import ChatIcon from '@mui/icons-material/Chat';

export default function About() {
    return (
        <div className="container d-flex justify-content-center align-items-center my-5" id="about">
            <div className="card shadow-lg border-0 rounded-3" style={{ maxWidth: "900px" }}>
                <div className="row g-0">

                    <div className="col-md-4">
                        <img src={AboutPhoto} className="img-fluid rounded-start h-100" style={{ objectFit: "cover" }} alt="photo" />
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title fw-bold text-primary mb-3">About Me</h5>

                            <p className="card-text text-secondary" style={{ lineHeight: "1.6" }}>
                                I am a passionate individual aspiring to step
                                into politics with a vision to bring positive change in society.
                                By profession, I am a web developer
                                and currently pursuing my studies in cloud computing,
                                constantly exploring opportunities to
                                grow in technology and leadership.
                                <br /><br />
                                I have always been concerned about human rights and equality,
                                even if others sometimes misjudge me with unfair tags.
                                I believe in myself, in my values, and in my goals—and I refuse
                                to be defined by what others say about me.
                            </p>

                            <a href="#" className="btn btn-primary fw-semibold shadow-sm">
                                <ChatIcon className="me-2" /> View Blogs
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
