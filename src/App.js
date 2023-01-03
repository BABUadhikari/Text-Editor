import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [text, setText] = useState("Dark Mode")

  const [mode, setMode] = useState("light");
  const toggleMode = () =>{
    if (mode==="light"){
      setMode("dark")
      setText('Light Mode')
      document.body.style.backgroundColor = "gray"
    }
    else{
      setMode("light")
      setText('Dark Mode')
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
      <Navbar title="TextUtils" home="Home" about="About" mode={mode} toggleMode={toggleMode} text={text} />
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze" mode={mode}/>
      <About/>
      </div>
    </>
  );
}

export default App;
