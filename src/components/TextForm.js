import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log(" uppercase was clicked:" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");  
    }

    const handleLoClick = ()=>{
       // console.log(" uppercase was clicked:" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");  
    }

    const handleclearClick = ()=>{
       // console.log(" uppercase was clicked:" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");  
    }

    const handleonChange = (event)=>{
       // console.log(" On change");
        setText(event.target.value);
    }

    const handleCopy = () =>{
       // console.log(" On change");
       var text = document.getElementById("myBox");
       //text.Select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Copy to Clipboard!", "success");  
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces removed!", "success");  
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white': '#042743' }}> 
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.mode === 'dark'?'gray': 'white', color: props.mode === 'dark'?'white': '#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white': '#042743' }}> 
        <h2>Your text syummery</h2>
        <p>{text.split(" ").length} words nad {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
