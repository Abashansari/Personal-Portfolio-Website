import React from 'react'
import ProfilePhoto from '/ProfilePhoto.jpg'
import ChatIcon from '@mui/icons-material/Chat';

export default function About() {
    return (
        <div className='container d-flex justify-content-center align-items-center mx-6 my-6'>
            <div className="card mb-3 h-auto" >
                <div className="row g-0">
                    <div className="col-md-4 p-0 mx-0">
                        <img src={ProfilePhoto} className="img-fluid rounded-3 " style={{ height: "290px" }} alt="photo" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">About Me</h5>
                            <p className="card-text">I am a passionate individual aspiring to step
                                into politics with a vision to bring positive change in society.
                                By profession, I am a web developer
                                and currently pursuing my studies in cloud computing,
                                constantly exploring opportunities to
                                grow in technology and leadership.<br />
                                <br />
                                I have always been concerned about human rights and equality,
                                even if others sometimes misjudge me with unfair tags. I believe in myself,
                                in my values, and in my goals—and I refuse to be defined by what others say about me.</p>
                            <a href="#" class="btn btn-primary"> <ChatIcon/> View Blogs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




