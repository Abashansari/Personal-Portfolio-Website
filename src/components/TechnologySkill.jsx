import React from 'react'
import Html from '/Html.png'
import Css from '/Css.png'
import JS from '/JS.png'
import NodeJs from '/NodeJs.png'
import Reactjs from '/Reactjs.jpeg'
import ExpressJs from '/ExpressJs.png'
import Bootstrap from '/Bootstrap.png'
import MaterialUI from '/MaterialUI.png'

export default function TechnologySkill() {
  return (
    <div className="container text-center">
      <h1 className="mb-4">Technology I worked with</h1>

      <div className="row justify-content-center mt-6">
        <div className="col-6 col-md-3 mb-4">
          <img src={Html} className="img-fluid" style={{ width: '120px' }} alt="html" />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img src={Css} className="img-fluid" style={{ width: '120px' }} alt="css" />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img src={JS} className="img-fluid" style={{ width: '200px' }} alt="javaScript" />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img src={Reactjs} className="img-fluid" style={{ width: '120px' }} alt="react" />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-6 col-md-3 mb-4">
          <img src={NodeJs} className="img-fluid" style={{ width: '120px' }} alt="node Js" />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img src={ExpressJs} className="img-fluid" style={{ width: '150px' }} alt="express Js" />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img src={Bootstrap} className="img-fluid" style={{ width: '100px' }} alt="bootstrap" />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img src={MaterialUI} className="img-fluid" style={{ width: '120px' }} alt="materialUI" />
        </div>
      </div>
    </div>
  )
}
