import './App.css';

import { React, useState } from 'react';

function App() {

  const [count, setCount] = useState(0);  

  const [name, setName] = useState('Ali khan');

  const [image, setImage] = useState('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg');

  // function funName(){
  //   console.log("Hello World");
  // }
  
  function funName(){
    setCount(count + 1);
    setName('John Doe');
    setImage("https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80")
  }

  return (
    <>
      <div align="center">
        <h1>{count}</h1>
        <button onClick={funName}> Click Here</button>
        <h5>{count}</h5>
      </div>
      
      <div align="center">
        <h1>My name is {name}</h1>
      </div>
      
      <div align="center">
        <img src={image} />
      </div>


    </>
  );
}

export default App;
