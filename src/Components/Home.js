import React, { useState } from 'react'

export default function Home(props) {

    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpBtn = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoBtn = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearBtn = () => {
        setText('');
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopyBtn = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaceBtn = () => {
        setText(text.split(/[ ]+/).join(' '));
        props.showAlert("Extra Spaces Removed", "success");

    }

    return (
        <>
        <div style={{color : props.mode === 'light' ? '#042743' : 'white'}}>
            <h2 className='my-2'>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6" style={{backgroundColor : props.mode === 'light' ? 'white' : '#13466e', color : props.mode === 'light' ? 'black' : 'white'}}></textarea>
            </div>
            <button type="button" disabled={text.length === 0} onClick={handleUpBtn} className="btn btn-primary mx-1 my-1">Convert to Uppercase</button>
            <button type="button" disabled={text.length === 0} onClick={handleLoBtn} className="btn btn-primary mx-1 my-1">Convert to Lowercase</button>
            <button type="button" disabled={text.length === 0} onClick={handleClearBtn} className="btn btn-primary mx-1 my-1">Clear Text</button>
            <button type="button" disabled={text.length === 0} onClick={handleCopyBtn} className="btn btn-primary mx-1 my-1">Copy Text</button>
            <button type="button" disabled={text.length === 0} onClick={handleExtraSpaceBtn} className="btn btn-primary mx-1 my-1">Remove Extra Spaces</button>
        </div>
        <div style={{color : props.mode === 'light' ? '#042743' : 'white'}}>
            <h2 className='my-3'>Your Text Summary</h2>
            <p>{text.split(' ').filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * (text.split(' ').filter((element) => {return element.length !== 0}).length)} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Nothing to Preview!'}</p>
        </div>
        </>
    )
}