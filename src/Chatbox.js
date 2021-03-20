import './Chatbox.css';
import { useState } from 'react';
import App from './App';

function Chatbox() {

    const [text,setText] = useState("");
    const [lines,setLines] = useState([]);

    const onTextChange = (event) => {
      setText(event.target.value);
    };

    const onSend =() => {
      setLines([...lines,{sender: "Me" ,message: text,timestamp: (new Date())}]);
      setText("");
    };

    const keyPress = (event) => {
      if (event.which === 13){
        onSend();
      }
    };

  return (
    <App>
    <div className="App">     
      <div className="App-chatroomlab">
        {
          lines.map(x =>{
           return <div className="App-chatroom-text">
                      <div>
                        {x.sender+": "}
                      </div>
                      <div>
                        {x.message}
                      </div>
                      <div>
                        {x.timestamp.toLocaleDataString()}
                      </div>
                  </div>
          })
        } 
      </div>
      <div className="App-textbox">
      <input type="text" className="App-textbox-input" 
        value={text} onChange={onTextChange} onKeyPress={keyPress}/>

        <div className="App-textbox-send" onClick={onSend}>Send!</div>
      </div>
    </div>
    </App>  
  );
}

export default Chatbox;
