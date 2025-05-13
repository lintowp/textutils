import React, {useState} from 'react'

const Textform = (props) => {

    const [text, setText] = useState("");

    const handleClickforuppercase = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleClickforlowercase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","danger");
      }

    const handleClickForCapitalize = () => {
        let newText = text
          .toLowerCase()
          .replace(/\b\w/g, char => char.toUpperCase());
        setText(newText);
        props.showAlert("Converted to Each Word Capital","success");
      };

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

  return (
          <div className={`container ${props.mode ==='light'?'text-black':'text-black'}`}>
              <div className="form-group">
                <h1 className='text-center'>{props.heading}</h1>
                <h3><label htmlfor="exampleInputEmail1 pb-2">Enter the text to analyze</label></h3>
                <textarea className="form-control" onChange={handleOnChange} id="textareaid" rows="8" value={text} style={{backgroundColor:props.mode==='dark'?'white':'white'}}></textarea>

                <button className="btn btn-outline-primary m-2"  onClick={handleClickforuppercase}>
                  Convert To Uppercase
                </button>

                <button className="btn btn-outline-secondary m-2" onClick={handleClickforlowercase}>Convert To Lowercase
                </button>

                <button className="btn btn-outline-success m-2" onClick={handleClickForCapitalize}>Convert To Each Word Capital
                </button>
              </div>
            <h2>Word Summary</h2>
            <b>{text.split(' ').length} Words and {text.length} Characters</b>
          </div>
  )
}

export default Textform
