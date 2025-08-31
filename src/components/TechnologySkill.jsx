import React from 'react'
import Html from '/Html.png'
import Css from '/Css.png'
import JS from '/JS.png'
import NodeJs from '/NodeJs.png'
import Reactjs from '/Reactjs.png'
import ExpressJs from '/ExpressJs.png'
import Bootstrap from '/Bootstrap.png'
import MaterialUI from '/MaterialUI.png'

export default function TechnologySkill() {
  return (
    <div className="container text-center my-5" id="skills">
      <h1 className="mb-4 fw-bold text-primary">Technologies I Work With</h1>

      <div className="row justify-content-center mt-4">
        <div className="col-6 col-md-3 mb-4">
          <div className="p-3 shadow-sm rounded bg-white">
            <img src={Html} className="img-fluid" style={{ width: '90px' }} alt="html" />
          </div>
        </div>
        <div className="col-6 col-md-3 mb-4">
          <div className="p-3 shadow-sm rounded bg-white">
            <img src={Css} className="img-fluid" style={{ width: '100px' }} alt="css" />
          </div>
        </div>
        <div className="col-6 col-md-3 mb-4">
          <div className="p-3 shadow-sm rounded bg-white">
            <img src={JS} className="img-fluid" style={{ width: '160px' }} alt="javaScript" />
          </div>
        </div>
        <div className="col-6 col-md-3 mb-4">
          <div className="p-3 shadow-sm rounded bg-white">
            <img src={Reactjs} className="img-fluid" style={{ width: '100px' }} alt="react" />
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-6 col-md-3 mb-4">
          <div className="p-3 shadow-sm rounded bg-white">
            <img src={NodeJs} className="img-fluid" style={{ width: '100px' }} alt="node Js" />
          </div>
        </div>
        <div className="col-6 col-md-3 mb-4">
          <div className="p-3 shadow-sm rounded bg-white">
            <img src={ExpressJs} className="img-fluid" style={{ width: '120px' }} alt="express Js" />
          </div>
        </div>
        <div className="col-6 col-md-3 mb-4">
          <div className="p-3 shadow-sm rounded bg-white">
            <img src={Bootstrap} className="img-fluid" style={{ width: '90px' }} alt="bootstrap" />
          </div>
        </div>
        <div className="col-6 col-md-3 mb-4">
          <div className="p-3 shadow-sm rounded bg-white">
            <img src={MaterialUI} className="img-fluid" style={{ width: '100px' }} alt="materialUI" />
          </div>
        </div>
      </div>
    </div>
  )
}
