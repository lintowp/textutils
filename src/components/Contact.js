import React, { useState } from 'react'
import Alert from './Alert';
import Textform from './Textform';

const Contact = () => {

    const [alert,setalerts] = useState(null);

    const showAlert = (message, type) => {
      setalerts({
        msg: message,
        type: type
      });
  
      setTimeout(() => {
        setalerts(null);
      }, 1500);
    }

  return (
    <div>
       <Alert alert={alert}/>
       <Textform  heading="My Heading" showAlert={showAlert}/>
    </div>
  )
}

export default Contact
