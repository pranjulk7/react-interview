import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text;
     setText(newText.toUpperCase());
  }
  const handleLoClick = () => {
    let newText = text;
     setText(newText.toLowerCase());
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleClearClick = () => {
    setText("");
  }


  const [text,setText] = useState("Enter Text here");

 
  return (<>

  <div className="container">
  <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
</div>

<button className="btn btn-primary mx-2" onClick={handleUpClick}>{props.showUpText}</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>{props.showLoText}</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>{props.showClearText}</button>
</div>
    <div className="container">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
  </>
  )
}
TextForm.propTypes = {
  heading: PropTypes.string.isRequired
}

