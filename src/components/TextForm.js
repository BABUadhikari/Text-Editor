import React, { useState } from 'react'

export default function TextForm(props) {

    const toUpper = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const toLower = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const clear = () => {
        let newText = '';
        setText(newText)
    }

    const copyText = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const removeSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }



    const [text, setText] = useState('')
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"
                        style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                    </textarea>
                </div>
                <button className="btn btn-primary me-2" onClick={toUpper}>Convert To Upercase</button>
                <button className="btn btn-primary me-2" onClick={toLower}>Convert To Lowercase</button>
                <button className="btn btn-primary me-2" onClick={clear}>Clear text</button>
                <button className="btn btn-primary me-2" onClick={copyText}>Copy text</button>
                <button className="btn btn-primary me-2" onClick={removeSpace}>Remove Space</button>

            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>The text you entered has</h1>
                <p>The lenght of your text is {text.length} and {text.split(' ').length} words </p>
            </div>
            <h3>Preview</h3>
            <p>{text}</p>
        </>
    )
}
